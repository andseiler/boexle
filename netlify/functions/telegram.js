// netlify/functions/telegram.js
// Uses Netlify Blobs for storage and global fetch (Node 18+)
const { getStore } = require('@netlify/blobs');

// Initialize a blob store named "chat", with local fallback for development
let store;
try {
  store = getStore('chat');
} catch (e) {
  // Fallback to in-memory store when Blobs is not configured (e.g. local dev)
  const map = new Map();
  store = {
    async get(key) {
      if (!map.has(key)) return undefined;
      // Return as a Buffer to match blob.get behavior
      return Buffer.from(JSON.stringify(map.get(key)));
    },
    async set(key, value) {
      // Value may be a string or Buffer
      let data = value;
      if (Buffer.isBuffer(value)) data = value.toString();
      try {
        map.set(key, JSON.parse(data));
      } catch {
        map.set(key, data);
      }
    }
  };
}

exports.handler = async function(event) {
  // Common CORS headers
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  };

  // Handle CORS preflight requests
  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers };
  }

  // === 1) Setup Webhook Endpoint ===
  if (event.httpMethod === 'POST' && event.queryStringParameters?.setup === '1') {
    let body;
    try {
      body = JSON.parse(event.body);
    } catch {
      return { statusCode: 400, headers, body: 'Invalid JSON' };
    }
    if (body.token !== process.env.TELEGRAM_SETUP_TOKEN) {
      return { statusCode: 401, headers, body: 'Unauthorized' };
    }
    const protocol = event.headers['x-forwarded-proto'] || 'https';
    const host = event.headers.host;
    const webhookUrl = `${protocol}://${host}/.netlify/functions/telegram`;
    const resp = await fetch(
        `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/setWebhook`,
        { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ url: webhookUrl }) }
    );
    const data = await resp.json();
    return { statusCode: 200, headers, body: JSON.stringify(data) };
  }

  // === 2) Telegram Webhook Handler ===
  if (event.httpMethod === 'POST') {
    let update;
    try { update = JSON.parse(event.body); } catch { return { statusCode: 400, headers, body: 'Invalid JSON' }; }
    if (update.update_id && update.message) {
      const chatId = String(update.message.chat.id);
      const text = update.message.text || '';
      const message = { id: String(update.update_id), text, direction: 'incoming', timestamp: Math.floor(Date.now()/1000) };
      // Load, append, and save
      let raw = await store.get(chatId);
      let msgs = [];
      if (raw) {
        try { msgs = JSON.parse(raw.toString()); } catch { msgs = []; }
      }
      msgs.push(message);
      await store.set(chatId, JSON.stringify(msgs));
    }
    return { statusCode: 200, headers, body: JSON.stringify({ ok: true }) };
  }

  // === 3) Frontend GET: Retrieve Chat Messages ===
  if (event.httpMethod === 'GET') {
    const chatId = event.queryStringParameters?.chatId;
    if (!chatId) {
      return { statusCode: 400, headers, body: JSON.stringify({ error: 'chatId query parameter is required' }) };
    }
    let raw = await store.get(chatId);
    let messages = [];
    if (raw) {
      try { messages = JSON.parse(raw.toString()); } catch { messages = []; }
    }
    return { statusCode: 200, headers, body: JSON.stringify({ chatId, messages, timestamp: Date.now() }) };
  }

  // Fallback
  return { statusCode: 405, headers, body: JSON.stringify({ error: 'Method Not Allowed' }) };
};

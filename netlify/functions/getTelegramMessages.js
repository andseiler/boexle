// Import the shared in-memory session storage from receiveTelegramWebhook
const { getMessages } = require('./receiveTelegramWebhook');

exports.handler = async function (event, context) {
  // Allow both GET and POST requests
  if (event.httpMethod !== "GET" && event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Method Not Allowed" }),
    };
  }

  try {
    let chatId;
    
    // Extract chatId from query parameters (GET) or request body (POST)
    if (event.httpMethod === "GET") {
      chatId = event.queryStringParameters?.chatId;
    } else {
      const body = JSON.parse(event.body);
      chatId = body.chatId;
    }

    // Validate chat ID
    if (!chatId) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Chat ID is required" }),
      };
    }

    // Get messages for the requested chat ID
    const messages = getMessages(chatId);

    // Return the messages
    return {
      statusCode: 200,
      // Set CORS headers to allow requests from the frontend
      headers: {
        "Access-Control-Allow-Origin": "*", // In production, restrict this to your domain
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
      },
      body: JSON.stringify({
        chatId,
        messages,
        timestamp: Date.now(),
      }),
    };
  } catch (error) {
    console.error("Error retrieving messages:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message || "Internal server error" }),
    };
  }
};

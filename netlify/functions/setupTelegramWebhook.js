// This function sets up a webhook for Telegram to send updates to your Netlify function
// Should be run once during setup or when changing webhook URLs

exports.handler = async function (event, context) {
  // Only allow POST requests with a setup token for security
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Method Not Allowed" }),
    };
  }

  // Parse the request body
  let body;
  try {
    body = JSON.parse(event.body);
  } catch (err) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Invalid JSON" }),
    };
  }

  // Validate the setup token to prevent unauthorized webhook configuration
  const setupToken = process.env.TELEGRAM_SETUP_TOKEN;
  if (!setupToken || body.token !== setupToken) {
    return {
      statusCode: 401,
      body: JSON.stringify({ error: "Unauthorized" }),
    };
  }

  // Get the Telegram bot token from environment variables
  const telegramBotToken = process.env.TELEGRAM_BOT_TOKEN;
  if (!telegramBotToken) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "TELEGRAM_BOT_TOKEN not configured" }),
    };
  }

  // Use provided webhook URL or construct it from Netlify environment
  let webhookUrl = body.webhookUrl;
  if (!webhookUrl) {
    // If no webhook URL provided, try to construct it from Netlify environment variables
    const siteUrl = process.env.URL || process.env.DEPLOY_URL;
    if (!siteUrl) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Webhook URL not provided and cannot be determined from environment" }),
      };
    }
    webhookUrl = `${siteUrl}/.netlify/functions/receiveTelegramWebhook`;
  }

  // Configure the Telegram Bot API URL for setting a webhook
  const telegramApiUrl = `https://api.telegram.org/bot${telegramBotToken}/setWebhook`;

  try {
    console.log(`Setting up webhook to: ${webhookUrl}`);
    
    // Make the API request to set the webhook
    const response = await fetch(telegramApiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        url: webhookUrl,
        allowed_updates: ["message"], // Only receive message updates
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`Failed to set webhook: ${errorText}`);
      return { 
        statusCode: response.status, 
        body: JSON.stringify({ 
          error: "Failed to set webhook", 
          telegramResponse: errorText 
        }) 
      };
    }

    const data = await response.json();
    console.log("Webhook setup response:", data);
    
    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        message: "Webhook successfully configured",
        webhookUrl,
        telegramResponse: data,
      }),
    };
  } catch (error) {
    console.error("Error setting webhook:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.toString() }),
    };
  }
};

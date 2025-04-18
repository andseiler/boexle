// In-memory cache for storing active chat sessions
// This approach means messages are only available while the function is "warm"
const activeSessions = new Map();

exports.handler = async function (event, context) {
  // Only allow POST requests from Telegram
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Method Not Allowed" }),
    };
  }

  try {
    // Parse the incoming webhook payload
    const payload = JSON.parse(event.body);
    
    // Validate that this is a Telegram update with a message
    if (!payload.update_id || !payload.message) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Invalid Telegram webhook payload" }),
      };
    }

    // Extract important data from the message
    const {
      update_id,
      message: {
        message_id,
        from: { id: sender_id, first_name, last_name, username },
        chat: { id: chat_id },
        text,
        date: timestamp
      }
    } = payload;

    // Create a sanitized message object
    const messageObject = {
      id: message_id,
      updateId: update_id,
      senderId: sender_id,
      chatId: chat_id,
      sender: {
        firstName: first_name || '',
        lastName: last_name || '',
        username: username || '',
      },
      text: text || '',
      timestamp,
      direction: 'incoming', // This is a message from Telegram to the website
    };

    // Store the message for this chat session
    if (!activeSessions.has(chat_id)) {
      activeSessions.set(chat_id, []);
    }
    
    const chatSession = activeSessions.get(chat_id);
    chatSession.push(messageObject);
    
    // Limit session to last 100 messages to prevent memory issues
    if (chatSession.length > 100) {
      chatSession.shift();
    }

    // Log for debugging
    console.log(`Received message from ${first_name} (${chat_id}): ${text}`);

    // Return success
    return {
      statusCode: 200,
      body: JSON.stringify({ 
        status: "success", 
        message: "Message received and processed",
        // You may want to remove this in production to not expose chat details
        session: {
          chatId: chat_id,
          messagesCount: chatSession.length
        }
      }),
    };
  } catch (error) {
    console.error("Error processing webhook:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message || "Internal server error" }),
    };
  }
};

// Helper function to get messages for a specific chat_id
// This will be used by a separate function to retrieve messages
exports.getMessages = (chatId) => {
  return activeSessions.get(chatId) || [];
};

// Helper function to clear chat history for a session
exports.clearSession = (chatId) => {
  return activeSessions.delete(chatId);
};

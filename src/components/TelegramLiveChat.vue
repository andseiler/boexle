<template>
  <div 
    class="telegram-chat-container fixed" 
    :class="{'chat-expanded': isExpanded, 'chat-minimized': !isExpanded, 'chat-visible': isVisible}"
  >
    <!-- Chat header -->
    <div class="chat-header bg-primary-500 text-white p-3 flex items-center justify-between rounded-t-lg" @click="toggleChat">
      <div class="flex items-center">
        <svg class="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-0.24 15.14l-4.05-3c-0.59-0.45-0.59-1.34 0-1.79l4.05-3c0.15-0.11 0.33-0.17 0.51-0.17 0.47 0 0.85 0.38 0.85 0.85v6.28c0 0.47-0.38 0.85-0.85 0.85-0.18 0-0.36-0.06-0.51-0.17z"/>
        </svg>
        <span class="font-bold">{{ $t('Live Chat') }}</span>
      </div>
      <div>
        <button v-if="isExpanded" @click.stop="toggleChat" class="text-white">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </button>
        <button v-else @click.stop="toggleChat" class="text-white">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"></path>
          </svg>
        </button>
      </div>
    </div>

    <!-- Chat body -->
    <div v-if="isExpanded" class="chat-body bg-white rounded-b-lg overflow-hidden">
      <!-- Messages container -->
      <div ref="messagesContainer" class="messages-container p-4 overflow-y-auto">
        <!-- Welcome message -->
        <div v-if="!hasStartedChat" class="system-message mb-4 text-center">
          <p>{{ $t('Willkommen! Wie können wir dir helfen?') }}</p>
        </div>

        <!-- Message thread -->
        <template v-for="(message, index) in messages" :key="index">
          <!-- Outgoing message (from user to admin) -->
          <div v-if="message.direction === 'outgoing'" class="message outgoing mb-3 flex justify-end">
            <div class="max-w-[80%] bg-primary-500 text-white p-3 rounded-lg rounded-tr-none">
              <p>{{ message.text }}</p>
              <span class="text-xs opacity-70 block text-right">{{ formatTime(message.timestamp) }}</span>
            </div>
          </div>
          
          <!-- Incoming message (from admin to user) -->
          <div v-else class="message incoming mb-3 flex justify-start">
            <div class="max-w-[80%] bg-gray-100 p-3 rounded-lg rounded-tl-none">
              <p>{{ message.text }}</p>
              <span class="text-xs opacity-70 block text-right">{{ formatTime(message.timestamp) }}</span>
            </div>
          </div>
        </template>

        <!-- Typing indicator -->
        <div v-if="isTyping" class="typing-indicator flex justify-start mb-3">
          <div class="bg-gray-100 p-3 rounded-lg rounded-tl-none">
            <div class="flex space-x-1">
              <div class="typing-dot"></div>
              <div class="typing-dot"></div>
              <div class="typing-dot"></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Chat input -->
      <div class="chat-input-container border-t border-gray-200 p-3">
        <form @submit.prevent="sendMessage" class="flex items-center">
          <input
            v-model="newMessage"
            type="text"
            :placeholder="$t('Schreib uns etwas...')"
            class="flex-grow p-2 border border-gray-300 rounded-l-lg focus:outline-none focus:border-primary-500"
            :disabled="!chatId"
          />
          <button
            type="submit"
            class="bg-primary-500 text-white p-2 rounded-r-lg hover:bg-primary-600 transition-colors"
            :disabled="!newMessage.trim()"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
            </svg>
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick, computed } from 'vue';
import { useI18n } from 'vue-i18n';

// Internationalization
const { t } = useI18n();

// Chat visibility and state
const isVisible = ref(false);
const isExpanded = ref(false);
const isTyping = ref(false);
const hasStartedChat = ref(false);
const messages = ref([]);
const newMessage = ref('');
const messagesContainer = ref(null);
const chatId = ref(null);
const pollInterval = ref(null);

// Show chat icon after a delay
setTimeout(() => {
  isVisible.value = true;
}, 3000);

// Toggle chat expansion
const toggleChat = () => {
  isExpanded.value = !isExpanded.value;
  if (isExpanded.value) {
    nextTick(() => {
      scrollToBottom();
      if (!chatId.value) {
        initializeChat();
      }
    });
  }
};

// Initialize chat and generate a session ID
const initializeChat = () => {
  chatId.value = 'user_' + Date.now() + '_' + Math.floor(Math.random() * 1000);
  startPolling();
};

// Format timestamp for display
const formatTime = (timestamp) => {
  const date = new Date(timestamp * 1000);
  return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
};

// Scroll messages container to bottom
const scrollToBottom = () => {
  if (messagesContainer.value) {
    messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight;
  }
};

// Send message to Telegram
const sendMessage = async () => {
  if (!newMessage.value.trim() || !chatId.value) return;
  
  const messageText = newMessage.value.trim();
  newMessage.value = '';
  
  // Create local message object
  const outgoingMessage = {
    id: Date.now().toString(),
    text: messageText,
    timestamp: Math.floor(Date.now() / 1000),
    direction: 'outgoing',
  };
  
  // Add to local messages
  messages.value.push(outgoingMessage);
  hasStartedChat.value = true;
  
  // Wait for UI to update
  await nextTick();
  scrollToBottom();
  
  try {
    // Format message with session info for admin context
    const formattedMessage = `[LiveChat: ${chatId.value}] ${messageText}`;
    
    // Send to Netlify function
    const response = await fetch('/.netlify/functions/sendTelegramMessage', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 
        message: formattedMessage,
        chatId: chatId.value
      }),
    });
    
    if (!response.ok) {
      console.error('Failed to send message:', await response.text());
      // Optionally add an error message to the chat
    }
  } catch (error) {
    console.error('Error sending message:', error);
    // Optionally add an error message to the chat
  }
};

// Poll for new messages
const startPolling = () => {
  // Initial fetch
  fetchMessages();
  
  // Set up polling interval (every 5 seconds)
  pollInterval.value = setInterval(fetchMessages, 5000);
};

// Fetch messages from server
const fetchMessages = async () => {
  if (!chatId.value) return;
  
  try {
    const response = await fetch(`/.netlify/functions/getTelegramMessages?chatId=${chatId.value}`);
    
    if (!response.ok) {
      console.error('Failed to fetch messages:', await response.text());
      return;
    }
    
    const data = await response.json();
    
    // Find messages that aren't in our local state yet
    if (data.messages && Array.isArray(data.messages)) {
      const newMessages = data.messages.filter(
        serverMsg => !messages.value.some(localMsg => 
          localMsg.id === serverMsg.id && localMsg.direction === serverMsg.direction
        )
      );
      
      if (newMessages.length > 0) {
        // Show typing indicator briefly
        isTyping.value = true;
        setTimeout(() => {
          isTyping.value = false;
          // Add new messages
          messages.value = [...messages.value, ...newMessages];
          // Scroll down
          nextTick(scrollToBottom);
        }, 1200);
      }
    }
  } catch (error) {
    console.error('Error fetching messages:', error);
  }
};

// Clean up polling interval when component is destroyed
onUnmounted(() => {
  if (pollInterval.value) {
    clearInterval(pollInterval.value);
  }
});

// Scroll to bottom whenever messages change
const scrollOnMessageChange = computed(() => messages.value.length);
scrollOnMessageChange.value; // Trigger computation
nextTick(scrollToBottom);
</script>

<style scoped>
.telegram-chat-container {
  right: 20px;
  bottom: 20px;
  width: 350px;
  max-width: calc(100vw - 40px);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  z-index: 9999;
  transition: all 0.3s ease;
  visibility: hidden;
  opacity: 0;
}

.chat-visible {
  visibility: visible;
  opacity: 1;
}

.chat-minimized {
  height: 50px;
}

.chat-expanded {
  height: 450px;
}

.chat-header {
  cursor: pointer;
}

.messages-container {
  height: 340px;
}

.typing-dot {
  width: 8px;
  height: 8px;
  background-color: #999;
  border-radius: 50%;
  animation: typing-animation 1s infinite ease-in-out;
}

.typing-dot:nth-child(1) {
  animation-delay: 0s;
}

.typing-dot:nth-child(2) {
  animation-delay: 0.2s;
}

.typing-dot:nth-child(3) {
  animation-delay: 0.4s;
}

@keyframes typing-animation {
  0%, 60%, 100% {
    transform: translateY(0);
  }
  30% {
    transform: translateY(-5px);
  }
}
</style>

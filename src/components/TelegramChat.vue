<template>
  <div class="chat-container flex flex-col gap-4">
    <h2>Schreib uns eine Nachricht!</h2>
    <textarea rows="6" class="rounded-sm border-gray-200 p-4 border shadow" v-model="message" placeholder="Deine Nachricht"></textarea>
    <button @click="sendMessage" class="gradient-button">Senden</button>
    <p v-if="responseMessage">{{ responseMessage }}</p>
  </div>
</template>

<script setup>
import { ref } from "vue";

const TELEGRAM_BOT_TOKEN = "7980399720:AAEVEm6QfVLNc2QKUXug8qX5fUmJjIh6Npk"; // Token von BotFather
const TELEGRAM_CHAT_ID = "93860740"; // Deine Telegram Chat-ID

const message = ref("");
const responseMessage = ref("");

const sendMessage = async () => {
  if (!message.value) return;

  const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
  const payload = {
    chat_id: TELEGRAM_CHAT_ID,
    text: message.value,
  };

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (response.ok) {
      responseMessage.value = "Nachricht gesendet!";
      message.value = "";
    } else {
      responseMessage.value = "Fehler beim Senden!";
    }
  } catch (error) {
    responseMessage.value = "Verbindungsfehler!";
  }
};
</script>
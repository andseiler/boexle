<template>
  <div class="chat-container flex flex-col gap-4 ">
    <div class="text-lg font-bold text-primary-500">Schreib uns eine Nachricht!</div>
    <input type="email" v-model="email" placeholder="Deine Email" class="form-input">
    <textarea rows="6" class="form-input" v-model="message" placeholder="Deine Nachricht"></textarea>
    <button @click="sendMessage" class="gradient-button">Senden</button>
    <p v-if="responseMessage" class="font-bold text-primary-500" :class="{'text-red-700': isError}">{{ responseMessage }}</p>
  </div>
</template>

<script setup>
import { ref } from "vue";

const TELEGRAM_BOT_TOKEN = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = import.meta.env.VITE_TELEGRAM_CHAT_ID;

const email = ref("");
const message = ref("");
const responseMessage = ref("");
const isError = ref(false);

const sendMessage = async () => {
  if (!message.value || !email.value) return;

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
      isError.value = true;
    }
  } catch (error) {
    responseMessage.value = "Verbindungsfehler!";
    isError.value = true;
  }

  setTimeout(()=>{
    responseMessage.value = "";
    isError.value = false;
  },3000)
};
</script>
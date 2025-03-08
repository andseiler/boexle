<template>
  <div class="chat-container flex flex-col gap-4 ">
    <div class="text-lg font-bold text-primary-500">Schreib uns eine Nachricht!!</div>
    <div class="flex flex-col text-left">
      <input type="email" v-model="email" :class="{'error': validate && !email}" placeholder="Deine Email" class="form-input">
      <span class="text-red-500 text-sm pl-1" v-if="validate && !email">Email ist ein Pflichtfeld</span>
    </div>

    <div class="flex flex-col text-left">
      <textarea rows="6" class="form-input" v-model="message" :class="{'error': validate && !message}" placeholder="Deine Nachricht"></textarea>
      <span class="text-red-500 text-sm pl-1" v-if="validate && !message">Nachricht ist ein Pflichtfeld</span>
    </div>

    <button @click="sendMessage" class="gradient-button">Senden</button>
    <p v-if="responseMessage" class="font-bold text-primary-500" :class="{'text-red-500': isError}">{{ responseMessage }}</p>
  </div>
</template>

<script setup>
import {computed, ref} from "vue";

const email = ref("");
const message = ref("");
const responseMessage = ref("");
const isError = ref(false);
const validate = ref(false);

const sendMessage = async () => {
  if (!message.value || !email.value) {
    validate.value = true;
    return
  }

  try {
    const response = await fetch('/.netlify/functions/sendTelegramMessage', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ message: email.value + ' - ' + message.value })
    });

    if (response.ok) {
      responseMessage.value = "Nachricht gesendet!";
      email.value = "";
      message.value = "";
      validate.value = false;
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
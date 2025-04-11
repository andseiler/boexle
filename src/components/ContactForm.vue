<template>
  <div class="contact-container">
    <div class="contact-header">{{ $t('Kontakt') }}</div>
    <div class="contact-card">
      <TelegramChat @close="emit('close')"></TelegramChat>
      <div class="flex items-center w-full gap-2 my-4 text-textdark">
        <div class="border-b border-textdark flex-1 pb-4 mb-2"></div>
        <div>oder</div>
        <div class="border-b border-textdark flex-1 pb-4 mb-2"></div>
      </div>
      <div class="form-group">
        <label for="" class="form-label">{{ $t('Per Email') }}</label>
        <div class="flex-1 relative">
          <span class="absolute right-4 top-4 text-textdark cursor-pointer hover:text-primary-500" @click="copyEmailToClipboard"><ClipboardDocumentCheckIcon class="w-6"></ClipboardDocumentCheckIcon></span>
          <input @click="selectEmail" type="text" :value="emailAddress" ref="emailInput" readonly class="form-input w-full">
          <transition name="fade">
            <div v-if="copySuccess" class="absolute top-4 right-12 bg-primary-500 opacity-90 text-textbright text-xs px-2 py-1 rounded shadow">
              {{ $t('Kopiert!') }}
            </div>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import TelegramChat from "./TelegramChat.vue";
import {ClipboardDocumentCheckIcon} from "@heroicons/vue/24/outline";
import {computed, ref} from "vue";
const emailInput = ref(null);
const emailAddress = computed(()=>'mail@pocketledge.de')
const copySuccess = ref(false);

import {onMounted} from "vue";

onMounted(()=>{
  sendVisitorInfo("ContactForm Viewed");
})

const sendVisitorInfo = async (title: string) => {
  try {
    const userAgent = navigator.userAgent;
    const language = navigator.language;
    const screenSize = `${window.screen.width}x${window.screen.height}`;
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const referrer = document.referrer;

    const visitorInfo = `🔍 ${title}:\n` +
        `📱 Device: ${userAgent}\n` +
        `🌐 Language: ${language}\n` +
        `📺 Screen: ${screenSize}\n` +
        `🕒 Timezone: ${timeZone}\n` +
        `↩️ Referrer: ${referrer || 'Direct visit'}`;

    await fetch('/.netlify/functions/sendTelegramMessage', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ message: visitorInfo })
    });
  } catch (error) {
    console.error('Failed to send visitor info:', error);
  }
};

const selectEmail = () =>{
  //@ts-ignore
  emailInput.value.select();
}

const copyEmailToClipboard = async () =>{
  try {
    await navigator.clipboard.writeText(emailAddress.value);
    copySuccess.value = true;
    setTimeout(() => {
      copySuccess.value = false;
    }, 3000);
  } catch (error) {
    console.log(error);
  }
}

const emit= defineEmits(['close']);
</script>

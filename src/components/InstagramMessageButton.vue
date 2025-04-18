<template>

  <a
      href="https://ig.me/m/pocket_ledge"
      @click="sendVisitorInfo('Insta Button Clicked:')"
      target="_blank"
      rel="noopener"
      class="justify-center cursor-pointer flex items-center gradient-button custom-color from-purple-500 via-pink-500
      to-orange-500 text-white"
  >
    <div class="relative w-6 h-6 flex items-center justify-center">
      <img src="/images/instagram-icon-white.svg" alt="Instagram" class="w-6 h-6"/>
    </div>
    <span class="ml-2" v-if="alwaysFull">{{ $t('Drop me a DM - @pocket_ledge') }}</span>
    <template v-else>
      <span class="lg:hidden">{{ $t('DM') }}</span>
      <span class="ml-2 hidden lg:inline">{{ $t('Drop me a DM - @pocket_ledge') }}</span>
    </template>
  </a>
</template>

<script setup lang="ts">

//@ts-ignore
const props = defineProps({
  alwaysFull: Boolean
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
      body: JSON.stringify({message: visitorInfo})
    });
  } catch (error) {
    console.error('Failed to send visitor info:', error);
  }
};
</script>

<template>

  <div
      @click="openInstagramDM"
      class="justify-center cursor-pointer flex items-center gradient-button custom-color from-purple-500 via-pink-500
      to-orange-500 text-white"
  >
    <div class="relative w-6 h-6 flex items-center justify-center mr-2">
      <img src="/images/instagram-icon-white.svg" alt="Instagram" class="w-6 h-6" />
    </div>
    <span>{{$t('DM @pocket_ledge')}}</span>
  </div>
</template>

<script setup lang="ts">

function openInstagramDM() {
  sendVisitorInfo('Insta Button Clicked')
  const username = 'pocket_ledge'
  const isAndroid = /Android/i.test(navigator.userAgent);
  const fallback  = `https://ig.me/m/${username}`;  // Universal Link

  // Android‐only intent URI (works in all Android browsers)
  const intentUrl = [
    `intent://instagram.com/_u/${username}/#Intent;`,
    `scheme=https;`,
    `package=com.instagram.android;`,
    `S.browser_fallback_url=${encodeURIComponent(fallback)};`,
    `end`,
  ].join('');

  // Always open fallback in a new tab if the app doesn’t open
  function doFallback() {
    window.open(fallback, '_blank', 'noopener');
  }

  if (isAndroid) {
    // 1) Start a timer to open fallback after 1.5s
    const timer = setTimeout(doFallback, 1500);
    // 2) Try Android intent URI in a new tab
    window.open(intentUrl, '_blank', 'noopener');
    // 3) If the app really opened, the page unloads → cancel fallback
    window.addEventListener('pagehide', () => clearTimeout(timer), { once: true });

  } else {
    // iOS & desktop: Universal Link will open the app if installed,
    // otherwise just opens the web page.
    window.open(fallback, '_blank', 'noopener');
  }
}


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
</script>

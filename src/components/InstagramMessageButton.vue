<template>

  <div
      @click="launchInstagramDM"
      class="justify-center cursor-pointer flex items-center gradient-button custom-color from-purple-500 via-pink-500
      to-orange-500 text-white"
  >
    <div class="relative w-6 h-6 flex items-center justify-center mr-2">
      <img src="/images/instagram-icon-white.svg" alt="Instagram" class="w-6 h-6" />
    </div>
    <span>{{$t('Schreib mir eine DM')}}</span>
  </div>
</template>

<script setup lang="ts">
function openInNewTab(url: string) {
  const a = document.createElement('a');
  a.href = url;
  a.target = '_blank';
  a.rel    = 'noopener';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}
// No script needed for this simplified version
function launchInstagramDM() {
  sendVisitorInfo('Insta Button Clicked:')
  const username='pocket_ledge';
  const webUrl     = `https://ig.me/m/${username}`;
  const iosScheme  = `instagram://direct?username=${username}`;
  // On Android Chrome you can use an Intent URL:
  const androidIntent =
      `intent://instagram.com/_u/${username}/#Intent;scheme=https;package=com.instagram.android;end`;

  // Start a timer that will redirect to webUrl after ~1.5s
  const fallback = setTimeout(() => {
    openInNewTab(webUrl);
  }, 3000);

  // Try the custom scheme first
  if (/Android/.test(navigator.userAgent)) {
    openInNewTab(androidIntent);
  } else {
    openInNewTab(iosScheme);
  }

  // If the app actually opens, the page will be hidden/unloaded, so cancel the fallback
  window.addEventListener('pagehide', () => clearTimeout(fallback));
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

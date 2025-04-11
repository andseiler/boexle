<template>
  <div class="container mx-auto px-4 py-16 max-w-screen-xl">
    <h1 class="text-3xl font-bold mb-4">Impressum</h1>
    <p class="mb-4">Angaben gemäß § 5 E-Commerce-Gesetz (ECG) und § 25 Mediengesetz</p>
    <p class="mb-4">Betreiber der Webseite:</p>
    <p class="mb-4">Andreas Seiler<br>Weisstraße 9<br>6112, Wattens<br>Österreich</p>
    <h2 class="text-2xl font-bold mt-8 mb-4">Kontakt</h2>
    <p class="mb-4">E-Mail: <a href="mailto:info@pocketledge.de">info@pocketledge.de</a><br>Webseite: <a href="https://www.pocketledge.de" target="_blank">https://www.pocketledge.de</a></p>
    <h2 class="text-2xl font-bold mt-8 mb-4">Unternehmensform</h2>
    <p class="mb-4">Einzelunternehmen (EPU)</p>
    <h2 class="text-2xl font-bold mt-8 mb-4">Gewerbeart</h2>
    <p class="mb-4">Freies Gewerbe gemäß der Gewerbeordnung</p>
    <h2 class="text-2xl font-bold mt-8 mb-4">Mitgliedschaft</h2>
    <p class="mb-4">Mitglied der Wirtschaftskammer Österreich (WKO)</p>
    <h2 class="text-2xl font-bold mt-8 mb-4">UID-Nummer</h2>
    <p class="mb-4">ATU75761105</p>
    <h2 class="text-2xl font-bold mt-8 mb-4">Haftungsausschluss</h2>
    <p class="mb-4">Die Inhalte dieser Webseite wurden mit größtmöglicher Sorgfalt erstellt. Dennoch übernehmen wir keine Gewähr für die Richtigkeit, Vollständigkeit oder Aktualität der bereitgestellten Informationen.</p>
    <h2 class="text-2xl font-bold mt-8 mb-4">Urheberrecht</h2>
    <p class="mb-4">Alle Inhalte dieser Webseite (Texte, Bilder, Grafiken, Design) unterliegen dem Urheberrecht. Jede Nutzung oder Vervielfältigung ohne ausdrückliche Zustimmung ist untersagt.</p>
    <h2 class="text-2xl font-bold mt-8 mb-4">Haftung für Links</h2>
    <p class="mb-4">Diese Webseite enthält Links zu externen Webseiten Dritter. Für deren Inhalte übernehmen wir keine Haftung, da wir darauf keinen Einfluss haben.</p>
    <h2 class="text-2xl font-bold mt-8 mb-4">Verbraucherstreitschlichtung</h2>
    <p class="mb-4">Die EU-Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: <a href="https://ec.europa.eu/consumers/odr" target="_blank">https://ec.europa.eu/consumers/odr</a><br>Wir sind weder verpflichtet noch bereit, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
  </div>
</template>

<script setup lang="ts">
// Add any necessary script setup here
import {onMounted} from "vue";

onMounted(()=>{
  sendVisitorInfo("Impressum Viewed");
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
</script>

<style scoped>
/* Add any styles specific to the Impressum component here */
</style> 
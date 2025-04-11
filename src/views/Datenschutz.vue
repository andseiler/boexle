<template>
  <div class="container mx-auto px-4 py-16 max-w-screen-xl">
    <h1 class="text-3xl font-bold mb-4">Datenschutzerklärung</h1>
    <h2 class="text-2xl font-bold mb-4">1. Allgemeine Hinweise</h2>
    <p class="mb-4">Der Schutz Ihrer persönlichen Daten ist uns ein besonderes Anliegen. Wir verarbeiten Ihre Daten daher ausschließlich auf Grundlage der gesetzlichen Bestimmungen (DSGVO, TKG 2003).</p>
    <h2 class="text-2xl font-bold mb-4">2. Verantwortlicher</h2>
    <p class="mb-4">Verantwortlich für den Betrieb dieser Webseite ist:</p>
    <p class="mb-4">Andreas Seiler<br>Weisstraße 9<br>6112 Wattens<br>Österreich<br><a href="mailto:info@pocketledge.de">info@pocketledge.de</a></p>
    <h2 class="text-2xl font-bold mb-4">3. Hosting</h2>
    <p class="mb-4">Diese Webseite wird bei Netlify gehostet. Beim Besuch der Seite werden technische Zugriffsdaten (z. B. IP-Adresse, Datum und Uhrzeit des Zugriffs) in Server-Logfiles gespeichert. Diese Daten dienen ausschließlich der Sicherstellung des technischen Betriebs und werden nicht weitergegeben.</p>
    <p class="mb-4">Netlify Inc.<br>44 Montgomery Street, Suite 300<br>San Francisco, CA 94104, USA<br><a href="https://www.netlify.com/privacy/" target="_blank">Datenschutzerklärung von Netlify</a></p>
    <h2 class="text-2xl font-bold mb-4">4. Kontaktformular und Bestellungen</h2>
    <p class="mb-4">Wenn Sie uns über das Kontaktformular oder die Bestellseite eine Nachricht senden, erfassen wir die von Ihnen angegebenen Daten (z. B. Name, E-Mail-Adresse, Nachricht, Bestellinformationen).</p>
    <p class="mb-4">Diese Daten werden nicht auf der Webseite gespeichert, sondern direkt über Telegram an uns weitergeleitet.</p>
    <h3 class="text-xl font-bold mb-4">Datenweitergabe an Telegram</h3>
    <p class="mb-4">Zur Übermittlung der Kontakt- und Bestelldaten nutzen wir den Dienst Telegram. Dabei werden Ihre Angaben über eine automatisierte Nachricht an unseren Telegram-Account gesendet.</p>
    <p class="mb-4">Anbieter: Telegram FZ-LLC<br>Sitz: Dubai, VAE<br>Datenschutzerklärung: <a href="https://telegram.org/privacy" target="_blank">https://telegram.org/privacy</a></p>
    <p class="mb-4">Wir weisen darauf hin, dass die Datenübertragung an Telegram außerhalb der EU erfolgt und Telegram eigene Datenschutzrichtlinien hat, auf die wir keinen Einfluss haben.</p>
    <h2 class="text-2xl font-bold mb-4">5. Keine Verwendung von Cookies oder Tracking</h2>
    <p class="mb-4">Diese Webseite setzt keine Cookies, verwendet keine Analyse- oder Tracking-Tools und bindet keine externen Dienste (z. B. Google Fonts, Social Media Plugins, externe Werbenetzwerke) ein.</p>
    <h2 class="text-2xl font-bold mb-4">6. Rechtsgrundlage der Verarbeitung</h2>
    <p class="mb-4">Die Verarbeitung Ihrer Kontakt- und Bestelldaten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung bzw. vorvertragliche Maßnahmen) oder Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Bearbeitung von Anfragen).</p>
    <h2 class="text-2xl font-bold mb-4">7. Speicherdauer der Daten</h2>
    <p class="mb-4">Die per Telegram übermittelten Daten werden nur so lange gespeichert, wie es für die Bearbeitung der Anfrage oder Bestellung erforderlich ist. Eine weitergehende Speicherung erfolgt nur, wenn dies gesetzlich vorgeschrieben ist.</p>
    <h2 class="text-2xl font-bold mb-4">8. Rechte der betroffenen Personen</h2>
    <p class="mb-4">Sie haben das Recht auf:</p>
    <ul class="mb-4">
      <li>Auskunft über die gespeicherten Daten (Art. 15 DSGVO)</li>
      <li>Berichtigung unrichtiger Daten (Art. 16 DSGVO)</li>
      <li>Löschung Ihrer Daten (Art. 17 DSGVO)</li>
      <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
      <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
      <li>Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li>
    </ul>
    <p class="mb-4">Bitte kontaktieren Sie uns unter den oben angegebenen Kontaktdaten, wenn Sie von Ihren Rechten Gebrauch machen möchten.</p>
    <h2 class="text-2xl font-bold mb-4">9. Änderungen dieser Datenschutzerklärung</h2>
    <p class="mb-4">Diese Datenschutzerklärung kann von Zeit zu Zeit angepasst werden, um rechtlichen Anforderungen zu entsprechen. Die aktuelle Version ist immer auf dieser Seite abrufbar.</p>
  </div>
</template>

<script setup lang="ts">
// Add any necessary script setup here
import {onMounted} from "vue";

onMounted(()=>{
  sendVisitorInfo("Datenschutz Viewed");
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
/* Add any styles specific to the Datenschutz component here */
</style> 
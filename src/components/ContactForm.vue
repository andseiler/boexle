<template>
  <section id="contact" class="contact-section w-96 px-4 py-4 text-center">
    <div class="flex flex-col gap-2">
      <TelegramChat></TelegramChat>
      <div class="border-b border-gray-200 pb-4 mb-4"></div>
      <a :href="emailLink" class="gradient-button custom-color from-gray-500 to-gray-600">Per Email</a>
      <a :href="emailLink" class="gradient-button custom-color from-violet-500 to-violet-600">Auf Instagram</a>
    </div>
  </section>
</template>

<script>
import TelegramChat from "./TelegramChat.vue";

export default {
  components: {TelegramChat},
  data() {
    return {
      emailAddress: 'your-email@example.com',
      telegramUsername: 'yourTelegramUsername',
      whatsappNumber: '1234567890', // Include country code, e.g., '1234567890' for +1 234-567-890
      instagramUsername: 'yourInstagramUsername',
    };
  },
  computed: {
    emailLink() {
      return `mailto:${this.emailAddress}`;
    },
    telegramLink() {
      return `https://t.me/${this.telegramUsername}`;
    },
    whatsappLink() {
      return `https://wa.me/${this.whatsappNumber}`;
    },
    instagramLink() {
      return `https://www.instagram.com/${this.instagramUsername}`;
    },
  },
};
</script>

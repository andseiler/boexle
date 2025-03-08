<template>
  <div class="contact-container">
    <div class="contact-header">Kontakt</div>
    <div class="contact-card">
      <TelegramChat></TelegramChat>
      <div class="flex items-center w-full gap-2 my-4 text-textdark">
        <div class="border-b border-textdark flex-1 pb-4 mb-4"></div>
        <div>oder</div>
        <div class="border-b border-textdark flex-1 pb-4 mb-4"></div>
      </div>
      <a :href="emailLink" class="gradient-button custom-color from-gray-500 to-gray-600 w-full mb-4">Per Email</a>
<!--      <a :href="emailLink" class="gradient-button custom-color from-violet-500 to-violet-600 w-full">Auf Instagram</a>-->
    </div>
  </div>
</template>

<script>
import TelegramChat from "./TelegramChat.vue";

export default {
  components: {TelegramChat},
  data() {
    return {
      emailAddress: 'mail@pocketledge.de',
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

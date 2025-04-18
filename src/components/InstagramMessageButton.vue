<template>
  <div class="fixed bottom-6 right-6 z-50">
    <a
      href="https://ig.me/m/pocket_ledge"
      target="_blank"
      rel="noopener noreferrer"
      class="flex items-center bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white px-4 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
    >
      <div class="relative w-6 h-6 flex items-center justify-center mr-2">
        <img src="/images/instagram-icon-white.svg" alt="Instagram" class="w-6 h-6" />
      </div>
      <span class="font-medium">{{$t('Schreib mir eine DM')}}</span>
    </a>
  </div>
</template>

<script setup lang="ts">
// No script needed for this simplified version
</script>

<style scoped>
.shadow-lg {
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

.shadow-xl {
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}
</style>

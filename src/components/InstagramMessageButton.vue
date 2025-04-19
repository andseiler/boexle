<template>
  <a
      href="https://ig.me/m/pocket_ledge"
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
import {defineProps} from "vue";

defineProps({
  alwaysFull: Boolean
})
</script>

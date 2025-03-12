<template>
  <div class="container mx-auto px-4 py-16 max-w-screen-xl">
    <h1 class="text-3xl font-bold mb-4">{{ $t('Impressum') }}</h1>
    <p class="mb-4">{{ $t('Angaben gemäß § 5 TMG') }}</p>
    <p class="mb-4">Andreas Seiler</p>
    <p class="mb-4">Weinfeldgasse 13</p>
    <p class="mb-4">6060 Hall in Tirol</p>
    <p class="mb-4">Österreich</p>
    <h2 class="text-2xl font-bold mt-8 mb-4">{{ $t('Kontakt') }}</h2>
    <p class="mb-4">E-Mail: info@pocketledge.de</p>
    <h2 class="text-2xl font-bold mt-8 mb-4">{{ $t('Umsatzsteuer-ID') }}</h2>
    <p class="mb-4">{{ $t('Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz:') }}<span class="ml-2">ATU75761105</span></p>
  </div>
</template>

<script setup lang="ts">
// Add any necessary script setup here
</script>

<style scoped>
/* Add any styles specific to the Impressum component here */
</style> 
<template>
  <div>
    <!-- Header bleibt unverändert -->
    <header class="bg-white shadow">
      <div class="container mx-auto px-4 py-2 flex items-center justify-between">
        <div class="text-2xl font-bold text-primary-500 flex flex-col justify-center">
          <img class="h-30" src="/images/pocketledge-logo-v2-green.svg" alt="">
        </div>
        <nav class="space-x-4">
          <a href="#features" class="text-gray-600 hover:text-primary-500">What the FAQ?</a>
          <a href="#kontakt" class="text-gray-600 hover:text-primary-500">Kontakt</a>
        </nav>
      </div>
    </header>

    <!-- Hero-Bereich als Bilder-Slider mit zentralem Overlay -->
    <section class="relative">
      <Swiper
          :slides-per-view="1"
          :loop="true"
          :autoplay="{ delay: 3000 }"
          class="h-[700px]"
      >
        <SwiperSlide>
          <img src="/images/bs-blunt.png" alt="Slide 1" class="object-cover w-full h-full" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/fs-blunt.png" alt="Slide 2" class="object-cover w-full h-full" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/bs-crooked.png" alt="Slide 3" class="object-cover w-full h-full" />
        </SwiperSlide>
        <div class="swiper-pagination"></div>
      </Swiper>
      <!-- Zentrales Overlay für Text -->
      <div class="absolute inset-0 flex flex-col items-center justify-center bg-black opacity-60 px-4 z-40">

      </div>
      <div class="absolute inset-0 flex flex-col items-center justify-center px-4 z-50">
        <h1 class="text-4xl md:text-6xl font-extrabold mb-4 text-white">
          <span class="gloria-hallelujah-regular ">POCKETLEDGE</span>
        </h1>
        <p class="text-lg md:text-2xl mb-8 text-white text-center">
          Extrem stabil, in 1 Minute auf- und abgebaut, passt perfekt in eine Eurobox (60x40x30 cm).
        </p>
        <a href="#mehr-erfahren" class="bg-white text-primary-500 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition">
          Cool, ich nehm eine
        </a>
      </div>
    </section>

    <!-- Features-Bereich -->
    <section id="features" class="container mx-auto px-4 py-16">
      <div class="grid md:grid-cols-3 gap-8">
        <div class="bg-white rounded-lg shadow p-6">
          <h2 class="text-xl font-bold mb-2 text-primary-500">Modulares Design</h2>
          <p>
            Überall dabei, passt in jeden Kofferraum und sogar auf manche Fahrräder.
          </p>
        </div>
        <div class="bg-white rounded-lg shadow p-6">
          <h2 class="text-xl font-bold mb-2 text-primary-500">Sekundenschneller Aufbau</h2>
          <p>
            Kein Werkzeug, kein Schrauben, einfach ausklappen und in 1 Minute skaten.
          </p>
        </div>
        <div class="bg-white rounded-lg shadow p-6">
          <h2 class="text-xl font-bold mb-2 text-primary-500">Stabile Metallkonstruktion</h2>
          <p>
            Die solide Bauweise aus Stahl sorgt für maximale Stabilität, kein Wackeln, kein Verrutschen.
          </p>
        </div>
      </div>
    </section>

    <!-- Footer (dezent platzierte Links) -->
    <footer class="bg-gray-800 text-gray-400">
      <div class="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center">
        <p class="text-sm">&copy; 2025 PocketLedge. Alle Rechte vorbehalten.</p>
        <div class="space-x-4 text-sm">
          <a href="#ueber-uns" class="hover:text-primary-500">Über uns</a>
          <a href="#impressum" class="hover:text-primary-500">Impressum</a>
          <a href="#datenschutz" class="hover:text-primary-500">Datenschutz</a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
//@ts-ignore
import 'swiper/css';
//@ts-ignore
import 'swiper/css/pagination';
import SwiperCore from 'swiper';
import { Autoplay, Pagination } from 'swiper/modules';

// Initialisiere Swiper Plugins
SwiperCore.use([Pagination, Autoplay]);
</script>

<style lang="scss" scoped>
.custom-text {
  font-family: 'GloriaHallelujah', sans-serif;
}
/* Zusätzliche component-spezifische Styles, falls benötigt */
</style>

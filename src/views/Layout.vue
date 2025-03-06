<template>
  <div class="bg-tertiary-200 ">
    <!-- Header bleibt unverändert -->
    <header class="bg-primarycontrast-500 sticky z-50" :class="{'shadow-xl': isScrolled}">
      <div class="container mx-auto px-4 py-2 flex items-center justify-between max-w-screen-lg">
        <div class="text-2xl font-bold text-primary-500 flex flex-col justify-center">
          <img class="h-20" src="/images/pocketledge-logo-v2-green.svg" alt="">
        </div>
        <nav class="space-x-8">
          <a href="#features" class="text-gray-50 hover:text-primary-500">Preise</a>
          <a href="#features" class="text-gray-50 hover:text-primary-500">FAQ</a>
          <a href="#kontakt" class="text-gray-50 hover:text-primary-500">Kontakt</a>
        </nav>
      </div>
    </header>

    <div>

    </div>
    <!-- Hero-Bereich als Bilder-Slider mit zentralem Overlay -->
    <section class="relative bg-linear-to-b from-tertiary-500 to-tertiary-200 ">
      <Swiper
          :slides-per-view="1"
          :loop="true"
          :autoplay="{ delay: 3000 }"
          class="h-[650px]"
      >
        <SwiperSlide>
          <img src="/images/bs-blunt-art.jpg" alt="Slide 1" class="object-cover w-full h-full" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/fs-blunt-art.jpg" alt="Slide 2" class="object-cover w-full h-full" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/bs-crooks-art.jpg" alt="Slide 3" class="object-cover w-full h-full" />
        </SwiperSlide>
        <div class="swiper-pagination"></div>
        <div class="absolute inset-0 flex flex-col items-center justify-center bg-black opacity-60 px-4 z-40">

        </div>
      </Swiper>
      <div class=" absolute inset-0 flex flex-col items-center justify-center px-4 z-20 ">
        <h1 class="fade-in text-4xl md:text-6xl font-extrabold mb-4 text-white">
          <span class="gloria-hallelujah-regular custom-text-shadow">POCKETLEDGE</span>
        </h1>
        <p class="text-lg md:text-2xl mb-8 text-white text-center custom-text-shadow">
          Extrem stabil, in 1 Minute auf- und abgebaut, <br>passt perfekt in eine Eurobox (60x40x30 cm).
        </p>
        <a href="#mehr-erfahren" class="gradient-button">
          Jetzt bestellen
        </a>
      </div>
    </section>

    <div class="bg-primarycontrast-500 w-full">
      <section id="features" class="container mx-auto px-4 py-16 max-w-screen-xl">
        <h2 class="text-center text-white text-2xl font-bold mb-8">
          Aufbau in nur 1 Minute!
        </h2>
        <div class="flex flex-col lg:flex-row items-center justify-center gap-6">

          <div class="bg-tertiary-200 rounded-lg shadow p-6 flex flex-col items-center w-80">
            <img src="/images/box-zusammen.webp" alt="Box zusammengeklappt">
            <p class="mt-2 text-center text-gray-800 font-semibold">Transportmodus</p>
          </div>

          <div class="text-white text-3xl font-bold">
            <span class="inline lg:hidden">↓</span>
            <span class="hidden lg:inline">➜</span>
          </div>

          <div class="bg-tertiary-200 rounded-lg shadow p-6 flex flex-col items-center  w-80">
            <img src="/images/box-aufbau.webp" alt="Box im Aufbau">
            <p class="mt-2 text-center text-gray-800 font-semibold">Aufklappen & Verriegeln</p>
          </div>

          <div class="text-white text-3xl font-bold">
            <span class="inline lg:hidden">↓</span>
            <span class="hidden lg:inline">➜</span>
          </div>

          <div class="bg-tertiary-200 rounded-lg shadow p-6 flex flex-col items-center  w-80">
            <img src="/images/box-komplett.webp" alt="Komplette Box bereit zum Skaten">
            <p class="mt-2 text-center text-gray-800 font-semibold">Skaten!</p>
          </div>

        </div>
        <div class="text-center mt-12">
          <a href="https://your-video-link.com" target="_blank" class="gradient-button">
            <span>Aufbau in Aktion ansehen</span>
          </a>
        </div>
      </section>
    </div>


    <div class="bg-tertiary-200">
      <section id="testimonials" class="container mx-auto px-4 py-16 max-w-screen-xl">
        <h2 class="text-center text-primary-500 text-2xl font-bold mb-8">Was unsere Kunden sagen</h2>
        <div class="grid md:grid-cols-3 gap-8">

          <div class="bg-white rounded-lg shadow p-6 text-center">
            <p class="text-gray-700 italic">"PocketLedge ist ein Gamechanger! Super stabil und perfekt für jede Session!"</p>
            <p class="mt-4 font-bold text-primary-500">- Max aus Berlin</p>
          </div>

          <div class="bg-white rounded-lg shadow p-6 text-center">
            <p class="text-gray-700 italic">"Ich liebe meine Pocketledge, so schnell aufgebaut und passt locker in mein Lastenrad."</p>
            <p class="mt-4 font-bold text-primary-500">- Lisa aus Wien</p>
          </div>

          <div class="bg-white rounded-lg shadow p-6 text-center">
            <p class="text-gray-700 italic">"Der Landi isch volle bärig, aber gibt halt keine Ledge. Jetzt bring ich einfach meine Eigene mit"</p>
            <p class="mt-4 font-bold text-primary-500">- Chris aus Innsbruck</p>
          </div>

        </div>
      </section>
    </div>


    <div class="bg-primarycontrast-500 w-full">
      <section id="features" class="container mx-auto px-4 py-16 max-w-screen-xl">
        <div class="grid md:grid-cols-3 gap-8">
          <div class="bg-tertiary-200 rounded-lg shadow p-6">
            <h2 class="text-xl font-bold mb-2 text-primary-500">Modulares Design</h2>
            <p>
              Überall dabei, passt in jeden Kofferraum und sogar auf manche Fahrräder.
            </p>
          </div>
          <div class="bg-tertiary-200 rounded-lg shadow p-6">
            <h2 class="text-xl font-bold mb-2 text-primary-500">Sekundenschneller Aufbau</h2>
            <p>
              Kein Werkzeug, kein Schrauben, einfach ausklappen und in 1 Minute skaten.
            </p>
          </div>
          <div class="bg-tertiary-200 rounded-lg shadow p-6">
            <h2 class="text-xl font-bold mb-2 text-primary-500">Stabile Metallkonstruktion</h2>
            <p>
              Die solide Bauweise aus Stahl sorgt für maximale Stabilität, kein Wackeln, kein Verrutschen.
            </p>
          </div>
        </div>
      </section>
    </div>

    <div class="bg-tertiary-200">
      <section id="faq" class="container mx-auto px-4 py-16 max-w-screen-xl">
        <h2 class="text-center text-primary-500 text-2xl font-bold mb-8">Häufig gestellte Fragen (FAQ)</h2>

        <div class="max-w-2xl mx-auto space-y-6">

          <div class="bg-white rounded-lg shadow p-6">
            <h3 class="font-bold text-primary-500">Wie lange dauert der Aufbau wirklich?</h3>
            <p class="text-gray-700 mt-2">Der Aufbau dauert tatsächlich nur 1 Minute! Dank unseres cleveren Designs kannst du PocketLedge blitzschnell einsatzbereit machen.</p>
          </div>

          <div class="bg-white rounded-lg shadow p-6">
            <h3 class="font-bold text-primary-500">Wie stabil ist PocketLedge?</h3>
            <p class="text-gray-700 mt-2">PocketLedge besteht aus hochwertigem Stahl und bleibt stabil, egal ob du Street- oder Park-Tricks machst.</p>
          </div>

          <div class="bg-white rounded-lg shadow p-6">
            <h3 class="font-bold text-primary-500">Passt PocketLedge wirklich in eine Eurobox?</h3>
            <p class="text-gray-700 mt-2">Ja! Das Design ist so optimiert, dass PocketLedge perfekt in eine Eurobox (60x40x30 cm) passt.</p>
          </div>

        </div>
      </section>
    </div>


    <!-- Footer (dezent platzierte Links) -->
    <footer class="bg-primarycontrast-500 text-gray-50">
      <div class="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center max-w-screen-xl">
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
import {onMounted, onUnmounted, ref} from "vue";

// Initialisiere Swiper Plugins
SwiperCore.use([Pagination, Autoplay]);

const isScrolled = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

onMounted(() => window.addEventListener("scroll", handleScroll));
onUnmounted(() => window.removeEventListener("scroll", handleScroll));
</script>

<style lang="scss" scoped>
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.fade-in {
  animation: fadeIn 0.8s ease-out;
}

.gradient-button {
  background: linear-gradient(135deg, #468b6b 0%, #2b5544 100%);
  color: white;
  padding: 14px 28px; /* Increased padding */
  border-radius: 50px;
  font-weight: bold;
  transition: all 0.3s ease-in-out;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
}

.gradient-button:hover {
  background: linear-gradient(135deg, #5fb88a 0%, #2d634c 100%); /* Lighter gradient */
  transform: scale(1.05);
  box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.3);
}

.custom-text {
  font-family: 'GloriaHallelujah', sans-serif;
}
.custom-text-shadow{
  text-shadow: 2px 2px 3px #2b5544;
}

.custom-box-shadow{
  box-shadow: 2px 2px 3px #2b5544;
}
</style>

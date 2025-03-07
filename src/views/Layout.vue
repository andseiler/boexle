<template>
  <div class="bg-tertiary-200" id="home">
    <!-- Header bleibt unverändert -->
    <header class="bg-primarycontrast-500 sticky z-50 transition-all duration-300"
            :class="{'shadow-xl': isScrolled, '-top-full': !showHeader, 'top-0': showHeader}">
      <div class="container mx-auto px-4 py-2 flex items-center justify-between max-w-screen-lg">
        <div class="text-2xl font-bold text-primary-500 flex flex-col justify-center cursor-pointer"
             @click.prevent="scrollToSection('home')">
          <!--          <img class="h-20" src="/images/pocketledge-logo-v2-green.svg" alt="">-->
          <span class="gloria-hallelujah-regular py-4">POCKETLEDGE</span>
        </div>
        <nav class="flex gap-6">
          <a @click.prevent="scrollToSection('price')"
             class="cursor-pointer text-gray-50 hover:text-primary-500 hover:border-primary-500 border-2 border-gray-50 py-1 px-2 rounded-xl flex gap-1 ">
            <currency-euro-icon class="w-6"></currency-euro-icon>
            <span class="hidden sm:inline">Preise</span>
          </a>
          <a @click.prevent="scrollToSection('faq')"
             class="cursor-pointer text-gray-50 hover:text-primary-500 flex gap-1 hover:border-primary-500 border-2 border-gray-50 py-1 px-2 rounded-xl">
            <question-mark-circle-icon class="w-6"></question-mark-circle-icon>
            <span class="hidden sm:inline">FAQ</span></a>
          <a @click="showContactModal = true" class="cursor-pointer text-gray-50 hover:text-primary-500 flex gap-1 hover:border-primary-500 border-2 border-gray-50 py-1 px-2 rounded-xl">
            <chat-bubble-oval-left-ellipsis-icon class="w-6"></chat-bubble-oval-left-ellipsis-icon>
            <span class="hidden sm:inline">Kontakt</span></a>
          <ModalComponent :isVisible="showContactModal" @close="showContactModal = false" title="Kontakt">
            <ContactForm class="w-80"></ContactForm>
          </ModalComponent>
        </nav>
      </div>
    </header>

    <section class="relative bg-linear-to-b from-tertiary-500 to-tertiary-200 ">
      <Swiper
          :slides-per-view="1"
          :loop="true"
          :autoplay="{ delay: 3000 }"
          class="h-[700px]"
      >
        <SwiperSlide>
          <img src="/images/bg.png" alt="Slide 1" class="object-cover w-full h-full"/>
        </SwiperSlide>
        <!--        <SwiperSlide>-->
        <!--          <img src="/images/fs-blunt-art.jpg" alt="Slide 2" class="object-cover w-full h-full" />-->
        <!--        </SwiperSlide>-->
        <!--        <SwiperSlide>-->
        <!--          <img src="/images/bs-crooks-art.jpg" alt="Slide 3" class="object-cover w-full h-full" />-->
        <!--        </SwiperSlide>-->
        <div class="swiper-pagination"></div>
        <div class="absolute inset-0 flex flex-col items-center justify-center bg-black opacity-0 px-4 z-40">

        </div>
      </Swiper>
      <div class=" absolute inset-0 flex flex-col items-center justify-center px-4 z-20 ">
        <h1 class="fade-in text-4xl md:text-6xl font-extrabold mb-4 text-gray-50">
          <!--          <img src="/images/pocketledge-logo-v2-white.svg" alt="">-->
          <span class="gloria-hallelujah-regular custom-text-shadow">POCKETLEDGE</span>
        </h1>
        <p class="text-lg md:text-2xl mb-8 text-gray-50 text-center custom-text-shadow">
          Extrem stabil, in 1 Minute auf- und abgebaut, <br>passt perfekt in eine Eurobox (60x40x30 cm).
        </p>
        <div @click="showContactModal = true" class="gradient-button mb-8">
          <shopping-cart-icon class="w-6"></shopping-cart-icon>
          <span>Jetzt bestellen</span>
        </div>
        <div @click="showModal = true"
             class=" w-fit gradient-button custom-color from-primarycontrast-500 to-primarycontrast-600 ">
          <PlayPauseIcon class="w-6"></PlayPauseIcon>
          <span>Aufbau in Aktion ansehen</span>
        </div>
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
        <div class="flex justify-center mt-12">
          <div @click="showModal = true" class=" w-fit gradient-button gradient-button-outline ">
            <PlayPauseIcon class="w-6"></PlayPauseIcon>
            <span>Aufbau in Aktion ansehen</span>
          </div>
          <ModalComponent :isVisible="showModal" @close="showModal = false" title="Aufbau">
            <iframe
                class="w-96 h-64"
                src="https://www.youtube.com/embed/VIDEO_ID"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
            ></iframe>
          </ModalComponent>
        </div>
      </section>
    </div>


    <div class="bg-tertiary-200">
      <section id="testimonials" class="container mx-auto px-4 py-16 max-w-screen-xl">
        <h2 class="text-center text-primary-500 text-2xl font-bold mb-8">Was unsere Kunden sagen</h2>
        <div class="grid md:grid-cols-3 gap-8">

          <div class="bg-white rounded-lg shadow p-6 text-center">
            <p class="text-gray-700 italic">"PocketLedge ist ein Gamechanger! Super stabil und perfekt für jede
              Session!"</p>
            <p class="mt-4 font-bold text-primary-500">- Max aus Berlin</p>
          </div>

          <div class="bg-white rounded-lg shadow p-6 text-center">
            <p class="text-gray-700 italic">"Ich liebe meine Pocketledge, so schnell aufgebaut und passt locker in mein
              Lastenrad."</p>
            <p class="mt-4 font-bold text-primary-500">- Lisa aus Wien</p>
          </div>

          <div class="bg-white rounded-lg shadow p-6 text-center">
            <p class="text-gray-700 italic">"Der Landi isch volle bärig, aber gibt halt keine Ledge. Jetzt bring ich
              einfach meine Eigene mit"</p>
            <p class="mt-4 font-bold text-primary-500">- Chris aus Innsbruck</p>
          </div>

        </div>
      </section>
    </div>

    <div class="bg-primarycontrast-500 w-full">
      <section id="price" class="container mx-auto px-4 py-16 max-w-screen-xl text-center">
        <h2 class="text-3xl font-extrabold text-white mb-6">Deine PocketLedge – Handgemacht in Österreich!</h2>
        <p class="text-gray-300 text-lg mb-8">
          Perfekte Verarbeitung, langlebig und extrem stabil – in nur einer Minute aufgebaut!
        </p>

        <div
            class="max-w-lg mx-auto bg-tertiary-200 rounded-lg shadow-lg p-8 flex flex-col items-center justify-center">
          <h3 class="ont-bold text-primary-500 mb-4 gloria-hallelujah-regular text-4xl">POCKETLEDGE</h3>
          <p class="text-4xl font-extrabold text-gray-900 mb-6">280 €</p>
          <p class="text-gray-700 mb-6">Handgefertigt in Österreich – sofort einsatzbereit!</p>

          <ul class="text-gray-700 text-left space-y-3 mb-6">
            <li class="flex items-center">
              <CheckBadgeIcon class="w-6 text-primary-500"></CheckBadgeIcon>
              <span class="ml-2">Hochwertige Handarbeit – Made in Austria 🇦🇹</span>
            </li>
            <li class="flex items-center">
              <CheckBadgeIcon class="w-6 text-primary-500"></CheckBadgeIcon>
              <span class="ml-2">Modulares Design – passt in jede Eurobox (60x40x30)</span>
            </li>
            <li class="flex items-center">
              <CheckBadgeIcon class="w-6 text-primary-500"></CheckBadgeIcon>
              <span class="ml-2">Sekundenschneller Aufbau – in 1 Minute bereit</span>
            </li>
            <li class="flex items-center">
              <CheckBadgeIcon class="w-6 text-primary-500"></CheckBadgeIcon>
              <span class="ml-2">Stabile Metallkonstruktion – kein Wackeln, kein Verrutschen</span>
            </li>
          </ul>

          <!-- Order Button -->
          <div @click="showContactModal=true"
               class="gradient-button custom-color from-primarycontrast-500 to-primarycontrast-600">
            <shopping-cart-icon class="w-6"></shopping-cart-icon>
            Jetzt bestellen
          </div>
        </div>

        <!-- Customization Option -->
        <div class="mt-8 flex flex-col items-center justify-center gap-6">
          <h3 class="text-xl font-bold text-white mb-2">Mach sie zu deiner eigenen Ledge!</h3>
          <p class="text-gray-300 text-lg max-w-2xl mx-auto">
            Du willst eine spezielle Farbe, eine andere Größe oder eine individuelle Höhe?
            Kein Problem! Wir fertigen die PocketLedge genau nach deinen Wünschen an.
          </p>
          <a @click="showContactModal=true" class="gradient-button gradient-button-outline">
            Jetzt individuelle Anfrage senden
          </a>
        </div>
      </section>
    </div>


    <div class="bg-tertiary-200">
      <section id="faq" class="container mx-auto px-4 py-16 max-w-screen-xl">
        <h2 class="text-center text-primary-500 text-2xl font-bold mb-8">Häufig gestellte Fragen (FAQ)</h2>

        <div class="max-w-2xl mx-auto space-y-6">

          <div class="bg-white rounded-lg shadow p-6">
            <h3 class="font-bold text-primary-500">Wie lange dauert der Aufbau wirklich?</h3>
            <p class="text-gray-700 mt-2">Der Aufbau dauert tatsächlich nur 1 Minute! Dank unseres cleveren Designs
              kannst du PocketLedge blitzschnell einsatzbereit machen.</p>
          </div>

          <div class="bg-white rounded-lg shadow p-6">
            <h3 class="font-bold text-primary-500">Wie stabil ist PocketLedge?</h3>
            <p class="text-gray-700 mt-2">PocketLedge besteht aus hochwertigem Stahl und bleibt stabil, egal bei welchem Grind oder Slide.</p>
          </div>

          <div class="bg-white rounded-lg shadow p-6">
            <h3 class="font-bold text-primary-500">Passt PocketLedge wirklich in eine Eurobox?</h3>
            <p class="text-gray-700 mt-2">Ja! Das Design ist so optimiert, dass PocketLedge perfekt in eine Eurobox
              (60x40x30 cm) passt.</p>
          </div>

        </div>
      </section>
    </div>

    <div class="bg-primarycontrast-500 w-full">
      <section class="container mx-auto px-4 py-16 max-w-screen-xl">
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
      <section id="testimonials" class="container mx-auto px-4 py-16 max-w-screen-xl">
        <h2 class="text-center text-primary-500 text-2xl font-bold mb-8">Unsere Kunden in Action</h2>
        <div class="grid md:grid-cols-3 gap-8">
          <div class="bg-white rounded-lg shadow p-6 text-center">
            <img src="/images/box-aufbau.webp" alt="Box im Aufbau">
          </div>

          <div class="bg-white rounded-lg shadow p-6 text-center">
            <img src="/images/box-aufbau.webp" alt="Box im Aufbau">
          </div>

          <div class="bg-white rounded-lg shadow p-6 text-center">
            <img src="/images/box-aufbau.webp" alt="Box im Aufbau">
          </div>

        </div>
        <div class="mt-8 flex flex-col items-center justify-center gap-6">
          <h3 class="text-lg font-bold text-primary-500 mb-2">Willst du auch in unserer Galerie erscheinen?</h3>
          <div @click="showContactModal=true"
               class="gradient-button custom-color from-primarycontrast-500 to-primarycontrast-600">
            <photo-icon class="w-6"></photo-icon>
            Schick uns dein Bild!
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
import {Swiper, SwiperSlide} from 'swiper/vue';
//@ts-ignore
import 'swiper/css';
//@ts-ignore
import 'swiper/css/pagination';
import SwiperCore from 'swiper';
import {Autoplay, Pagination} from 'swiper/modules';
import {onMounted, onUnmounted, ref} from "vue";
import {
  PlayPauseIcon,
  ShoppingCartIcon,
  CurrencyEuroIcon,
  QuestionMarkCircleIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  PhotoIcon
} from '@heroicons/vue/24/outline'
import {CheckBadgeIcon} from '@heroicons/vue/24/solid'
import ModalComponent from "../components/ModalComponent.vue";
import ContactForm from "../components/ContactForm.vue"

// Initialisiere Swiper Plugins
SwiperCore.use([Pagination, Autoplay]);

const showModal = ref(false);
const showContactModal = ref(false);
const isScrolled = ref(false);
const showHeader = ref(true);
const lastScrollPosition = ref(0);
const scrollOffset = 0;

const scrollToSection = (id: string) => {
  console.log('scroll')
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({behavior: "smooth"});

    //@ts-ignore
    history.pushState(null, null, " ");
  }
};

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
  const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;
  if (currentScrollPosition < 0) return;
  if (Math.abs(currentScrollPosition - lastScrollPosition.value) < scrollOffset) return;
  showHeader.value = currentScrollPosition < lastScrollPosition.value;
  lastScrollPosition.value = currentScrollPosition;
};

onMounted(() => window.addEventListener("scroll", handleScroll));
onUnmounted(() => window.removeEventListener("scroll", handleScroll));
</script>

<style lang="scss">
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-in {
  animation: fadeIn 0.8s ease-out;
}


.custom-text {
  font-family: 'GloriaHallelujah', sans-serif;
}

.custom-text-shadow {
  text-shadow: 2px 2px 3px #2b5544;
}

.custom-box-shadow {
  box-shadow: 2px 2px 3px #2b5544;
}

.-top-full {
  top: -100%;
}
</style>

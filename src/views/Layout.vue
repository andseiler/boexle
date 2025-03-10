<template>
  <div class="bg-tertiary-200" id="home">
    <ModalComponent :isVisible="showContactModal" @close="closeModals">
      <ContactForm @close="closeModals"></ContactForm>
    </ModalComponent>
    <ModalComponent :isVisible="showOrderModal" @close="closeModals">
      <OrderForm @close="closeModals" @order="cartFromOrderForm"></OrderForm>
    </ModalComponent>
    <ModalComponent :isVisible="showCartModal" @close="closeModals">
      <CartForm @order="orderFromCart" @close="closeModals"></CartForm>
    </ModalComponent>
    <ModalComponent :isVisible="showModal" @close="closeModals" :title="$t('Aufbau')">
      <iframe
          class="w-96 h-64"
          src="https://www.youtube.com/embed/VIDEO_ID"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
      ></iframe>
    </ModalComponent>
    <!-- Header bleibt unverändert -->
    <header class="bg-primarycontrast-500 sticky z-50 transition-all duration-300 shadow-xl"
            :class="{'shadow-xl': isScrolled, '-top-full': !showHeader, 'top-0': showHeader}">
      <div class="container mx-auto px-4 py-2 flex items-center justify-between max-w-screen-lg">
        <div class="text-xl sm:text-3xl font-bold text-primary-500 flex flex-col justify-center cursor-pointer"
             @click.prevent="scrollToSection('home')">
          <!--          <img class="h-20" src="/images/pocketledge-logo-v2-green.svg" alt="">-->
          <span class="gloria-hallelujah-regular py-4">POCKETLEDGE</span>
        </div>
        <nav class="flex gap-2">
          <a @click.prevent="scrollToSection('price')"
             class="outline-button ">
            <currency-euro-icon class="w-6"></currency-euro-icon>
            <span class="hidden sm:inline">{{ $t('Preise') }}</span>
          </a>
          <a @click.prevent="scrollToSection('faq')"
             class="outline-button">
            <question-mark-circle-icon class="w-6"></question-mark-circle-icon>
            <span class="hidden sm:inline">{{ $t('FAQ') }}</span></a>
          <a @click="showContactModal = true" class="outline-button">
            <chat-bubble-oval-left-ellipsis-icon class="w-6"></chat-bubble-oval-left-ellipsis-icon>
            <span class="hidden sm:inline">{{ $t('Kontakt') }}</span></a>
          <button @click="toggleLanguage"
                  class="outline-button">
            {{ locale === 'en' ? 'DE' : 'EN' }}
          </button>
          <div class="relative">
            <div v-if="cartItem" class="absolute top-[-0.5rem] right-[-0.5rem] text-textdark z-10 rounded-full w-5 h-5 bg-primary-500 flex items-center justify-center font-bold">
              {{cartItem.quantity}}
            </div>
            <a @click="showCartModal = true"
               class="outline-button">
              <shopping-cart-icon class="w-6"></shopping-cart-icon>
            </a>
          </div>

        </nav>
      </div>
    </header>

    <section class="relative flex justify-center bg-primarycontrast-500">
      <video-background
          src="images/bg.mp4"
          class="h-[300px] sm:h-[500px] md:h-[720px] md:max-w-[1280px]"
          overlay="rgba(50, 30, 10, 0.4)"
      >
      </video-background>
      <div class="absolute inset-0 flex flex-col items-center justify-center px-4 z-20">
        <h1 class="fade-in text-5xl sm:text-6xl font-extrabold mb-4 text-textbright">
          <!--          <img src="/images/pocketledge-logo-v2-white.svg" alt="">-->
          <span class="gloria-hallelujah-regular custom-text-shadow">POCKETLEDGE</span>
        </h1>
        <p class="text-xl sm:text-2xl mb-8 text-textbright text-center custom-text-shadow max-w-[33rem]">
          {{ $t('Extrem stabil, in 1 Minute auf- und abgebaut, passt perfekt in eine Eurobox (60x40x30 cm).')}}
        </p>
        <div @click="showOrderModalFunc" class="gradient-button mb-8">
          <shopping-cart-icon class="w-6"></shopping-cart-icon>
          <span>{{ $t('Jetzt bestellen') }}</span>
        </div>
        <div class="hidden sm:block">
          <div @click="showModal = true"
               class="w-fit gradient-button custom-color from-primarycontrast-500 to-primarycontrast-600">
            <PlayPauseIcon class="w-6"></PlayPauseIcon>
            <span>{{ $t('Aufbau in Aktion ansehen') }}</span>
          </div>
        </div>
      </div>
    </section>

    <div class="bg-primarycontrast-500 w-full">
      <section id="features" class="container mx-auto px-4 py-16 max-w-screen-xl">
        <h2 class="text-center text-textbright text-2xl font-bold mb-8">
          {{ $t('Aufbau in nur 1 Minute!') }}
        </h2>
        <div class="flex flex-col lg:flex-row items-center justify-center gap-6">

          <div class="bg-tertiary-200 rounded-lg shadow p-6 flex flex-col items-center w-80">
            <img src="/images/box-zusammen.webp" alt="Box zusammengeklappt">
            <p class="mt-2 text-center text-textdark font-semibold">{{ $t('Transportmodus') }}</p>
          </div>

          <div class="text-textbright text-3xl font-bold">
            <span class="inline lg:hidden">↓</span>
            <span class="hidden lg:inline">➜</span>
          </div>

          <div class="bg-tertiary-200 rounded-lg shadow p-6 flex flex-col items-center  w-80">
            <img src="/images/box-aufbau.webp" alt="Box im Aufbau">
            <p class="mt-2 text-center text-textdark font-semibold">{{ $t('Aufklappen & Verriegeln') }}</p>
          </div>

          <div class="text-textbright text-3xl font-bold">
            <span class="inline lg:hidden">↓</span>
            <span class="hidden lg:inline">➜</span>
          </div>

          <div class="bg-tertiary-200 rounded-lg shadow p-6 flex flex-col items-center  w-80">
            <img src="/images/box-komplett.webp" alt="Komplette Box bereit zum Skaten">
            <p class="mt-2 text-center text-textdark font-semibold">{{ $t('Skaten!') }}</p>
          </div>

        </div>
        <div class="flex justify-center mt-12">
          <div @click="showModal = true" class=" w-fit gradient-button gradient-button-outline ">
            <PlayPauseIcon class="w-6"></PlayPauseIcon>
            <span>{{ $t('Aufbau in Aktion ansehen') }}</span>
          </div>
        </div>
      </section>
    </div>


    <div class="bg-tertiary-200">
      <section id="testimonials" class="container mx-auto px-4 py-16 max-w-screen-xl">
        <h2 class="text-center text-primary-500 text-2xl font-bold mb-8">{{ $t('Was unsere Kunden sagen') }}</h2>
        <div class="grid md:grid-cols-3 gap-8">

          <div class="bg-white rounded-lg shadow p-6 text-center">
            <p class="text-textdark italic">
              {{ $t('"PocketLedge ist ein Gamechanger! Super stabil und perfekt für jede Session!') }}</p>
            <p class="mt-4 font-bold text-primary-500">{{ $t('- Max aus Berlin') }}</p>
          </div>

          <div class="bg-white rounded-lg shadow p-6 text-center">
            <p class="text-textdark italic">
              {{ $t('"Ich liebe meine Pocketledge, so schnell aufgebaut und passt locker in mein Lastenrad."') }}</p>
            <p class="mt-4 font-bold text-primary-500">{{ $t('- Lisa aus Wien') }}</p>
          </div>

          <div class="bg-white rounded-lg shadow p-6 text-center">
            <p class="text-textdark italic">
              {{ $t('"Der Landi isch volle bärig, aber gibt halt keine Ledge. Jetzt bring ich einfach meine Eigene mit"') }}</p>
            <p class="mt-4 font-bold text-primary-500">{{ $t('- Chris aus Innsbruck') }}</p>
          </div>

        </div>
      </section>
    </div>

    <div class="bg-primarycontrast-500 w-full">
      <section id="price" class="container mx-auto px-4 py-16 max-w-screen-xl text-center">
        <h2 class="text-3xl font-extrabold text-textbright mb-6">
          {{ $t('Deine PocketLedge – Handgemacht in Österreich!') }}</h2>
        <p class="text-textsemibright text-lg mb-8">
          {{ $t('Perfekte Verarbeitung, langlebig und extrem stabil – in nur einer Minute aufgebaut!') }}
        </p>

        <div
            class="max-w-lg mx-auto bg-tertiary-200 rounded-lg shadow-lg p-8 flex flex-col items-center justify-center">
          <h3 class="ont-bold text-primary-500 mb-4 gloria-hallelujah-regular text-4xl">POCKETLEDGE</h3>
          <p class="text-4xl font-extrabold text-textdark ">280 €</p>
          <p class="text-sm mb-6 text-textdark">{{ $t('(inkl. gesetzlicher MwSt)') }}</p>
          <p class="text-textdark mb-6">{{ $t('Handgefertigt in Österreich – sofort einsatzbereit!') }}</p>

          <ul class="text-textdark text-left space-y-3 mb-6">
            <li class="flex items-center">
              <CheckBadgeIcon class="w-6 text-primary-500"></CheckBadgeIcon>
              <span class="ml-2">{{ $t('Hochwertige Handarbeit – Made in Austria') }} 🇦🇹</span>
            </li>
            <li class="flex items-center">
              <CheckBadgeIcon class="w-6 text-primary-500"></CheckBadgeIcon>
              <span class="ml-2">{{ $t('Modulares Design – passt in jede Eurobox (60x40x30)') }}</span>
            </li>
            <li class="flex items-center">
              <CheckBadgeIcon class="w-6 text-primary-500"></CheckBadgeIcon>
              <span class="ml-2">{{ $t('Sekundenschneller Aufbau – in 1 Minute bereit') }}</span>
            </li>
            <li class="flex items-center">
              <CheckBadgeIcon class="w-6 text-primary-500"></CheckBadgeIcon>
              <span class="ml-2">{{ $t('Stabile Metallkonstruktion – kein Wackeln, kein Verrutschen') }}</span>
            </li>
          </ul>

          <!-- Order Button -->
          <div @click="showOrderModalFunc"
               class="gradient-button custom-color from-primarycontrast-500 to-primarycontrast-600">
            <shopping-cart-icon class="w-6"></shopping-cart-icon>
            {{ $t('Jetzt bestellen') }}
          </div>
        </div>

        <!-- Customization Option -->
        <div class="mt-8 flex flex-col items-center justify-center gap-6">
          <h3 class="text-xl font-bold text-textbright mb-2">{{ $t('Mach sie zu deiner eigenen Ledge!') }}</h3>
          <p class="text-textsemibright text-lg max-w-2xl mx-auto">
            {{ $t('Du willst eine spezielle Farbe, eine andere Größe oder eine individuelle Höhe? Kein Problem! Wir fertigen die PocketLedge genau nach deinen Wünschen an.') }}
          </p>
          <a @click="showContactModal=true" class="gradient-button gradient-button-outline">
            {{ $t('Jetzt individuelle Anfrage senden') }}
          </a>
        </div>
      </section>
    </div>


    <div class="bg-tertiary-200">
      <section id="faq" class="container mx-auto px-4 py-16 max-w-screen-xl">
        <h2 class="text-center text-primary-500 text-2xl font-bold mb-8">{{ $t('Häufig gestellte Fragen (FAQ)') }}</h2>

        <div class="max-w-2xl mx-auto space-y-6">

          <div class="bg-white rounded-lg shadow p-6">
            <h3 class="font-bold text-primary-500">{{ $t('Wie lange dauert der Aufbau wirklich?') }}</h3>
            <p class="text-textdark mt-2">
              {{ $t('Der Aufbau dauert tatsächlich nur 1 Minute! Dank unseres cleveren Designs kannst du PocketLedge blitzschnell einsatzbereit machen.') }}
              <br><br><span class="flex items-center gap-2">{{ $t('Der Beweis? Schau dir hier unser Video an') }} <div class="outline-button dark w-fit" @click="showModal=true"><PlayPauseIcon class="w-6"></PlayPauseIcon></div></span> </p>
          </div>

          <div class="bg-white rounded-lg shadow p-6">
            <h3 class="font-bold text-primary-500">{{ $t('Wie stabil ist PocketLedge?') }}</h3>
            <p class="text-textdark mt-2">
              {{ $t('PocketLedge besteht aus hochwertigem Stahl und dank der rutschfesten Füße gibt es kein Wackeln. Wenn doch mal was kaputt geht, einfach einschicken und wir reparieren entweder auf Gewährleistung oder gegen eine kleine Gebühr.') }}</p>
          </div>

          <div class="bg-white rounded-lg shadow p-6">
            <h3 class="font-bold text-primary-500">{{ $t('Passt PocketLedge wirklich in eine Eurobox?') }}</h3>
            <p class="text-textdark mt-2">
              {{ $t('Ja! Das Design ist so optimiert, dass PocketLedge perfekt in eine Eurobox (60x40x30 cm) passt.') }}
              <br><br><span class="flex items-center gap-2">{{ $t('Wir bieten aber auch anderer Formate an, sprich uns dazu einfach an') }} <div class="outline-button dark w-fit" @click="showContactModal=true"><chat-bubble-oval-left-ellipsis-icon class="w-6"></chat-bubble-oval-left-ellipsis-icon></div></span> </p>
          </div>

        </div>
      </section>
    </div>

    <div class="bg-primarycontrast-500 w-full">
      <section class="container mx-auto px-4 py-12 max-w-screen-xl text-center">
        <h2 class="text-3xl font-extrabold text-textbright mb-12">
          {{ $t('Die Vorteile') }}</h2>
        <div class="grid md:grid-cols-3 gap-8">
          <div class="bg-tertiary-200 rounded-lg shadow p-6">
            <h2 class="text-xl font-bold mb-2 text-primary-500">{{ $t('Modulares Design') }}</h2>
            <p>
              {{ $t('Überall dabei, passt in jeden Kofferraum und sogar auf manche Fahrräder.') }}
            </p>
          </div>
          <div class="bg-tertiary-200 rounded-lg shadow p-6">
            <h2 class="text-xl font-bold mb-2 text-primary-500">{{ $t('Sekundenschneller Aufbau') }}</h2>
            <p>
              {{ $t('Kein Werkzeug, kein Gefummel, einfach ausklappen und in 1 Minute skaten.') }}
            </p>
          </div>
          <div class="bg-tertiary-200 rounded-lg shadow p-6">
            <h2 class="text-xl font-bold mb-2 text-primary-500">{{ $t('Stabile Metallkonstruktion') }}</h2>
            <p>
              {{ $t('Die solide Bauweise aus Stahl sorgt für Stabilität, kein Wackeln, kein Verrutschen.') }}
            </p>
          </div>
        </div>
      </section>
    </div>

    <div class="bg-tertiary-200">
      <section id="testimonials" class="container mx-auto px-4 py-16 max-w-screen-xl">
        <h2 class="text-center text-primary-500 text-2xl font-bold mb-8">{{ $t('Unsere Kunden in Action') }}</h2>
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
          <h3 class="text-lg font-bold text-primary-500 mb-2">{{ $t('Willst du auch in unserer Galerie erscheinen?') }}</h3>
          <div @click="showContactModal=true"
               class="gradient-button custom-color from-primarycontrast-500 to-primarycontrast-600">
            <photo-icon class="w-6"></photo-icon>
            {{ $t('Schick uns dein Bild!') }}
          </div>
        </div>
      </section>
    </div>


    <!-- Footer (dezent platzierte Links) -->
    <footer class="bg-primarycontrast-500 text-textbright">
      <div class="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center max-w-screen-xl">
        <p class="text-sm">&copy; 2025 PocketLedge. {{ $t('Alle Rechte vorbehalten.') }}</p>
        <div class="space-x-4 text-sm">
          <a href="#ueber-uns" class="hover:text-primary-500">{{ $t('Über uns') }}</a>
          <a href="#impressum" class="hover:text-primary-500">{{ $t('Impressum') }}</a>
          <a href="#datenschutz" class="hover:text-primary-500">{{ $t('Datenschutz') }}</a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
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
import {useI18n} from "vue-i18n";
import CartForm from "../components/CartForm.vue";
import OrderForm  from "../components/OrderForm.vue";
import useCartStore from "../store/cartStore.ts";
//@ts-ignore
import VideoBackground from 'vue-responsive-video-background-player'

// Initialisiere Swiper Plugins
SwiperCore.use([Pagination, Autoplay]);

const {cartItem} = useCartStore();

const showModal = ref(false);
const showContactModal = ref(false);
const showOrderModal = ref(false);
const showCartModal = ref(false);
const isScrolled = ref(false);
const showHeader = ref(true);
const lastScrollPosition = ref(0);
const scrollOffset = 0;

const showOrderModalFunc=()=>{
  if(cartItem.value){
    showCartModal.value = true;
  }else{
    showOrderModal.value = true;
  }
}

const closeModals = () => {
  showModal.value = false;
  showContactModal.value = false;
  showOrderModal.value = false;
  showCartModal.value = false;
}

// Use vue-i18n for localization
const { locale } = useI18n();

const cartFromOrderForm = ()=>{
  closeModals();
  showCartModal.value = true;
}

const orderFromCart = () =>{
  closeModals();
  showOrderModal.value = true;
}

// Function to toggle language between English ('en') and German ('de')
const toggleLanguage = () => {
  locale.value = locale.value === 'en' ? 'de' : 'en';
};

const scrollToSection = (id: string) => {
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

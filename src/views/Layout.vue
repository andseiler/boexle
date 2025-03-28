<template>
  <div class="bg-tertiary-200 min-h-screen flex flex-col" id="home">
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
      <div class="container mx-auto px-4 py-2 flex items-center justify-between max-w-screen-xl">
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

    <router-view></router-view>

    <!-- Footer (dezent platzierte Links) -->
    <footer class="bg-primarycontrast-500 text-textbright mt-auto">
      <div class="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center max-w-screen-xl">
        <p class="text-sm">&copy; 2025 PocketLedge. {{ $t('Alle Rechte vorbehalten.') }}</p>
        <div class="space-x-4 text-sm">
          <a href="/impressum" class="hover:text-primary-500">{{ $t('Impressum') }}</a>
          <a href="/datenschutz" class="hover:text-primary-500">{{ $t('Datenschutz') }}</a>
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
  ShoppingCartIcon,
  CurrencyEuroIcon,
  QuestionMarkCircleIcon,
  ChatBubbleOvalLeftEllipsisIcon
} from '@heroicons/vue/24/outline'
import ModalComponent from "../components/ModalComponent.vue";
import ContactForm from "../components/ContactForm.vue"
import {useI18n} from "vue-i18n";
import CartForm from "../components/CartForm.vue";
import OrderForm  from "../components/OrderForm.vue";
import useCartStore from "../store/cartStore.ts";
//@ts-ignore
import VideoBackground from 'vue-responsive-video-background-player'
import useModalStore from '../store/modalStore';
import { useRouter } from 'vue-router';

// Initialisiere Swiper Plugins
SwiperCore.use([Pagination, Autoplay]);

const {cartItem} = useCartStore();

const { showModal, showContactModal, showOrderModal, showCartModal } = useModalStore();
const isScrolled = ref(false);
const showHeader = ref(true);
const lastScrollPosition = ref(0);
const scrollOffset = 0;

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

const router = useRouter();

const scrollToSection = (id: string) => {
  if (id === 'home' && window.location.pathname !== '/') {
    // Navigate to home route if not already there
    router.push('/');
  } else {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({behavior: "smooth"});

      //@ts-ignore
      history.pushState(null, null, " ");
    }
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

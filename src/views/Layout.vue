<template>
  <div class="bg-tertiary-200 min-h-screen flex flex-col" id="home">
    <ModalComponent :isVisible="showContactModal" @close="closeModals">
      <ContactForm @close="closeModals" :subtitle="customObstacleSubtitle"></ContactForm>
    </ModalComponent>
    <ModalComponent :isVisible="showOrderModal" @close="closeModals">
      <OrderForm @close="closeModals" @order="cartFromOrderForm"></OrderForm>
    </ModalComponent>
    <ModalComponent :isVisible="showCartModal" @close="closeModals">
      <CartForm @order="orderFromCart" @close="closeModals"></CartForm>
    </ModalComponent>
    <ModalComponent :isVisible="showModal" @close="closeModals" :title="$t(currentVideoTitle)" :is-video-mode="true">
      <div class="p-4 flex items-center justify-center bg-black relative">
        <button 
          v-if="currentVideoIndex > 0" 
          @click="showPreviousVideo" 
          class="absolute left-8 bg-primary-500 rounded-full p-3 opacity-70 hover:opacity-100 transition-opacity z-10"
        >
          <svg class="w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <div class="relative pt-[56.25%] w-full max-w-5xl"> <!-- 16:9 aspect ratio -->
          <video
            class="absolute inset-0 w-full h-full"
            controls
            autoplay
            :src="currentVideo">
            {{ $t('Dein Browser unterstützt keine Videos.') }}
          </video>
        </div>
        
        <button 
          v-if="currentVideoIndex < videoData.length - 1" 
          @click="showNextVideo" 
          class="absolute right-8 bg-primary-500 rounded-full p-3 opacity-70 hover:opacity-100 transition-opacity z-10"
        >
          <svg class="w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </ModalComponent>
    <!-- Image Modal -->
    <ModalComponent 
      :is-visible="showImageModal" 
      :title="$t(currentImageTitle)"
      :is-image-mode="true"
      @close="closeImageModal"
    >
      <div class="p-4 flex items-center justify-center bg-black relative">
        <button 
          v-if="currentImageIndex > 0" 
          @click="showPreviousImage" 
          class="absolute left-8 bg-primary-500 rounded-full p-3 opacity-70 hover:opacity-100 transition-opacity z-10"
        >
          <svg class="w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <img           :src="currentImage"
                                :alt="$t(currentImageTitle)"
                                class="max-w-full max-h-[80vh] ">
        </img>
<!--        <img -->

<!--        />-->
        
        <button 
          v-if="currentImageIndex < setupImages.length - 1" 
          @click="showNextImage" 
          class="absolute right-8 bg-primary-500 rounded-full p-3 opacity-70 hover:opacity-100 transition-opacity z-10"
        >
          <svg class="w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </ModalComponent>
    <!-- Header bleibt unverändert -->
    <header class="bg-primarycontrast-500 sticky z-50 transition-all duration-300 shadow-xl"
            :class="{'shadow-xl': isScrolled, '-top-full': !showHeader, 'top-0': showHeader}">
      <div class="container mx-auto px-4 py-2 flex items-center justify-between max-w-screen-xl">
        <div class="text-4xl sm:text-3xl font-bold text-primary-500 flex flex-col justify-center cursor-pointer"
             @click.prevent="scrollToSection('home')">
          <!--          <img class="h-20" src="/images/pocketledge-logo-v2-green.svg" alt="">-->
          <span class="gloria-hallelujah-regular py-4 inline lg:hidden">PL</span>
          <span class="gloria-hallelujah-regular py-4 hidden lg:inline">POCKETLEDGE</span>
        </div>
        <nav class="flex gap-2">
          <a @click.prevent="scrollToSection('price')"
             class="outline-button ">
            <currency-euro-icon class="w-6"></currency-euro-icon>
            <span class="hidden sm:inline">{{ $t('Preise') }}</span>
          </a>
          <a @click="openImageModal('/images/final/skaten-hori.jpeg', '')"
             class="outline-button">
            <photo-icon class="w-6"></photo-icon>
            <span class="hidden sm:inline">{{ $t('Galerie') }}</span></a>
          <div class=" hidden xs:inline"><a @click="showContactModal = true" class="outline-button">
            <chat-bubble-oval-left-ellipsis-icon class="w-6"></chat-bubble-oval-left-ellipsis-icon>
            <span class="hidden sm:inline">{{ $t('Kontakt') }}</span></a></div>
          <a href="https://www.instagram.com/pocket_ledge/" target="_blank" rel="noopener noreferrer"
                  class="outline-button group">
            <div class="relative w-6 h-6 flex items-center justify-center">
              <img src="/images/instagram-icon-white.svg" alt="Instagram" class="w-5.5 h-5.5 absolute transition-opacity duration-0 group-hover:opacity-0" />
              <img src="/images/instagram-icon-green.svg" alt="Instagram" class="w-5.5 h-5.5 absolute transition-opacity duration-0 opacity-0 group-hover:opacity-100" />
            </div>
            <span class="hidden sm:inline">Instagram</span>
          </a>
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
          <a href="/agb" class="hover:text-primary-500">{{ $t('AGB') }}</a>
        </div>
      </div>
    </footer>
    
    <!-- Live Chat Component -->
<!--    <TelegramLiveChat />-->
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
  PhotoIcon,
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
//@ts-ignore
import VLazyImage from "v-lazy-image";
// import TelegramLiveChat from "../components/TelegramLiveChat.vue";

// Initialisiere Swiper Plugins
SwiperCore.use([Pagination, Autoplay]);

const {cartItem} = useCartStore();

const { showModal, showContactModal, showOrderModal, showCartModal , customObstacleSubtitle} = useModalStore();
const isScrolled = ref(false);
const showHeader = ref(true);
const lastScrollPosition = ref(0);
const scrollOffset = 0;

// Video modal state
const currentVideoIndex = ref(0);
const currentVideo = ref('/images/aufbau.mp4');
const currentVideoTitle = ref('Aufbau');

// Video data array
const videoData = [
  {
    src: '/images/aufbau.mp4',
    title: 'Aufbau'
  },
  {
    src: '/images/aufbau2.mp4',
    title: 'Aufbau im Detail'
  },
  {
    src: '/images/abbau.mp4',
    title: 'Abbau'
  }
];

const showNextVideo = () => {
  if (currentVideoIndex.value < videoData.length - 1) {
    currentVideoIndex.value++;
    updateCurrentVideo();
  }
};

const showPreviousVideo = () => {
  if (currentVideoIndex.value > 0) {
    currentVideoIndex.value--;
    updateCurrentVideo();
  }
};

const updateCurrentVideo = () => {
  const video = videoData[currentVideoIndex.value];
  currentVideo.value = video.src;
  currentVideoTitle.value = video.title;
};

// Update closeModals to remove keyboard event listener references
const closeModals = () => {
  showModal.value = false;
  showContactModal.value = false;
  showOrderModal.value = false;
  showCartModal.value = false;
};

// Update openVideoModal to remove keyboard event listener references
const openVideoModal = (videoIndex = 0) => {
  currentVideoIndex.value = videoIndex;
  updateCurrentVideo();
  showModal.value = true;
};

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
  sendVisitorInfo("Scrolled to: " + id);
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

const sendVisitorInfo = async (title: string) => {
  try {
    const userAgent = navigator.userAgent;
    const language = navigator.language;
    const screenSize = `${window.screen.width}x${window.screen.height}`;
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const referrer = document.referrer;

    const visitorInfo = `🔍 ${title}:\n` +
        `📱 Device: ${userAgent}\n` +
        `🌐 Language: ${language}\n` +
        `📺 Screen: ${screenSize}\n` +
        `🕒 Timezone: ${timeZone}\n` +
        `↩️ Referrer: ${referrer || 'Direct visit'}`;

    await fetch('/.netlify/functions/sendTelegramMessage', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ message: visitorInfo })
    });
  } catch (error) {
    console.error('Failed to send visitor info:', error);
  }
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
  sendVisitorInfo('New Visitor');
});

onUnmounted(() => window.removeEventListener("scroll", handleScroll));

// Image Modal State
const showImageModal = ref(false);
const currentImage = ref('');
const currentImageTitle = ref('');
const currentImageIndex = ref(0);
const setupImages = [
  {
    src: '/images/final/skaten-hori.jpeg',
    title: ''
  },
  {
    src: '/images/final/verriegeln-hori.jpeg',
    title: ''
  },
  {
    src: '/images/final/transport-hori.jpeg',
    title: ''
  },
  {
    src: '/images/final/scharnier-zu.jpeg',
    title: ''
  },
  {
    src: '/images/final/scharnier-w.jpeg',
    title: ''
  },
  {
    src: '/images/final/stange-loch.jpeg',
    title: ''
  },
  {
    src: '/images/final/stange-gewinde.jpeg',
    title: ''
  },
  {
    src: '/images/final/scharnier-beide-offen.jpeg',
    title: ''
  }
];

function openImageModal(imageSrc: string, title: string) {
  const index = setupImages.findIndex(img => img.src === imageSrc);
  if (index !== -1) {
    currentImageIndex.value = index;
    currentImage.value = imageSrc;
    currentImageTitle.value = title || '';
    showImageModal.value = true;
  }
}

function showNextImage() {
  if (currentImageIndex.value < setupImages.length - 1) {
    currentImageIndex.value++;
    const image = setupImages[currentImageIndex.value];
    currentImage.value = image.src;
    currentImageTitle.value = image.title;
  }
}

function showPreviousImage() {
  if (currentImageIndex.value > 0) {
    currentImageIndex.value--;
    const image = setupImages[currentImageIndex.value];
    currentImage.value = image.src;
    currentImageTitle.value = image.title;
  }
}

function closeImageModal() {
  showImageModal.value = false;
}

// Explicitly expose the openVideoModal function for use in other components
defineExpose({
  openVideoModal
});
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

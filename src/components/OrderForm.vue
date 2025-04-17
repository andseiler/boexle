<!-- CartComponent.vue -->
<template>
  <div class="cart-component mx-auto w-full p-4 bg-primarycontrast-500 pb-8">
    <h1 class="contact-header text-3xl font-extrabold text-textbright mb-8 text-center">
      {{ $t('Jetzt bestellen') }}
    </h1>
    <div class="contact-card max-w-lg mx-auto bg-tertiary-200 rounded-lg shadow-lg p-8 flex flex-col items-center">

      <!-- Hier einen schicken Image-Slider mit Swiper -->
      <div class="w-full mb-6 flex shadow relative">
        <button
            @click="slidePrev"
            class="absolute left-1 top-1/2 -translate-y-1/2 bg-primary-500 rounded-full p-3 opacity-70 hover:opacity-100 transition-opacity z-10"
        >
          <svg class="w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <Swiper
            :auto-height="true"
            :slides-per-view="1"
            loop
            :pagination="{ clickable: true }"
            @swiper="onSwiper"
            class="w-full aspect-[4/3]"
        >
          <SwiperSlide v-for="(img, index) in images" :key="index">
            <img :src="img" class=" w-full" />
          </SwiperSlide>
        </Swiper>
        <button
            @click="slideNext"
            class="absolute right-1 top-1/2 -translate-y-1/2 bg-primary-500 rounded-full p-3 opacity-70 hover:opacity-100 transition-opacity z-10"
        >
          <svg class="w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      <!-- Produktinformationen -->
      <h3 class="font-bold text-primary-500 mb-2 gloria-hallelujah-regular text-4xl">POCKETLEDGE</h3>
      <p class="text-sm mb-4 text-semibright text-center">{{$t('Transportgröße 60x40x30 cm - Aufgebaute Größe 165x36x25 cm')}}</p>
      <p class="text-4xl text-textdark mb-2 flex flex-col justify-center items-center">
        <span class="relative">{{ formatCurrency(price) }} <span class="absolute left-0 right-0 top-1/2 border-b border-4"></span></span>
        <span class="text-primary-500 font-extrabold">{{ formatCurrency(discountedPrice) }}</span>
      </p>
      <p class="text-sm text-textdark mb-4">{{ $t('(inkl. gesetzlicher MwSt)')}} {{ $t('+ Versand') }}</p>
<!--      <p class="text-base font-bold text-textdark mb-6 text-center">{{ $t('Bestelle jetzt, nur noch') }} {{ totalAvailable - preOrderCount }} {{ $t('Stück zum reduzierten Preis verfügbar') }}</p>-->
      <p class="text-base font-bold text-textdark mb-6 text-center">{{ $t('Bestelle jetzt,') }} <span class="text-primary-500">{{ $t('nur noch') }} {{ totalAvailable - preOrderCount }} {{ $t('Stück') }}</span>
        {{ $t('zum reduzierten Preis verfügbar') }}</p>

      <!-- Hier eine schöne Farbauswahl, schwarz ist default -->
      <div class="form-group w-full mb-4">
        <p class="form-label">{{ $t('Farbe:') }}</p>
        <div class="flex flex-wrap gap-4">
          <label v-for="(item, index) in colors" :key="index" class="flex items-center">
            <div class="cursor-pointer flex gap-1 py-1 px-2 rounded-xl h-10 w-10 hover:scale-105 shadow ease-in-out duration-300"
                 @click="selectedColor = item"
                 :class="[item.bgClass]">
              <CheckIcon class="font-bold text-textbright" v-if="selectedColor.val == item.val"></CheckIcon>
            </div>
          </label>
        </div>
      </div>

      <!-- Hier die Eingabe der Menge -->
      <div class="form-group w-full mb-4">
        <label for="quantity" class="form-label">{{ $t('Menge:') }}</label>
        <QuantityInput v-model="quantity"></QuantityInput>
      </div>

      <!-- Hier der Gesamtpreis -->
      <div class="form-group w-full mb-4">
        <p class="form-label">{{ $t('Gesamtpreis:') }}</p>
        <p class="text-textdark text-2xl font-extrabold">{{ formatCurrency(total) }}</p>
      </div>

      <div class="w-full flex flex-col gap-4 pt-4 border-t">
        <p class="text-md text-textdark font-bold">
          {{ $t('Deine Ledge wird innerhalb einer Woche nach Zahlungseingang versendet.') }}
        </p>
      </div>

      <!-- Hier ein Button "in den Warenkorb" -->
      <div class="w-full mt-6 flex flex-col gap-4">
        <button @click="addToCart" class="gradient-button custom-color from-primarycontrast-500 to-primarycontrast-600 flex-1 py-3 text-lg flex items-center justify-center">
          <ShoppingCartIcon class="w-6 h-6 mr-2" />
          {{ $t('In den Warenkorb') }}
        </button>
        <!-- Hier ein Button "Direkt bezahlen" -->
        <button @click="directPay" class="gradient-button custom-color from-primary-500 to-primary-600 flex-1 py-3 text-lg flex items-center justify-center">
          <CreditCardIcon class="w-6 h-6 mr-2" />
          {{ $t('Direkt bestellen') }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref, computed, onMounted} from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
//@ts-ignore
import 'swiper/css';
//@ts-ignore
import 'swiper/css/pagination';
import { ShoppingCartIcon, CreditCardIcon} from '@heroicons/vue/24/outline';
import { CheckIcon} from '@heroicons/vue/24/solid';
import useCartStore from "../store/cartStore.js";
import type {CartItem} from "../store/cartStore.js";
import QuantityInput from "./QuantityInput.vue";
import {i18n} from "../main.ts";
import usePreOrderStore from '../store/usePreOrderStore';
//@ts-ignore
import VLazyImage from "v-lazy-image";

const cartStore = useCartStore();
const { preOrderCount, totalAvailable, rebate, price } = usePreOrderStore();

// Calculate discounted price
const discountedPrice = computed(() => price.value - rebate.value); // Rabattierte Preis
const quantity = ref(1);
const total = computed(() => discountedPrice.value * quantity.value);

const emit = defineEmits(['close', 'order'])

// Bilder für den Slider
const images = ref([
  '/images/final/skaten-43.jpeg',
  '/images/final/transport-43.jpeg',
  '/images/final/verriegeln-43.jpeg',
  '/images/final/scharnier-zu.jpeg',
  '/images/final/scharnier-w.jpeg',
  '/images/final/stange-loch.jpeg',
  '/images/final/stange-gewinde.jpeg',
  '/images/final/scharnier-beide-offen.jpeg'
]);

// Farbauswahl
const colors = computed(()=>[
  {val:'black', name: i18n.global.t('black'), bgClass: 'bg-black', textClass: 'text-black'},
  {val:'darkblue', name: i18n.global.t('darkblue'), bgClass: 'bg-boxblue', textClass: 'text-boxblue'},
  {val:'green', name: i18n.global.t('green'), bgClass: 'bg-boxgreen', textClass: 'text-boxgreen'},
  {val:'red', name: i18n.global.t('red'), bgClass: 'bg-boxred', textClass: 'text-boxred'},
  {val:'yellow', name: i18n.global.t('yellow'), bgClass: 'bg-boxyellow', textClass: 'text-boxyellow'}
]);
const selectedColor = ref({val:'black', name: i18n.global.t('black'), bgClass: 'bg-black', textClass: 'text-black'});

// Validierung der Menge: Nur ganze Zahlen > 0
const validate = ref(false);
const validQuantity = computed(() => Number.isInteger(quantity.value) && quantity.value > 0);

onMounted(()=>{
  sendVisitorInfo("OrderForm: ");
})

// Formatierung der Währung
const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(amount);
};

// Swiper-Instanz
const swiperInstance = ref(null);
const onSwiper = (swiper: any) => {
  swiperInstance.value = swiper;
};
const slidePrev = () => {
  //@ts-ignore
  if (swiperInstance.value) swiperInstance.value.slidePrev();
};
const slideNext = () => {
  //@ts-ignore
  if (swiperInstance.value) swiperInstance.value.slideNext();
};

// Warenkorb-Funktionalität: Ein einfaches Cart-Objekt wird in die SessionStorage geschrieben.
const addToCart = () => {
  if (!validQuantity.value) {
    validate.value = true;
    return;
  }
  const cartItem: CartItem = {
    product: 'POCKETLEDGE',
    price: discountedPrice.value,
    quantity: quantity.value,
    color: selectedColor.value,
    total: total.value
  };
  cartStore.set(cartItem);
  emit('close')
};

// Direkt bezahlen: Simuliere die Weiterleitung zur Zahlungsabwicklung.
const directPay = () => {
  if (!validQuantity.value) {
    validate.value = true;
    return;
  }
  addToCart();
  emit('order')
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
</script>

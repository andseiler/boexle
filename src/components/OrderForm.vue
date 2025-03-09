<!-- CartComponent.vue -->
<template>
  <div class="cart-component container mx-auto p-4 bg-primarycontrast-500 pb-8">
    <h1 class="contact-header text-3xl font-extrabold text-textbright mb-8 text-center">
      Jetzt bestellen
    </h1>
    <div class="contact-card max-w-lg mx-auto bg-tertiary-200 rounded-lg shadow-lg p-8 flex flex-col items-center">

      <!-- Hier einen schicken Image-Slider mit Swiper -->
      <div class="w-full mb-6 flex shadow">
        <button
            @click="slidePrev"
            class="bg-white rounded-l-lg hover:bg-gray-100"
        >
          <ChevronLeftIcon class="w-6 h-6 text-primary-500" />
        </button>
        <Swiper
            :slides-per-view="1"
            loop
            :pagination="{ clickable: true }"
            @swiper="onSwiper"
            class="w-full flex-1"
        >
          <SwiperSlide v-for="(img, index) in images" :key="index">
            <img :src="img" alt="Produktbild" class="object-cover w-full" />
          </SwiperSlide>
        </Swiper>
        <button
            @click="slideNext"
            class="bg-white rounded-r-lg hover:bg-gray-100"
        >
          <ChevronRightIcon class="w-6 h-6 text-primary-500" />
        </button>
      </div>

      <!-- Produktinformationen -->
      <h3 class="font-bold text-primary-500 mb-4 gloria-hallelujah-regular text-4xl">POCKETLEDGE</h3>
      <p class="text-4xl font-extrabold text-textdark mb-2">{{ formatCurrency(price) }}</p>
      <p class="text-sm text-textdark mb-6">(inkl. gesetzlicher MwSt)</p>

      <!-- Hier eine schöne Farbauswahl, schwarz ist default -->
      <div class="form-group w-full mb-4">
        <p class="text-primary-500 font-bold mb-1">Farbe:</p>
        <div class="flex gap-4">
          <label v-for="(color, index) in colors" :key="index" class="flex items-center">
            <input type="radio" :value="color" v-model="selectedColor" class="custom-radio mr-2" />
            <span>{{ color }}</span>
          </label>
        </div>
      </div>

      <!-- Hier die Eingabe der Menge -->
      <div class="form-group w-full mb-4">
        <label for="quantity" class="form-label block text-primary-500 font-bold mb-1">Menge:</label>
        <input
            id="quantity"
            type="number"
            min="1"
            step="1"
            v-model.number="quantity"
            @blur="validate = true"
            class="form-input w-full"
            placeholder="Gib die gewünschte Menge ein"
        />
        <span v-if="validate && !validQuantity" class="text-red-500 text-sm pl-1">
          Bitte eine gültige Menge eingeben (ganze Zahl > 0)
        </span>
      </div>

      <!-- Hier der Gesamtpreis -->
      <div class="form-group w-full mb-4">
        <p class="text-primary-500 font-bold">Gesamtpreis:</p>
        <p class="text-textdark text-2xl font-extrabold">{{ formatCurrency(total) }}</p>
      </div>

      <div class="w-full flex flex-col gap-4 mt-1">
        <p class="text-sm text-textdark text-center">
          Unsere Produkte werden erst nach Eingang Deiner Bestellung gefertigt. Aufgrund der aktuellen hohen Nachfrage kann der Versand bis zu zwei Wochen dauern.
        </p>
      </div>

      <!-- Hier ein Button "in den Warenkorb" -->
      <div class="w-full mt-6 flex flex-col gap-4">
        <button @click="addToCart" class="gradient-button custom-color from-primarycontrast-500 to-primarycontrast-600 flex-1 py-3 text-lg flex items-center justify-center">
          <ShoppingCartIcon class="w-6 h-6 mr-2" />
          In den Warenkorb
        </button>
        <!-- Hier ein Button "Direkt bezahlen" -->
        <button @click="directPay" class="gradient-button custom-color from-primary-500 to-primary-600 flex-1 py-3 text-lg flex items-center justify-center">
          <CreditCardIcon class="w-6 h-6 mr-2" />
          Direkt bezahlen
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import { ChevronLeftIcon, ChevronRightIcon, ShoppingCartIcon, CreditCardIcon } from '@heroicons/vue/24/outline';

// Produktdaten
const price = 280; // Einzelpreis in €
const quantity = ref(1);
const total = computed(() => price * quantity.value);

// Bilder für den Slider
const images = ref([
  '/images/box-zusammen.webp',
  '/images/box-aufbau.webp',
  '/images/box-komplett.webp'
]);

// Farbauswahl
const colors = ref(['Schwarz', 'Weiß', 'Rot', 'Blau']);
const selectedColor = ref('Schwarz');

// Validierung der Menge: Nur ganze Zahlen > 0
const validate = ref(false);
const validQuantity = computed(() => Number.isInteger(quantity.value) && quantity.value > 0);

// Formatierung der Währung
const formatCurrency = (amount) => {
  return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(amount);
};

// Swiper-Instanz
const swiperInstance = ref(null);
const onSwiper = (swiper) => {
  swiperInstance.value = swiper;
};
const slidePrev = () => {
  if (swiperInstance.value) swiperInstance.value.slidePrev();
};
const slideNext = () => {
  if (swiperInstance.value) swiperInstance.value.slideNext();
};

// Warenkorb-Funktionalität: Ein einfaches Cart-Objekt wird in die SessionStorage geschrieben.
const addToCart = () => {
  if (!validQuantity.value) {
    validate.value = true;
    return;
  }
  const cartItem = {
    product: 'POCKETLEDGE',
    price: price,
    quantity: quantity.value,
    color: selectedColor.value,
    total: total.value
  };
  sessionStorage.setItem('cartItem', JSON.stringify(cartItem));
};

// Direkt bezahlen: Simuliere die Weiterleitung zur Zahlungsabwicklung.
const directPay = () => {
  if (!validQuantity.value) {
    validate.value = true;
    return;
  }
  addToCart();
  alert('Weiterleitung zur Zahlungsabwicklung...');
  // Hier könntest Du beispielsweise mit Router.push() zur Zahlungsseite navigieren.
};
</script>


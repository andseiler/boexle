<template>
  <div class="order-checkout-page mx-auto w-full p-4 bg-primarycontrast-500 pb-8">
    <!-- Falls der Warenkorb leer ist -->
    <div v-if="!cartItem">
      <h1 class="contact-header">
        {{ $t('Dein Warenkorb') }}
      </h1>
      <div class="contact-card">
        <p class="text-2xl text-center mb-4">{{ $t('Dein Warenkorb ist leer') }}</p>
        <div class="text-center">
          <button @click="goToShop"
                  class="gradient-button w-full py-3 text-lg">
            {{ $t('Jetzt bestellen') }}
          </button>
        </div>
      </div>
    </div>

    <!-- Falls der Warenkorb einen Artikel enthält -->
    <div v-else>
      <h1 class="contact-header">
        {{ $t('Dein Warenkorb') }}
      </h1>
      <div class="contact-card">
        <div class="flex xs:hidden justify-between w-full mb-4 ">
          <div class="flex justify-end items-end">
            <QuantityInput :model-value="quantity" @update:model-value="updateQuantity"></QuantityInput>
          </div>
          <div class="w-10 h-10 items-center justify-center outline-button dark font-bold" @click="clearCart">
            <TrashIcon class="font-bold"></TrashIcon>
          </div>
        </div>
        <div class="grid grid-cols-3 gap-4 w-full mb-6">
          <div class="h-auto row-span-2">
            <img src="/images/final/skaten-43.jpeg"
                          alt=""></img>
          </div>
          <div class="flex flex-col gloria-hallelujah-regular" :class="[cartItem.color.textClass]">
            <div class=" text-lg xs:text-lg sm:text-2xl text-left">
              POCKETLEDGE
            </div>
            <div>
              in {{ $t(cartItem.color.val) }}
            </div>
          </div>
          <div class="block xs:hidden"></div>
          <div class="hidden xs:flex justify-end">
            <div class=" w-10 h-10 items-center justify-center outline-button dark font-bold" @click="clearCart">
              <TrashIcon class="font-bold"></TrashIcon>
            </div>
          </div>
          <div class="font-bold flex flex-col items-start justify-end">
            <span>{{ formatCurrency(subtotal) }}</span>
            <span class="font-normal text-xs">{{ $t('Davon MwSt: ') }}{{ formatCurrency(vatAmount) }}</span>
          </div>
          <div class="hidden xs:flex justify-end items-end">
            <QuantityInput :model-value="quantity" @update:model-value="updateQuantity"></QuantityInput>
          </div>
        </div>
        <!-- Kundeninformationen -->
        <div class="form-group w-full mb-4">
          <label for="name" class="form-label block text-primary-500 font-bold mb-1">{{ $t('Name:') }}</label>
          <input
              id="name"
              type="text"
              v-model="customerName"
              :class="['form-input', { error: validate && !customerName }]"
              :placeholder="$t('Dein Name')"
          />
          <span v-if="validate && !customerName" class="text-red-500 text-sm pl-1">{{
              $t('Name ist ein Pflichtfeld')
            }}</span>
        </div>
        <div class="form-group w-full mb-4">
          <label for="email" class="form-label block text-primary-500 font-bold mb-1">{{ $t('E-Mail:') }}</label>
          <input
              id="email"
              type="email"
              v-model="customerEmail"
              :class="['form-input', { error: validate && !validEmail }]"
              :placeholder="$t('Deine E-Mail')"
          />
          <span v-if="validate && !validEmail"
                class="text-red-500 text-sm pl-1">{{ $t('Bitte eine gültige E-Mail-Adresse eingeben') }}</span>
        </div>
        <div class="form-group w-full mb-4">
          <label for="address" class="form-label block text-primary-500 font-bold mb-1">{{ $t('Adresse:') }}</label>
          <textarea
              id="address"
              v-model="customerAddress"
              :class="['form-input']"
              rows="3"
              :placeholder="$t('Deine Adresse (optional)')"
          ></textarea>
        </div>
        <div class="form-group w-full mb-4">
          <label for="country" class="form-label">{{ $t('Land:') }}</label>
          <select id="country" v-model="customerCountry" class="form-input w-full text-textdark">
            <option value="at">{{ $t('Österreich') }}</option>
            <option value="de">{{ $t('Deutschland') }}</option>
            <option value="other">{{ $t('Andere EU Länder') }}</option>
          </select>
        </div>

        <!-- Versandart Auswahl -->
        <div class="form-group w-full mb-4">
          <p class="form-label">{{ $t('Versandart:') }}</p>
          <div class="flex gap-4">
            <label class="flex items-center">
              <input type="radio" value="delivery" v-model="deliveryMethod" class="custom-radio mr-2"/>
              <span>{{ $t('Lieferung') }}</span>
            </label>
            <label class="flex items-center">
              <input type="radio" value="pickup" v-model="deliveryMethod" class="custom-radio mr-2"/>
              <span>{{ $t('Selbstabholung in Innsbruck') }}</span>
            </label>
          </div>
        </div>

        <!-- Bestellinformationen -->
        <div class="form-group w-full mb-4" v-if="deliveryMethod === 'delivery'">
          <p class="form-label">{{ $t('Versandkosten:') }}</p>
          <p class="text-textdark text-xl">{{ formatCurrency(shippingCost) }}</p>
<!--          <p class="text-textdark text-xl">{{ $t('Keine Versandkosten innerhalb der EU') }}</p>-->
        </div>
        <div class="form-group w-full mb-4">
          <p class="form-label">{{ $t('Gesamtsumme:') }}</p>
          <p class="text-textdark text-2xl font-extrabold">{{ formatCurrency(total) }}</p>
        </div>

        <!-- Kommentarfeld -->
        <div class="form-group w-full mb-4">
          <label for="comment" class="form-label">{{ $t('Kommentar:') }}</label>
          <textarea
              id="comment"
              v-model="customerComment"
              class="form-input w-full"
              rows="3"
              :placeholder="$t('Optionaler Kommentar')"
          ></textarea>
        </div>

        <!-- Hinweis zur Bestätigung -->
        <div class="w-full flex flex-col gap-4 mt-1">
          <p class="text-md text-textdark font-bold">
            {{ $t('Deine Ledge wird innerhalb einer Woche nach Zahlungseingang versendet.') }}
          </p>
        </div>

        <!-- Bestellbutton & Fehleranzeige -->
        <div class="w-full mt-6 flex flex-col gap-2">
          <button @click="checkout" class="gradient-button w-full py-3 text-lg items-center">
            <CreditCardIcon class="w-6 h-6 mr-2"/>
            {{ $t('Bestellung absenden') }}
          </button>
          <p v-if="responseMessage" class="font-bold mt-2"
             :class="{'text-red-500': isError, 'text-primary-500': !isError}">
            {{ responseMessage }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref, computed} from 'vue';
import useCartStore from "../store/cartStore.js";
import {CreditCardIcon, TrashIcon} from "@heroicons/vue/24/outline";
import QuantityInput from "./QuantityInput.vue";
import {i18n} from "../main.ts";
import usePreOrderStore from "../store/usePreOrderStore";

const emit = defineEmits(['order', 'close'])

// Reaktive Variable für den Warenkorb (aus sessionStorage)
const cartStore = useCartStore();
const cartItem = cartStore.cartItem;
const clearCart = () => {
  cartStore.reset();
  emit('close')
}
const quantity = computed(() => cartStore.cartItem.value.quantity)
const updateQuantity = (newQuantity: number) => {
  if (newQuantity <= 0) {
    return;
  }

  cartStore.cartItem.value.quantity = newQuantity;
  cartStore.set(cartStore.cartItem.value);
}

// Get price from the store
const {rebate, price} = usePreOrderStore();

// Ensure rebate is treated as a number
const discountedPrice = price.value - Number(rebate.value);
console.log('Rebate:', rebate);
console.log('Discounted Price:', discountedPrice);
const subtotal = computed(() => discountedPrice * quantity.value);

const vatRate = 0.2;
const netSubtotal = computed(() => subtotal.value / (1 + vatRate));
const vatAmount = computed(() => subtotal.value - netSubtotal.value);

const deliveryMethod = ref('delivery');
const customerName = ref('');
const customerEmail = ref('');
const customerAddress = ref('');
const customerCountry = ref('at');
const customerComment = ref('');

const validate = ref(false);
const validEmail = computed(() => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(customerEmail.value);
});
const validQuantity = computed(() => Number.isInteger(quantity.value) && quantity.value > 0);

const shippingCost = computed(() => {
  if (deliveryMethod.value === 'pickup') return 0;
  if (customerCountry.value === 'at') return 25;
  if (customerCountry.value === 'de') return 25;
  if (customerCountry.value === 'other') return 35;
  return 0;
});

// Update the total to use the discounted price
const total = computed(() => subtotal.value + shippingCost.value);

const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('de-DE', {style: 'currency', currency: 'EUR'}).format(amount);
};

const responseMessage = ref('');
const isError = ref(false);

import {onMounted} from "vue";

onMounted(() => {
  sendVisitorInfo("CartForm Viewed");
})

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
      body: JSON.stringify({message: visitorInfo})
    });
  } catch (error) {
    console.error('Failed to send visitor info:', error);
  }
};

const checkout = async () => {
  if (!customerName.value || !customerEmail.value || !validQuantity.value || !validEmail.value) {
    validate.value = true;
    responseMessage.value = i18n.global.t("Bitte fülle alle Pflichtfelder korrekt aus.");
    isError.value = true;
    return;
  }
  const messageText =
      `Bestellung:
Dein Name: ${customerName.value}
Deine E-Mail: ${customerEmail.value}
Deine Adresse: ${customerAddress.value}
Land: ${customerCountry.value}
Versandart: ${deliveryMethod.value}
Menge: ${quantity.value}
Farbe: ${cartItem.value.color.name}
Kommentar: ${customerComment.value}
Gesamtsumme: ${formatCurrency(total.value)}
Auftragsbestätigung erfolgt per E-Mail mit den Zahlungshinweisen.`;

  try {
    const response = await fetch('/.netlify/functions/sendTelegramMessage', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({message: messageText})
    });
    if (response.ok) {
      responseMessage.value = i18n.global.t("Bestellung erfolgreich gesendet! Auftragsbestätigung erfolgt per E-Mail.");
      customerName.value = "";
      customerEmail.value = "";
      customerAddress.value = "";
      customerCountry.value = 'at';
      deliveryMethod.value = 'pickup';
      customerComment.value = "";
      validate.value = false;
      isError.value = false;
      setTimeout(async () => {
        await cartStore.reset();
        emit('close');
      }, 3000)

    } else {
      responseMessage.value = i18n.global.t("Fehler beim Senden der Bestellung!");
      isError.value = true;
    }
  } catch (error) {
    responseMessage.value = i18n.global.t("Verbindungsfehler!");
    isError.value = true;
  }
  setTimeout(() => {
    responseMessage.value = "";
    isError.value = false;
  }, 3000);
};

const goToShop = () => {
  emit('order');
};
</script>

<template>
  <div class="order-checkout-page container mx-auto p-4 bg-primarycontrast-500 pb-8">
    <!-- Falls der Warenkorb leer ist -->
    <div v-if="!cartItem">
      <h1 class="contact-header">
        Dein Warenkorb
      </h1>
      <div class="contact-card">
        <p class="text-2xl text-center mb-4">Dein Warenkorb ist leer</p>
        <div class="text-center">
          <button @click="goToShop"
                  class="gradient-button w-full py-3 text-lg">
            Jetzt bestellen
          </button>
        </div>
      </div>
    </div>

    <!-- Falls der Warenkorb einen Artikel enthält -->
    <div v-else>
      <h1 class="contact-header">
        Dein Warenkorb
      </h1>
      <div class="contact-card">
        <div class="grid grid-cols-3 gap-4 w-full">
          <div class="h-auto bg-gray-200 row-span-2"></div>
          <div class="gloria-hallelujah-regular text-left">POCKETLEDGE</div>
          <div class="flex justify-end"><div class=" w-8 h-8 items-center justify-center outline-button dark" @click="clearCart">X</div></div>
          <div class="font-bold flex items-center">{{ formatCurrency(subtotal) }}</div>
          <div class="flex justify-end">
            <div class="flex items-center font-bold">
              <div class="w-8 h-8 border-r-0 border rounded-l-lg flex items-center justify-center">-</div>
              <div class="w-8 h-8 border flex items-center justify-center">{{ quantity }}</div>
              <div class="w-8 h-8 border-l-0 border rounded-r-lg flex items-center justify-center">+</div>
            </div>
          </div>
        </div>
<!--        <div class="form-group w-full mb-4">-->
<!--          <label for="quantity" class="form-label block text-primary-500 font-bold mb-1">Menge:</label>-->
<!--          <div class="flex items-center gap-2">-->
<!--            <input-->
<!--                id="quantity"-->
<!--                type="number"-->
<!--                min="1"-->
<!--                step="1"-->
<!--                v-model.number="quantity"-->
<!--                :class="['form-input', { error: validate && !validQuantity }]"-->
<!--                placeholder="Gib die gewünschte Menge ein"-->
<!--            /><span class="outline-button dark" @click="clearCart">X</span></div>-->
<!--          <span v-if="validate && !validQuantity" class="text-red-500 text-sm pl-1">-->
<!--            Bitte eine gültige Menge eingeben (ganze Zahl > 0)-->
<!--          </span>-->
<!--        </div>-->
<!--        <div class="form-group w-full mb-4">-->
<!--          <p class="text-primary-500 font-bold">Summe:</p>-->
<!--          <p class="text-textdark text-xl">{{ formatCurrency(subtotal) }}</p>-->
<!--          <p class="text-textdark text-xs mt-1">(Enthaltene MwSt: {{ formatCurrency(vatAmount) }})</p>-->
<!--        </div>-->
        <!-- Kundeninformationen -->
        <div class="form-group w-full mb-4">
          <label for="name" class="form-label block text-primary-500 font-bold mb-1">Name:</label>
          <input
              id="name"
              type="text"
              v-model="customerName"
              :class="['form-input', { error: validate && !customerName }]"
              placeholder="Dein Name"
          />
          <span v-if="validate && !customerName" class="text-red-500 text-sm pl-1">Name ist ein Pflichtfeld</span>
        </div>
        <div class="form-group w-full mb-4">
          <label for="email" class="form-label block text-primary-500 font-bold mb-1">E-Mail:</label>
          <input
              id="email"
              type="email"
              v-model="customerEmail"
              :class="['form-input', { error: validate && !validEmail }]"
              placeholder="Deine E-Mail"
          />
          <span v-if="validate && !validEmail" class="text-red-500 text-sm pl-1">Bitte eine gültige E-Mail-Adresse eingeben</span>
        </div>
        <div class="form-group w-full mb-4">
          <label for="address" class="form-label block text-primary-500 font-bold mb-1">Adresse:</label>
          <textarea
              id="address"
              v-model="customerAddress"
              :class="['form-input', { error: validate && !customerAddress }]"
              rows="3"
              placeholder="Deine Adresse"
          ></textarea>
          <span v-if="validate && !customerAddress" class="text-red-500 text-sm pl-1">Adresse ist ein Pflichtfeld</span>
        </div>
        <div class="form-group w-full mb-4">
          <label for="country" class="form-label block text-primary-500 font-bold mb-1">Land:</label>
          <select id="country" v-model="customerCountry" class="form-input w-full text-textdark">
            <option>Österreich</option>
            <option>Deutschland</option>
            <option>Schweiz</option>
          </select>
        </div>

        <!-- Versandart Auswahl -->
        <div class="form-group w-full mb-4">
          <p class="text-primary-500 font-bold mb-1">Versandart:</p>
          <div class="flex gap-4">
            <label class="flex items-center">
              <input type="radio" value="Lieferung" v-model="deliveryMethod" class="custom-radio mr-2"/>
              <span>Lieferung</span>
            </label>
            <label class="flex items-center">
              <input type="radio" value="Selbstabholung" v-model="deliveryMethod" class="custom-radio mr-2"/>
              <span>Selbstabholung in Innsbruck</span>
            </label>
          </div>
        </div>

        <!-- Bestellinformationen -->
        <div class="form-group w-full mb-4" v-if="deliveryMethod === 'Lieferung'">
          <p class="text-primary-500 font-bold">Versandkosten:</p>
          <p class="text-textdark text-xl">{{ formatCurrency(shippingCost) }}</p>
        </div>
        <div class="form-group w-full mb-4">
          <p class="text-primary-500 font-bold">Gesamtsumme:</p>
          <p class="text-textdark text-2xl font-extrabold">{{ formatCurrency(total) }}</p>
        </div>

        <!-- Kommentarfeld -->
        <div class="form-group w-full mb-4">
          <label for="comment" class="form-label block text-primary-500 font-bold mb-1">Kommentar:</label>
          <textarea
              id="comment"
              v-model="customerComment"
              class="form-input w-full"
              rows="3"
              placeholder="Optionaler Kommentar"
          ></textarea>
        </div>

        <!-- Hinweis zur Bestätigung -->
        <div class="w-full flex flex-col gap-4 mt-1">
          <p class="text-sm text-textdark text-center font-bold">
            Unsere Produkte werden erst nach Eingang Deiner Bestellung gefertigt. Aufgrund der aktuellen hohen Nachfrage
            kann der Versand bis zu mehreren Tagen dauern.
          </p>
          <p class="text-sm text-textdark text-center">
            Auftragsbestätigung mit den Zahlungshinweisen erfolgt per E-Mail.
          </p>
        </div>

        <!-- Bestellbutton & Fehleranzeige -->
        <div class="w-full mt-6 flex flex-col gap-2">
          <button @click="checkout" class="gradient-button w-full py-3 text-lg items-center">
            <CreditCardIcon class="w-6 h-6 mr-2" />
            Zahlungspflichtig bestellen
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
import {ref, computed, onMounted, onUnmounted} from 'vue';
import useCartStore from "../store/cartStore.js";
import {CreditCardIcon} from "@heroicons/vue/24/outline";

// Produkt- und Preis-Definition (statisch, da One-Product-Shop)
const price = 280; // Bruttopreis pro Einheit in €
const vatRate = 0.19;

const emit = defineEmits(['order'])

// Reaktive Variable für den Warenkorb (aus sessionStorage)
const cartStore = useCartStore();
const cartItem = cartStore.cartItem;
const clearCart = ()=>{cartStore.reset();}

// Bestellung und Berechnungen (unabhängig von cartItem, da statisch und via Checkout-Form abrufbar)
const quantity = ref(cartItem.value ? cartItem.value.quantity : 1);
const subtotal = computed(() => price * quantity.value);
const netSubtotal = computed(() => subtotal.value / (1 + vatRate));
const vatAmount = computed(() => subtotal.value - netSubtotal.value);

const deliveryMethod = ref('Lieferung');
const customerName = ref('');
const customerEmail = ref('');
const customerAddress = ref('');
const customerCountry = ref('Österreich');
const customerComment = ref('');

const validate = ref(false);
const validEmail = computed(() => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(customerEmail.value);
});
const validQuantity = computed(() => Number.isInteger(quantity.value) && quantity.value > 0);

const shippingCost = computed(() => {
  if (deliveryMethod.value === 'Selbstabholung') return 0;
  if (customerCountry.value === 'Österreich') return 18;
  if (customerCountry.value === 'Deutschland') return 20;
  if (customerCountry.value === 'Schweiz') return 40;
  return 0;
});
const total = computed(() => subtotal.value + shippingCost.value);

const formatCurrency = (amount) => {
  return new Intl.NumberFormat('de-DE', {style: 'currency', currency: 'EUR'}).format(amount);
};

const responseMessage = ref('');
const isError = ref(false);

const checkout = async () => {
  if (!customerName.value || !customerEmail.value || !customerAddress.value || !validQuantity.value || !validEmail.value) {
    validate.value = true;
    responseMessage.value = "Bitte fülle alle Pflichtfelder korrekt aus.";
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
      responseMessage.value = "Bestellung erfolgreich gesendet! Auftragsbestätigung erfolgt per E-Mail.";
      customerName.value = "";
      customerEmail.value = "";
      customerAddress.value = "";
      customerCountry.value = "Österreich";
      deliveryMethod.value = "Lieferung";
      quantity.value = 1;
      customerComment.value = "";
      validate.value = false;
      isError.value = false;
    } else {
      responseMessage.value = "Fehler beim Senden der Bestellung!";
      isError.value = true;
    }
  } catch (error) {
    responseMessage.value = "Verbindungsfehler!";
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

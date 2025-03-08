<!-- OrderCheckoutPage.vue -->
<template>
  <div class="contact-container">
    <h1 class="contact-header">
      Bestellung aufgeben
    </h1>
    <div class="contact-card">
      <!-- Produktinformationen -->
      <h3 class="font-bold text-primary-500 mb-4 gloria-hallelujah-regular text-4xl">POCKETLEDGE</h3>
      <p class="text-4xl font-extrabold text-textdark mb-2">280 €</p>
      <p class="text-sm text-textdark mb-6">(inkl. gesetzlicher MwSt)</p>

      <!-- Kundeninformationen -->
      <div class="form-group">
        <label for="name" class="form-label">Name:</label>
        <input
            id="name"
            type="text"
            v-model="customerName"
            class="form-input w-full"
            placeholder="Dein Name"
        />
      </div>
      <div class="form-group">
        <label for="email" class="form-label">E-Mail:</label>
        <input
            id="email"
            type="email"
            v-model="customerEmail"
            class="form-input w-full"
            placeholder="Deine E-Mail"
        />
      </div>
      <div class="form-group">
        <label for="address" class="form-label">Adresse:</label>
        <textarea
            id="address"
            v-model="customerAddress"
            class="form-input w-full"
            rows="3"
            placeholder="Deine Adresse"
        ></textarea>
      </div>
      <div class="form-group">
        <label for="country" class="form-label">Land:</label>
        <select id="country" v-model="customerCountry" class="form-input w-full text-textdark">
          <option>Österreich</option>
          <option>Deutschland</option>
          <option>Schweiz</option>
        </select>
      </div>

      <!-- Versandart Auswahl -->
      <div class="form-group">
        <p class="text-primary-500 font-bold mb-1">Versandart:</p>
        <div class="flex gap-4">
          <label class="flex items-center">
            <input type="radio" value="Lieferung" v-model="deliveryMethod" class="custom-radio mr-2" />
            <span>Lieferung</span>
          </label>
          <label class="flex items-center">
            <input type="radio" value="Selbstabholung" v-model="deliveryMethod" class="custom-radio mr-2" />
            <span>Selbstabholung in Innsbruck</span>
          </label>
        </div>
      </div>

      <!-- Bestellinformationen -->
      <div class="form-group">
        <label for="quantity" class="form-label">Menge:</label>
        <input
            id="quantity"
            type="number"
            min="1"
            v-model.number="quantity"
            class="form-input w-full"
            placeholder="Gib die gewünschte Menge ein"
        />
      </div>
      <div class="form-group">
        <p class="text-primary-500 font-bold">Zwischensumme:</p>
        <p class="text-textdark text-xl">{{ formatCurrency(subtotal) }}</p>
        <p class="text-textdark text-xs mt-1">
          (Enthaltene MwSt: {{ formatCurrency(vatAmount) }})
        </p>
      </div>
      <div class="form-group" v-if="deliveryMethod === 'Lieferung'">
        <p class="text-primary-500 font-bold">Versandkosten:</p>
        <p class="text-textdark text-xl">{{ formatCurrency(shippingCost) }}</p>
      </div>
      <div class="form-group">
        <p class="text-primary-500 font-bold">Gesamtsumme:</p>
        <p class="text-textdark text-2xl font-extrabold">{{ formatCurrency(total) }}</p>
      </div>
      <div class="w-full mt-4">
        <p class="text-sm text-textdark text-center">
          Hinweis: Das Produkt wird erst nach Auftragserteilung produziert und die Lieferung kann einige Tage dauern.
        </p>
      </div>
      <div class="w-full mt-6">
        <button @click="checkout" class="gradient-button custom-color from-primarycontrast-500 to-primarycontrast-600 w-full py-3 text-lg">
          Zur Kasse
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const quantity = ref(1);
const price = 280; // Bruttopreis pro Einheit in €
const vatRate = 0.19;

// Berechnung der Zwischensumme (Preis * Menge)
const subtotal = computed(() => price * quantity.value);
// Nettobetrag = Bruttopreis / (1 + MwSt)
const netSubtotal = computed(() => subtotal.value / (1 + vatRate));
// Enthaltene MwSt = Differenz zwischen Bruttopreis und Nettopreis
const vatAmount = computed(() => subtotal.value - netSubtotal.value);

// Auswahl der Versandart
const deliveryMethod = ref('Lieferung');

// Versandkosten: nur wenn Lieferung gewählt, ansonsten 0
const shippingCost = computed(() => {
  if (deliveryMethod.value === 'Selbstabholung') return 0;
  if (customerCountry.value === 'Österreich') return 18;
  if (customerCountry.value === 'Deutschland') return 20;
  if (customerCountry.value === 'Schweiz') return 40;
  return 0;
});

// Gesamtsumme = Zwischensumme + (Versandkosten falls Lieferung)
const total = computed(() => subtotal.value + shippingCost.value);

// Kundeninformationen
const customerName = ref('');
const customerEmail = ref('');
const customerAddress = ref('');
const customerCountry = ref('Österreich');

const formatCurrency = (amount) => {
  return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(amount);
};

const checkout = () => {
  alert(`Bestellung abgeschlossen!
Dein Name: ${customerName.value}
Deine E-Mail: ${customerEmail.value}
Deine Adresse: ${customerAddress.value}
Land: ${customerCountry.value}
Versandart: ${deliveryMethod.value}
Menge: ${quantity.value}
Gesamtsumme: ${formatCurrency(total.value)}`);
};
</script>

<style>
/* Custom Radio Button Styling */

</style>

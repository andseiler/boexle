import { computed, ref } from "vue";

const preOrderCountRef = ref(23);
const totalAvailableRef = ref(30);
const rebateRef = ref(60);
const priceRef = ref(349);

export default function usePreOrderStore() {
  function incrementPreOrder() {
    if (preOrderCountRef.value < totalAvailableRef.value) {
      preOrderCountRef.value++;
    }
  }

  function decrementPreOrder() {
    if (preOrderCountRef.value > 0) {
      preOrderCountRef.value--;
    }
  }

  return {
    preOrderCount: computed(() => preOrderCountRef.value),
    totalAvailable: computed(() => totalAvailableRef.value),
    rebate: computed(() => rebateRef.value),
    price: computed(() => priceRef.value),
    incrementPreOrder,
    decrementPreOrder
  };
} 
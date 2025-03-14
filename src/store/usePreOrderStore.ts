import { computed, ref } from "vue";

const preOrderCountRef = ref(10);
const totalAvailableRef = ref(30);
const rebateRef = ref(50);

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
    incrementPreOrder,
    decrementPreOrder
  };
} 
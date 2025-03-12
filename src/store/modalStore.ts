import { ref } from "vue";

const showModal = ref(false);
const showContactModal = ref(false);
const showOrderModal = ref(false);
const showCartModal = ref(false);

export default function useModalStore(){

    return {showModal, showContactModal, showOrderModal, showCartModal};
}
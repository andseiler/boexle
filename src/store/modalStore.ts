import {ref, watch} from "vue";
import {i18n} from "../main.ts";

const showModal = ref(false);
const showContactModal = ref(false);
const customObstacleSubtitle = ref('');
const showOrderModal = ref(false);
const showCartModal = ref(false);

export default function useModalStore() {

    watch(showContactModal, () => {
        if (!showContactModal.value) {
            customObstacleSubtitle.value = '';
        }
    })
    function showCustomObstacleModalFunc() {
        showContactModal.value = true;
        customObstacleSubtitle.value = i18n.global.t('Du willst ein individuelles Obstacle? Rails, Ledges oder was ganz anderes – wir machen’s möglich!<br><br>Schreib uns einfach, sag, was du brauchst, und du bekommst ein unverbindliches Angebot von uns.');
    }

    return {showModal, showContactModal, showOrderModal, showCartModal, showCustomObstacleModalFunc, customObstacleSubtitle};
}
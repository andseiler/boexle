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
        customObstacleSubtitle.value = i18n.global.t('Du willst ein individuelles Obstacle? Rail, Ledge oder was ganz anderes – kein Problem! Schreib einfach eine kurze Nachricht, wir besprechen was du dir vorstellst und du bekommst ein unverbindliches Angebot.');
    }

    function showOrderPlanModalFunc(){
        showContactModal.value = true;
        customObstacleSubtitle.value=i18n.global.t('Du willst dir deine eigene Box bauen? Schreib mir eine kurze Nachricht und ich melde mich mit allen Details bei dir.')
    }

    return {showModal, showContactModal, showOrderModal, showCartModal, showCustomObstacleModalFunc,showOrderPlanModalFunc, customObstacleSubtitle};
}
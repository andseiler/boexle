import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import {createI18n} from "vue-i18n";
import useCartStore from "./store/cartStore.ts";

const i18n = createI18n({
    locale: 'de',
    fallbackLocale: 'en',
    messages: {
        en: {
            'Extrem stabil, in 1 Minute auf- und abgebaut, passt perfekt in eine Eurobox (60x40x30 cm).': 'Extremely sturdy, assembled and disassembled in 1 minute, fits in a Eurobox (60x40x30 cm)',
            'Jetzt bestellen': 'Order now'
        },
        de: {
            'Extrem stabil, in 1 Minute auf- und abgebaut, passt perfekt in eine Eurobox (60x40x30 cm).': 'Extrem stabil, in 1 Minute auf- und abgebaut, passt perfekt in eine Eurobox (60x40x30 cm)',
            'Jetzt bestellen': 'Jetzt bestellen'
        }
    }
})

const createBoexleApp = async () => {
    createApp(App).use(i18n).mount('#app')

    const cartStore = useCartStore();
    await cartStore.init();
}

createBoexleApp();



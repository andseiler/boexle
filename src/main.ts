import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import {createI18n} from "vue-i18n";
import useCartStore from "./store/cartStore.ts";
import deKeys from './translations/keys-de.json';
import enKeys from './translations/keys-en.json';

const browserLanguage = navigator.language.split('-')[0];

// Supported locales for your app
const supportedLocales = ['en', 'de'];

// If the browser language is supported, use it; otherwise, default to 'de'
const initialLocale = supportedLocales.includes(browserLanguage) ? browserLanguage : 'de';


export const i18n = createI18n({
    locale: initialLocale,
    fallbackLocale: 'en',
    messages: {
        en: {...enKeys},
        de: {...deKeys}
    }
})

const createBoexleApp = async () => {
    createApp(App).use(i18n).mount('#app')

    const cartStore = useCartStore();
    await cartStore.init();
}

createBoexleApp();



import {computed, ref} from "vue";

export interface CartItem {
    product: string,
    price: number,
    quantity: number,
    color: any,
    total: number
}

const cartItemRef = ref(null as CartItem|null);

export default function useCartStore() {
    async function init(){
        if(sessionStorage.getItem('cartItem')){
            cartItemRef.value = JSON.parse(sessionStorage.getItem('cartItem')!);
        }
    }

    async function set(cartItem: CartItem){
        cartItemRef.value = cartItem;
        sessionStorage.setItem('cartItem', JSON.stringify(cartItem));
    }

    async function reset(){
        cartItemRef.value = null;
        sessionStorage.removeItem('cartItem');
    }

    return {init, cartItem: computed(()=>cartItemRef.value as CartItem), set, reset}
}
<template>
<div class="flex items-center font-bold">
  <div @click="changeQuantity(-1)"
       class="h-10 w-10 border-r-0 border rounded-l-lg border-2 flex items-center justify-center text-textdark hover:border-primary-500 hover:text-primary-500 cursor-pointer">
    -
  </div>
  <div class="h-10 w-10 border border-2 flex items-center justify-center">{{ quantity }}</div>
  <div @click="changeQuantity(1)"
       class="h-10 w-10 border-l-0 border-2 rounded-r-lg flex items-center justify-center text-textdark hover:border-primary-500 hover:text-primary-500 cursor-pointer">
    +
  </div>
</div>
</template>

<script lang="ts" setup>
  import {computed} from "vue";

  const props = defineProps({
    modelValue: {type: Number, required: true}
  })

  const emit = defineEmits(['update:modelValue'])

  const quantity = computed(() => props.modelValue);

  const changeQuantity=(inc:number)=>{
    if((quantity.value+inc) <= 0){
      return;
    }

    emit('update:modelValue',quantity.value+inc);
  }
</script>
<!-- ModalComponent.vue -->
<template>
  <div v-if="props.isVisible" class="modal-overlay" @click.self="closeModal">
    <div class="modal-content">
      <div class="flex items-center justify-between pb-4 border-b border-gray-200 text-textdark">
        <div class="w-20"></div>
        <div class="flex-1 flex justify-center font-bold text-xl ">{{props.title}}</div>
        <div class="w-20 flex items-center justify-end cursor-pointer" @click="closeModal"><XCircleIcon class="w-6"></XCircleIcon></div>
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { XCircleIcon}from '@heroicons/vue/24/outline'

const props = defineProps({
  isVisible: {type: Boolean, required: true},
  title: {type: String}
})

const emit = defineEmits(['close'])

const closeModal = () =>{emit('close')}
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}
.modal-content {
  background: white;
  padding: 20px;
  border-radius: 8px;
  position: relative;
}
.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  font-size: 18px;
  cursor: pointer;
}
</style>

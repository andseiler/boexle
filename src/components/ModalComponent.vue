<!-- ModalComponent.vue -->
<template>
  <transition     enter-active-class="transition-opacity duration-300"
                  enter-from-class="opacity-0"
                  enter-to-class="opacity-100"
                  leave-active-class="transition-opacity duration-300"
                  leave-from-class="opacity-100"
                  leave-to-class="opacity-0">
    <div v-if="props.isVisible" class="modal-overlay flex items-end sm:items-center" @click.self="closeModal">
      <div class="modal-content w-full sm:max-w-[600px] sm:mx-auto rounded-t-xl sm:rounded-xl">
        <div
            class="sticky top-0 z-10 shadow-lg flex items-center justify-between p-4 border-b border-gray-200 text-textdark bg-tertiary-200">
          <div class="w-20"></div>
          <div class="flex-1 flex justify-center font-bold text-xl">{{ props.title }}</div>
          <div class="w-20 flex items-center justify-end cursor-pointer" @click="closeModal">
            <XCircleIcon class="w-8"></XCircleIcon>
          </div>
        </div>
        <div class="w-full sm:min-w-[600px] overflow-y-auto max-h-[calc(95vh-70px)]">
          <slot></slot>
        </div>

      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { XCircleIcon}from '@heroicons/vue/24/outline'
import {onUnmounted, watch} from "vue";

const props = defineProps({
  isVisible: {type: Boolean, required: true},
  title: {type: String}
})

const emit = defineEmits(['close'])

const closeModal = () =>{emit('close')}

// Watch for changes to the modal visibility and update body overflow accordingly
watch(
    () => props.isVisible,
    (newVal) => {
      if (newVal) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    },
    { immediate: true }
);

// Clean up on component unmount
onUnmounted(() => {
  document.body.style.overflow = '';
});
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
  z-index: 1000;
}
.modal-content {
  scrollbar-gutter: stable;
  background: white;
  position: relative;
  max-height: 95vh; /* sets maximum height relative to the viewport */
  overflow-y: auto; /* enables scrolling if content exceeds the max height */
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

<script setup lang="ts">
import { computed } from 'vue'
import IconArrow from './icons/IconArrow.vue'
const props = defineProps({
  arrowStrokeColor: {
    type: String,
    default: 'stroke-neutral-900',
  },
  underlineColor: {
    type: String,
    default: 'bg-neutral-900',
  },
})

const styleClass = computed(() => {
  return `before:${props.underlineColor}`
})
</script>

<template>
  <div class="flex pt-0 pr-0 pb-1 pl-0 gap-1 items-center grow-0 relative">
    <div
      class="font-dm-sans text-base font-semibold before:w-0 before:h-px before:absolute before:bottom-0 before:right-0 before:transition-all before:duration-300 hover:before:w-full hover:before:left-0"
      :class="styleClass"
    >
      <slot></slot>
    </div>
    <IconArrow
      class="w-5 h-5"
      :strokeColor="props.arrowStrokeColor"
    ></IconArrow>
  </div>
</template>

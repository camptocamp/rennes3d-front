<script setup lang="ts">
import IconArrow from './icons/IconArrow.vue'
const props = defineProps({
  arrowStrokeColor: {
    type: String,
    default: 'stroke-neutral-900',
  },
})
</script>

<template>
  <div class="flex pt-0 pr-0 pb-1 pl-0 gap-1 items-center grow-0">
    <div class="font-dm-sans text-base font-semibold">
      <slot></slot>
    </div>
    <IconArrow
      class="w-5 h-5"
      :strokeColor="props.arrowStrokeColor"
    ></IconArrow>
  </div>
</template>

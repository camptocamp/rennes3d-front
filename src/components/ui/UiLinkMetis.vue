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
  <div class="flex pt-0 pr-0 pb-1 pl-0 gap-1 items-center">
    <div class="font-dm-sans font-medium text-base">
      <slot></slot>
    </div>
    <div>
      <IconArrow :strokeColor="props.arrowStrokeColor"></IconArrow>
    </div>
  </div>
</template>

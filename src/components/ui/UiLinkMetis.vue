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
  <div class="flex pt-0 pr-0 pb-1 pl-0 gap-1 items-center grow-0 relative">
    <div
      class="font-dm-sans text-base font-semibold before:content-[''] before:absolute before:w-full before:h-px before:bg-black before:top-full before:left-0 after:absolute after:w-full after:h-px after:bg-black after:top-full after:left-0 before:origin-right before:hover:origin-left before:scale-x-0 before:scale-y-100 hover:before:scale-x-100 hover:before:scale-y-100n hover:bg-red-600"
    >
      <slot></slot>
    </div>
    <IconArrow
      class="w-5 h-5"
      :strokeColor="props.arrowStrokeColor"
    ></IconArrow>
  </div>
</template>

<style scoped>
.link--metis::before {
  transform-origin: 100% 50%; /* right */
  transform: scale3d(0, 1, 1);
  transition: transform 0.3s;
}

.link--metis:hover::before {
  transform-origin: 0% 50%; /* left */
  transform: scale3d(1, 1, 1);
}
</style>

<script setup lang="ts">
const props = defineProps({
  url: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div class="relative w-fit">
    <a
      :href="props.url"
      class="font-normal text-xs text-neutral-500 before:w-0 before:h-px before:absolute before:bottom-0 before:right-0 before:transition-all before:duration-300 before:bg-neutral-500 hover:before:w-full hover:before:left-0"
      target="_blank"
    >
      <slot></slot>
    </a>
  </div>
</template>

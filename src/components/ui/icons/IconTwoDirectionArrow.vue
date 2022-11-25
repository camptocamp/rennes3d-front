<script lang="ts" setup>
import { computed } from 'vue'

const props = defineProps({
  strokeColor: {
    type: String,
    default: 'stroke-neutral-400',
  },
})

const styleClass = computed(() => {
  return props.strokeColor
})
</script>

<template>
  <svg
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    :class="styleClass"
  >
    <path d="M13.5 7H0.5" stroke-linecap="round" stroke-linejoin="round" />
    <path
      d="M3.5 4L0.5 7L3.5 10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M10.5 4L13.5 7L10.5 10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>

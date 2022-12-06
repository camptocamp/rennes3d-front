<script lang="ts" setup>
import { computed } from 'vue'

const props = defineProps({
  strokeColor: {
    type: String,
    default: 'stroke-white',
  },
})

const styleClass = computed(() => {
  return props.strokeColor
})
</script>
<template>
  <svg
    class="stroke-2"
    :class="styleClass"
    width="12"
    height="12"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9 5.25L15.75 12L9 18.75"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>

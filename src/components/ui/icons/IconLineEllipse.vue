<script setup lang="ts">
import type { LineNumber } from '@/model/lines.model'
import type { PropType } from 'vue'

const props = defineProps({
  lineNumber: {
    type: Number as PropType<LineNumber>,
    required: true,
  },
})
</script>
<template>
  <svg
    class="stroke-1"
    :class="{
      'fill-indigo-600 stroke-indigo-50': props.lineNumber == 1,
      'fill-pink-600 stroke-pink-50': props.lineNumber == 2,
      'fill-emerald-600 stroke-emerald-50': props.lineNumber == 3,
      'fill-purple-600 stroke-purple-50': props.lineNumber == 4,
    }"
    width="9"
    height="10"
    viewBox="0 0 9 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx="4.5"
      cy="5"
      r="4"
      transform="rotate(90 4.5 5)"
      fill="#4F46E5"
      stroke="#EEF2FF"
    />
  </svg>
</template>

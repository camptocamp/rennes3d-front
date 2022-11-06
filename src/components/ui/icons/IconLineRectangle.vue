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
    :class="{
      'bg-indigo-300': props.lineNumber == 1,
      'bg-pink-300': props.lineNumber == 2,
      'bg-emerald-300': props.lineNumber == 3,
      'bg-purple-300': props.lineNumber == 4,
    }"
    width="1"
    height="30"
    viewBox="0 0 1 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect y="0.5" width="1" height="29" fill="#A5B4FC" />
  </svg>
</template>

<script setup lang="ts">
import type { LineNumber } from '@/model/lines.model'
import { computed, type PropType } from 'vue'
import { getColor } from '@/services/color'

const props = defineProps({
  lineNumber: {
    type: Number as PropType<LineNumber>,
    required: true,
  },
})

const colorClass = computed(() => {
  const fillColor = getColor('fill', props.lineNumber, 600)
  const strokeColor = getColor('stroke', props.lineNumber, 50)

  return [fillColor, strokeColor]
})
</script>
<template>
  <svg
    class="stroke-1"
    :class="colorClass"
    width="9"
    height="10"
    viewBox="0 0 9 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="4.5" cy="5" r="4" transform="rotate(90 4.5 5)" />
  </svg>
</template>

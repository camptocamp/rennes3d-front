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
  const bgColor = getColor('bg', props.lineNumber, 300)

  return [bgColor]
})
</script>
<template>
  <svg
    :class="colorClass"
    width="1"
    viewBox="0 0 1 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect y="0.5" width="1" />
  </svg>
</template>

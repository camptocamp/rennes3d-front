<script lang="ts" setup>
import type { LineNumber } from '@/model/lines.model'
import { computed, type PropType } from 'vue'
import { getColor } from '@/services/color'

const props = defineProps({
  line: {
    type: Number as PropType<LineNumber>,
    required: true,
  },
  active: {
    type: Boolean,
    default: false,
  },
})

const buttonStyle = computed(() => {
  const bgColor = getColor('bg', props.line, 600)
  return [bgColor]
})
</script>

<template>
  <button :class="buttonStyle">
    {{ 'T' + props.line }}
  </button>
</template>

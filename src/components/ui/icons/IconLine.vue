<script setup lang="ts">
import { computed, type PropType } from 'vue'
import type { LineNumber } from '@/model/lines.model'
import { getColor } from '@/services/color'

type LineIconSize = 's' | 'm' | 'l' | 'xl'

const props = defineProps({
  line: {
    type: Number as PropType<LineNumber>,
    required: true,
  },
  size: {
    type: String as PropType<LineIconSize>,
    required: true,
  },
})

const lineText = computed(() =>
  props.size === 's' ? props.line : `T${props.line}`
)

const circleStyle = computed(() => {
  const bgColor = getColor('bg', props.line, 600)
  const iconSizes: Record<LineIconSize, string> = {
    s: 'w-4 h-4',
    m: 'w-6 h-6',
    l: 'w-8 h-8',
    xl: 'w-12 h-12',
  }
  return [bgColor, iconSizes[props.size]]
})

const textStyle = computed(() => {
  const textStyles: Record<LineIconSize, string> = {
    s: 'font-normal text-xs',
    m: 'font-bold text-xs',
    l: 'font-bold text-lg',
    xl: 'font-bold text-xl',
  }
  return textStyles[props.size]
})
</script>
<template>
  <div
    class="flex items-center rounded-full justify-center"
    :class="circleStyle"
  >
    <div
      class="font-dm-sans font-bold text-white text-xl items-end"
      :class="textStyle"
    >
      {{ lineText }}
    </div>
  </div>
</template>

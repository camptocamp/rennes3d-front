<script lang="ts" setup>
import type { LineNumber } from '@/model/lines.model'
import { computed, type PropType } from 'vue'
import { getColor } from '@/services/color'
import ChevronArrowRight from '@/components/ui/icons/ChevronArrowRight.vue'

export type Corner = 'tl' | 'tr' | 'br' | 'bl'

const props = defineProps({
  line: {
    type: Number as PropType<LineNumber>,
    required: true,
  },
  active: {
    type: Boolean,
    default: false,
  },
  chevron: {
    type: Boolean,
    default: false,
  },
  corner: {
    type: String as PropType<Corner>,
    required: true,
  },
})

const buttonStyle = computed(() => {
  let bgColor = getColor('bg', props.line, 600)
  if (!props.active) {
    bgColor = 'bg-white'
  }

  let cornerStyle = 'rounded-tr-xl rounded-tl-xl rounded-br-xl rounded-bl-xl'
  cornerStyle = cornerStyle.replace(
    `rounded-${props.corner}-xl`,
    `rounded-${props.corner}-none`
  )

  return [bgColor, cornerStyle]
})

const textStyle = computed(() => {
  if (props.active) {
    return 'text-white'
  }
  const textColor = getColor('text', props.line, 600)
  return [textColor]
})

const arrowStrokeColor = computed(() => {
  if (props.active) {
    return 'stroke-white'
  }
  const strokeColor = getColor('stroke', props.line, 600)
  return strokeColor
})
</script>

<template>
  <button
    :class="buttonStyle"
    class="flex items-center py-0.5 px-2 gap-1 shadow-lg min-w-fit"
  >
    <div
      class="font-bold font-dm-sans text-sm text-center items-center"
      :class="textStyle"
    >
      {{ 'T' + props.line }}
    </div>
    <ChevronArrowRight
      :class="{ hidden: !props.chevron }"
      :strokeColor="arrowStrokeColor"
    ></ChevronArrowRight>
  </button>
</template>

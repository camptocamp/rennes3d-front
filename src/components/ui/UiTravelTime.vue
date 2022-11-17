<script setup lang="ts">
import type { LineNumber } from '@/model/lines.model'
import { type PropType, computed } from 'vue'
import IconLine from '../ui/icons/IconLine.vue'
import IconLineArrow from './icons/IconLineArrow.vue'
import { getColor } from '@/services/color'
import informationIcon from '@/assets/icons/informationIcon.svg'

const props = defineProps({
  newDuration: Number,
  oldDuration: Number,
  lineNumber: {
    type: Number as PropType<LineNumber>,
    required: true,
  },
  startStation: String,
  endStation: String,
  colored: {
    type: Boolean,
    default: true,
  },
})

const containerStyle = computed(() => {
  let bgColor = 'bg-slate-100'
  let borderColor = 'border-slate-50'
  if (props.colored) {
    bgColor = getColor('bg', props.lineNumber, 100)
    borderColor = getColor('border', props.lineNumber, 50)
  }

  return [bgColor, borderColor]
})
</script>
<template>
  <div
    class="flex items-center px-3 py-0 gap-2.5 rounded font-dm-sans hover:bg-white hover:border-slate-600 border"
    :class="containerStyle"
  >
    <div class="flex flex-col justify-center items-start pt-3 pr-3 pb-3 pl-0">
      <div class="flex items-center px-0.5 py-0 gap-1 rounded">
        <div class="font-bold text-base leading-5">
          {{ props.newDuration }} min
        </div>
        <div>
          <img :src="informationIcon" />
        </div>
      </div>
      <div class="flex flex-col items-start p-0 gap-1">
        <div class="font-normal text-xs leading-4 text-neutral-500">
          au lieu de {{ props.oldDuration }}
        </div>
      </div>
    </div>
    <IconLineArrow :lineNumber="props.lineNumber"></IconLineArrow>
    <div class="flex flex-col items-start p-0 gap-1 grow">
      <div class="flex flex-col justify-center items-start p-0 gap-1.5">
        <div class="font-medium text-sm leading-5">
          {{ props.startStation }}
        </div>
        <div class="font-medium text-sm leading-5">
          {{ props.endStation }}
        </div>
      </div>
    </div>
    <IconLine :line="lineNumber" :size="'l'"></IconLine>
  </div>
</template>

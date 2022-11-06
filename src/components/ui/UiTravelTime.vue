<script setup lang="ts">
import type { LineNumber } from '@/model/lines.model'
import type { PropType } from 'vue'
import IconLine from '../ui/icons/IconLine.vue'

const props = defineProps({
  newDuration: Number,
  oldDuration: Number,
  lineNumber: {
    type: Number as PropType<LineNumber>,
    required: true,
  },
  startStation: String,
  endStation: String,
})
</script>
<template>
  <div
    class="flex items-center px-3 py-0 gap-2.5 w-80 h-16 rounded font-dm-sans"
    :class="{
      'bg-indigo-100 border-indigo-50': $props.lineNumber == 1,
      'bg-pink-100 border-pink-50': $props.lineNumber == 2,
      'bg-emerald-100 border-emerald-50': $props.lineNumber == 3,
      'bg-purple-100 border-purple-50': $props.lineNumber == 4,
    }"
  >
    <div class="flex flex-col justify-center items-start pt-3 pl-3 pb-3 pr-0">
      <div class="flex items-center px-0.5 py-0 gap-1 rounded">
        <div class="font-bold text-base leading-5">
          {{ props.newDuration }} min
        </div>
        <!-- TODO: Information Icon here -->
      </div>
      <div class="flex flex-col items-start p-0 gap-1">
        <div class="font-normal text-xs leading-4 text-neutral-500">
          au lie de {{ props.oldDuration }}
        </div>
      </div>
    </div>
    <div
      class="flex items-start p-0 gap-5 w-9 h-2 rounded origin-center rotate-90"
      :class="'bg-t' + props.lineNumber + '-line'"
    >
      <div
        class="box-border w-2 h-2 bg-white border-2 border-solid border-black origin-center rotate-90 rounded-full"
      ></div>
      <div
        class="box-border w-2 h-2 bg-white border-2 border-solid border-black origin-center rotate-90 rounded-full"
      ></div>
    </div>
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

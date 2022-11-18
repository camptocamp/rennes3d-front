<script setup lang="ts">
import arrowForward from '@/assets/icons/arrow-forward.svg'
import IconLine from '../ui/icons/IconLine.vue'
const props = defineProps({
  id: Number,
  name: String,
  start: String,
  end: String,
  frequency: Number,
})
</script>
<template>
  <div class="flex items-center px-0 py-3 gap-3 font-dm-sans">
    <IconLine :line="id" :size="'xl'"></IconLine>
    <div>
      <div class="w-20 h-6 text-xl">
        {{ props.name }}
      </div>
      <div class="flex items-center p-0 gap-3 w-44 h-4">
        <div class="w-24 h-4 text-sm leading-4">
          {{ props.start }}
        </div>
        <div class="w-4 h-4">
          <img :src="arrowForward" />
        </div>
        <div class="w-9 h-4 text-sm leading-4">
          {{ props.end }}
        </div>
      </div>
    </div>
    <div class="flex flex-col items-start p-0 w-14 h-10">
      <div class="text-xs leading-4">Toutes les</div>
      <div class="font-bold text-xl leading-7">{{ props.frequency }} min</div>
    </div>
  </div>
</template>

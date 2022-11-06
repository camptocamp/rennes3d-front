<script setup lang="ts">
import { computed, type PropType } from 'vue'

type LineNumber = 1 | 2 | 3 | 4
type LineIconSize = 's' | 'm' | 'l' | 'xl'

const props = defineProps({
  line: {
    type: Number as PropType<LineNumber>,
    required: true,
  },
  size: String as PropType<LineIconSize>,
})

const lineText = computed(() => {
  if (props.size == 's') return props.line
  else return `T${props.line}`
})
</script>
<template>
  <div
    class="flex items-center rounded-full justify-center"
    :class="{
      'w-4 h-4': $props.size === 's',
      'w-6 h-6': $props.size === 'm',
      'w-8 h-8': $props.size === 'l',
      'w-12 h-12': $props.size === 'xl',
      'bg-indigo-600': $props.line == 1,
      'bg-pink-600': $props.line == 2,
      'bg-emerald-600': $props.line == 3,
      'bg-purple-600': $props.line == 4,
    }"
  >
    <div
      class="font-dm-sans font-bold text-white text-xl items-end"
      :class="{
        'font-normal text-xs': $props.size === 's',
        'font-bold text-xs': $props.size === 'm',
        'font-bold text-lg': $props.size === 'l',
        'font-bold text-xl': $props.size === 'xl',
      }"
    >
      {{ lineText }}
    </div>
  </div>
</template>

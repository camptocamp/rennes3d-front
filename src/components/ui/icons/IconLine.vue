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

const baseColor = ['indigo', 'pink', 'emerald', 'purple']

const lineText = computed(() => {
  if (props.size == 's') return props.line
  else return `T${props.line}`
})

const backgroundColor = computed(() => {
  return baseColor[props.line - 1]
    ? 'bg-' + baseColor[props.line - 1] + '-600'
    : 'bg-black'
})

// const textClass = computed(() => {
//   if (props.size == 's') {
//     return ''
//   }
// })
</script>
<template>
  <div
    class="flex items-center w-12 h-12 rounded-full justify-center"
    :class="backgroundColor"
  >
    <div class="font-dm-sans font-bold text-white text-xl items-end">
      {{ lineText }}
    </div>
  </div>
</template>

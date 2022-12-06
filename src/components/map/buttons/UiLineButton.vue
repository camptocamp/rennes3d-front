<script lang="ts" setup>
import type { LineNumber } from '@/model/lines.model'
import { computed, type PropType } from 'vue'
import { getColor } from '@/services/color'
import ChevronArrow from '@/components/ui/icons/ChevronArrow.vue'

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
})

const buttonStyle = computed(() => {
  const bgColor = getColor('bg', props.line, 600)
  return [bgColor]
})
</script>

<template>
  <button
    :class="buttonStyle"
    class="flex items-center py-0.5 px-2 gap-1 shadow-lg rounded-tr-xl rounded-tl-xl rounded-br-none rounded-bl-xl h-6 min-w-fit"
  >
    <div class="font-bold font-dm-sans text-sm text-center text-white">
      {{ 'T' + props.line }}
    </div>
    <!-- TODO: handle different direction (currently only to the right) -->
    <ChevronArrow :class="{ hidden: !props.chevron }"></ChevronArrow>
  </button>
</template>

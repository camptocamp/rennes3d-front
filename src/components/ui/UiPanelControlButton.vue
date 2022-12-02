<script lang="ts" setup>
import { computed, type PropType } from 'vue'

import arrowTopLine from '@/assets/icons/arrow-top-line.svg'
import arrowRightLine from '@/assets/icons/arrow-right-line.svg'
import arrowBottomLine from '@/assets/icons/arrow-bottom-line.svg'
import arrowLeftLine from '@/assets/icons/arrow-left-line.svg'

type AnchorPosition = 'top' | 'right' | 'bottom' | 'left'

const props = defineProps({
  isOpen: {
    type: Boolean,
    default: true,
  },
  anchorPosition: {
    type: String as PropType<AnchorPosition>,
    required: true,
  },
})

const arrowIcon = computed(() => {
  switch (props.anchorPosition) {
    case 'top': {
      return props.isOpen ? arrowTopLine : arrowBottomLine
    }
    case 'right': {
      return props.isOpen ? arrowRightLine : arrowLeftLine
    }
    case 'bottom': {
      return props.isOpen ? arrowBottomLine : arrowTopLine
    }
    case 'left': {
      return props.isOpen ? arrowLeftLine : arrowRightLine
    }
    // Shouldn't happen
    default:
      return ''
  }
})

const styleClass = computed(() => {
  switch (props.anchorPosition) {
    case 'top': {
      return 'rounded-b-xl w-12 h-8 py-2 px-4'
    }
    case 'right': {
      return 'rounded-l-xl w-8 h-12 py-4 px-2'
    }
    case 'bottom': {
      return 'rounded-t-xl w-12 h-8 py-2 px-4'
    }
    case 'left': {
      return 'rounded-r-xl w-8 h-12 py-4 px-2'
    }
    // Shouldn't happen
    default:
      return ''
  }
})
</script>

<template>
  <button
    class="flex justify-center items-center gap-4 bg-white shadow"
    :class="styleClass"
  >
    <img :src="arrowIcon" />
  </button>
</template>

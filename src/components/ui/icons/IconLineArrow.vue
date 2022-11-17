<script setup lang="ts">
import type { LineNumber } from '@/model/lines.model'
import type { PropType } from 'vue'
import IconLineEllipse from './IconLineEllipse.vue'
import IconLineRectangle from './IconLineRectangle.vue'

const props = defineProps({
  lineNumber: {
    type: Number as PropType<LineNumber>,
    required: true,
  },
})
</script>
<template>
  <div class="flex flex-col items-center rounded p-0">
    <IconLineEllipse :lineNumber="props.lineNumber"></IconLineEllipse>
    <IconLineRectangle
      class="grow"
      :lineNumber="props.lineNumber"
    ></IconLineRectangle>
    <IconLineEllipse :lineNumber="props.lineNumber"></IconLineEllipse>
  </div>
</template>

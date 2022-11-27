<script setup lang="ts">
import type { PropType } from 'vue'
import UiPanelControlButton from './UiPanelControlButton.vue'

const emit = defineEmits(['toggleEvent'])

defineProps({
  galleryShown: {
    type: Boolean,
    default: true,
  },
  photos: {
    type: Array as PropType<string[]>,
    default: () => [],
  },
})

function sendEvent() {
  emit('toggleEvent')
}
</script>
<template>
  <div class="flex flex-col items-center justify-end p-0">
    <UiPanelControlButton
      :is-open="galleryShown"
      :anchor-position="'bottom'"
      @click="sendEvent"
    ></UiPanelControlButton>
    <div
      class="flex flex-row items-start p-3 gap-3 w-auto h-56 bg-white rounded-l-xl rounded-r-xl rounded-t-none rounded-b-none"
      :class="{ hidden: !galleryShown }"
    >
      <img
        v-for="photo in photos.slice(0, 3)"
        :key="photo"
        :src="photo"
        class="w-64 h-52"
      />
    </div>
  </div>
</template>

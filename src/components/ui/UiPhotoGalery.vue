<script setup lang="ts">
import type { PropType } from 'vue'
import { ChevronDownIcon } from '@heroicons/vue/20/solid'
import { ChevronUpIcon } from '@heroicons/vue/20/solid'

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
    <button
      @click="sendEvent"
      class="flex flex-row justify-center items-center px-2 py-4 gap-4 w-11 h-7 bg-white rounded-t-xl"
    >
      <ChevronDownIcon :class="{ hidden: !galleryShown }"></ChevronDownIcon>
      <ChevronUpIcon :class="{ hidden: galleryShown }"></ChevronUpIcon>
    </button>
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

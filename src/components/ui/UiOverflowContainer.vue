<script setup lang="ts">
import { ref } from 'vue'

const scrollBar = ref<HTMLDivElement | null>(null)

function scrollRight() {
  const currentScroll = scrollBar.value?.scrollLeft || 0
  scrollBar.value?.scrollTo({
    left: currentScroll + 200,
    behavior: 'smooth',
  })
}
function scrollLeft() {
  const currentScroll = scrollBar.value?.scrollLeft || 0
  scrollBar.value?.scrollTo({
    left: currentScroll - 200,
    behavior: 'smooth',
  })
}
</script>
<template>
  <div class="relative">
    <div
      ref="scrollBar"
      id="scrollBar"
      class="flex p-0 gap-3 items-start overflow-x-auto scrollbar-hide"
    >
      <slot></slot>
    </div>
    <button
      class="absolute inset-y-0 right-0 bg-blue-600 w-6 h-6"
      @click="scrollRight"
    >
      R
    </button>
    <button
      class="absolute inset-y-0 left-0 bg-blue-600 w-6 h-6"
      @click="scrollLeft"
    >
      L
    </button>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  active: Boolean,
})
</script>
<template>
  <button
    class="shadow-lg px-8 py-4 rounded-full"
    :class="{ 'bg-blue-500': props.active, 'text-white': props.active }"
  >
    <slot></slot>
  </button>
</template>

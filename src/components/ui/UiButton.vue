<script lang="ts" setup>
defineProps({
  active: {
    type: Boolean,
    default: false,
  },

  disabled: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <button
    :disabled="disabled"
    class="shadow-lg px-4 py-4 rounded-full"
    :class="{ 'bg-blue-500': active, 'text-white': active }"
  >
    <slot></slot>
  </button>
</template>

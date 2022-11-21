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
    class="shadow-lg w-12 h-12 bg-white items-center hover:bg-gray-100 focus:ring-2 focus:z-10 focus:ring-slate-400 focus:outline-none"
  >
    <slot></slot>
  </button>
</template>

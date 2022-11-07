<script setup lang="ts">
defineProps({
  disabled: {
    type: Boolean,
    default: false,
  },

  notification: {
    type: Number,
  },

  icon: {
    type: Object,
  },
})
</script>

<template>
  <button :disabled="disabled">
    <component
      v-if="icon"
      :is="icon"
      role="img"
      class="m-auto mr-2"
    ></component>
    <span class="m-auto font-semibold">
      <slot></slot>
    </span>
    <div
      v-if="notification"
      class="m-auto mx-1 rounded bg-red-500 px-2 text-white"
    >
      {{ notification }}
    </div>
  </button>
</template>

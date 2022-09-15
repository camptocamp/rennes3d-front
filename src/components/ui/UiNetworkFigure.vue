<script setup lang="ts">
const props = defineProps({
  number: Number,
  description: String,
  unit: String,
})
</script>
<template>
  <div class="w-32 h-24">
    <div class="text-black font-bold font-poppins not-italic leading-none">
      <span class="text-4xl px-1">{{ props.number }}</span>
      <span class="text-base px-1">{{ props.unit }}</span>
    </div>
    <div
      class="text-base text-black font-medium font-poppins not-italic leading-none"
    >
      {{ props.description }}
    </div>
  </div>
</template>

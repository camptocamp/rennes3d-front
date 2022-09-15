<script setup lang="ts">
const props = defineProps({
  newDuration: Number,
  oldDuration: Number,
  lineNumber: String,
  startStation: String,
  endStation: String,
})
</script>
<template>
  <span>
    <div>{{ props.newDuration }} min</div>
    <div>au lie de {{ props.oldDuration }}</div>
  </span>
  <span> {{ props.lineNumber }} </span>
  <span> {{ props.startStation }}</span>
  <span> {{ props.endStation }}</span>
  <div class="w-32 h-24"></div>
</template>

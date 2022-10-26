<script setup lang="ts">
const props = defineProps({
  name: String,
  station: String,
  address: String,
  place: Number,
})
</script>
<template>
  <div class="flex flex-row">
    <div>Icon</div>
    <div class="flex flex-col">
      <div>{{ props.name }}</div>
      <div>{{ props.station }}</div>
      <div>{{ props.address }}</div>
    </div>
    <div class="flex flex-col">
      <div>{{ props.place }}</div>
      <div>places</div>
    </div>
  </div>
</template>

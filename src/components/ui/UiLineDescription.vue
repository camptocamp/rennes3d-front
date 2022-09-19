<script setup lang="ts">
const props = defineProps({
  id: Number,
  name: String,
  start: String,
  end: String,
  frequency: Number,
})
</script>
<template>
  <div>
    <div>{{ props.id }}</div>
    <div>
      <div>{{ props.name }}</div>
      <div>{{ props.start }} -> {{ props.end }}</div>
    </div>
    <div>
      <div>Toutes les</div>
      <div>{{ props.frequency }} min</div>
    </div>
  </div>
</template>

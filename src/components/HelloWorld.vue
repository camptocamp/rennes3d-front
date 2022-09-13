<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<template>
  <h1 class="text-xl font-bold text-red-400">{{ msg }}</h1>
</template>

<style scoped></style>

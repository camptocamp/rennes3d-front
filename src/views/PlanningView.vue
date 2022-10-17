<script setup lang="ts">
import OLMapComponent from '../components/map/OLMapComponent.vue'
</script>

<template>
  <main class="h-screen flex flex-col">
    <div class="h-1/6 p-4 bg-white flex flex-col gap-2"></div>
    <div class="flex grow relative">
      <OLMapComponent></OLMapComponent>
    </div>
  </main>
</template>

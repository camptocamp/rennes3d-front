<script setup lang="ts">
import MapButton from '../components/ui/MapButton.vue'
</script>

<template>
  <header></header>
  <main class="h-screen flex">
    <div class="w-72 p-4 bg-blue-300"></div>
    <div class="grow p-4 relative">
      <HelloWorld msg="The home" />
      <MapButton class="absolute right-2 top-0"> metro </MapButton>
      <MapButton class="absolute right-32 top-0"> bus </MapButton>
      <MapButton class="absolute right-64 top-0"> tram </MapButton>
    </div>
  </main>
</template>

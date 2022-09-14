<script setup lang="ts">
import TransportButtons from '../components/map/TransportButtons.vue'
import HelloWorld from '../components/HelloWorld.vue'
</script>

<template>
  <header></header>
  <main class="h-screen flex">
    <div class="w-72 p-4 bg-blue-300"></div>
    <div class="grow p-4 relative">
      <HelloWorld msg="The home" />
      <div class="absolute right-2 top-2">
        <TransportButtons></TransportButtons>
      </div>
    </div>
  </main>
</template>

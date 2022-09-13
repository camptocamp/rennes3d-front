<script setup lang="ts">
import HelloWorld from '../components/HelloWorld.vue'
</script>

<template>
  <header></header>
  <main class="h-screen flex">
    <div class="w-72 p-4 bg-blue-300"></div>
    <div class="p-4"><HelloWorld msg="The map" /></div>
  </main>
</template>

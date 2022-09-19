<script setup lang="ts">
import TransportButtons from '../components/map/TransportButtons.vue'
import HelloWorld from '../components/HelloWorld.vue'
import NetworkFigures from '../components/home/NetworkFigures.vue'
// import LineDescriptions from '../components/home/LineDescriptions.vue'
// import TravelTimes from '../components/home/TravelTimes.vue'
</script>

<template>
  <header></header>
  <main class="h-screen flex">
    <div class="w-72 p-4 bg-blue-300">
      <div class="">
        <NetworkFigures></NetworkFigures>
      </div>
    </div>
    <div class="grow p-4 relative">
      <HelloWorld msg="The home" />
      <div class="absolute right-2 top-2">
        <TransportButtons></TransportButtons>
      </div>
      <!-- <div><TravelTimes></TravelTimes></div>
      <div><LineDescriptions></LineDescriptions></div> -->
    </div>
  </main>
</template>

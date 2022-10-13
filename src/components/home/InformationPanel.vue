<script lang="ts" setup>
import LineDescriptions from './LineDescriptions.vue'
import TravelTimes from './TravelTimes.vue'
import UiTrambusTitle from '../ui/UiTrambusTitle.vue'
import UiRennesLogo from '../ui/UiRennesLogo.vue'
import NetworkFigures from './NetworkFigures.vue'
</script>

<template>
  <UiTrambusTitle></UiTrambusTitle>
  <NetworkFigures></NetworkFigures>
  <TravelTimes></TravelTimes>
  <LineDescriptions></LineDescriptions>
  <UiRennesLogo></UiRennesLogo>
</template>

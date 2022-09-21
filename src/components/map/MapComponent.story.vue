<script lang="ts" setup>
import MapComponent from './MapComponent.vue'
</script>

<template>
  <Story
    title="Map"
    :layout="{
      type: 'grid',
      width: 400,
    }"
    group="map"
  >
    <template #default>
      <MapComponent>test</MapComponent>
    </template>
  </Story>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import initMap from '../../services/vcmap'

defineProps<{ msg: string }>()
onMounted(() => {
  initMap(false, { x: -1.67, y: 48.1147, z: 16000, pitch: -10 }, 'map')
})
</script>

<template>
  <div
    id="map"
    class="map_container absolute overflow-hidden flex-1 inset-0 bg-white"
  ></div>
</template>

<style scoped>
.map_container {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 8 8'%3E%3Cg fill='%23acacac' fill-opacity='0.4'%3E%3Cpath fill-rule='evenodd' d='M0 0h4v4H0V0zm4 4h4v4H4V4z'/%3E%3C/g%3E%3C/svg%3E");
}

:deep(.mapElement) {
  height: calc(100vh - 5rem);
  flex: 1;
  overflow: hidden;
}
</style>

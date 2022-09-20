<script setup lang="ts">
import { onMounted, ref } from 'vue'
import initMap from '../../services/vcmap'

onMounted(() => {
  initMap(false, { x: -1.67, y: 48.1147, z: 16000, pitch: -10 }, 'map')
})

const is3d = ref(true)

const toggle3d = () => {
  initMap(is3d.value, { x: -1.67, y: 48.1147, z: 16000, pitch: -10 }, 'map')
  is3d.value = !is3d.value
}

</script>

<template>
  <div
    id="map"
    class="map_container absolute overflow-hidden flex-1 inset-0 bg-white"
  >
  </div>
  <div class="z-10 absolute  p-2 bottom-24 right-6 bg-white rounded-full cursor-pointer shadow-md" @click="toggle3d">
      {{ is3d ? "3D" : "2D" }}
  </div>  
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

:deep(.cesium-widget) {
  height: 100%;
  width: 100%;
  position: relative;
}

    :deep(.cesium-widget canvas) {
      overflow: hidden;
      height: 100%;
      width: 100%;
      touch-action: none;
    }
</style>

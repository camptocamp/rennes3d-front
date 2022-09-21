<script setup lang="ts">
import { onMounted } from 'vue'
import setup from '../../services/map'

defineProps({
  is3D: {
    type: Boolean,
    default: false,
  },
})

onMounted(() => {
  setup()
})
</script>
<template>
  <div
    id="map2D"
    class="overflow-hidden flex-1 bg-black h-full"
    :class="{ hidden: is3D }"
  ></div>
  <div
    id="map3D"
    class="overflow-hidden flex-1 bg-black h-full"
    :class="{ hidden: !is3D }"
  ></div>
</template>

<style scoped>
#map2D :deep(.mapElement) {
  height: 100%;
}
#map3D :deep(.mapElement) {
  height: 100%;
}
</style>

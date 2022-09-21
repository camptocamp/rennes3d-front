<script setup lang="ts">
import { onMounted } from 'vue'
import setup from '../../services/map'

onMounted(() => {
  setup()
})
</script>
<template>
  <div id="target-2D" class="overflow-hidden flex-1 bg-black h-full"></div>
  <div
    id="target-3D"
    class="overflow-hidden flex-1 bg-black h-full hidden"
  ></div>
</template>

<style scoped>
#target-2D :deep(.mapElement) {
  height: 100%;
}
#target-3D :deep(.mapElement) {
  height: 100%;
}
</style>

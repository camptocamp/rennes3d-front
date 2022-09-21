<script setup lang="ts">
import { onMounted } from 'vue'
import setup from '../../services/map'

onMounted(() => {
  setup()
  // window.context = context
})

// onMounted() {
// const context = await setup();
// this._setFocusedMap = (is3D) => {
//   if (is3D) {
//     context.synchronizer.setFocusedMap(context.mapCollection3D.activeMap);
//   } else {
//     context.synchronizer.setFocusedMap(context.mapCollection2D.activeMap);
//   }
// };
// this.rendering = true;
// },
</script>
<template>
  <div id="target-2D">Map 2D here</div>
  <div id="target-3D">Map 3D here</div>
</template>

<script setup lang="ts">
import type Map from 'ol/Map'
import { inject } from 'vue'
import UiIconButton from '../../ui/UiIconButton.vue'

const olMap = inject('map') as Map

async function zoom(out = false, zoomDistance = 0.5): Promise<void> {
  const view = olMap.getView()
  const zoom = view.getZoom() || view.getMinZoom()
  const amount = out ? -zoomDistance : zoomDistance
  let newZoom = zoom + amount
  if (newZoom >= view.getMaxZoom()) {
    newZoom = view.getMaxZoom()
  }
  if (newZoom <= view.getMinZoom()) {
    newZoom = view.getMinZoom()
  }
  view.animate({ zoom: newZoom })
}
</script>

<template>
  <div
    class="h-90 transition-[height] absolute right-2 bottom-10 flex flex-col [&>*]:m-2 text-gray-dark items-center overflow-hidden w-32 select-none"
  >
    <div class="flex flex-col zoom-buttons text-2xl [&>*]:p-2" role="group">
      <UiIconButton class="rounded-t-lg" @click="() => zoom(false)"
        >+</UiIconButton
      >
      <UiIconButton class="rounded-b-lg" @click="() => zoom(true)"
        >-</UiIconButton
      >
    </div>
  </div>
</template>

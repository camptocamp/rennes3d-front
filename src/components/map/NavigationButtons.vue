<script setup lang="ts">
import { VcsApp, Viewpoint } from '@vcmap/core'
import UiButton from '../ui/UiButton.vue'
import IconHome from '../ui/icons/IconHome.vue'

const props = defineProps({
  vcsApp: {
    type: VcsApp,
  },
})

async function zoom(out = false, zoomFactor = 2): Promise<void> {
  const activeMap = props.vcsApp?.maps?.activeMap
  const viewpoint = await activeMap?.getViewpoint()

  if (activeMap && viewpoint) {
    if (out) {
      viewpoint.distance *= zoomFactor
    } else {
      viewpoint.distance /= zoomFactor
    }

    viewpoint.animate = true
    viewpoint.duration = 0.5
    viewpoint.cameraPosition = [0, 0]

    await activeMap.gotoViewpoint(viewpoint)
  }
}

function is3D(): boolean {
  return props.vcsApp?.maps.activeMap.name === 'cesium'
}

function toggleMap() {
  props.vcsApp?.maps.setActiveMap(is3D() ? 'ol' : 'cesium')
}

async function returnToHome() {
  const activeMap = props.vcsApp?.maps?.activeMap
  const homeViewPoint = new Viewpoint({
    cameraPosition: [-1.7219, 48.09, 30000],
    groundPosition: [-1.7219, 48.09, 30000],
  })

  await activeMap?.gotoViewpoint(homeViewPoint)
}
</script>

<template>
  <div class="absolute right-4 bottom-2 flex flex-col [&>*]:m-2 text-gray-dark">
    <UiButton @click="returnToHome"><IconHome /></UiButton>
    <div
      class="flex flex-col zoom-buttons text-2xl [&>*]:p-2 first:[&>*]:rounded-b-3xl last:[&>*]:rounded-t-3xl"
    >
      <UiButton @click="() => zoom(false)">{{ '+' }}</UiButton>
      <UiButton @click="() => zoom(true)">{{ '-' }}</UiButton>
    </div>
    <UiButton class="font-semibold" @click="toggleMap">{{
      is3D() ? '2D' : '3D'
    }}</UiButton>
  </div>
</template>

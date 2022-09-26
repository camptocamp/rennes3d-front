<script lang="ts" setup>
import {
  MapCollection,
  OpenlayersMap,
  OpenStreetMapLayer,
  Viewpoint,
} from '@vcmap/core'
import { onMounted } from 'vue'

const osm = new OpenStreetMapLayer({ name: 'osmBase' })
const startingViewPoint = new Viewpoint({
  cameraPosition: [8.768696469559748, 50.80547556213949, 344.18806877180543],
  groundPosition: [8.768240344556459, 50.81012228093323, 263.91238143570325],
  pitch: -28,
})

const mapCollection = new MapCollection()
mapCollection.add(
  new OpenlayersMap({ name: 'ol', fixedNorthOrientation: false })
)
mapCollection.layerCollection.add(osm)
await osm.activate()
await mapCollection.setActiveMap('ol')
await mapCollection.activeMap.gotoViewpoint(startingViewPoint)

onMounted(async () => {
  mapCollection.setTarget('map')
})

function initState() {
  return {
    map: mapCollection,
  }
}
</script>

<template>
  <Story
    title="UiMap"
    :layout="{
      type: 'grid',
      width: 200,
    }"
    :init-state="initState"
    group="map"
  >
    <template #default="{ state }">
      <UiMap :map="state.map"></UiMap>
    </template>
  </Story>
</template>

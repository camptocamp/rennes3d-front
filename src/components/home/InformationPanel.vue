<script lang="ts" setup>
import LineDescriptions from './LineDescriptions.vue'
import TravelTimes from './TravelTimes.vue'
import UiTrambusTitle from '../ui/UiTrambusTitle.vue'
import UiRennesLogo from '../ui/UiRennesLogo.vue'
import NetworkFigures from './NetworkFigures.vue'
import { usePanelsStore } from '@/stores/panels'

const panelStore = usePanelsStore()
function toggleInformationPanel() {
  panelStore.toggleInformationPanel()
}
</script>

<template>
  <div class="flex flex-row">
    <div
      class="p-4 bg-white flex flex-col gap-2 max-w-full"
      :class="{ hidden: !panelStore.isInformationPanelShown }"
    >
      <UiTrambusTitle></UiTrambusTitle>
      <NetworkFigures></NetworkFigures>
      <TravelTimes></TravelTimes>
      <LineDescriptions></LineDescriptions>
      <UiRennesLogo></UiRennesLogo>
    </div>
    <div @click="toggleInformationPanel" class="mt-16 max-h-0">
      <button>X</button>
    </div>
  </div>
</template>

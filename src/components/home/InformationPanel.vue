<script lang="ts" setup>
import LineDescriptions from './LineDescriptions.vue'
import TravelTimes from './TravelTimes.vue'
import UiTrambusTitle from '../ui/UiTrambusTitle.vue'
import UiRennesLogo from '../ui/UiRennesLogo.vue'
import NetworkFigures from './NetworkFigures.vue'
import { usePanelsStore } from '@/stores/panels'

import { ChevronRightIcon } from '@heroicons/vue/20/solid'
import { ChevronLeftIcon } from '@heroicons/vue/20/solid'

const panelStore = usePanelsStore()
function toggleInformationPanel() {
  panelStore.toggleInformationPanel()
}
</script>

<template>
  <div class="flex flex-row shadow-sm">
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
    <div class="relative max-h-0 top-28">
      <button
        @click="toggleInformationPanel"
        class="w-7 h-11 gap-4 bg-white rounded-r-xl"
      >
        <ChevronLeftIcon
          :class="{ hidden: !panelStore.isInformationPanelShown }"
        ></ChevronLeftIcon>
        <ChevronRightIcon
          :class="{ hidden: panelStore.isInformationPanelShown }"
        ></ChevronRightIcon>
      </button>
    </div>
  </div>
</template>

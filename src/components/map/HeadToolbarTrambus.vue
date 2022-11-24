<script setup lang="ts">
import UiButton from '@/components/ui/UiButton.vue'
import UiIconButton from '@/components/ui/UiIconButton.vue'
import IconCalendar from '@/components/ui/icons/IconCalendar.vue'
import IconVelo from '@/components/ui/icons/logo-transports-icons/IconVelo.vue'
import IconBus from '@/components/ui/icons/logo-transports-icons/IconBus.vue'
import IconMetro from '@/components/ui/icons/logo-transports-icons/IconMetro.vue'

import { usePanelsStore } from '@/stores/panels'
import { useLayersStore } from '@/stores/layers'
import type { TransportLayers } from '@/stores/layers'
import LoginButtons from '@/components/map/buttons/LoginButtons.vue'

const panelStore = usePanelsStore()
const layerStore = useLayersStore()

function onPlanningButtonClicked() {
  panelStore.isPlanningViewShown = true
  panelStore.hasPlanningViewRendered = true
}

function toggleLayer(name: TransportLayers) {
  layerStore.toggleLayer(name)
}
</script>

<template>
  <div class="absolute right-2 top-2 z-10 flex [&>*]:m-1">
    <div class="inline-flex shadow-sm rounded-md" role="group">
      <UiIconButton
        @click="() => toggleLayer('metro')"
        :active="layerStore.visibilities.metro"
        type="button"
        class="rounded-l-lg px-3 py-3 border border-gray-200 bg-white text-gray-900 inline-flex items-center"
      >
        <IconMetro
          class="w-5"
          :active="layerStore.visibilities.metro"
        ></IconMetro>
      </UiIconButton>
      <UiIconButton
        @click="() => toggleLayer('bus')"
        :active="layerStore.visibilities.bus"
        type="button"
        class="border-t px-3 py-3 border-b border-gray-200 bg-white text-gray-900 inline-flex items-center"
      >
        <IconBus :active="layerStore.visibilities.bus"></IconBus>
      </UiIconButton>
      <UiIconButton
        @click="() => toggleLayer('bike')"
        :active="layerStore.visibilities.bike"
        type="button"
        class="rounded-r-md px-3 py-3 border border-gray-200 bg-white text-gray-900 inline-flex items-center"
      >
        <IconVelo :active="layerStore.visibilities.bike"></IconVelo>
      </UiIconButton>
    </div>
    <UiButton
      class="ui-btn-floating ui-btn-regular-size"
      @click="onPlanningButtonClicked"
      :icon="IconCalendar"
      :disabled="false"
    >
      Planning du projet
    </UiButton>
    <LoginButtons> </LoginButtons>
  </div>
</template>

<script lang="ts" setup>
import { usePanelsStore } from '@/stores/panels'
import UiPanelControlButton from '@/components/ui/UiPanelControlButton.vue'

const panelStore = usePanelsStore()
function toggleInformationPanel() {
  panelStore.toggleInformationPanel()
}
</script>

<template>
  <div class="flex shadow-sm min-h-screen">
    <div
      class="px-6 py-8 bg-white flex flex-col gap-2 w-[450px] max-h-screen overflow-y-auto scrollbar-hide"
      :class="{ hidden: !panelStore.isInformationPanelShown }"
    >
      <slot></slot>
    </div>
    <div class="relative max-h-0 top-28">
      <UiPanelControlButton
        :anchor-position="'left'"
        :is-open="panelStore.isInformationPanelShown"
        @click="toggleInformationPanel"
      ></UiPanelControlButton>
    </div>
  </div>
</template>

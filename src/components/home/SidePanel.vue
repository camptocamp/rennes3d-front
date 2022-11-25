<script lang="ts" setup>
import { usePanelsStore } from '@/stores/panels'
import arrowLeftLine from '@/assets/icons/arrow-left-line.svg'
import arrowRightLine from '@/assets/icons/arrow-right-line.svg'

const panelStore = usePanelsStore()
function toggleInformationPanel() {
  panelStore.toggleInformationPanel()
}
</script>

<template>
  <div class="flex shadow-sm w-[450px] min-h-screen">
    <div
      class="px-6 py-8 bg-white flex flex-col gap-2 max-w-full"
      :class="{ hidden: !panelStore.isInformationPanelShown }"
    >
      <slot></slot>
    </div>
    <div class="relative max-h-0 top-28">
      <button
        @click="toggleInformationPanel"
        class="w-7 h-11 gap-4 bg-white rounded-r-xl"
      >
        <img
          :src="arrowLeftLine"
          :class="{ hidden: !panelStore.isInformationPanelShown }"
        />
        <img
          :src="arrowRightLine"
          :class="{ hidden: panelStore.isInformationPanelShown }"
        />
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { usePanelsStore } from '@/stores/panels'

import { ChevronRightIcon } from '@heroicons/vue/20/solid'
import { ChevronLeftIcon } from '@heroicons/vue/20/solid'

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

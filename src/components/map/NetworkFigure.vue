<script setup lang="ts">
import { ref } from 'vue'
import UiNetworkFigure from '../ui/UiNetworkFigure.vue'

const newLines = ref(7)
const newStations = ref(129)
const bikePathCreated = ref(128)
</script>

<template>
  <div class="flex flex-row">
    <UiNetworkFigure
      :number="newLines"
      :description="'Nouvelles lignes'"
      class="basis-1/3"
    >
    </UiNetworkFigure>
    <UiNetworkFigure
      :number="newStations"
      :description="'Nouvelles stations'"
      class="basis-1/3"
    >
    </UiNetworkFigure>
    <UiNetworkFigure
      :number="bikePathCreated"
      :unit="'km'"
      :description="'Pistes cyclables crées'"
      class="basis-1/3"
    >
    </UiNetworkFigure>
  </div>
</template>

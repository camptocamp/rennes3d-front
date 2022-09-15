<script setup lang="ts">
import { ref } from 'vue'
import UiNetworkFigure from '../ui/UiNetworkFigure.vue'

const number = ref(128)
const unit = ref('km')
const description = ref('Pistes cyclables crées')
</script>

<template>
  <UiNetworkFigure :number="number" :unit="unit" :description="description">
  </UiNetworkFigure>
</template>

<script lang="ts" setup>
import UiTrambusLogo from './UiTrambusLogo.vue'
import NetworkFigures from '@/components/home/NetworkFigures.vue'
</script>

<template>
  <section class="flex flex-col p-0 gap-3 font-dm-sans">
    <div class="flex items-center p-0 gap-2.5">
      <UiTrambusLogo class="h-14 w-14"></UiTrambusLogo>
      <div class="font-bold text-3xl text-center">Réseau Trambus</div>
    </div>
    <div class="font-medium text-sm text-neutral-800">
      Découvrez et contribuez au futur réseau de transport de Rennes Métropole
    </div>
    <NetworkFigures></NetworkFigures>
  </section>
</template>

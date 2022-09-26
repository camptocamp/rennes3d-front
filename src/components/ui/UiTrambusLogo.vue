<script lang="ts" setup>
import trambusLogo from '@/assets/icons/trambusLogo.png'
</script>

<template>
  <div class="flex flex-col items-start p-0 gap-2 w-4/5 h-28">
    <div class="flex flex-row items-start p-0 gap-2 w-full h-14">
      <div class="h-14 w-14 flex flex-col justify-center">
        <img :src="trambusLogo" />
      </div>
      <div
        class="font-poppins font-bold text-4xl w-80 h-14 justify-center flex flex-col"
      >
        Reseau Trambus
      </div>
    </div>
    <div class="font-poppins font-light text-base leading-6">
      Découvrez et contribuez au futur réseau de transport de Rennes Métropole
    </div>
  </div>
</template>

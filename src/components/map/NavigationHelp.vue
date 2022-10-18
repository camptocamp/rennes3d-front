<script setup lang="ts">
import { onUnmounted } from 'vue'
import compassIllustration from '@/assets/illustrations/compass_illustration.png'

onUnmounted(() => {
  sessionStorage.setItem('nav-help-displayed', 'true')
})
</script>

<template>
  <div
    class="nav-help-container absolute w-65 bottom-24 right-36 flex bg-white rounded p-2 shadow-lg border-2 border-black"
  >
    <div class="w-48">
      <p class="text-sm text-gray-dark">Indications</p>
      <div
        class="border-l-2 border-[#b91c1c] pl-4 [&>*]:mt-2 text-[#b91c1c] font-medium"
      >
        <h2>BOUSSOLE</h2>
        <p>Cliquer + glisser pour incliner le plan (= Tilt down/up)</p>
        <p>Clic dessus pour revenir en vue de dessus</p>
      </div>
    </div>
    <img class="w-24 h-48" :src="compassIllustration" />
  </div>
</template>

<style scoped>
.nav-help-container {
  animation: navHelpInit 150ms;
}

@keyframes navHelpInit {
  0% {
    right: 5rem;
  }
  100% {
    right: 9rem;
  }
}
</style>

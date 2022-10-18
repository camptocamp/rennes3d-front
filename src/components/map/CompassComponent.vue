<script setup lang="ts">
import { VcsApp } from '@vcmap/core'
import { ref } from 'vue'

const props = defineProps({
  vcsApp: {
    type: VcsApp,
  },
})

const compass = ref(null)
const arrow = ref(null)

// Dirty hack: ts triggers a unused-vars false positive
// eslint-disable-next-line no-unused-vars
const trackMouse = (callback: (e: MouseEvent) => Promise<void>) => {
  document.body.addEventListener('mousemove', callback)
  document.body.addEventListener('mouseup', () => {
    document.body.removeEventListener('mousemove', callback)
  })
}

function onNorthPointClick() {
  if (!compass.value || !arrow.value) return
  const { top, left, height, width } = compass.value.getBoundingClientRect()

  const compassPos = {
    x: left + width / 2,
    y: top + height / 2,
  }

  trackMouse(async (e) => {
    const radians = Math.atan2(
      e.clientY - compassPos.y,
      e.clientX - compassPos.x
    )
    const angle = (180 / Math.PI) * radians + 90
    compass.value.style.transform = `rotate(${Math.round(angle)}deg)`
    arrow.value.style.transform = `rotate(${Math.round(-angle)}deg)`
    await headingMap(angle)
  })
}

function onCompassClick() {
  if (!arrow.value) return
  const { top, height } = arrow.value.getBoundingClientRect()
  const yPos = top + height / 2

  trackMouse(async (e) => {
    const speed = 0.5
    const tilt = (yPos - e.clientY) * speed - 90
    if (tilt < -90 || tilt > 0) {
      return
    }
    arrow.value.style.height = `${10 - tilt * 0.6}px`
    await tiltingMap(tilt)
  })
}

const headingMap = async (heading: number) => {
  const vp = await props.vcsApp?.maps?.activeMap.getViewpoint()
  if (vp) {
    vp.heading = heading
    props.vcsApp?.maps?.activeMap.gotoViewpoint(vp)
  }
}

const tiltingMap = async (pitch: number) => {
  const vp = await props.vcsApp?.maps?.activeMap.getViewpoint()
  if (vp) {
    vp.pitch = pitch
    props.vcsApp?.maps?.activeMap.gotoViewpoint(vp)
  }
}
</script>

<template>
  <div
    ref="compass"
    class="orbit h-[100px] w-[100px] border-4 border-white rounded-full flex justify-center items-center absolute bottom-0 shadow-sm"
  >
    <div
      class="h-[13px] w-[10px] flex justify-center items-center text-xs bg-black text-white absolute bottom-[87px] cursor-pointer rounded-sm"
      @mousedown="onNorthPointClick"
    >
      N
    </div>
    <div
      ref="arrow"
      class="h-[70px] w-[70px] bg-white rounded-[100%] z-10 cursor-pointer flex justify-center items-center text-black text-xs shadow"
      @mousedown="onCompassClick"
    ></div>
  </div>
</template>

<style scoped>
.orbit {
  animation: compassInit 150ms;
}

@keyframes compassInit {
  0% {
    height: 10px;
    width: 10px;
  }

  100% {
    height: 100px;
    width: 100px;
  }
}
</style>

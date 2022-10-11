<script setup lang="ts">
import { VcsApp } from '@vcmap/core'
import IconCompass from '../ui/icons/IconCompass.vue'

const props = defineProps({
  vcsApp: {
    type: VcsApp,
  },
})

const trackMouse = (callback: (e: any) => Promise<void>) => {
  document.body.addEventListener('mousemove', callback)
  document.body.addEventListener('mouseup', () => {
    document.body.removeEventListener('mousemove', callback)
  })
}

function onNorthPointClick(e) {
  const compass = e.target.parentElement
  const arrow = compass.lastChild
  const { top, left, height, width } = compass.getBoundingClientRect()
  let mouseInside = true
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
    compass.style.transform = `rotate(${Math.round(angle)}deg)`
    arrow.style.transform = `rotate(${Math.round(-angle)}deg)`
    await headingMap(angle)
  })
}

function onCompassClick(e) {
  const compass = e.target
  const { top, height } = compass.getBoundingClientRect()
  const yPos = top + height / 2

  trackMouse(async (e) => {
    if (e.clientY - yPos > 70 || e.clientY - yPos < 10) {
      return
    }
    compass.style.height = e.clientY - yPos + 'px'
    await tiltingMap(e.clientY - yPos)
  })
}

const headingMap = async (heading: number) => {
  const vp = await props.vcsApp.maps?.activeMap.getViewpoint()
  vp.heading = heading
  props.vcsApp.maps?.activeMap.gotoViewpoint(vp)
}

const tiltingMap = async (pitch: number) => {
  const vp = await props.vcsApp.maps?.activeMap.getViewpoint()
  vp.pitch = pitch
  props.vcsApp.maps?.activeMap.gotoViewpoint(vp)
}
</script>

<template>
  <div class="orbit">
    <div class="north-point" @mousedown="onNorthPointClick">N</div>
    <div class="compass" @mousedown="onCompassClick"></div>
  </div>
</template>

<style scoped>
/* temporary in css, tailwind will be used instead  */
.orbit {
  height: 100px;
  width: 100px;
  border-radius: 100%;
  border: 5px white solid;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.5) 0px 1px 4px;
  position: absolute;
  bottom: 0;
  animation: compassInit 150ms;
}
.north-point {
  height: 13px;
  width: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.7rem;
  background: black;
  color: white;
  position: absolute;
  bottom: 87px;
  cursor: pointer;
  border-radius: 3px;
}
.compass {
  height: 70px;
  width: 70px;
  background-color: white;
  border-radius: 100%;
  z-index: 100;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  font-size: 0.8rem;
  box-shadow: rgba(0, 0, 0, 0.5) 0px 1px 4px;
  perspective: 1000px;
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

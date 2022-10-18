<script setup lang="ts">
import { VcsApp, VcsMap } from '@vcmap/core'
import { onMounted, ref } from 'vue'

const props = defineProps({
  vcsApp: {
    type: VcsApp,
  },
})

const compass = ref(null)
const arrow = ref(null)

onMounted(() => {
  syncCompass(props.vcsApp?.maps?.activeMap)
})

function syncCompass(map: VcsMap) {
  return map.postRender.addEventListener(({ map }) => {
    const vp = map.getViewpointSync()
    if (vp && vp.isValid()) {
      transformArrow(vp.pitch)
      transformNorthPoint(vp.heading)
    }
  })
}

const trackMouse = (
  // Dirty hack: eslint triggers a unused-vars false positive
  // eslint-disable-next-line no-unused-vars
  callback: (e: MouseEvent) => Promise<void>,
  endCallback: Function = () => {}
) => {
  document.body.addEventListener('mousemove', callback)
  document.body.addEventListener('mouseup', () => {
    document.body.removeEventListener('mousemove', callback)
    endCallback()
  })
}

function onNorthPointClick() {
  if (!compass.value || !arrow.value) return
  const ts = Date.now()
  const { top, left, height, width } = compass.value.getBoundingClientRect()

  const compassPos = {
    x: left + width / 2,
    y: top + height / 2,
  }

  trackMouse(
    async (e) => {
      const radians = Math.atan2(
        e.clientY - compassPos.y,
        e.clientX - compassPos.x
      )
      const angle = (180 / Math.PI) * radians + 90
      transformNorthPoint(angle)
      await headingMap(angle)
    },
    () => {
      if (Date.now() - ts < 50) {
        headingMap(0, true)
      }
    }
  )
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
    transformArrow(tilt)
    await tiltingMap(tilt)
  })
}

const headingMap = async (heading: number, animate = false) => {
  const vp = await props.vcsApp?.maps?.activeMap.getViewpoint()
  if (vp) {
    vp.heading = heading
    vp.animate = animate
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

const transformNorthPoint = (angle: number) => {
  if (compass.value && arrow.value) {
    angle = Math.round(angle)
    compass.value.style.transform = `rotate(${angle}deg)`
    arrow.value.style.transform = `rotate(${-angle}deg)`
  }
}

const transformArrow = (tilt: number) => {
  if (arrow.value) {
    tilt = Math.round(tilt)
    arrow.value.style.height = `${10 - tilt * 0.6}px`
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

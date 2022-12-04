import { ref } from 'vue'
import type { Ref } from 'vue'
import { defineStore } from 'pinia'
import type { Feature } from 'ol'
import type { Point } from 'ol/geom'
import {
  type StationsModel,
  getStationModelFromFeature,
} from '@/model/stations.model'

export const useStationsStore = defineStore('stores', () => {
  const selectedStation: Ref<StationsModel | null> = ref(null)

  function selectStation(stationFeature?: Feature<Point>) {
    selectedStation.value = stationFeature
      ? getStationModelFromFeature(stationFeature)
      : null
  }

  return { selectStation, selectedStation }
})

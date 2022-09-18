import { networkFiguresFixtures } from '@/model/network-figures.fixtures'
import { travelTimeFixtures } from '@/model/travel-time.fixtures'
import type { TravelTimeModel } from '@/model/travel-time.model'
import type { NetworkFigureModel } from '../model/network-figures.model'

class ApiClientService {
  async fetchNetworkFigure() {
    return new Promise<NetworkFigureModel[]>((resolve) => {
      resolve(networkFiguresFixtures())
    })
  }
  async fetchTravelTime() {
    return new Promise<TravelTimeModel[]>((resolve) => {
      resolve(travelTimeFixtures())
    })
  }
}

export const apiClientService = new ApiClientService()

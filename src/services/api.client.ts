import { networkFiguresFixtures } from '@/model/network-figures.fixtures'
import type { NetworkFigureModel } from '../model/network-figures.model'

class ApiClientService {
  async fetchNetworkFigure() {
    return new Promise<NetworkFigureModel[]>((resolve) => {
      resolve(networkFiguresFixtures())
    })
  }
}

export const apiClientService = new ApiClientService()

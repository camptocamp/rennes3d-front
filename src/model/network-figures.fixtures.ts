import type { NetworkFigureModel } from './network-figures.model'

export const networkFiguresFixtures = (): NetworkFigureModel[] => [
  {
    id: 'lines',
    figure: 7,
    description: 'Nouvelles lignes',
  },
  {
    id: 'stations',
    figure: 129,
    description: 'Nouvelles stations',
  },
  {
    id: 'bike',
    figure: 128,
    description: 'Pistes cyclables crées',
    unit: 'km',
  },
]

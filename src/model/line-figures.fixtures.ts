import type { LineFigureModel } from './line-figures.model'

export const lineFiguresFixtures = (): LineFigureModel[] => [
  {
    id: 'station',
    figure: 23,
    description: 'Stations',
  },
  {
    id: 'parking',
    figure: 2,
    description: 'Parking relais',
  },
  {
    id: 'frequency',
    figure: 8,
    description: 'Fréquence',
    unit: 'min',
    moreInformation: 'Fréquence théorique en Heure de Pointe du matin',
  },
]

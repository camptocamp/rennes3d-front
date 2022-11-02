import type { NetworkFigureModel } from './network-figures.model'
import bikeIcon from '../assets/icons/bike.svg'
import linesIcon from '../assets/icons/lines.svg'
import stationIcon from '../assets/icons/station.svg'

export const networkFiguresFixtures = (): NetworkFigureModel[] => [
  {
    id: 'lines',
    figure: 7,
    description: 'Nouvelles lignes',
    icon: linesIcon,
  },
  {
    id: 'stations',
    figure: 129,
    description: 'Nouvelles stations',
    icon: stationIcon,
  },
  {
    id: 'bike',
    figure: 128,
    description: 'Aménagement cyclables',
    unit: 'km',
    icon: bikeIcon,
  },
]

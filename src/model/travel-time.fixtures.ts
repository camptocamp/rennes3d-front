import type { TravelTimeModel } from './travel-time.model'

export const travelTimeFixtures = (): TravelTimeModel[] => [
  {
    line: 1,
    new: 15,
    old: 40,
    start: 'JF Kennedy',
    end: 'Brécé',
  },
  {
    line: 1,
    new: 8,
    old: 32,
    start: 'JF Kennedy',
    end: 'Brécé',
  },
  {
    line: 2,
    new: 5,
    old: 15,
    start: 'JF Kennedy',
    end: 'Brécé',
  },
]

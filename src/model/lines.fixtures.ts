import type { LineModel } from './lines.model'

export const linesFixtures = (): LineModel[] => [
  {
    id: 1,
    name: 'Ligne T1',
    start: 'Stade Rennais',
    end: 'Brécé',
    frequency: 7,
  },
  {
    id: 2,
    name: 'Ligne T2',
    start: 'Stade Rennais',
    end: 'Brécé',
    frequency: 5,
  },
  {
    id: 3,
    name: 'Ligne T3',
    start: 'Stade Rennais',
    end: 'Brécé',
    frequency: 7,
  },
  {
    id: 4,
    name: 'Ligne T4',
    start: 'Stade Rennais',
    end: 'Brécé',
    frequency: 7,
  },
]

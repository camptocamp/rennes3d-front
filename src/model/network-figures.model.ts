export type NetworkFigureTypes = 'lines' | 'stations' | 'bike'
export interface NetworkFigureModel {
  id: NetworkFigureTypes
  figure: number
  unit?: string
  description: string
  icon?: string
  moreInformation?: string
}

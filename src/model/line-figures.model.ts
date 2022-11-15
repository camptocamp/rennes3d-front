export type LineFigureTypes = 'station' | 'parking' | 'frequency'
export interface LineFigureModel {
  id: LineFigureTypes
  figure: number
  unit?: string
  description: string
  icon?: string
  moreInformation?: string
}

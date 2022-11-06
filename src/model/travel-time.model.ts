import type { LineNumber } from './lines.model'
export interface TravelTimeModel {
  line: LineNumber
  new: number
  old: number
  start: string
  end: string
}

import type { LineNumber } from '@/model/lines.model'

export const lineColors = {
  1: 'indigo',
  2: 'pink',
  3: 'emerald',
  4: 'purple',
}

export function getColor(
  colorType: String,
  lineNumber: LineNumber,
  variant: Number
): string {
  return `${colorType}-${lineColors[lineNumber]}-${variant}`
}

import type { LineNumber } from '@/model/lines.model'
import type { Feature } from 'ol'
import type { Geometry } from 'ol/geom'

export interface StationsModel {
  id: number
  version: string
  trace_type: string // FIXME this is probably an enum
  li_code: LineNumber
  nom: string
}

function lineCodeFromString(stringLineCode: string): LineNumber {
  if (stringLineCode === 'T1') {
    return 1
  }

  if (stringLineCode === 'T2') {
    return 2
  }

  if (stringLineCode === 'T3') {
    return 3
  }

  return 4
}
export function getStationModelFromFeature(
  feature: Feature<Geometry>
): StationsModel {
  const properties = feature.getProperties()
  return {
    id: properties.id,
    version: properties.version,
    trace_type: properties.trace_type,
    li_code: lineCodeFromString(properties.li_code),
    nom: properties.nom,
  }
}

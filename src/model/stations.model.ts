import type { LineNumber } from '@/model/lines.model'
import type { Feature } from 'ol'
import type { Point } from 'ol/geom'
import type { Coordinate } from 'ol/coordinate'

export interface StationsModel {
  id: number
  version: string
  trace_type: string // FIXME this is probably an enum
  li_code: LineNumber
  nom: string
  position: Coordinate
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
  feature: Feature<Point>
): StationsModel {
  const properties = feature.getProperties()
  const geometry = feature.getGeometry()
  if (!geometry) {
    throw new Error('Cannot set station from a Feature without a geometry')
  }

  return {
    id: properties.id,
    version: properties.version,
    trace_type: properties.trace_type,
    li_code: lineCodeFromString(properties.li_code),
    nom: properties.nom,
    position: geometry.getCoordinates(),
  }
}

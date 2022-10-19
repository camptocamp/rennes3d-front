import type { VectorLayer, OpenlayersMap } from '@vcmap/core'
import { Projection } from '@vcmap/core'
import type { Feature, Map as olMap } from 'ol'
import { NearFarScalar, Math as CesiumMath } from '@vcmap/cesium'

/**
 * Calculates the camera distance based on the current viewport, view and resolution
 * @param {number} resolution
 * @param {import("ol").Map} map
 */
function getDistanceFromResolution(resolution: number, map: olMap): number {
  const viewport = map.getViewport()
  const size = {
    height: viewport.offsetHeight || 1,
    width: viewport.offsetWidth || 1,
  }
  const fov = Math.PI / 3.0
  const aspectRatio = size.width / size.height
  const fovy = Math.atan(Math.tan(fov * 0.5) / aspectRatio) * 2.0
  const view = map.getView()
  const metersPerUnit = view.getProjection().getMetersPerUnit() ?? 1

  const visibleMapUnits = resolution * size.height
  const wgs84Center = Projection.mercatorToWgs84(view.getCenter() ?? [0, 0])
  const relativeCircumference = Math.cos(
    Math.abs(CesiumMath.toRadians(wgs84Center[1]))
  )
  const visibleMeters = visibleMapUnits * metersPerUnit * relativeCircumference
  return Math.abs(visibleMeters / 2 / Math.tan(fovy / 2))
}

/**
 * Patches the layers style & sets the layers scaleByDistance so that the features in this layer
 * are only shown based on a given distance. You can also set the property olcs_scaleByDistance on the
 * feature to provide feature specific distances. if no distance is provided, only
 * feature specific scaling will be applied
 * @param {import("@vcmap/core").VectorLayer} layer
 * @param {import("@vcmap/core").OpenlayersMap} map
 * @param {number=} [distance]
 */
export default function setDistanceDisplayCondition(
  layer: VectorLayer,
  map: OpenlayersMap,
  distance: number
): void {
  if (distance != null) {
    layer.vectorProperties.scaleByDistance = new NearFarScalar(
      distance - 1,
      1,
      distance,
      0
    )
  }

  const currentStyle = layer.style.style

  layer.style.style = (feature: Feature, resolution: number) => {
    let featureDistance = distance
    const featureNearFar = feature.get('olcs_scaleByDistance') as
      | NearFarScalar
      | undefined
    if (featureNearFar) {
      featureDistance = featureNearFar.far
    }
    if (
      featureDistance != null &&
      getDistanceFromResolution(resolution, map.olMap) > featureDistance
    ) {
      return undefined
    }

    if (typeof currentStyle === 'function') {
      return currentStyle(feature, resolution)
    }
    return currentStyle
  }
}

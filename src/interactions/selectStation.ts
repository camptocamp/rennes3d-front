import {
  AbstractInteraction,
  vcsLayerName,
  EventType,
  ModificationKeyType,
  VectorLayer,
  type InteractionEvent,
  type VcsApp,
  ArcStyle,
  GeoJSONLayer,
  markVolatile,
  mercatorProjection,
} from '@vcmap/core'
import { useStationsStore } from '@/stores/stations'
import { Feature } from 'ol'
import { type Point, LineString } from 'ol/geom'
import type { StationsModel } from '@/model/stations.model'
import { DeclarativeStyleItem } from '@vcmap/core'

class SelectStationInteraction extends AbstractInteraction {
  private readonly _stationsLayerName: string

  constructor(stationsLayerName: string) {
    super(EventType.CLICKMOVE, ModificationKeyType.NONE)

    this._stationsLayerName = stationsLayerName
  }

  async pipe(event: InteractionEvent): Promise<InteractionEvent> {
    const isLayerFeature =
      event.feature?.[vcsLayerName] === this._stationsLayerName

    if (event.type & EventType.CLICK) {
      const store = useStationsStore()
      if (event.feature && isLayerFeature) {
        store.selectStation(event.feature as Feature<Point>)
      } else if (store.selectedStation) {
        store.selectStation()
      }
    } else if (isLayerFeature) {
      document.body.style.cursor = 'pointer'
    } else {
      document.body.style.cursor = 'auto'
    }

    return event
  }
}

export default SelectStationInteraction

const scratchPoiLayerName = '_poiScracthLayer'

const scratchArcLayerName = '_poiArcLayer'

const stationToPoi: Map<number, [Feature<Point>]> = new Map()

function getPoisForStation(
  stationId: number,
  vcsApp: VcsApp
): [Feature<Point>] | [] {
  if (stationToPoi.size === 0) {
    const stationsLayer = vcsApp.layers.getByKey('trambusStops') as GeoJSONLayer
    const poiLayer = vcsApp.layers.getByKey('poi') as GeoJSONLayer
    const source = stationsLayer.getSource()
    const features = poiLayer.getFeatures() as [Feature<Point>]
    features.map((poiFeature) => {
      const geom = poiFeature.getGeometry() as Point
      const station = source.getClosestFeatureToCoordinate(
        geom.getCoordinates()
      )

      const stationId = station.get('id') as number
      if (!stationToPoi.has(stationId)) {
        stationToPoi.set(stationId, [poiFeature])
      } else {
        const featuresArray = stationToPoi.get(stationId) as [Feature<Point>]
        featuresArray.push(poiFeature)
      }
    })
  }
  return stationToPoi.get(stationId) ?? []
}

function getScratchLayer(
  app: VcsApp,
  layerName: string,
  arc?: boolean
): VectorLayer {
  if (app.layers.hasKey(layerName)) {
    return app.layers.getByKey(layerName) as VectorLayer
  }

  const layer = new VectorLayer({
    name: layerName,
    projection: mercatorProjection.toJSON(),
  })
  if (arc) {
    layer.setStyle(new ArcStyle())
  } else {
    layer.setStyle(
      new DeclarativeStyleItem({
        declarativeStyle: {
          pointOutlineColor: "color('#6B23C9')",
          pointOutlineWidth: '2',
          labelText: {
            conditions: [
              ['${ordre}===1', "'${nom_site}'"],
              ['true', "''"],
            ],
          },
          labelOutlineColor: "color('#ffffff')",
          labelColor: "color('#6B23C9')",
          labelOutlineWidth: '2',
          font: "'13px sans-serif'",
        },
      })
    )
  }
  markVolatile(layer)
  app.layers.add(layer)
  layer.activate()
  return layer
}

export async function explodeStationPOIs(
  app: VcsApp,
  poiLayerName: string,
  station?: StationsModel | null
): Promise<void> {
  const poiScratchLayer = getScratchLayer(app, scratchPoiLayerName)
  const arcLayer = getScratchLayer(app, scratchArcLayerName, true)
  poiScratchLayer.removeAllFeatures()
  arcLayer.removeAllFeatures()
  if (station) {
    const poiLayer = app.layers.getByKey(poiLayerName) as GeoJSONLayer
    if (poiLayer) {
      await poiLayer.fetchData()
      const features = getPoisForStation(station.id, app)
      // TODO drape onto terrain
      poiScratchLayer.addFeatures(features)
      const arcFeatures = features.map((f) => {
        const geometry = f.getGeometry() as Point
        const lineString = new LineString([
          station.position,
          geometry.getCoordinates(),
        ])
        return new Feature(lineString)
      })
      arcLayer.addFeatures(arcFeatures)
    } else {
      console.warn(`Could not find POI layer with name: ${poiLayerName}`)
    }
  }
}

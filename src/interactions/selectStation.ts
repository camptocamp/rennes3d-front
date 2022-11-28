import {
  AbstractInteraction,
  Layer,
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
import type { Feature } from 'ol'
import type { Geometry } from 'ol/geom'
import type { StationsModel } from '@/model/stations.model'

class SelectStationInteraction extends AbstractInteraction {
  private readonly _stationsLayerName: string

  constructor(stationsLayerName: string) {
    super(EventType.CLICKMOVE, ModificationKeyType.NONE)

    this._stationsLayerName = stationsLayerName
  }

  async pipe(event: InteractionEvent): Promise<InteractionEvent> {
    const isLayerFeature =
      (event?.feature?.[Layer.vcsLayerNameSymbol] as string) ===
      this._stationsLayerName
    if (event.type & EventType.CLICK) {
      const store = useStationsStore()
      if (event.feature && isLayerFeature) {
        store.selectStation(event.feature as Feature<Geometry>)
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

const scratchLayerName = '_poiScracthLayer'

function getScratchLayer(app: VcsApp): VectorLayer {
  if (app.layers.hasKey(scratchLayerName)) {
    return app.layers.getByKey(scratchLayerName) as VectorLayer
  }

  const layer = new VectorLayer({
    name: scratchLayerName,
    projection: mercatorProjection.toJSON(),
  })
  layer.setStyle(new ArcStyle())
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
  const layer = getScratchLayer(app)
  layer.removeAllFeatures()
  if (station) {
    const poiLayer = app.layers.getByKey(poiLayerName) as GeoJSONLayer
    if (poiLayer) {
      await poiLayer.fetchData()
      const features = poiLayer
        .getFeatures()
        .filter((f) => f.get('id_station') === station.id)
      // TODO drape onto terrain
      layer.addFeatures(features)
    } else {
      console.warn(`Could not find POI layer with name: ${poiLayerName}`)
    }
  }
}

import {
  CesiumMap,
  CesiumTilesetLayer,
  MapCollection,
  OpenlayersMap,
  OpenStreetMapLayer,
  TerrainLayer,
  Viewpoint,
  WMSLayer,
} from '@vcmap/core'

const layers = [
  new OpenStreetMapLayer({ name: 'osmBase' }),
  new TerrainLayer({
    name: 'terrain',
    url: 'https://demo.virtualcitymap.de/rennes/datasource-data/b3ef17bf-fdde-4979-8f05-8b4db5811c43',
  }),
  new CesiumTilesetLayer({
    name: 'building',
    url: 'https://demo.virtualcitymap.de/rennes/datasource-data/f661c55d-d40b-44fb-889f-88176163cba2',
  }),
  new WMSLayer({
    name: 'metro',
    url: 'https://wms.geo.admin.ch/',
    layers: 'ch.bakom.notruf-112_festnetz_sondergebiet',
    opacity: 0.3,
  }),
  new WMSLayer({
    name: 'bus',
    url: 'https://wms.geo.admin.ch/',
    layers: 'ch.bakom.notruf-112_festnetz_sondergebiet',
    opacity: 0.5,
  }),
  new WMSLayer({
    name: 'tram',
    url: 'https://wms.geo.admin.ch/',
    layers: 'ch.bakom.notruf-112_festnetz_sondergebiet',
    opacity: 0.7,
  }),
]

export async function prepareContext(): Promise<MapCollection> {
  const startingViewPoint = new Viewpoint({
    cameraPosition: [-1.67, 48.1147, 2000],
    groundPosition: [-1.67, 48.1147, 2000],
    pitch: -10,
  })

  const mapCollection = new MapCollection()
  mapCollection.add(
    new OpenlayersMap({ name: 'ol', fixedNorthOrientation: false })
  )
  mapCollection.add(new CesiumMap({ name: 'cesium' }))
  layers.forEach((layer) => {
    mapCollection.layerCollection.add(layer)
  })
  await layers[0].activate()
  await mapCollection.setActiveMap('ol')
  await mapCollection.activeMap.gotoViewpoint(startingViewPoint)

  return mapCollection
}

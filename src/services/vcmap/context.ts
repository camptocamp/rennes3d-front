import {
  CesiumMap,
  CesiumTilesetLayer,
  MapCollection,
  OpenlayersMap,
  OpenStreetMapLayer,
  TerrainLayer,
  Viewpoint,
} from '@vcmap/core'

export async function prepareContext(): Promise<MapCollection> {
  const osm = new OpenStreetMapLayer({ name: 'osmBase' })
  const terrain = new TerrainLayer({
    name: 'terrain',
    url: 'https://demo.virtualcitymap.de/rennes/datasource-data/b3ef17bf-fdde-4979-8f05-8b4db5811c43',
  })
  const buildings = new CesiumTilesetLayer({
    name: 'building',
    url: 'https://demo.virtualcitymap.de/rennes/datasource-data/f661c55d-d40b-44fb-889f-88176163cba2',
  })

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
  mapCollection.layerCollection.add(osm)
  mapCollection.layerCollection.add(terrain)
  mapCollection.layerCollection.add(buildings)
  await osm.activate()
  await terrain.activate()
  await buildings.activate()
  await mapCollection.setActiveMap('ol')
  await mapCollection.activeMap.gotoViewpoint(startingViewPoint)

  return mapCollection
}

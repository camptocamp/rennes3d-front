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
    cameraPosition: [8.768696469559748, 50.80547556213949, 344.18806877180543],
    groundPosition: [8.768240344556459, 50.81012228093323, 263.91238143570325],
    pitch: -28,
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
  await mapCollection.setActiveMap('cesium')
  await mapCollection.activeMap.gotoViewpoint(startingViewPoint)

  return mapCollection
}

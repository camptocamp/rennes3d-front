import {
  MapCollection,
  OpenlayersMap,
  CesiumMap,
  OpenStreetMapLayer,
  Viewpoint,
  TerrainLayer,
  CesiumTilesetLayer,
  VectorTileLayer,
  VcsMap,
} from '@vcmap/core'

const LAYERS = [
  new OpenStreetMapLayer({ name: 'osmBase' }),
  new TerrainLayer({
    name: 'terrain',
    url: 'data/terrain',
  }),
  new CesiumTilesetLayer({
    name: 'building',
    url: 'data/buildings',
  }),
  new VectorTileLayer({
    mapNames: ['ol'],
    tileProvider: {
      type: 'MVTTileProvider',
      url: 'data/vectorTiles/{z}/{x}/{y}.pbf',
      baseLevels: [12, 13, 14, 15],
      idProperty: 'gmlid',
    },
    extent: {
      coordinates: [8.6521196, 50.7494957, 8.8483077, 50.8534806],
      epsg: 4326,
    },
  }),
]

const startingViewPoint = new Viewpoint({
  cameraPosition: [8.768696469559748, 50.80547556213949, 344.18806877180543],
  groundPosition: [8.768240344556459, 50.81012228093323, 263.91238143570325],
  pitch: -28,
})

function setupMaps() {
  const mapCollection3D = new MapCollection()
  mapCollection3D.setTarget('map3D')
  mapCollection3D.add(new CesiumMap({ name: 'cesium' }))

  const { layerCollection } = mapCollection3D
  const mapCollection2D = new MapCollection()
  mapCollection2D.layerCollection = layerCollection
  mapCollection2D.eventHandler = mapCollection3D.eventHandler
  mapCollection2D.setTarget('map2D')
  mapCollection2D.add(
    new OpenlayersMap({ name: 'ol', fixedNorthOrientation: false })
  )

  return {
    mapCollection3D,
    mapCollection2D,
  }
}

async function setupLayers(layerCollection: MapCollection, layers: VcsMap[]) {
  layers.forEach((layer) => {
    layerCollection.add(layer)
  })

  await Promise.all([...layerCollection].map(async (l) => l.activate()))
}

export default async function setup() {
  // const context = setupMaps()

  const { mapCollection3D, mapCollection2D } = setupMaps()

  await setupLayers(mapCollection2D.layerCollection, LAYERS)

  await Promise.all(
    [mapCollection2D, mapCollection3D].map(async (collection) => {
      await collection.setActiveMap([...collection][0].name)
      await collection.activeMap.gotoViewpoint(startingViewPoint)
    })
  )
}

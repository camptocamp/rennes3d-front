import {
  MapCollection,
  OpenlayersMap,
  CesiumMap,
  OpenStreetMapLayer,
  Viewpoint,
  TerrainLayer,
  CesiumTilesetLayer,
  VectorTileLayer,
} from '@vcmap/core'
// import Synchronizer from './synchronizer.js'
// import InfoTool from './infoTool.js'
// import Planning from './planning.js'

let context = null

function destroy() {
  if (context) {
    context.mapCollection2D.destroy()
    context.mapCollection3D.destroy()
    // context.synchronizer.destroy()

    context = null
  }
}

function setupMaps() {
  const mapCollection3D = new MapCollection()
  mapCollection3D.setTarget('target-3D')
  mapCollection3D.add(new CesiumMap({ name: 'cesium' }))

  const { layerCollection } = mapCollection3D
  const mapCollection2D = new MapCollection()
  mapCollection2D.layerCollection = layerCollection
  mapCollection2D.eventHandler = mapCollection3D.eventHandler
  mapCollection2D.setTarget('target-2D')
  mapCollection2D.add(
    new OpenlayersMap({ name: 'ol', fixedNorthOrientation: false })
  )

  return {
    mapCollection3D,
    mapCollection2D,
  }
}

async function setupLayers(layerCollection) {
  const osm = new OpenStreetMapLayer({ name: 'osmBase' })
  layerCollection.add(osm)

  const terrain = new TerrainLayer({
    name: 'terrain',
    url: 'data/terrain',
  })
  layerCollection.add(terrain)

  const buildings = new CesiumTilesetLayer({
    name: 'building',
    url: 'data/buildings',
  })
  layerCollection.add(buildings)

  const vectorTiles = new VectorTileLayer({
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
  })
  layerCollection.add(vectorTiles)

  await Promise.all([...layerCollection].map(async (l) => l.activate()))
}

export default async function setup() {
  if (context) {
    destroy()
  }
  context = setupMaps()

  context.startingVP = new Viewpoint({
    cameraPosition: [8.768696469559748, 50.80547556213949, 344.18806877180543],
    groundPosition: [8.768240344556459, 50.81012228093323, 263.91238143570325],
    pitch: -28,
  })
  await setupLayers(context.mapCollection2D.layerCollection)

  await Promise.all(
    [context.mapCollection2D, context.mapCollection3D].map(
      async (collection) => {
        await collection.setActiveMap([...collection][0].name)
        await collection.activeMap.gotoViewpoint(context.startingVP)
      }
    )
  )

  // context.synchronizer = new Synchronizer(
  //   context.mapCollection2D.activeMap,
  //   context.mapCollection3D.activeMap
  // )
  // context.infoTool = new InfoTool(context.mapCollection2D)
  // context.planning = new Planning(context.mapCollection2D)
  context.gotoViewPoint = async (vp) => {
    // context.synchronizer.suspend = true
    await Promise.all([
      context.mapCollection2D.activeMap.gotoViewpoint(vp),
      context.mapCollection3D.activeMap.gotoViewpoint(vp),
    ])
    // setTimeout(() => {
    //   context.synchronizer.suspend = false
    // }, 200)
  }
  window.vcs = { context }
  return context
}

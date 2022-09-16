import {
  CesiumMap,
  CesiumTilesetLayer,
  LayerCollection,
  MapCollection,
  OpenlayersMap,
  OpenStreetMapLayer,
  TerrainLayer,
  VcsMap,
  VectorTileLayer,
  Viewpoint,
} from '@vcmap/core'

const cleanUpMap = (): void => {
  if (window.mapContext) {
    window.mapContext.destroy()
    window.mapContext = null
  }
}

const initMapCollection = (target: string, map: VcsMap): MapCollection => {
  const mapCollection = new MapCollection()

  mapCollection.setTarget(target)
  mapCollection.add(map)

  return mapCollection
}

const addLayers = async (layers: LayerCollection) => {
  const osm = new OpenStreetMapLayer({ name: 'osmBase' })
  layers.add(osm)

  // Adding terrain
  layers.add(
    new TerrainLayer({
      name: 'terrain',
      url: 'data/terrain',
    })
  )

  layers.add(
    new CesiumTilesetLayer({
      name: 'building',
      url: 'data/buildings',
    })
  )

  // Adding VectorTiles
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
  layers.add(vectorTiles)

  Promise.all(
    layers._array.map(async (layer) => {
      layer.activate()
    })
  )
}

const clearTargetElement = (target: string) => {
  const targetElem: HTMLElement | null = document.getElementById(target)
  if (targetElem) {
    while (targetElem.firstChild) {
      targetElem.removeChild(targetElem.firstChild)
    }
  }
}

export default async function initMap(
  is3d = false,
  viewPoint: any,
  target = 'map'
) {
  if (window.mapContext) {
    cleanUpMap()
    clearTargetElement(target)
  }

  const map: VcsMap = is3d
    ? new CesiumMap({ name: 'cesium' })
    : new OpenlayersMap({ name: 'ol', fixedNorthOrientation: false })

  const context = initMapCollection(target, map)

  context.startingVP = new Viewpoint({
    cameraPosition: [viewPoint.x, viewPoint.y, viewPoint.z],
    pitch: viewPoint.pitch,
  })

  await addLayers(context.layerCollection)

  Promise.all(
    [context].map(async (collection) => {
      await collection.setActiveMap([...collection][0].name)
      await collection.activeMap.gotoViewpoint(context.startingVP)
    })
  )

  context.gotoViewpoint = async (vp) => {
    await Promise.all([context.activeMap.gotoViewpoint(vp)])
  }

  window.mapContext = context
  return context
}

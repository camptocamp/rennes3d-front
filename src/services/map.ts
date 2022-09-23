import {
  MapCollection,
  OpenlayersMap,
  CesiumMap,
  OpenStreetMapLayer,
  Viewpoint,
  // WFSLayer,
  TerrainLayer,
  // CesiumTilesetLayer,
  // VectorTileLayer,
  VcsMap,
  WMSLayer,
} from '@vcmap/core'

const LAYERS = [
  new OpenStreetMapLayer({ name: 'osmBase' }),
  // new WFSLayer({
  //   name: 'wfs',
  //   // url: 'https://public.sig.rennesmetropole.fr/geoserver/wfs?SERVICE=WFS&REQUEST=GetFeature&VERSION=2.0.0&TYPENAMES=app:sv_sitorg_education&STARTINDEX=0&COUNT=1000000&SRSNAME=urn:ogc:def:crs:EPSG::3948',
  //   url: 'https://ahocevar.com/geoserver/wfs',
  //   featureType: 'opengeo:countries',
  //   // featureType: 'app:sv_sitorg_education',
  //   featureNS: 'opengeo:',
  //   featurePrefix: '',
  // }),
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
  new TerrainLayer({
    name: 'terrain',
    url: '../data/terrain',
  }),
  // new CesiumTilesetLayer({
  //   name: 'building',
  //   url: '../data/buildings',
  // }),
  // new VectorTileLayer({
  //   mapNames: ['ol'],
  //   tileProvider: {
  //     type: 'MVTTileProvider',
  //     url: '../data/vectorTiles/{z}/{x}/{y}.pbf',
  //     baseLevels: [12, 13, 14, 15],
  //     idProperty: 'gmlid',
  //   },
  //   extent: {
  //     coordinates: [8.6521196, 50.7494957, 8.8483077, 50.8534806],
  //     epsg: 4326,
  //   },
  // }),
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

  // await Promise.all([...layerCollection].map(async (l) => l.activate()))
}

export default async function setup() {
  const { mapCollection3D, mapCollection2D } = setupMaps()

  await setupLayers(mapCollection2D.layerCollection, LAYERS)

  mapCollection2D.layerCollection.getByKey('osmBase').activate()

  await Promise.all(
    [mapCollection2D].map(async (collection) => {
      await collection.setActiveMap([...collection][0].name)
      await collection.activeMap.gotoViewpoint(startingViewPoint)
    })
  )
  return { mapCollection2D, mapCollection3D }
}

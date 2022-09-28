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
  new OpenStreetMapLayer({ name: 'osmBase', activeOnStartup: true }),
  new TerrainLayer({
    name: 'terrain',
    url: 'https://demo.virtualcitymap.de/rennes/datasource-data/b3ef17bf-fdde-4979-8f05-8b4db5811c43',
    activeOnStartup: true,
  }),
  new CesiumTilesetLayer({
    name: 'building',
    url: 'https://demo.virtualcitymap.de/rennes/datasource-data/f661c55d-d40b-44fb-889f-88176163cba2',
    activeOnStartup: true,
  }),
  new WMSLayer({
    name: 'metro',
    url: 'https://public.sig.rennesmetropole.fr/geoserver/ows',
    layers: 'trp_org:sd_velo_iti_2018',
    activeOnStartup: false,
    parameters: {
      transparent: true,
    },
  }),
  new WMSLayer({
    name: 'bus',
    url: 'https://public.sig.rennesmetropole.fr/geoserver/ows',
    layers: 'trp_org:sd_velo_iti_2018',
    activeOnStartup: false,
    parameters: {
      transparent: true,
    },
  }),
  new WMSLayer({
    name: 'bike',
    url: 'https://public.sig.rennesmetropole.fr/geoserver/ows',
    layers: 'trp_org:sd_velo_iti_2018',
    version: '1.3.0',
    parameters: {
      transparent: true,
    },
  }),
]

export async function prepareContext(): Promise<MapCollection> {
  const startingViewPoint = new Viewpoint({
    cameraPosition: [-1.67, 48.1147, 20],
    groundPosition: [-1.67, 48.1147, 20],
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

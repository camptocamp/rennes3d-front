import { createApp } from 'vue'
import { createPinia } from 'pinia'
import type { MapCollection, VcsAppConfig } from '@vcmap/core'
import mapConfig from '../map.config.json'

import App from './App.vue'
import router from './router'
import init from './services/vcmap/init'

import './assets/main.css'
import initVcmap from './services/vcmap/init'

declare global {
  interface Window {
    CESIUM_BASE_URL: string;
    mapContext: MapCollection | null;
  }
}

window.mapContext = null;
window.CESIUM_BASE_URL = '/node_modules/@vcmap/cesium/Source/';

// TODO: find a better solution
const vcmapApp = initVcmap(mapConfig as unknown as VcsAppConfig)

const app = createApp(App, { vcmapApp: vcmapApp })

app.use(createPinia())
app.use(router)

app.mount('#app')
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/main.css'

// TODO: Fix it as in https://medium.com/@ohansemmanuel/how-do-you-explicitly-set-a-new-property-on-window-in-typescript-e144cfecf8e7
window.CESIUM_BASE_URL = '/node_modules/@vcmap/cesium/Source/'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

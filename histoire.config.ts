import { defineConfig } from 'histoire'
import { HstVue } from '@histoire/plugin-vue'

export default defineConfig({
  setupFile: '/src/histoire-setup.ts',
  plugins: [HstVue()],
  routerMode: 'hash',
  vite: {
    base: process.env.HISTOIRE_BASE || '/dist/',
  },
  tree: {
    groups: [
      {
        id: 'homepage',
        title: 'Homepage', // No toggle
      },
      {
        id: 'map',
        title: 'Map',
      },
      {
        id: 'ui-base',
        title: 'UI Base',
      },
      {
        id: 'sidepanel',
        title: 'Side Panel',
      },
    ],
  },
})

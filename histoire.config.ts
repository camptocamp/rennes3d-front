import { defineConfig } from 'histoire'
import { HstVue } from '@histoire/plugin-vue'

export default defineConfig({
  setupFile: '/src/histoire-setup.ts',
  plugins: [HstVue()],
  tree: {
    groups: [
      {
        id: 'homepage',
        title: 'Homepage', // No toggle
      },
    ],
  },
})

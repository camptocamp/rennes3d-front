import { Context, VcsApp, type VcsAppConfig } from '@vcmap/core'

async function initMap(config: VcsAppConfig): Promise<VcsApp> {
  const app = new VcsApp()
  const context = new Context(config)
  await app.addContext(context)
  return app
}

export default initMap

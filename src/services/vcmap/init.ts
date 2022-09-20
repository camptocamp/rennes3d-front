import { VcsApp } from '@vcmap/core'
import { Context } from '@vcmap/core'
import type { VcsAppConfig } from '@vcmap/core'

/**
 * Initializing vcmap application
 * @param config 
 */
async function initVcmap(config: VcsAppConfig): Promise<VcsApp> {
  const app = new VcsApp()
  const context = new Context(config)
  
  await app.addContext(context)

  return app
}

export default initVcmap
import { fileURLToPath, URL } from 'node:url'

import { defineConfig, type UserConfig, type Plugin } from 'vite'
import vue from '@vitejs/plugin-vue'
import rollupPluginStripPragma from 'rollup-plugin-strip-pragma'
import path from 'path'
import fs from 'fs'

type stripPragmas = (options: { pragmas: string[] }) => Plugin

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const base: UserConfig = {
    plugins: [vue()],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
  }

  if (command === 'build') {
    base.build = {
      rollupOptions: {
        plugins: [
          (rollupPluginStripPragma as stripPragmas)({
            pragmas: ['debug'],
          }),
          {
            name: 'Rename Cesium',
            transform(source, sid) {
              if (/src[/\\]main.ts/.test(sid)) {
                return source.replace(
                  '/node_modules/@vcmap/cesium/Build/CesiumUnminified/',
                  './assets/cesium/'
                )
              }
              return source
            },
          },
          {
            name: 'Copy Cesium',
            async closeBundle() {
              const cesiumPath = path.join(
                process.cwd(),
                'node_modules',
                '@vcmap',
                'cesium',
                'Build',
                'Cesium'
              )
              const buildPath = path.join(
                process.cwd(),
                'dist',
                'assets',
                'cesium'
              )
              await Promise.all([
                fs.promises.cp(
                  path.join(cesiumPath, 'Assets'),
                  path.join(buildPath, 'Assets'),
                  {
                    recursive: true,
                  }
                ),
                fs.promises.cp(
                  path.join(cesiumPath, 'Workers'),
                  path.join(buildPath, 'Workers'),
                  {
                    recursive: true,
                  }
                ),
              ])
            },
          },
        ],
      },
    }
  }

  return base
})

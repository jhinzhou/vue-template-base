import { URL, fileURLToPath } from 'node:url'

import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'

import UnoCSS from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import legacyPlugin from '@vitejs/plugin-legacy'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    Vue(),
    UnoCSS({
      configFile: './uno.config.js',
      // 打包完了双击html后unocss全部失效的关键配置 true 可以使用live selver , false 可以加载文件
      legacy: {
        renderModernChunks: true,
      },
    }),
    AutoImport({
      imports: ['vue', 'vue-router', 'pinia', 'vue-i18n'],
      eslintrc: {
        enabled: false,
        filepath: './.eslintrc-auto-import.json',
        globalsPropValue: true,
      },
      include: [/\.[tj]sx?$/, /\.vue$/, /\.vue\?vue/, /\.md$/],
    }),
    Components({
      dirs: ['src/components'],
      extensions: ['vue'],
      deep: true,
      resolvers: [],
    }),
    legacyPlugin({
      targets: ['defaults', 'ie >= 11', 'chrome 52'],
      additionalLegacyPolyfills: ['regenerator-runtime/runtime'],
      renderLegacyChunks: true,
      polyfills: [
        'es.symbol',
        'es.array.filter',
        'es.promise',
        'es.promise.finally',
        'es/map',
        'es/set',
        'es.array.for-each',
        'es.object.define-properties',
        'es.object.define-property',
        'es.object.get-own-property-descriptor',
        'es.object.get-own-property-descriptors',
        'es.object.keys',
        'es.object.to-string',
        'web.dom-collections.for-each',
        'esnext.global-this',
        'esnext.string.match-all',
      ],
    }),
  ],
  server: {
    host: '0.0.0.0',
    port: 5598,
    open: true,
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})

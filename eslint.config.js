import antfu from '@antfu/eslint-config'

export default antfu({
  unocss: true,
  formatters: true,
  rules: {
    'n/prefer-global/process': 'off',
    'no-undef': 'error',
    'no-fallthrough': 'off',
    'vue/block-order': 'off',
    'prefer-promise-reject-errors': 'off',
  },
  stylistic: {
    overrides: {
      'antfu/top-level-function': 'off',
    },
  },
  languageOptions: {
    globals: {
      h: 'readonly',
      unref: 'readonly',
      provide: 'readonly',
      inject: 'readonly',
      markRaw: 'readonly',
      defineAsyncComponent: 'readonly',
      nextTick: 'readonly',
      useRoute: 'readonly',
      useRouter: 'readonly',
      Message: 'readonly',
      $loadingBar: 'readonly',
      $message: 'readonly',
      $dialog: 'readonly',
      $notification: 'readonly',
      $modal: 'readonly',
    },
  },
})

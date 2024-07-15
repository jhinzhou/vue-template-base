<template>
  <div class="about">
    <button @click="toggleDark()">
      <i :class="isDark ? 'i-carbon:moon' : ' i-carbon:sun'" class="text-20" />
    </button>
    <button @click="changeLang()">
      <i class="i-carbon:ibm-watson-language-translator text-20" />
    </button>
    <div class="f-c-c-c auto-bg">
      <div>{{ $t('user.name') }}</div>
      <div>{{ $t('user.name') }}</div>
      <div>{{ $t('user.name') }}</div>
      <div>{{ $t('user.name') }}</div>
    </div>
  </div>
</template>

<script setup>
import { useDark, useToggle } from '@vueuse/core'
import { useI18n } from 'vue-i18n'

const isDark = useDark()
const toggleDark = useToggle(isDark)

const { locale } = useI18n()
const changeLang = () => {
  locale.value = locale.value === 'en' ? 'zh' : 'en'
}
</script>

<style scoped>

</style>

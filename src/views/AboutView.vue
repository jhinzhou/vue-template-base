<template>
  <div class="about">
    <h1>{{ msg }}</h1>
    <button @click="toggleDark()">
      <i :class="isDark ? 'i-fe:moon' : 'i-fe:sun'" />

      <span class="ml-2">{{ isDark ? 'Dark' : 'Light' }}</span>
    </button>
  </div>
</template>

<script setup>
import { useDark, useToggle } from '@vueuse/core'

const msg = ref('This is an about page')

const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<style scoped>

</style>

<template>
  <div>
    <nav>
      <RouterLink to="/">
        {{ $t('Home') }}
      </RouterLink>
      <RouterLink to="/about">
        {{ $t('About') }}
      </RouterLink>
    </nav>
  </div>
  <RouterView />
</template>

<script setup>
</script>

<style scoped></style>

<script setup>
import MenuHero from '@/zems/Front/Components/Section/MenuHero.vue';
import MenuExplorer from '@/zems/Front/Components/Section/MenuExplorer.vue';
</script>

<template>
  <div class="menu-page">
    <MenuHero />
    <MenuExplorer />
  </div>
</template>

<style scoped>
.menu-page {
  background-color: var(--primary-color);
  min-height: 100vh;
}
</style>

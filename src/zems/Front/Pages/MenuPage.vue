<script setup>
import PageHero from '@/zems/Front/Components/Widget/PageHero.vue';
import MenuExplorer from '@/zems/Front/Components/Section/MenuExplorer.vue';
</script>

<template>
  <div class="menu-page">
    <PageHero title="Menu"
      backgroundImage="https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&q=80&w=2000" />
    <MenuExplorer />
  </div>
</template>

<style scoped>
.menu-page {
  background-color: var(--primary-color);
  min-height: 100vh;
}
</style>

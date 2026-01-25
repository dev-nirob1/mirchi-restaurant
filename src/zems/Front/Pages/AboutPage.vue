<script setup>
import PageHero from '@/zems/Front/Components/Widget/PageHero.vue';
import AboutHeritage from '@/zems/Front/Components/Section/AboutHeritage.vue';
import AboutPhilosophy from '@/zems/Front/Components/Section/AboutPhilosophy.vue';
import AboutTeam from '@/zems/Front/Components/Section/AboutTeam.vue';
import AboutAwards from '@/zems/Front/Components/Section/AboutAwards.vue';
import AboutTimeline from '@/zems/Front/Components/Section/AboutTimeline.vue';
import AboutGallery from '@/zems/Front/Components/Section/AboutGallery.vue';
import AboutNewsletter from '@/zems/Front/Components/Section/AboutNewsletter.vue';
</script>

<template>
  <div class="about-page">
    <PageHero title="Our Story"
      backgroundImage="https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&q=80&w=2000" />
    <AboutHeritage />
    <AboutPhilosophy />
    <AboutTeam />
    <AboutAwards />
    <AboutTimeline />
    <AboutGallery />
    <AboutNewsletter />
  </div>
</template>

<style scoped>
.about-page {
  background-color: var(--primary-color);
  min-height: 100vh;
}
</style>

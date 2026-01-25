<script setup>
// import ModernHero from '@/zems/Front/Components/Section/ModernHero.vue';
// import CulinaryPhilosophy from '@/zems/Front/Components/Section/CulinaryPhilosophy.vue';
import ModernSignature from '@/zems/Front/Components/Section/ModernSignature.vue';
import GalleryMasonry from '@/zems/Front/Components/Section/GalleryMasonry.vue';
import FlavorStats from '@/zems/Front/Components/Section/FlavorStats.vue';
import ModernTestimonials from '@/zems/Front/Components/Section/ModernTestimonials.vue';
import CallToRitual from '@/zems/Front/Components/Section/CallToRitual.vue';
import HeroSection from '../Components/Section/HeroSection.vue';
import AboutIntro from '../Components/Section/AboutIntro.vue';
</script>

<template>
  <div class="home-page-modern">
    <HeroSection />
    <!-- <ModernHero /> -->
    <AboutIntro />
    <!-- <CulinaryPhilosophy /> -->
    <ModernSignature />
    <GalleryMasonry />
    <FlavorStats />
    <ModernTestimonials />
    <CallToRitual />
  </div>
</template>

<style scoped>
.home-page-modern {
  overflow-x: hidden;
}
</style>

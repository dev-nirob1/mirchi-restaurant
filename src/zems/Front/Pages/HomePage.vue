<script setup>
import SignatureDishes from '@/zems/Front/Components/Section/SignatureDishes.vue';
import ServicesSection from '@/zems/Front/Components/Section/ServicesSection.vue';
// import FlavorStats from '@/zems/Front/Components/Section/FlavorStats.vue';
import CallToRitual from '@/zems/Front/Components/Section/CallToRitual.vue';
import HeroSection from '../Components/Section/HeroSection.vue';
import AboutIntro from '../Components/Section/AboutIntro.vue';
import TestimonialSection from '../Components/Section/TestimonialSection.vue';
</script>

<template>
  <div class="home-page-modern">
    <HeroSection />
    <AboutIntro />
    <SignatureDishes />
    <ServicesSection />
    <!-- <FlavorStats /> -->
    <TestimonialSection />
    <CallToRitual />
  </div>
</template>

<style scoped>
.home-page-modern {
  overflow-x: hidden;
}
</style>

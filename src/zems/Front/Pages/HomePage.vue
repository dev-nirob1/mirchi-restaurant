<script setup>
import VideoHero from '@/zems/Front/Components/Section/VideoHero.vue';
import SpiceJourney from '@/zems/Front/Components/Section/SpiceJourney.vue';
import SignatureDishes from '@/zems/Front/Components/Section/SignatureDishes.vue';
import MirchiExperience from '@/zems/Front/Components/Section/MirchiExperience.vue';
import QuickStats from '@/zems/Front/Components/Section/QuickStats.vue';
import TodaySpecial from '@/zems/Front/Components/Section/TodaySpecial.vue';
import TestimonialCarousel from '@/zems/Front/Components/Section/TestimonialCarousel.vue';
</script>

<template>
  <div class="home-page">
    <VideoHero />
    <SpiceJourney />
    <SignatureDishes />
    <MirchiExperience />
    <QuickStats />
    <TodaySpecial />
    <TestimonialCarousel />
  </div>
</template>

<style scoped>
.home-page {
  overflow-x: hidden;
}
</style>

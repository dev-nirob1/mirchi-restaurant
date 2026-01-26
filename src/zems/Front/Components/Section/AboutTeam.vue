<script setup>
import SectionTitle from '@/components/Widget/SectionTitle.vue';
import TeamMemberCard from '../Widget/TeamMemberCard.vue';

const team = [
  {
    id: 1,
    name: 'RAJIV CHOKSHI',
    role: 'Executive Chef & Visionary',
    image: 'https://images.unsplash.com/photo-1512485800893-b08ec1ea59b1?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 2,
    name: 'ANANYA REDDY',
    role: 'Master of Grinds',
    image: 'https://images.unsplash.com/photo-1581299894007-aaa50297cf16?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 3,
    name: 'SAMIR KHAN',
    role: 'Alchemist of Smoke',
    image: 'https://images.pexels.com/photos/30350306/pexels-photo-30350306.jpeg?_gl=1*xf1kxy*_ga*OTAzOTgwMTguMTczNzAwNTI1OA..*_ga_8JE65Q40S6*czE3Njk0MzE4NDMkbzQ1JGcxJHQxNzY5NDMxODQ1JGo1OCRsMCRoMA..'
  }
];
</script>

<template>
  <section class="about-team bg-light">
    <div class="container">
      <SectionTitle subTitle="The Masterminds" title="BEHIND THE SPICE" class="mb-3" />

      <div class="medium-2 large-3 gap-2">
        <TeamMemberCard v-for="member in team" :key="member.id" :member="member" v-fade-in="'up'" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-team {
  padding: 3.75rem 0;
}
</style>

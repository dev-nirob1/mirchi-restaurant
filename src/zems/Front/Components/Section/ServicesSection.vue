<script setup>
import SectionTitle from '@/components/Widget/SectionTitle.vue';

const services = [
  {
    id: 1,
    title: 'Private Dining',
    desc: 'Intimate and curated dining spaces for your most precious celebrations and gatherings.',
    icon: 'fa-chair',
  },
  {
    id: 2,
    title: 'Online Ordering',
    desc: 'Bringing the fiery spirit of Mirchi straight to your doorstep with zero-contact delivery.',
    icon: 'fa-truck-fast',
  },
  {
    id: 3,
    title: 'Event Catering',
    desc: 'From corporate events to grand weddings, we provide a signature spice experience.',
    icon: 'fa-champagne-glasses',
  }
];
</script>

<template>
  <section class="services-section section">
    <div class="container">
      <SectionTitle subTitle="What We Offer" title="BEYOND THE PLATE" class="mb-3" />

      <div class="medium-2 large-3 gap-2">
        <div v-for="service in services" :key="service.id" class="service-card bg-light text-center" v-fade-in="'up'">
          <div class="service-icon mb-2">
            <i :class="`fa-solid ${service.icon}`"></i>
          </div>
          <SubTitle>{{ service.title }}</SubTitle>
          <BaseParagraph>{{ service.desc }}</BaseParagraph>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.services-section {
  padding: 3.75rem 0;
  background-color: var(--primary-color);
}


.service-card {
  padding: 3rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.service-icon {
  font-size: 3rem;
  color: var(--secondary-color);
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  border-radius: 50%;
}

.service-card .sub-title {
  font-size: 1.25rem;
}

.service-card p {
  font-size: 1rem;
}
</style>

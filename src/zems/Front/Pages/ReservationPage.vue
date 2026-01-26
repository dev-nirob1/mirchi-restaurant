<script setup>
import ReservationSection from '@/zems/Front/Components/Section/ReservationSection.vue';
</script>

<template>
  <main class="reservation-page bg-light">
    <ReservationSection />
  </main>
</template>

<style scoped>
.reservation-page {
  padding-top: 5rem;
  /* Adjust for navbar */
  min-height: 100vh;
}
</style>

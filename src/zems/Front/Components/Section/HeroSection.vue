<script setup>
import { RouterLink } from 'vue-router';


</script>

<template>
  <section class="hero-section">
    <div v-fade-in="'up'" class="container">
      <HeroTitle class="text-white">Culinary Artistry <br /> <span class="highlight">Redefined</span>
      </HeroTitle>
      <BaseParagraph>Experience the soul of spices through a lens of modern sophistication.</BaseParagraph>
      <div class="actions" v-fade-in="'up'">
        <RouterLink to="/menu" class="btn btn-primary">Discover the Menu</RouterLink>
        <RouterLink to="/reservation" class="btn btn-outline">Reserve a Table</RouterLink>
      </div>
    </div>
  </section>
</template>
<style scoped>
.hero-section {
  text-align: center;
  padding: 6rem 0 3.75rem 0;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(to bottom, rgba(0, 0, 0, .5), rgba(0, 0, 0, .7), rgba(0, 0, 0, .5)), url('https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=2000') center / cover no-repeat;
}

.hero-section .hero-title span.highlight {
  font-style: italic;
  color: var(--accent-color);
}

.hero-section p {
  font-size: 1.1rem;
  margin: 2rem 0;
  color: var(--color-white);
}

.actions {
  display: flex;
  gap: 1rem;
  flex-direction: column;
  justify-content: center;
  margin-top: 2rem;
  margin: 0 auto;
}

.btn-outline {
  border-color: var(--color-white);
  color: var(--color-white);
}


@media (min-width: 768px) {
  .actions {
    flex-direction: row;
  }
}
</style>

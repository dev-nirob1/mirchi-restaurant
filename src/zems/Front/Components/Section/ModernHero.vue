<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
  <section class="hero-modern relative">
    <div class="hero-bg">
      <img src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=2000" alt="Exquisite Table Setting">
      <div class="overlay-grad"></div>
    </div>
    
    <div class="container hero-content flex-center col relative z-10">
      <span class="hero-accent accent-text" v-fade-in>A Narrative of Flavor</span>
      <h1 v-fade-in="'up'">Culinary Artistry <br/> <span class="accent-text">Redefined</span></h1>
      <p v-fade-in="'up'">Experience the soul of spices through a lens of modern sophistication.</p>
      
      <div class="hero-actions flex gap-2 mt-4" v-fade-in="'up'">
        <RouterLink to="/menu" class="btn btn-primary">Discover the Menu</RouterLink>
        <RouterLink to="/reservation" class="btn btn-outline">Reserve a Table</RouterLink>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-modern {
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background-color: var(--color-charcoal);
}

.hero-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.hero-bg img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.5;
  filter: contrast(1.1) brightness(0.8);
  animation: slowZoom 20s infinite alternate;
}

.overlay-grad {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at 50% 50%, transparent 20%, rgba(5,5,5,0.7) 100%);
}

@keyframes slowZoom {
  from { transform: scale(1); }
  to { transform: scale(1.1); }
}

.hero-content {
  text-align: center;
  padding-top: 5rem;
}

.hero-accent {
  font-size: 1.25rem;
  letter-spacing: 0.1em;
  color: var(--color-white);
  margin-bottom: 2rem;
  display: block;
}

h1 {
  color: var(--color-white);
  margin-bottom: 2rem;
}

p {
  color: #cccccc;
  max-width: 50ch;
  margin: 0 auto;
}

.mt-4 {
  margin-top: 4rem;
}

@media (max-width: 768px) {
  .hero-actions {
    flex-direction: column;
    width: 100%;
    align-items: center;
  }
}
</style>

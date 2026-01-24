<script setup>
</script>

<template>
  <section class="menu-hero relative flex-center text-center">
    <div class="overlay absolute width-full height-full"></div>
    <div class="container relative z-1">
      <HeroTitle v-fade-in>OUR CULINARY HERITAGE</HeroTitle>
      <p class="subtitle text-secondary mt-1" v-fade-in="'up'">A journey through authentic spices and modern flavors</p>
    </div>
  </section>
</template>

<style scoped>
.menu-hero {
  height: 50vh;
  background-image: url('https://images.unsplash.com/photo-1596797038558-9da50b73c744?q=80&w=2000&auto=format&fit=crop');
  background-size: cover;
  background-position: center;
  margin-top: 80px; /* Navbar height offset */
}

.overlay {
  background: rgba(0, 0, 0, 0.7);
  top: 0;
  left: 0;
}

.z-1 { z-index: 1; }

.subtitle {
  font-size: 1.25rem;
  letter-spacing: 0.3rem;
  text-transform: uppercase;
  font-weight: 700;
}

@media (max-width: 768px) {
  .menu-hero { height: 40vh; }
  .subtitle { font-size: 1rem; letter-spacing: 0.1rem; }
}
</style>

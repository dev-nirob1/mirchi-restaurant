<template>
  <section class="ritual-cta section relative">
    <div class="cta-bg">
      <img src="https://images.unsplash.com/photo-1541510912111-823075b6c3f6?auto=format&fit=crop&q=80&w=2000" alt="Atmospheric Dining Room">
      <div class="overlay-dark"></div>
    </div>
    
    <div class="container relative z-10 text-center flex-center col">
      <h2 class="massive-title text-white mb-2" v-fade-in="'up'">ARE YOU READY FOR THE <br/> <span class="accent-text text-white">MIRCHI RITUAL?</span></h2>
      <p class="text-white opacity-7 mb-4" v-fade-in="'up'">Tables are released 30 days in advance. We invite you to secure your seat at our sanctuary of spice.</p>
      
      <div v-fade-in="'up'">
        <RouterLink to="/reservation" class="btn btn-primary">Secure a Table</RouterLink>
      </div>
    </div>
  </section>
</template>

<style scoped>
.ritual-cta {
  height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background-color: var(--color-charcoal);
}

.cta-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.cta-bg img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.6;
}

.overlay-dark {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to top, rgba(5,5,5,1) 0%, rgba(5,5,5,0.3) 100%);
}

.massive-title {
  font-size: var(--heading-2);
}

.text-white { color: var(--color-white); }
.accent-text.text-white { color: var(--color-crimson) !important; }
.opacity-7 { opacity: 0.7; }
.mb-2 { margin-bottom: 2rem; }
.mb-4 { margin-bottom: 4rem; }

@media (max-width: 768px) {
  .ritual-cta { height: auto; padding: 10rem 0; }
}
</style>

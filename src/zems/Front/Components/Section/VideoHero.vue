<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
  <section class="video-hero">
    <div class="video-container">
      <!-- Using a placeholder video URL for sizzling spices/tawa -->
       <video 
        autoplay 
        muted 
        loop 
        playsinline 
        class="hero-video"
      >
        <source src="https://assets.mixkit.co/videos/preview/mixkit-fire-burning-in-a-stove-in-slow-motion-44390-large.mp4" type="video/mp4">
      </video>
      <div class="overlay"></div>
    </div>

    <div class="hero-content">
      <h1 class="logo-text" v-fade-in="'up'">MIRCHI</h1>
      <p class="tagline" v-fade-in="'up'">Authentic Spice, Modern Soul</p>
      <div class="cta-groups" v-fade-in="'up'">
        <RouterLink to="/reservation" class="btn-primary">Book Table</RouterLink>
        <RouterLink to="/menu" class="btn-secondary">Order Online</RouterLink>
      </div>
    </div>
  </section>
</template>

<style scoped>
.video-hero {
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  color: #fff;
  text-align: center;
}

.video-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}

.hero-video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
}

.hero-content {
  z-index: 1;
}

.logo-text {
  font-size: 8rem;
  font-weight: 900;
  letter-spacing: 1.5rem;
  margin-bottom: 1rem;
  text-shadow: 0 0 20px rgba(0,0,0,0.5);
}

.tagline {
  font-size: 1.5rem;
  letter-spacing: 0.5rem;
  text-transform: uppercase;
  margin-bottom: 3rem;
  opacity: 0.9;
}

.cta-groups {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
}

.btn-primary, .btn-secondary {
  padding: 1.25rem 3rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-primary {
  background: #d4af37;
  color: #000;
}

.btn-secondary {
  background: transparent;
  border: 2px solid #fff;
  color: #fff;
}

.btn-primary:hover {
  background: #fff;
  transform: translateY(-5px);
}

.btn-secondary:hover {
  background: #fff;
  color: #000;
  transform: translateY(-5px);
}

@media (max-width: 768px) {
  .logo-text { font-size: 4rem; letter-spacing: 0.5rem; }
  .tagline { font-size: 1rem; }
  .cta-groups { flex-direction: column; gap: 1rem; }
}
</style>

<script setup>
</script>

<template>
  <section class="menu-hero">
    <div class="hero-background">
      <img src="https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&q=80&w=800"
        alt="Mirchi Kitchen" />
      <div class="hero-overlay"></div>
    </div>

    <div class="container hero-content">
      <h1 class="hero-title" v-fade-in>THE <span class="accent">MIRCHI</span> ANTHOLOGY</h1>
      <BaseParagraph class="hero-subtitle" v-fade-in="'up'">
        From hand-pounded spices to 12-hour braised perfection. <br>
        Explore a curated collection of our most sacred recipes.
      </BaseParagraph>
    </div>
  </section>
</template>

<style scoped>
.menu-hero {
  position: relative;
  height: 60vh;
  margin-top: 80px;
  /* Offset for the fixed Navbar */
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  overflow: hidden;
  background-color: var(--primary-color);
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.hero-background img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, rgba(5, 5, 5, 0.8), rgba(5, 5, 5, 0.5));
}

.hero-content {
  position: relative;
  z-index: 1;
}

.hero-title {
  font-size: clamp(2.5rem, 8vw, 5rem);
  font-weight: 900;
  letter-spacing: 0.2em;
  line-height: 1.1;
  color: var(--white);
  margin-bottom: 1rem;
}

.accent {
  color: var(--secondary-color);
}

.hero-subtitle {
  font-size: 1.25rem;
  max-width: 650px;
  margin: 0 auto;
  opacity: 0.8;
  letter-spacing: 1px;
}

@media (max-width: 768px) {
  .menu-hero {
    height: 50vh;
  }

  .hero-subtitle {
    font-size: 1rem;
  }

  br {
    display: none;
  }
}
</style>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  backgroundImage: {
    type: String,
    default: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&q=80&w=800'
  },
  parentPage: {
    type: String,
    default: 'Home'
  }
})
</script>

<template>
  <section class="page-hero">
    <div class="hero-background">
      <img :src="backgroundImage" :alt="title" />
      <div class="hero-overlay"></div>
    </div>

    <div class="container hero-content">
      <!-- Title First, Uppercase -->
      <h1 class="hero-title" v-fade-in="'up'">{{ title.toUpperCase() }}</h1>

      <!-- Breadcrumb below Title -->
      <div class="breadcrumb" v-fade-in="'up'">
        <RouterLink to="/" class="parent">{{ parentPage }}</RouterLink>
        <span class="separator">/</span>
        <span class="current">{{ title }}</span>
      </div>
    </div>
  </section>
</template>

<style scoped>
.page-hero {
  position: relative;
  height: 55vh;
  /* Reduced height as requested for breadcrumb feel */
  display: flex;
  align-items: flex-end;
  /* Align content to bottom */
  justify-content: center;
  text-align: center;
  overflow: hidden;
  background-color: var(--primary-color);
  padding-bottom: 3.75rem;
  /* Space from bottom edge */
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
  background: linear-gradient(to top, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.4) 100%);
}

.hero-content {
  position: relative;
  z-index: 1;
}

.hero-title {
  font-size: clamp(2rem, 6vw, 3.5rem);
  font-weight: 900;
  letter-spacing: 0.2em;
  line-height: 1;
  color: var(--white);
  margin-bottom: 1rem;
}

.breadcrumb {
  font-family: var(--font-sans);
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 3px;
  font-weight: 700;
}

.breadcrumb .parent {
  color: var(--secondary-color);
  text-decoration: none;
  transition: opacity 0.3s;
}

.breadcrumb .parent:hover {
  opacity: 0.7;
}

.breadcrumb .separator {
  margin: 0 0.75rem;
  color: var(--text-muted);
}

.breadcrumb .current {
  color: var(--white);
}

@media (max-width: 768px) {
  .page-hero {
    height: 35vh;
    padding-bottom: 3rem;
  }

  .hero-title {
    font-size: 2.25rem;
  }
}
</style>

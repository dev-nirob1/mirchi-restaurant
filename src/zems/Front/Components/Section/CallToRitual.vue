<script setup>
</script>

<template>
  <section class="ritual-cta">
    <div class="ritual-image">
      <img src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=2000"
        alt="Mirchi Sanctuary" />
    </div>
    <div class="ritual-content">
      <h2 v-fade-in="'up'">READY FOR THE <span class="text-secondary">MIRCHI RITUAL?</span></h2>
      <BaseParagraph v-fade-in="'up'">
        Tables are released 30 days in advance. We invite you to
        secure your seat at our sanctuary of spice.
      </BaseParagraph>
      <div v-fade-in="'up'">
        <BaseButton class="btn-primary">SECURE A TABLE</BaseButton>
      </div>
    </div>
  </section>
</template>

<style scoped>
.ritual-cta {
  display: flex;
  min-height: 60vh;
  background-color: var(--primary-color);
  width: 100%;
}

.ritual-image {
  flex: 0 0 50%;
  position: relative;
  overflow: hidden;
}

.ritual-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.ritual-image::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to right, rgba(0, 0, 0, 0.4), transparent);
}

.ritual-content {
  flex: 0 0 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem;
}

.ritual-content h2 {
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 900;
  line-height: 1;
  text-transform: uppercase;
  margin-bottom: 1.5rem;
}

.ritual-content p {
  font-size: 1.15rem;
  opacity: 0.8;
  max-width: 550px;
  margin-bottom: 2rem;
}

@media (max-width: 992px) {
  .ritual-cta {
    flex-direction: column;
  }

  .ritual-image,
  .ritual-content {
    flex: 0 0 100%;
  }

  .ritual-image {
    height: 400px;
  }

  .ritual-content {
    padding: 3rem 2rem;
    text-align: center;
    align-items: center;
  }
}
</style>

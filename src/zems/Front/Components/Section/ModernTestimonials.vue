<template>
  <section class="testimonials section bg-light">
    <div class="container container-narrow flex-center col">
      <div class="quote-icon mb-2" v-fade-in>
        <i class="fa-solid fa-quote-left"></i>
      </div>
      
      <div class="quote-text text-center" v-fade-in="'up'">
        <h2 class="massive-quote">"Mirchi is not just a dinner; it's a sensory pilgrimage. The play of textures and the architectural use of spice is unlike anything I've experienced in Paris or Kyoto."</h2>
        <span class="quote-author accent-text mt-3">Julian Vane, Culinary Critic</span>
      </div>
      
      <div class="quote-pagination flex gap-1 mt-4" v-fade-in>
        <div class="dot active"></div>
        <div class="dot"></div>
        <div class="dot"></div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.container-narrow {
  max-width: 1000px;
}

.quote-icon {
  font-size: 3rem;
  color: var(--color-crimson);
  opacity: 0.5;
}

.massive-quote {
  font-size: 2.5rem;
  line-height: 1.4;
  font-weight: 400;
  font-style: italic;
  font-family: var(--font-serif);
  color: var(--color-bone);
}

.quote-author {
  display: block;
  font-size: 1.25rem;
  letter-spacing: 0.05em;
  color: var(--color-crimson);
}

.quote-pagination {
  display: flex;
}

.dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: var(--color-crimson);
  opacity: 0.2;
  cursor: pointer;
  transition: var(--transition);
}

.dot.active {
  opacity: 0.8;
  transform: scale(1.5);
}

.mt-3 { margin-top: 3rem; }
.mt-4 { margin-top: 4rem; }
.mb-2 { margin-bottom: 2rem; }

@media (max-width: 768px) {
  .massive-quote { font-size: 1.75rem; }
}
</style>

<template>
  <section class="gallery section">
    <div class="container text-center mb-5" v-fade-in>
      <span class="accent-text block mb-1">Visual Anthology</span>
      <h2>The Mirchi <span class="accent-text">Experience</span></h2>
    </div>
    
    <div class="container container-full">
      <div class="masonry-grid">
        <div class="masonry-item item-large" v-fade-in="'up'">
          <img src="https://images.unsplash.com/photo-1534080564607-c92751e89991?auto=format&fit=crop&q=80&w=1200" alt="The Spice Vault">
          <div class="item-overlay">the spice vault</div>
        </div>
        <div class="masonry-item" v-fade-in="'up'">
          <img src="https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&q=80&w=800" alt="Live Alchemy">
          <div class="item-overlay">live alchemy</div>
        </div>
        <div class="masonry-item" v-fade-in="'up'">
          <img src="https://images.unsplash.com/photo-1589113103133-7090f42dfaf3?auto=format&fit=crop&q=80&w=800" alt="Art of Plating">
          <div class="item-overlay">art of plating</div>
        </div>
        <div class="masonry-item item-tall" v-fade-in="'up'">
          <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800" alt="The Sanctuary">
           <div class="item-overlay">the sanctuary</div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.container-full {
  max-width: 1600px;
}

.masonry-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 350px);
  gap: 1.5rem;
}

.masonry-item {
  position: relative;
  overflow: hidden;
  background-color: #eee;
}

.masonry-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 1.2s cubic-bezier(0.19, 1, 0.22, 1);
}

.masonry-item:hover img {
  transform: scale(1.05);
}

.item-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-white);
  font-family: var(--font-sans);
  text-transform: uppercase;
  letter-spacing: 0.2em;
  font-size: 0.75rem;
  font-weight: 700;
  opacity: 0;
  transition: var(--transition);
}

.masonry-item:hover .item-overlay {
  opacity: 1;
}

.item-large {
  grid-column: span 2;
}

.item-tall {
  grid-row: span 2;
}

@media (max-width: 1200px) {
  .masonry-grid {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(4, 300px);
  }
  .item-large { grid-column: span 1; }
  .item-tall { grid-row: span 1; }
}

@media (max-width: 768px) {
  .masonry-grid {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 400px);
  }
}
</style>

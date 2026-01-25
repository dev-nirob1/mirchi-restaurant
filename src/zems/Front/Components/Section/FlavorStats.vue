<template>
  <section class="stats section bg-charcoal">
    <div class="container grid grid-stats">
      <div class="stat-item" v-fade-in="'up'">
        <span class="stat-num">29</span>
        <span class="stat-label">Years of <br/> Boldness</span>
      </div>
      <div class="stat-item" v-fade-in="'up'">
        <span class="stat-num">14</span>
        <span class="stat-label">Michelin <br/> Commendations</span>
      </div>
      <div class="stat-item" v-fade-in="'up'">
        <span class="stat-num">82</span>
        <span class="stat-label">Signature <br/> Spice Blends</span>
      </div>
      <div class="stat-item" v-fade-in="'up'">
        <span class="stat-num">04</span>
        <span class="stat-label">Global <br/> Destinations</span>
      </div>
    </div>
  </section>
</template>

<style scoped>
.bg-charcoal {
  background-color: var(--color-charcoal);
  color: var(--color-cream);
}

.grid-stats {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.stat-num {
  font-family: var(--font-serif);
  font-size: 5rem;
  font-weight: 700;
  line-height: 1;
  color: var(--color-crimson);
  margin-bottom: 1rem;
}

.stat-label {
  font-family: var(--font-sans);
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  opacity: 0.8;
  color: var(--color-bone);
}

@media (max-width: 992px) {
  .grid-stats { grid-template-columns: 1fr 1fr; row-gap: 4rem; }
}

@media (max-width: 768px) {
  .stat-num { font-size: 4rem; }
}
</style>

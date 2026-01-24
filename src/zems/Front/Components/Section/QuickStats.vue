<script setup>
const stats = [
  { val: '500+', label: 'SPICES SOURCED', sub: 'From local farms' },
  { val: '25', label: 'SECRET RECIPES', sub: 'Traditional heritage' },
  { val: '10K', label: 'HAPPY DINERS', sub: 'Every year' }
];
</script>

<template>
  <section class="quick-stats">
    <div class="container">
      <div class="stats-grid">
        <div v-for="stat in stats" :key="stat.label" class="stat-item" v-fade-in="'up'">
          <h2 class="value">{{ stat.val }}</h2>
          <div class="details">
            <h4 class="label">{{ stat.label }}</h4>
            <p class="sub">{{ stat.sub }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.quick-stats {
  padding: 6rem 0;
  background: #d4af37;
  color: #000;
}

.stats-grid {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  gap: 4rem;
}

.stat-item {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.value {
  font-size: 5rem;
  font-weight: 900;
  line-height: 1;
}

.label {
  font-size: 1.2rem;
  font-weight: 800;
  letter-spacing: 2px;
}

.sub {
  font-size: 0.9rem;
  font-weight: 600;
  text-transform: uppercase;
  opacity: 0.7;
}

@media (max-width: 992px) {
  .stats-grid { justify-content: center; }
  .stat-item { text-align: center; flex-direction: column; gap: 0.5rem; }
  .value { font-size: 4rem; }
}
</style>

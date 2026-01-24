<script setup>
</script>

<template>
  <section class="today-special">
    <div class="banner" v-fade-in>
      <div class="badge">CHEF'S SPECIAL</div>
      <div class="content">
        <h2>FIRE-ROASTED <br> RAAN-E-MIRCHI</h2>
        <p>A succulent whole leg of lamb, marinated for 24 hours in our signature ghost pepper rub and slow-fired to perfection.</p>
        <button class="order-btn">CLAIM SPECIAL OFFER</button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.today-special {
  padding: 4rem 2rem;
  background: #000;
}

.banner {
  background: linear-gradient(45deg, #222, #111);
  border: 2px solid #d4af37;
  padding: 6rem;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  text-align: center;
}

.badge {
  position: absolute;
  top: -20px;
  left: 50%;
  transform: translateX(-50%);
  background: #d4af37;
  color: #000;
  padding: 0.5rem 2rem;
  font-weight: 900;
  letter-spacing: 3px;
}

h2 {
  font-size: 4rem;
  font-weight: 900;
  color: #fff;
  margin-bottom: 2rem;
}

p {
  font-size: 1.25rem;
  color: #888;
  max-width: 700px;
  margin: 0 auto 3rem;
}

.order-btn {
  background: #d4af37;
  color: #000;
  padding: 1.5rem 4rem;
  border: none;
  font-weight: 800;
  font-size: 1.1rem;
  cursor: pointer;
  transition: 0.3s;
}

.order-btn:hover {
  background: #fff;
  letter-spacing: 2px;
}

@media (max-width: 768px) {
  .banner { padding: 3rem 1.5rem; }
  h2 { font-size: 2rem; }
  p { font-size: 1rem; }
}
</style>

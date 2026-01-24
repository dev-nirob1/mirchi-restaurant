<script setup>
import { ref } from 'vue';

const journeys = [
  { 
    title: 'Cardamom Hills', 
    desc: 'Verdant slopes where the "Queen of Spices" is harvested by hand at dawn.',
    img: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?q=80&w=2000&auto=format&fit=crop'
  },
  { 
    title: 'Pepper Farms', 
    desc: 'The black gold of the Malabar coast, sun-dried to perfection.',
    img: 'https://images.unsplash.com/photo-1506368249639-73a05d6f6488?q=80&w=2000&auto=format&fit=crop'
  },
  { 
    title: 'Chili Fields', 
    desc: 'Fiery fields of red where the soul of Mirchi is born under the blazing sun.',
    img: 'https://images.unsplash.com/photo-1510006851064-e6056cd0e3a8?q=80&w=2000&auto=format&fit=crop'
  }
];

const scrollContainer = ref(null);

const scroll = (dir) => {
  if (scrollContainer.value) {
    const amount = dir === 'right' ? 400 : -400;
    scrollContainer.value.scrollBy({ left: amount, behavior: 'smooth' });
  }
}
</script>

<template>
  <section class="spice-journey">
    <div class="container-fluid">
      <div class="section-header">
        <h2 v-fade-in>SPICE JOURNEY</h2>
        <div class="controls">
          <button @click="scroll('left')"><i class="fas fa-arrow-left"></i></button>
          <button @click="scroll('right')"><i class="fas fa-arrow-right"></i></button>
        </div>
      </div>

      <div class="horizontal-scroller" ref="scrollContainer">
        <div v-for="item in journeys" :key="item.title" class="journey-card">
          <div class="img-wrapper">
            <img :src="item.img" :alt="item.title">
          </div>
          <div class="card-content">
            <h3>{{ item.title }}</h3>
            <p>{{ item.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.spice-journey {
  padding: 8rem 2rem;
  background: #0a0a0a;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4rem;
  padding: 0 2rem;
}

h2 {
  font-size: 3.5rem;
  font-weight: 800;
  letter-spacing: 0.5rem;
}

.controls button {
  background: transparent;
  border: 1px solid #d4af37;
  color: #d4af37;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-left: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.controls button:hover {
  background: #d4af37;
  color: #000;
}

.horizontal-scroller {
  display: flex;
  gap: 3rem;
  overflow-x: auto;
  padding-bottom: 3rem;
  scrollbar-width: none; /* Firefox */
}

.horizontal-scroller::-webkit-scrollbar {
  display: none; /* Safari and Chrome */
}

.journey-card {
  min-width: 500px;
  position: relative;
}

.img-wrapper {
  height: 600px;
  overflow: hidden;
}

.img-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.journey-card:hover img {
  transform: scale(1.1);
}

.card-content {
  margin-top: 1.5rem;
}

h3 {
  font-size: 1.8rem;
  color: #d4af37;
  margin-bottom: 0.5rem;
}

p {
  font-size: 1.1rem;
  color: #888;
  max-width: 400px;
}

@media (max-width: 768px) {
  h2 { font-size: 2rem; }
  .journey-card { min-width: 300px; }
  .img-wrapper { height: 400px; }
}
</style>

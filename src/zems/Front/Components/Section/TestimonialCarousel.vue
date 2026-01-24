<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const testimonials = [
  { img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop', name: 'James Wilson', text: 'The heat is real, but the flavor is even better! Mirchi is hands down the best spicy spot in town.' },
  { img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop', name: 'Sarah Chen', text: 'Stunning ambiance and dishes that tell a story. The Guntur Chili Chicken is a must-try!' },
  { img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1000&auto=format&fit=crop', name: 'Marcus Rodriguez', text: 'Finally, a place that understands the balance between spice and culinary art.' }
];

const current = ref(0);
let timer;

onMounted(() => {
  timer = setInterval(() => {
    current.value = (current.value + 1) % testimonials.length;
  }, 5000);
});

onUnmounted(() => {
  clearInterval(timer);
});
</script>

<template>
  <section class="testimonials">
    <div class="container">
      <div class="header text-center mb-5">
        <h2 v-fade-in>WHAT DINERS SAY</h2>
      </div>

      <div class="carousel-wrapper" v-fade-in="'up'">
        <div class="slide" v-for="(t, i) in testimonials" :key="t.name" v-show="current === i">
          <div class="user-img">
            <img :src="t.img" :alt="t.name">
          </div>
          <p class="quote">"{{ t.text }}"</p>
          <h4 class="name">— {{ t.name }}</h4>
        </div>
      </div>

      <div class="indicators flex-center gap-1 mt-4">
        <span 
          v-for="(_, i) in testimonials" 
          :key="i"
          class="dot"
          :class="{ active: current === i }"
          @click="current = i"
        ></span>
      </div>
    </div>
  </section>
</template>

<style scoped>
.testimonials {
  padding: 8rem 0;
  background: #0a0a0a;
}

h2 {
  font-size: 3rem;
  font-weight: 800;
  letter-spacing: 0.3rem;
}

.carousel-wrapper {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

.user-img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  overflow: hidden;
  margin: 0 auto 2rem;
  border: 3px solid #d4af37;
}

.user-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.quote {
  font-size: 1.5rem;
  font-style: italic;
  line-height: 1.6;
  color: #ccc;
  margin-bottom: 2rem;
}

.name {
  color: #d4af37;
  font-size: 1.2rem;
  letter-spacing: 2px;
}

.dot {
  width: 10px;
  height: 10px;
  background: #333;
  border-radius: 50%;
  cursor: pointer;
  transition: 0.3s;
}

.dot.active {
  background: #d4af37;
  transform: scale(1.5);
}
</style>

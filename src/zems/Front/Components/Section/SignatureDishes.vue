<script setup>
const dishes = [
  {
    name: 'Guntur Chili Chicken',
    heat: 3,
    desc: 'A fiery tribute to the red chilies of Guntur, slow-cooked with aromatic spices.',
    img: 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?q=80&w=2000&auto=format&fit=crop'
  },
  {
    name: 'Pepper Crab Masala',
    heat: 2,
    desc: 'Fresh sea crab tossed in a black pepper and curry leaf reduction.',
    img: 'https://images.unsplash.com/photo-1563379091339-03b21bc4a4f8?q=80&w=2000&auto=format&fit=crop'
  },
  {
    name: 'Saffron Lamb Korma',
    heat: 1,
    desc: 'Mild but flavorful, infused with premium saffron and almond cream.',
    img: 'https://images.unsplash.com/photo-1527477396000-e27163b481c2?q=80&w=2000&auto=format&fit=crop'
  }
];
</script>

<template>
  <section class="signature-dishes">
    <div class="container">
      <div class="section-title text-center">
        <h2 v-fade-in>SIGNATURE SELECTION</h2>
        <p class="subtitle" v-fade-in>Crafted by our master spice-smiths</p>
      </div>

      <div class="dishes-grid">
        <div v-for="dish in dishes" :key="dish.name" class="dish-card" v-fade-in="'up'">
          <div class="dish-img">
            <img :src="dish.img" :alt="dish.name">
            <div class="heat-meter">
              <span v-for="n in 3" :key="n" :class="{ active: n <= dish.heat }">🌶️</span>
            </div>
          </div>
          <div class="dish-info">
            <h3>{{ dish.name }}</h3>
            <p>{{ dish.desc }}</p>
            <button class="btn-detail">Explore Recipe</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.signature-dishes {
  padding: 8rem 0;
  background: #000;
}

.section-title {
  margin-bottom: 5rem;
}

h2 {
  font-size: 3rem;
  font-weight: 900;
  letter-spacing: 0.3rem;
}

.subtitle {
  color: #d4af37;
  letter-spacing: 0.2rem;
  margin-top: 1rem;
}

.dishes-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
  padding: 0 2rem;
}

.dish-card {
  background: #111;
  transition: all 0.4s ease;
}

.dish-card:hover {
  transform: translateY(-15px);
  box-shadow: 0 20px 40px rgba(0,0,0,0.8);
}

.dish-img {
  position: relative;
  height: 400px;
}

.dish-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.heat-meter {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: rgba(0,0,0,0.7);
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  display: flex;
  gap: 0.2rem;
}

.heat-meter span {
  opacity: 0.2;
  font-size: 1.2rem;
}

.heat-meter span.active {
  opacity: 1;
  filter: drop-shadow(0 0 5px red);
}

.dish-info {
  padding: 2.5rem;
}

h3 {
  font-size: 1.8rem;
  margin-bottom: 1rem;
  color: #fff;
}

p {
  color: #888;
  line-height: 1.6;
  margin-bottom: 2rem;
}

.btn-detail {
  background: transparent;
  color: #d4af37;
  border: 1px solid #d4af37;
  padding: 0.75rem 1.5rem;
  font-weight: 700;
  cursor: pointer;
  transition: 0.3s;
}

.btn-detail:hover {
  background: #d4af37;
  color: #000;
}

@media (max-width: 992px) {
  .dishes-grid { grid-template-columns: 1fr; }
  .dish-img { height: 350px; }
}
</style>

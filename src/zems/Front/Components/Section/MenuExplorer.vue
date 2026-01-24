<script setup>
import { ref, computed } from 'vue';

const categories = ['All', 'Appetizers', 'Main Course', 'Desserts', 'Beverages'];
const activeCategory = ref('All');

const menuItems = [
  { id: 1, name: 'Guntur Chili Chicken', category: 'Main Course', price: '$18', heat: 3, img: 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?q=80&w=1000&auto=format&fit=crop' },
  { id: 2, name: 'Samosa Platter', category: 'Appetizers', price: '$10', heat: 1, img: 'https://images.unsplash.com/photo-1601050633647-8f8f1f3ca419?q=80&w=1000&auto=format&fit=crop' },
  { id: 3, name: 'Mango Lassi', category: 'Beverages', price: '$6', heat: 0, img: 'https://images.unsplash.com/photo-1546173159-315724a31696?q=80&w=1000&auto=format&fit=crop' },
  { id: 4, name: 'Gulab Jamun', category: 'Desserts', price: '$8', heat: 0, img: 'https://images.unsplash.com/photo-159113103133-7090f42dfaf3?q=80&w=1000&auto=format&fit=crop' },
  { id: 5, name: 'Pepper Crab Masala', category: 'Main Course', price: '$24', heat: 2, img: 'https://images.unsplash.com/photo-1563379091339-03b21bc4a4f8?q=80&w=1000&auto=format&fit=crop' },
  { id: 6, name: 'Crispy Okra Fries', category: 'Appetizers', price: '$9', heat: 1, img: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=1000&auto=format&fit=crop' },
];

const filteredItems = computed(() => {
  if (activeCategory.value === 'All') return menuItems;
  return menuItems.filter(item => item.category === activeCategory.value);
});
</script>

<template>
  <section class="menu-explorer py-5">
    <div class="container">
      <!-- Category Filter -->
      <div class="category-tabs flex-center gap-2 mb-5">
        <button 
          v-for="cat in categories" 
          :key="cat"
          :class="{ active: activeCategory === cat }"
          @click="activeCategory = cat"
        >
          {{ cat }}
        </button>
      </div>

      <!-- Menu Grid -->
      <div class="menu-grid">
        <div 
          v-for="item in filteredItems" 
          :key="item.id" 
          class="menu-card bg-surface p-2"
          v-fade-in="'up'"
        >
          <div class="card-img relative">
            <img :src="item.img" :alt="item.name" class="width-full">
            <div class="heat-meter absolute" v-if="item.heat > 0">
              <span v-for="n in 3" :key="n" :class="{ active: n <= item.heat }">🌶️</span>
            </div>
            <div class="price-badge absolute">{{ item.price }}</div>
          </div>
          <div class="card-info p-2 mt-1">
            <h4>{{ item.name }}</h4>
            <p class="text-muted small">{{ item.category }}</p>
            <BaseButton class="bg-secondary text-primary mt-2 width-full">Order Now</BaseButton>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.category-tabs button {
  background: transparent;
  border: none;
  color: var(--text-muted);
  font-size: 1rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;
  cursor: pointer;
  padding: 0.5rem 1rem;
  border-bottom: 2px solid transparent;
  transition: all 0.3s ease;
}

.category-tabs button.active {
  color: var(--secondary-color);
  border-bottom-color: var(--secondary-color);
}

.menu-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
}

.menu-card {
  border: 1px solid var(--border-muted);
  transition: transform 0.3s ease;
}

.menu-card:hover {
  transform: translateY(-5px);
  border-color: var(--secondary-color);
}

.card-img {
  height: 250px;
  overflow: hidden;
}

.card-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.heat-meter {
  top: 1rem;
  right: 1rem;
  background: rgba(0,0,0,0.6);
  padding: 0.3rem 0.6rem;
  border-radius: 1rem;
  font-size: 0.9rem;
}

.heat-meter span {
  opacity: 0.2;
}

.heat-meter span.active {
  opacity: 1;
}

.price-badge {
  bottom: 0;
  left: 0;
  background: var(--secondary-color);
  color: var(--primary-color);
  padding: 0.5rem 1rem;
  font-weight: 900;
}

h4 {
  font-size: 1.4rem;
  color: var(--white);
}

@media (max-width: 768px) {
  .category-tabs {
    flex-wrap: wrap;
    gap: 1rem;
  }
  .menu-grid {
    grid-template-columns: 1fr;
  }
}
</style>

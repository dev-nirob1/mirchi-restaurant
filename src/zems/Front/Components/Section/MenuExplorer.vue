<script setup>
import { ref, computed } from 'vue';
import MenuCard from '../Widget/MenuCard.vue';

const categories = ['All', 'Appetizers', 'Main Course', 'Desserts', 'Beverages'];
const activeCategory = ref('All');

const menuItems = [
  // Appetizers
  { id: 1, title: 'Samosa Platter', category: 'Appetizers', price: '$12', heat: 1, desc: 'Golden crisped pastry filled with spiced potatoes and forest peas.', image: 'https://images.unsplash.com/photo-1601050633647-8f8f1f3ca419?auto=format&fit=crop&q=80&w=800' },
  { id: 2, title: 'Crispy Okra Fries', category: 'Appetizers', price: '$10', heat: 1, desc: 'Thinly sliced okra dusted with mango powder and black salt.', image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=800' },
  { id: 3, title: 'Paneer Chili Fry', category: 'Appetizers', price: '$14', heat: 2, desc: 'Fresh cottage cheese tossed with bell peppers and green house-grown chilies.', image: 'https://images.unsplash.com/photo-1567184109171-9b5757d5d21c?auto=format&fit=crop&q=80&w=800' },

  // Main Course
  { id: 4, title: 'Guntur Chili Chicken', category: 'Main Course', price: '$26', heat: 3, desc: 'A fiery signature preparation using hand-pounded Guntur chilies.', image: 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&q=80&w=800' },
  { id: 5, title: 'Pepper Crab Masala', category: 'Main Course', price: '$34', heat: 2, desc: 'Sea crab reduction of tellicherry peppercorns and toasted curry leaves.', image: 'https://images.unsplash.com/photo-1563379091339-03b21bc4a4f8?auto=format&fit=crop&q=80&w=800' },
  { id: 6, title: 'Saffron Lamb Shank', category: 'Main Course', price: '$38', heat: 1, desc: '12-hour braised pasture lamb in wild saffron and clay-pot spices.', image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800' },
  { id: 7, title: 'Black Truffle Dal', category: 'Main Course', price: '$22', heat: 1, desc: 'Slow-simmered black lentils finished with charcoal smoke and truffle oil.', image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&q=80&w=800' },

  // Desserts
  { id: 8, title: 'Gulab Jamun Cloud', category: 'Desserts', price: '$12', heat: 0, desc: 'Milk dumplings in saffron syrup served with mascarpone foam.', image: 'https://images.unsplash.com/photo-159113103133-7090f42dfaf3?auto=format&fit=crop&q=80&w=800' },
  { id: 9, title: 'Mango Cardamom Tart', category: 'Desserts', price: '$14', heat: 0, desc: 'Alphonso mango pulp layered with cardamom-infused white chocolate.', image: 'https://images.unsplash.com/photo-1532499016263-f2c3e98df9c8?auto=format&fit=crop&q=80&w=800' },

  // Beverages
  { id: 10, title: 'Lychee Ginger Fizz', category: 'Beverages', price: '$9', heat: 0, desc: 'Fresh lychee nectar with cold-pressed ginger and organic agave.', image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&q=80&w=800' },
  { id: 11, title: 'Smoked Masala Chai', category: 'Beverages', price: '$6', heat: 1, desc: 'Traditional estate tea finished with wood-smoke and raw spices.', image: 'https://images.unsplash.com/photo-1594631252845-29fc45865506?auto=format&fit=crop&q=80&w=800' },
  { id: 12, title: 'Rose Petal Lassi', category: 'Beverages', price: '$8', heat: 0, desc: 'Slow-churned yogurt with organic rose preserve and dried petals.', image: 'https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&q=80&w=800' },
];

const filteredItems = computed(() => {
  if (activeCategory.value === 'All') return menuItems;
  return menuItems.filter(item => item.category === activeCategory.value);
});
</script>

<template>
  <section class="menu-explorer section bg-light">
    <div class="container">
      <!-- Category Selection -->
      <div class="category-filters flex-center wrap gap-1 mb-3">
        <button v-for="cat in categories" :key="cat" class="filter-btn" :class="{ active: activeCategory === cat }"
          @click="activeCategory = cat">
          {{ cat }}
        </button>
      </div>

      <!-- Menu Grid using project grid system -->
      <div class="medium-2 gap-2">
        <div v-for="item in filteredItems" :key="item.id" class="menu-item-wrapper" v-fade-in="'up'">
          <MenuCard :dish="item" />
        </div>
      </div>

      <!-- Empty State -->
      <div v-if="filteredItems.length === 0" class="text-center py-5">
        <BaseParagraph class="text-muted">No items found in this collection.</BaseParagraph>
      </div>
    </div>
  </section>
</template>

<style scoped>
.menu-explorer {
  padding: 5rem 0;
}

.filter-btn {
  background: transparent;
  border: 1px solid var(--border-muted);
  color: var(--text-muted);
  font-size: 0.9rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;
  padding: 0.75rem 2rem;
  border-radius: 0;
  /* Sharp edges */
  transition: all 0.3s ease;
}

.filter-btn.active {
  background: var(--accent-color);
  color: var(--white);
  border-color: var(--accent-color);
}

.filter-btn:not(.active):hover {
  color: var(--white);
  border-color: var(--accent-color);
}

.menu-item-wrapper {
  transition: opacity 0.4s ease, transform 0.4s ease;
}

@media (max-width: 992px) {
  .category-filters {
    gap: 0.75rem;
  }

  .filter-btn {
    font-size: 0.8rem;
    padding: 0.6rem 1.25rem;
  }
}

@media (max-width: 600px) {
  .category-filters {
    justify-content: center;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .filter-btn {
    font-size: 0.75rem;
    padding: 0.5rem 1rem;
    flex: 0 1 auto;
  }
}
</style>

<script setup>
import { ref, computed } from 'vue';
import MenuCard from '../Widget/MenuCard.vue';

const categories = ['All', 'Appetizers', 'Main Course', 'Desserts', 'Beverages'];
const activeCategory = ref('All');

const menuItems = [
  // Appetizers
  { id: 1, title: 'Samosa Platter', category: 'Appetizers', price: '$12', heat: 1, desc: 'Golden crisped pastry filled with spiced potatoes and forest peas.', image: 'https://images.pexels.com/photos/30446144/pexels-photo-30446144.jpeg?_gl=1*qzjzpf*_ga*OTAzOTgwMTguMTczNzAwNTI1OA..*_ga_8JE65Q40S6*czE3Njk0MzE4NDMkbzQ1JGcxJHQxNzY5NDMyNjMyJGozJGwwJGgw' },
  { id: 2, title: 'Crispy Okra Fries', category: 'Appetizers', price: '$10', heat: 1, desc: 'Thinly sliced okra dusted with mango powder and black salt.', image: 'https://images.pexels.com/photos/2498440/pexels-photo-2498440.jpeg?_gl=1*sdsulu*_ga*OTAzOTgwMTguMTczNzAwNTI1OA..*_ga_8JE65Q40S6*czE3Njk0MzE4NDMkbzQ1JGcxJHQxNzY5NDMyNzE4JGozOSRsMCRoMA..' },
  { id: 3, title: 'Paneer Chili Fry', category: 'Appetizers', price: '$14', heat: 2, desc: 'Fresh cottage cheese tossed with bell peppers and green house-grown chilies.', image: 'https://images.pexels.com/photos/9609835/pexels-photo-9609835.jpeg?_gl=1*zaqw4f*_ga*OTAzOTgwMTguMTczNzAwNTI1OA..*_ga_8JE65Q40S6*czE3Njk0MzE4NDMkbzQ1JGcxJHQxNzY5NDMyODkyJGoxMSRsMCRoMA..' },

  // Main Course
  { id: 4, title: 'Guntur Chili Chicken', category: 'Main Course', price: '$26', heat: 3, desc: 'A fiery signature preparation using hand-pounded Guntur chilies.', image: 'https://images.pexels.com/photos/33869807/pexels-photo-33869807.jpeg?_gl=1*rw7vh6*_ga*OTAzOTgwMTguMTczNzAwNTI1OA..*_ga_8JE65Q40S6*czE3Njk0MzE4NDMkbzQ1JGcxJHQxNzY5NDMyNzY0JGo1MyRsMCRoMA..' },
  { id: 5, title: 'Pepper Crab Masala', category: 'Main Course', price: '$34', heat: 2, desc: 'Sea crab reduction of tellicherry peppercorns and toasted curry leaves.', image: 'https://images.pexels.com/photos/7151075/pexels-photo-7151075.jpeg?_gl=1*tbc1ew*_ga*OTAzOTgwMTguMTczNzAwNTI1OA..*_ga_8JE65Q40S6*czE3Njk0MzE4NDMkbzQ1JGcxJHQxNzY5NDMyOTczJGoyOSRsMCRoMA..' },
  { id: 6, title: 'Saffron Lamb Shank', category: 'Main Course', price: '$38', heat: 1, desc: '12-hour braised pasture lamb in wild saffron and clay-pot spices.', image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800' },
  { id: 7, title: 'Black Truffle Dal', category: 'Main Course', price: '$22', heat: 1, desc: 'Slow-simmered black lentils finished with charcoal smoke and truffle oil.', image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&q=80&w=800' },

  // Desserts
  { id: 8, title: 'Gulab Jamun Cloud', category: 'Desserts', price: '$12', heat: 0, desc: 'Milk dumplings in saffron syrup served with mascarpone foam.', image: 'https://images.pexels.com/photos/17091579/pexels-photo-17091579.jpeg?_gl=1*1eglru3*_ga*OTAzOTgwMTguMTczNzAwNTI1OA..*_ga_8JE65Q40S6*czE3Njk0MzE4NDMkbzQ1JGcxJHQxNzY5NDMzMDU2JGozOSRsMCRoMA..' },
  { id: 9, title: 'Mango Cardamom Tart', category: 'Desserts', price: '$14', heat: 0, desc: 'Alphonso mango pulp layered with cardamom-infused white chocolate.', image: 'https://images.pexels.com/photos/34193676/pexels-photo-34193676.jpeg?_gl=1*mz73ll*_ga*OTAzOTgwMTguMTczNzAwNTI1OA..*_ga_8JE65Q40S6*czE3Njk0MzE4NDMkbzQ1JGcxJHQxNzY5NDMzMTY1JGo1OSRsMCRoMA..' },

  // Beverages
  { id: 10, title: 'Lychee Ginger Fizz', category: 'Beverages', price: '$9', heat: 0, desc: 'Fresh lychee nectar with cold-pressed ginger and organic agave.', image: 'https://images.unsplash.com/photo-1682530017002-34e2cb7b1653?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 11, title: 'Smoked Masala Chai', category: 'Beverages', price: '$6', heat: 1, desc: 'Traditional estate tea finished with wood-smoke and raw spices.', image: 'https://images.pexels.com/photos/16942969/pexels-photo-16942969.jpeg?_gl=1*1g9ruy6*_ga*OTAzOTgwMTguMTczNzAwNTI1OA..*_ga_8JE65Q40S6*czE3Njk0MzE4NDMkbzQ1JGcxJHQxNzY5NDMzNjYyJGo1OSRsMCRoMA..' },
  { id: 12, title: 'Rose Petal Lassi', category: 'Beverages', price: '$8', heat: 0, desc: 'Slow-churned yogurt with organic rose preserve and dried petals.', image: 'https://images.pexels.com/photos/20689315/pexels-photo-20689315.jpeg?_gl=1*19blcrt*_ga*OTAzOTgwMTguMTczNzAwNTI1OA..*_ga_8JE65Q40S6*czE3Njk0MzE4NDMkbzQ1JGcxJHQxNzY5NDMzNzQ1JGo0MSRsMCRoMA..' },
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

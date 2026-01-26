<script setup>
import { ref } from 'vue';
import { cart } from '@/store/cart';
import DishModal from './DishModal.vue';

defineProps({
  dish: Object
})

const isModalOpen = ref(false);
</script>

<template>
  <div class="menu-card" @click="isModalOpen = true">
    <div class="image">
      <BaseImage :image="dish.image" />
    </div>
    <div class="content">
      <SubTitle>{{ dish.title }}</SubTitle>
      <BaseParagraph>{{ dish.desc }}</BaseParagraph>
      <BaseParagraph class="price">Price: <span>{{ dish.price }}</span></BaseParagraph>
      <BaseButton class="btn-primary" @click.stop="cart.addItem(dish)">Order Now</BaseButton>
    </div>

    <!-- Dish Details Modal -->
    <DishModal :dish="dish" :isOpen="isModalOpen" @close="isModalOpen = false" />
  </div>
</template>
<style scoped>
.menu-card {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background: var(--primary-color);
  cursor: pointer;
}

.menu-card .sub-title {
  font-size: 1.25rem;
}

.menu-card .price span {
  color: var(--accent-color);
}

.menu-card p {
  font-size: 1rem;
}

.menu-card .image {
  height: 280px;
  width: 100%;
  flex: 1;
}

.menu-card .image img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}

.menu-card .content {
  padding: 1rem;
  width: 100%;
  flex: 0 0 50%;
}

@media(min-width: 768px) {
  .menu-card {
    flex-direction: row;
  }
}
</style>

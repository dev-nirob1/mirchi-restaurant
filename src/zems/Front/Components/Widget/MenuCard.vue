<script setup>
defineProps({
  dish: Object
})
</script>
<template>
  <div class="menu-card">
    <div class="image">
      <BaseImage :image="dish.image" />
    </div>
    <div class="content">
      <SubTitle>{{ dish.title }}</SubTitle>
      <BaseParagraph>{{ dish.desc }}</BaseParagraph>
      <BaseParagraph class="price">Price: <span>{{ dish.price }}</span></BaseParagraph>
      <BaseButton class="btn-primary">Order Now</BaseButton>
    </div>
  </div>
</template>
<style scoped>
.menu-card {
  display: flex;
  gap: 1rem;
  background: var(--primary-color);
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
</style>

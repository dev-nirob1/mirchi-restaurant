<script setup>
defineProps({
  member: {
    type: Object
  }
})
</script>

<template>
  <div class="member-card">
    <div class="image">
      <BaseImage :image="member.image" />
    </div>
    <div class="card-content">
      <SubTitle>{{ member.name }}</SubTitle>
      <BaseParagraph>{{ member.role }}</BaseParagraph>
    </div>
  </div>
</template>
<style scoped>
.member-card {
  background: var(--primary-color);
}

.card-content {
  padding: 1rem 1rem .5rem 1rem;
}

.member-card .image {
  height: 320px;
  width: 100%;
}

.image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.member-card .sub-title {
  font-size: 1.25rem;
}

.member-card p {
  font-size: 1rem;
  color: var(--accent-color);
}
</style>

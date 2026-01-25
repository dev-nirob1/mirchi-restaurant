<script setup>
defineProps({
  title: {
    type: String
  },
  subTitle: {
    tupe: String
  }
})
</script>
<template>
  <div class="section-title">
    <SubTitle>{{ subTitle }}</SubTitle>
    <BaseTitle>{{ title }}</BaseTitle>
  </div>
</template>
<style>
.section-title .sub-title {
  font-size: 1.25rem;
  font-style: italic;
  color: var(--accent-color);
  font-family: var(--font-serif);
}

.section-title .title {
  font-size: 3.25rem;
  margin-top: .5rem;
}
</style>

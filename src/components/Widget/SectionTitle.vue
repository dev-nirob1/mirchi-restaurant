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
    <BaseTitle>{{ title }}</BaseTitle>
    <BaseParagraph>{{ subTitle }}</BaseParagraph>
  </div>
</template>
<style>

</style>

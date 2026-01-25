<script setup>
import BaseParagraph from '@/components/element/BaseParagraph.vue';
import SectionTitle from '@/components/Widget/SectionTitle.vue';

</script>

<template>
  <section class="about-intro">
    <div class="container">
      <div class="medium-2 gap-2">
        <div>
          <SectionTitle class="mb-2" subTitle="Our Ethos" title="A Symphony of Heritage & Innovation" />
          <BaseParagraph>At Mirchi, we believe that cooking is a form of alchemy. We source the rarest spices from
            micro-regions across the globe, hand-grinding them in our kitchen to preserve their deepest essences.
          </BaseParagraph>
          <BaseParagraph>Our culinary philosophy is rooted in respect for the ingredient, the tradition, and the modern
            palate. Every plate is a carefully curated narrative of flavor and fire.</BaseParagraph>
        </div>
        <div v-fade-in="'up'" class="image">
          <BaseImage
            image="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=800" />
        </div>
      </div>

    </div>

  </section>
</template>
<style scoped>
.about-intro {
  padding: 3.75rem 0;
}
</style>

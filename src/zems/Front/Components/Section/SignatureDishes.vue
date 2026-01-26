<script setup>
import SectionTitle from '@/components/Widget/SectionTitle.vue';
import { ref } from 'vue';
import MenuCard from '../Widget/MenuCard.vue';
const signaturedDishes = ref(
  [
    {
      id: 1,
      title: "Guntur Chili Chicken",
      desc: "A fiery signature preparation using hand-pounded Guntur chilies and slow-roasted spices.",
      price: "$25",
      image: "https://images.unsplash.com/photo-1602253057119-44d745d9b860?q=80&w=726&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 2,
      title: "Malabar Pepper Crab",
      desc: "Fresh sea crab tossed in a reduction of tellicherry peppercorns and toasted curry leaves.",
      price: "$32",
      image: "https://images.unsplash.com/photo-1559847844-5315695dadae?q=80&w=858&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 3,
      title: "Saffron Lamb Shank",
      desc: "12-hour braised pasture-raised lamb in a gravy of wild saffron and ancient clay-pot spices.",
      price: "$38",
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 4,
      title: "Smoked Paneer Tikka",
      desc: "House-made organic cottage cheese doused in a spicy yogurt marinade and oak-wood smoked.",
      price: "$22",
      image: "https://images.unsplash.com/photo-1606850246029-dd00bd5eff97?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ]
)

</script>

<template>
  <section class="signature-dishes bg-light">
    <div class="container">
      <SectionTitle class="mb-1" subTitle="Our Manifestation" title="Signature Creations" />
      <div class="medium-2 gap-2">
        <MenuCard v-for="dish in signaturedDishes" :key="dish.id" :dish="dish" />
      </div>
    </div>

    <div class="container text-center mt-3" v-fade-in>
      <RouterLink to="/menu" class="btn btn-outline">Explore the Full Anthology</RouterLink>
    </div>
  </section>
</template>

<style scoped>
.signature-dishes {
  padding: 6rem 0 3.75rem 0;
}

.signature-dishes .btn-outline {
  background: var(--primary-color);
}

.signature-dishes .btn-outline:hover {
  background: var(--accent-color);
}
</style>

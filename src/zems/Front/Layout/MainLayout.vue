<script setup>
import FooterSection from '@/components/Section/FooterSection.vue';
import NavbarSection from '@/components/Section/NavbarSection.vue';
import CartDrawer from '@/components/Widget/CartDrawer.vue';
import FloatingCart from '@/components/Widget/FloatingCart.vue';
import ToastContainer from '@/components/Widget/ToastContainer.vue';
import { RouterView } from 'vue-router';

</script>

<template>
  <NavbarSection />
  <RouterView />
  <FooterSection />
  <CartDrawer />
  <FloatingCart />
  <ToastContainer />
</template>

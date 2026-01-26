<script setup>
import { cart } from '@/store/cart';
import { computed } from 'vue';

const totalItems = computed(() => cart.totalItems.value);
const isOpen = computed(() => cart.isOpen.value);
</script>

<template>
    <button v-if="!isOpen" class="floating-cart" @click="cart.open()" :class="{ 'has-items': totalItems > 0 }">
        <div class="cart-icon-wrapper">
            <i class="fa-solid fa-basket-shopping"></i>
            <span v-if="totalItems > 0" class="cart-badge">{{ totalItems }}</span>
        </div>
        <span class="cart-label">My Ritual</span>
    </button>
</template>

<style scoped>
.floating-cart {
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    background: var(--color-crimson);
    color: var(--color-white);
    border: none;
    border-radius: 100px;
    padding: 0.75rem 1.5rem;
    display: flex;
    align-items: center;
    gap: 0.75rem;
    cursor: pointer;
    z-index: 998;
    box-shadow: 0 10px 30px rgba(139, 0, 0, 0.4);
    transition: var(--transition);
}

.floating-cart:hover {
    background: var(--color-blood);
    transform: translateY(-5px);
}

.cart-icon-wrapper {
    position: relative;
    font-size: 1.25rem;
}

.cart-badge {
    position: absolute;
    top: -8px;
    right: -10px;
    background: var(--color-bone);
    color: var(--color-noir);
    font-size: 0.7rem;
    font-weight: 900;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid var(--color-crimson);
}

.cart-label {
    font-family: var(--font-sans);
    font-weight: 700;
    text-transform: uppercase;
    font-size: 0.8rem;
    letter-spacing: 1px;
}

@media (max-width: 768px) {
    .floating-cart {
        bottom: 1.5rem;
        right: 1.5rem;
        padding: 1rem;
    }

    .cart-label {
        display: none;
    }
}
</style>

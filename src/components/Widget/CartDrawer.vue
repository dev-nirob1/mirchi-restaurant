<script setup>
import { cart } from '@/store/cart';
import { computed } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const isOpen = computed(() => cart.isOpen.value);
const items = computed(() => cart.items.value);
const totalPrice = computed(() => cart.totalPrice.value);

const handleCheckout = () => {
    cart.close();
    router.push({ name: 'checkout' });
};

const formatPrice = (price) => {
    return new Intl.NumberFormat('en-BD', {
        style: 'currency',
        currency: 'BDT',
        minimumFractionDigits: 0
    }).format(price);
};
</script>

<template>
    <div>
        <!-- Backdrop -->
        <Transition name="fade">
            <div v-if="isOpen" class="cart-backdrop" @click="cart.close()"></div>
        </Transition>

        <!-- Drawer -->
        <Transition name="slide">
            <div v-if="isOpen" class="cart-drawer">
                <div class="cart-header">
                    <h3 class="cart-title">Your Ritual Selection</h3>
                    <button class="close-btn" @click="cart.close()">
                        <i class="fa-solid fa-xmark"></i>
                    </button>
                </div>

                <div class="cart-body">
                    <div v-if="items.length === 0" class="empty-cart">
                        <i class="fa-solid fa-utensils mb-3"></i>
                        <p>Your tray is empty.</p>
                        <BaseButton class="btn-outline mt-3" @click="cart.close()">Discover Menu</BaseButton>
                    </div>

                    <div v-else class="cart-items">
                        <div v-for="item in items" :key="item.id || item.title" class="cart-item">
                            <div class="item-img">
                                <BaseImage :image="item.image" />
                            </div>
                            <div class="item-details">
                                <h4 class="item-title">{{ item.title }}</h4>
                                <p class="item-price">{{ item.price }}</p>
                                <div class="quantity-controls">
                                    <button @click="cart.updateQuantity(item.id, item.quantity - 1)">-</button>
                                    <span>{{ item.quantity }}</span>
                                    <button @click="cart.updateQuantity(item.id, item.quantity + 1)">+</button>
                                </div>
                            </div>
                            <button class="remove-btn" @click="cart.removeItem(item.id)">
                                <i class="fa-solid fa-trash-can"></i>
                            </button>
                        </div>
                    </div>
                </div>

                <div v-if="items.length > 0" class="cart-footer">
                    <div class="total-row">
                        <span>Subtotal</span>
                        <span class="total-amount">{{ formatPrice(totalPrice) }}</span>
                    </div>
                    <BaseButton class="btn-primary w-full mt-4" @click="handleCheckout">Proceed to Ritual</BaseButton>
                    <p class="cart-note">* Personalizing your delivery experience...</p>
                </div>
            </div>
        </Transition>
    </div>
</template>

<style scoped>
.cart-backdrop {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.8);
    backdrop-filter: blur(4px);
    z-index: 999;
}

.cart-drawer {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    max-width: 400px;
    background: var(--color-noir);
    border-left: 1px solid rgba(var(--color-bone), 0.1);
    z-index: 1000;
    display: flex;
    flex-direction: column;
    box-shadow: -10px 0 30px rgba(0, 0, 0, 0.5);
}

.cart-header {
    padding: 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.cart-title {
    font-family: var(--font-serif);
    font-size: 1.5rem;
    color: var(--color-bone);
}

.close-btn {
    background: transparent;
    border: none;
    color: var(--color-bone);
    font-size: 1.5rem;
    cursor: pointer;
    transition: var(--transition);
}

.close-btn:hover {
    color: var(--accent-color);
}

.cart-body {
    flex: 1;
    overflow-y: auto;
    padding: 2rem;
}

.empty-cart {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    opacity: 0.5;
}

.empty-cart i {
    font-size: 3rem;
}

.cart-item {
    display: flex;
    gap: 1rem;
    margin-bottom: 2rem;
    align-items: center;
}

.item-img {
    width: 80px;
    height: 80px;
    background: var(--color-charcoal);
}

.item-img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.item-details {
    flex: 1;
}

.item-title {
    font-family: var(--font-sans);
    font-weight: 700;
    font-size: 0.9rem;
    color: var(--color-bone);
    margin-bottom: 0.25rem;
    text-transform: uppercase;
}

.item-price {
    font-size: 0.85rem;
    color: var(--accent-color);
    margin-bottom: 0.75rem;
}

.quantity-controls {
    display: flex;
    align-items: center;
    gap: 1rem;
    border: 1px solid rgba(255, 255, 255, 0.1);
    width: fit-content;
    padding: 0.25rem 0.5rem;
}

.quantity-controls button {
    background: transparent;
    border: none;
    color: var(--color-bone);
    cursor: pointer;
    font-size: 1.1rem;
}

.remove-btn {
    background: transparent;
    border: none;
    color: rgba(255, 255, 255, 0.3);
    cursor: pointer;
    transition: var(--transition);
}

.remove-btn:hover {
    color: var(--accent-color);
}

.cart-footer {
    padding: 2rem;
    border-top: 1px solid rgba(255, 255, 255, 0.05);
    background: rgba(255, 255, 255, 0.02);
}

.total-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: var(--font-sans);
    font-weight: 700;
    font-size: 1.1rem;
}

.total-amount {
    color: var(--accent-color);
}

.cart-note {
    font-size: 0.75rem;
    text-align: center;
    margin-top: 1rem;
    opacity: 0.4;
    font-style: italic;
}

/* Transitions */
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
    transition: transform 0.4s cubic-bezier(0.19, 1, 0.22, 1);
}

.slide-enter-from,
.slide-leave-to {
    transform: translateX(100%);
}
</style>

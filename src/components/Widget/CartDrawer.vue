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
        <Transition name="premium-slide">
            <div v-if="isOpen" class="cart-drawer">
                <div class="cart-header">
                    <h3 class="cart-title">Your Ritual Tray</h3>
                    <button class="close-btn" @click="cart.close()">
                        <i class="fa-solid fa-xmark"></i>
                    </button>
                </div>

                <div class="cart-body">
                    <div v-if="items.length === 0" class="empty-cart">
                        <i class="fa-solid fa-utensils mb-3"></i>
                        <p class="empty-text">Your ritual tray is empty.</p>
                        <BaseButton class="btn-outline mt-3 btn-sm" @click="cart.close()">Discover Menu</BaseButton>
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
                                    <button @click="cart.updateQuantity(item.id, item.quantity - 1)" class="qty-btn"
                                        :disabled="item.quantity <= 1">-</button>
                                    <span class="qty-val">{{ item.quantity }}</span>
                                    <button @click="cart.updateQuantity(item.id, item.quantity + 1)"
                                        class="qty-btn">+</button>
                                </div>
                            </div>
                            <button class="remove-btn" @click="cart.removeItem(item.id)" title="Remove item">
                                <i class="fa-solid fa-trash-can"></i>
                            </button>
                        </div>
                    </div>
                </div>

                <div v-if="items.length > 0" class="cart-footer">
                    <div class="total-row">
                        <span class="total-label">Subtotal</span>
                        <span class="total-amount">{{ formatPrice(totalPrice) }}</span>
                    </div>
                    <BaseButton class="btn-primary w-full mt-4 py-3" @click="handleCheckout">
                        Initiate Ritual
                    </BaseButton>
                </div>
            </div>
        </Transition>
    </div>
</template>

<style scoped>
.cart-backdrop {
    position: fixed;
    inset: 0;
    background: #000;
    z-index: 2000;
}

.cart-drawer {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    max-width: 420px;
    background: var(--bg-dark);
    display: flex;
    flex-direction: column;
    z-index: 2001;
    box-shadow: -15px 0 40px rgba(0, 0, 0, 0.6);
    border-left: 1px solid rgba(255, 255, 255, 0.05);
}

.cart-header {
    padding: 2.5rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid rgba(255, 255, 255, 0.03);
}

.cart-title {
    font-family: var(--font-serif);
    font-size: 1.6rem;
    color: var(--color-bone);
    letter-spacing: -0.5px;
}

.close-btn {
    background: transparent;
    border: none;
    color: var(--color-bone);
    font-size: 1.4rem;
    cursor: pointer;
    transition: all 0.3s ease;
    opacity: 0.6;
}

.close-btn:hover {
    color: var(--accent-color);
    opacity: 1;
}

.cart-body {
    flex: 1;
    overflow-y: auto;
    padding: 2.5rem 2rem;
}

.empty-cart {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
}

.empty-cart i {
    font-size: 2.5rem;
    color: var(--accent-color);
    margin-bottom: 1rem;
    opacity: 0.5;
}

.empty-text {
    font-family: var(--font-sans);
    color: var(--color-bone);
    opacity: 0.6;
    font-size: 0.95rem;
}

.cart-item {
    display: flex;
    gap: 1.25rem;
    margin-bottom: 2rem;
    align-items: center;
    background: rgba(255, 255, 255, 0.02);
    padding: 1rem;
    border: 1px solid rgba(255, 255, 255, 0.03);
}

.item-img {
    width: 85px;
    height: 85px;
    background: #000;
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
    font-weight: 800;
    font-size: 0.8rem;
    color: var(--color-bone);
    margin-bottom: 0.25rem;
    text-transform: uppercase;
    letter-spacing: 1px;
}

.item-price {
    font-size: 0.85rem;
    font-weight: 600;
    color: var(--accent-color);
    margin-bottom: 0.75rem;
}

.quantity-controls {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    background: rgba(0, 0, 0, 0.2);
    padding: 2px;
    width: fit-content;
}

.qty-btn {
    background: transparent;
    border: none;
    color: var(--color-bone);
    width: 28px;
    height: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-size: 0.9rem;
    transition: all 0.3s ease;
}

.qty-btn:hover:not(:disabled) {
    background: var(--accent-color);
}

.qty-btn:disabled {
    opacity: 0.2;
    cursor: not-allowed;
}

.qty-val {
    font-size: 0.9rem;
    font-weight: 700;
    color: var(--color-bone);
    min-width: 20px;
    text-align: center;
}

.remove-btn {
    background: transparent;
    border: none;
    color: rgba(255, 255, 255, 0.2);
    cursor: pointer;
    transition: all 0.3s ease;
}

.remove-btn:hover {
    color: var(--accent-color);
}

.cart-footer {
    padding: 2rem;
    background: rgba(255, 255, 255, 0.01);
    border-top: 1px solid rgba(255, 255, 255, 0.03);
}

.total-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.total-label {
    font-family: var(--font-sans);
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-size: 0.9rem;
    color: rgba(255, 255, 255, 0.5);
}

.total-amount {
    font-family: var(--font-sans);
    font-weight: 900;
    font-size: 1.4rem;
    color: var(--accent-color);
}

/* Transitions */
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

.premium-slide-enter-active,
.premium-slide-leave-active {
    transition: transform 0.5s ease-in-out;
}

.premium-slide-enter-from,
.premium-slide-leave-to {
    transform: translateX(100%);
}
</style>

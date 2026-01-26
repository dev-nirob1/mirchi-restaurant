<script setup>
import { computed, reactive } from 'vue';
import { cart } from '@/store/cart';
import { toast } from '@/store/toast';
import { useRouter } from 'vue-router';
import SectionTitle from '@/components/Widget/SectionTitle.vue';

const router = useRouter();
const items = computed(() => cart.items.value);
const totalPrice = computed(() => cart.totalPrice.value);

const form = reactive({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: 'Dhaka',
    method: 'delivery',
    payment: 'cash'
});

const formatPrice = (price) => {
    return new Intl.NumberFormat('en-BD', {
        style: 'currency',
        currency: 'BDT',
        minimumFractionDigits: 0
    }).format(price);
};

const handleOrder = () => {
    if (items.value.length === 0) {
        toast.error('Your ritual tray is empty.');
        return;
    }

    // Simulate order processing
    console.log('Order Processed:', { form, items: items.value, total: totalPrice.value });
    cart.clear();
    router.push({ name: 'success' });
};
</script>

<template>
    <main class="checkout-page py-5">
        <div class="container mt-5">
            <SectionTitle subTitle="Final Steps" title="CONFIRM YOUR RITUAL" class="mb-5" />

            <div class="checkout-grid">
                <!-- Left: Form -->
                <div class="checkout-form-area" v-fade-in="'left'">
                    <form @submit.prevent="handleOrder">
                        <div class="form-section mb-5">
                            <h3 class="section-title">Delivery Details</h3>
                            <div class="medium-2 gap-2 mt-3">
                                <div class="field">
                                    <label>First Name</label>
                                    <InputField v-model="form.firstName" required placeholder="John" />
                                </div>
                                <div class="field">
                                    <label>Last Name</label>
                                    <InputField v-model="form.lastName" required placeholder="Doe" />
                                </div>
                            </div>
                            <div class="medium-2 gap-2 mt-2">
                                <div class="field">
                                    <label>Email Address</label>
                                    <InputField v-model="form.email" type="email" required
                                        placeholder="john@example.com" />
                                </div>
                                <div class="field">
                                    <label>Phone Number</label>
                                    <InputField v-model="form.phone" type="tel" required placeholder="+880" />
                                </div>
                            </div>
                            <div class="field mt-2">
                                <label>Delivery Address</label>
                                <BaseTextArea v-model="form.address" required placeholder="House, Road, Area..."
                                    rows="3" />
                            </div>
                        </div>

                        <div class="form-section mb-5">
                            <h3 class="section-title">Preparation Method</h3>
                            <div class="method-options mt-3">
                                <label class="method-card" :class="{ active: form.method === 'delivery' }">
                                    <input type="radio" v-model="form.method" value="delivery">
                                    <div class="method-info">
                                        <i class="fa-solid fa-motorcycle"></i>
                                        <span>Ritual Delivery</span>
                                    </div>
                                </label>
                                <label class="method-card" :class="{ active: form.method === 'pickup' }">
                                    <input type="radio" v-model="form.method" value="pickup">
                                    <div class="method-info">
                                        <i class="fa-solid fa-store"></i>
                                        <span>Boutique Pickup</span>
                                    </div>
                                </label>
                            </div>
                        </div>

                        <BaseButton type="submit" class="btn-primary w-full py-4">
                            Authorize Ritual Order
                        </BaseButton>
                    </form>
                </div>

                <!-- Right: Summary -->
                <div class="order-summary-area" v-fade-in="'right'">
                    <div class="summary-card">
                        <h3 class="summary-title">Order Summary</h3>
                        <div class="summary-items mt-4">
                            <div v-for="item in items" :key="item.id || item.title" class="summary-item">
                                <div class="item-info">
                                    <span class="qty">{{ item.quantity }}x</span>
                                    <span class="name">{{ item.title }}</span>
                                </div>
                                <span class="price">{{ item.price }}</span>
                            </div>
                        </div>

                        <div class="summary-totals mt-5">
                            <div class="total-row">
                                <span>Subtotal</span>
                                <span>{{ formatPrice(totalPrice) }}</span>
                            </div>
                            <div class="total-row">
                                <span>Delivery Fee</span>
                                <span v-if="form.method === 'delivery'">৳ 60</span>
                                <span v-else>FREE</span>
                            </div>
                            <div class="total-row grand-total mt-3">
                                <span>Total</span>
                                <span>{{ formatPrice(totalPrice + (form.method === 'delivery' ? 60 : 0)) }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<style scoped>
.checkout-page {
    background: var(--color-noir);
    min-height: 100vh;
}

.checkout-grid {
    display: grid;
    grid-template-columns: 1.5fr 1fr;
    gap: 5rem;
}

.section-title {
    font-family: var(--font-sans);
    font-weight: 800;
    text-transform: uppercase;
    font-size: 1.2rem;
    letter-spacing: 2px;
    color: var(--color-bone);
}

.field label {
    display: block;
    font-size: 0.75rem;
    font-weight: 700;
    color: var(--accent-color);
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 0.5rem;
}

.method-options {
    display: flex;
    gap: 1.5rem;
}

.method-card {
    flex: 1;
    cursor: pointer;
    position: relative;
}

.method-card input {
    position: absolute;
    opacity: 0;
}

.method-info {
    border: 1px solid rgba(255, 255, 255, 0.1);
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    transition: var(--transition);
    background: rgba(255, 255, 255, 0.02);
}

.method-info i {
    font-size: 1.5rem;
    color: rgba(255, 255, 255, 0.3);
}

.method-info span {
    font-family: var(--font-sans);
    font-weight: 700;
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: rgba(255, 255, 255, 0.5);
}

.method-card:hover .method-info {
    border-color: rgba(255, 255, 255, 0.3);
}

.method-card.active .method-info {
    border-color: var(--accent-color);
    background: rgba(var(--accent-rgb), 0.05);
}

.method-card.active .method-info i,
.method-card.active .method-info span {
    color: var(--accent-color);
}

/* Summary Area */
.summary-card {
    background: rgba(255, 255, 255, 0.03);
    padding: 3rem;
    border: 1px solid rgba(255, 255, 255, 0.05);
}

.summary-title {
    font-family: var(--font-serif);
    font-size: 1.8rem;
    color: var(--color-bone);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    padding-bottom: 1rem;
}

.summary-item {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
    color: rgba(255, 255, 255, 0.8);
}

.item-info {
    display: flex;
    gap: 1rem;
}

.summary-item .qty {
    color: var(--accent-color);
    font-weight: 700;
}

.total-row {
    display: flex;
    justify-content: space-between;
    color: rgba(255, 255, 255, 0.5);
    margin-bottom: 0.5rem;
}

.grand-total {
    font-family: var(--font-sans);
    font-weight: 900;
    font-size: 1.5rem;
    color: var(--color-bone);
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    padding-top: 1.5rem;
}

@media (max-width: 992px) {
    .checkout-grid {
        grid-template-columns: 1fr;
    }
}
</style>

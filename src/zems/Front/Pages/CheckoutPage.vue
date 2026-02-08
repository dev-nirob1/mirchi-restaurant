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
  <main class="checkout-page bg-light">
    <div class="container overflow-hidden">
      <SectionTitle subTitle="Final Steps" title="CONFIRM YOUR RITUAL" class="mb-5" />

      <div class="checkout-grid gap-3">
        <!-- Left: Form -->
        <div class="checkout-form-container" v-fade-in="'left'">
          <form @submit.prevent="handleOrder" class="checkout-form">
            <section class="form-segment mb-3">
              <h3 class="group-title mb-3">Delivery Details</h3>
              <div class="field-grid">
                <div class="field">
                  <label>Manifestation (First Name)</label>
                  <InputField v-model="form.firstName" required placeholder="John" />
                </div>
                <div class="field">
                  <label>Legacy (Last Name)</label>
                  <InputField v-model="form.lastName" required placeholder="Doe" />
                </div>
                <div class="field">
                  <label>Digital Echo (Email)</label>
                  <InputField v-model="form.email" type="email" required placeholder="john@example.com" />
                </div>
                <div class="field">
                  <label>Vibration (Phone)</label>
                  <InputField v-model="form.phone" type="tel" required placeholder="+880" />
                </div>
                <div class="field full-width">
                  <label>The Hearth (Delivery Address)</label>
                  <BaseTextArea v-model="form.address" required placeholder="House, Road, Area..." rows="3" />
                </div>
              </div>
            </section>

            <section class="form-segment mb-3">
              <h3 class="group-title mb-4">Preparation Method</h3>
              <div class="method-options">
                <label class="method-card" :class="{ active: form.method === 'delivery' }">
                  <input type="radio" v-model="form.method" value="delivery">
                  <div class="method-info">
                    <span class="icon">🚲</span>
                    <span class="label">Ritual Delivery</span>
                  </div>
                </label>
                <label class="method-card" :class="{ active: form.method === 'pickup' }">
                  <input type="radio" v-model="form.method" value="pickup">
                  <div class="method-info">
                    <span class="icon">🎁</span>
                    <span class="label">Boutique Pickup</span>
                  </div>
                </label>
              </div>
            </section>

            <BaseButton type="submit" class="btn-primary w-full">
              Authorize Ritual Order
            </BaseButton>
          </form>
        </div>

        <!-- Right: Summary -->
        <div class="order-summary-container" v-fade-in="'right'">
          <div class="summary-card">
            <h3 class="group-title mb-5">Ritual Summary</h3>
            <div class="summary-items">
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
                <span>Soul Subtotal</span>
                <span class="value">{{ formatPrice(totalPrice) }}</span>
              </div>
              <div class="total-row">
                <span>Offering Fee</span>
                <span class="value" v-if="form.method === 'delivery'">৳ 60</span>
                <span class="value text-accent" v-else>FREE</span>
              </div>
              <div class="total-row grand-total mt-4">
                <span>Final Tribute</span>
                <span class="total-value">{{ formatPrice(totalPrice + (form.method === 'delivery' ? 60 :
                  0)) }}</span>
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
  padding: 10rem 0 6rem 0;
  min-height: 100vh;
  background: var(--bg-dark);
}

.checkout-grid {
  display: grid;
  grid-template-columns: 1.6fr 1fr;
  align-items: start;
}

.group-title {
  font-family: var(--font-serif);
  font-size: 1.5rem;
  color: var(--color-bone);
  position: relative;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.group-title::after {
  content: '';
  position: absolute;
  bottom: -1px;
  left: 0;
  width: 40px;
  height: 1px;
  background: var(--accent-color);
}

/* Glass Containers */
.checkout-form-container,
.summary-card {
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(15px);
  padding: 3rem;
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: all 0.4s ease;
}

.checkout-form-container:hover,
.summary-card:hover {
  border-color: rgba(255, 255, 255, 0.1);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

/* Form Layout */
.field-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
}

.field.full-width {
  grid-column: span 2;
}

.field label {
  display: block;
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--accent-color);
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 0.5rem;
}

/* Custom Input Overrides */
:deep(input),
:deep(textarea) {
  background: rgba(255, 255, 255, 0.05) !important;
  border: 1px solid rgba(255, 255, 255, 0.1) !important;
  color: var(--white) !important;
  padding: 1rem 1.25rem !important;
  border-radius: 0 !important;
  width: 100%;
  font-family: var(--font-sans);
  transition: all 0.3s ease;
}

:deep(input:focus),
:deep(textarea:focus) {
  border-color: var(--accent-color) !important;
  outline: none;
  background: rgba(255, 255, 255, 0.08) !important;
  box-shadow: 0 0 15px rgba(139, 0, 0, 0.1);
}

/* Method Cards */
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
  border: 1px solid rgba(255, 255, 255, 0.08);
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  background: rgba(255, 255, 255, 0.02);
  transition: all 0.3s ease;
}

.method-info .icon {
  font-size: 1.5rem;
  opacity: 0.5;
}

.method-info .label {
  font-family: var(--font-sans);
  font-weight: 700;
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: rgba(255, 255, 255, 0.6);
}

.method-card:hover .method-info {
  border-color: rgba(255, 255, 255, 0.2);
  background: rgba(255, 255, 255, 0.05);
}

.method-card.active .method-info {
  border-color: var(--accent-color);
  background: rgba(139, 0, 0, 0.05);
}

.method-card.active .method-info .label,
.method-card.active .method-info .icon {
  color: var(--accent-color);
  opacity: 1;
}

/* Summary Details */
.summary-item {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.25rem;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.03);
}

.item-info {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.summary-item .qty {
  color: var(--accent-color);
  font-weight: 700;
  font-size: 0.9rem;
}

.summary-item .name {
  color: var(--color-bone);
  font-size: 1rem;
  opacity: 0.9;
}

.summary-item .price {
  font-weight: 600;
  color: var(--color-bone);
}

.total-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.75rem;
  color: rgba(255, 255, 255, 0.5);
}

.total-row .value {
  color: var(--color-bone);
  font-weight: 600;
}

.text-accent {
  color: var(--accent-color) !important;
}

.grand-total {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 2rem;
  color: var(--color-bone);
}

.grand-total span:first-child {
  font-family: var(--font-serif);
  font-size: 1.2rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.total-value {
  font-family: var(--font-sans);
  font-size: 2rem;
  font-weight: 900;
  color: var(--accent-color);
  text-shadow: 0 0 20px rgba(139, 0, 0, 0.2);
}

@media (max-width: 1200px) {
  .checkout-grid {
    gap: 2rem;
  }
}

@media (max-width: 992px) {
  .checkout-grid {
    grid-template-columns: 1fr;
  }

  .checkout-form-container,
  .summary-card {
    padding: 2rem;
  }
}

@media (max-width: 640px) {
  .field-grid {
    grid-template-columns: 1fr;
  }

  .field.full-width {
    grid-column: span 1;
  }

  .method-options {
    flex-direction: column;
  }
}
</style>

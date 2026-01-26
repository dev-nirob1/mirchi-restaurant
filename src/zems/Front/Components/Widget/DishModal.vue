<script setup>
import { cart } from '@/store/cart';

const props = defineProps({
    dish: Object,
    isOpen: Boolean
});

const emit = defineEmits(['close']);

const close = () => {
    emit('close');
};

const addToCart = () => {
    cart.addItem(props.dish);
    close();
};
</script>

<template>
    <Transition name="fade">
        <div v-if="isOpen" class="modal-backdrop" @click="close">
            <div class="modal-container" @click.stop v-fade-in="'up'">
                <button class="modal-close" @click="close">
                    <i class="fa-solid fa-xmark"></i>
                </button>

                <div class="modal-content">
                    <div class="modal-image">
                        <BaseImage :image="dish.image" />
                    </div>
                    <div class="modal-info">
                        <div class="modal-header">
                            <SubTitle class="dish-name">{{ dish.title }}</SubTitle>
                            <p class="dish-price">{{ dish.price }}</p>
                        </div>

                        <div class="dish-metadata mb-4">
                            <div class="meta-item">
                                <span class="label">SPICE LEVEL</span>
                                <div class="spice-icons">
                                    <i v-for="i in 5" :key="i" class="fa-solid fa-pepper-hot"
                                        :class="{ active: i <= (dish.spiceLevel || 3) }"></i>
                                </div>
                            </div>
                            <div class="meta-item">
                                <span class="label">PREP TIME</span>
                                <span class="value">25-30 MINS</span>
                            </div>
                        </div>

                        <div class="dish-description mb-5">
                            <p>{{ dish.desc }}</p>
                            <p class="mt-2 text-muted">
                                Prepared using centuries-old techniques, this dish brings together the raw
                                power of sun-dried spices and the delicate aroma of slow-roasting.
                            </p>
                        </div>

                        <div class="dish-ingredients mb-5">
                            <h5 class="section-title">Ritual Ingredients</h5>
                            <div class="ingredients-list">
                                <span
                                    v-for="ing in (dish.ingredients || ['Heritage Spices', 'Organic Saffron', 'Clay-pot Infusion'])"
                                    :key="ing" class="ingredient-tag">
                                    {{ ing }}
                                </span>
                            </div>
                        </div>

                        <div class="modal-actions">
                            <BaseButton class="btn-primary w-full" @click="addToCart">Add to Ritual Tray</BaseButton>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Transition>
</template>

<style scoped>
.modal-backdrop {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.9);
    backdrop-filter: blur(8px);
    z-index: 10000;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem;
}

.modal-container {
    background: var(--color-noir);
    width: 100%;
    max-width: 1000px;
    max-height: 90vh;
    position: relative;
    border: 1px solid rgba(255, 255, 255, 0.05);
    overflow-y: auto;
}

.modal-close {
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
    background: transparent;
    border: none;
    color: var(--color-bone);
    font-size: 1.5rem;
    cursor: pointer;
    z-index: 10;
    transition: var(--transition);
}

.modal-close:hover {
    color: var(--accent-color);
}

.modal-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    min-height: 600px;
}

.modal-image {
    height: 100%;
}

.modal-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.modal-info {
    padding: 4rem;
    display: flex;
    flex-direction: column;
}

.modal-header {
    margin-bottom: 2rem;
}

.dish-name {
    font-size: 2.5rem !important;
    margin-bottom: 0.5rem;
}

.dish-price {
    font-family: var(--font-sans);
    font-weight: 700;
    font-size: 1.5rem;
    color: var(--accent-color);
}

.dish-metadata {
    display: flex;
    gap: 3rem;
}

.meta-item .label {
    display: block;
    font-size: 0.7rem;
    font-weight: 800;
    letter-spacing: 2px;
    color: rgba(255, 255, 255, 0.4);
    margin-bottom: 0.5rem;
}

.spice-icons {
    color: rgba(255, 255, 255, 0.1);
    display: flex;
    gap: 0.25rem;
}

.spice-icons .active {
    color: var(--accent-color);
}

.meta-item .value {
    color: var(--color-bone);
    font-weight: 600;
}

.dish-description p {
    font-size: 1.1rem;
    line-height: 1.8;
}

.section-title {
    font-family: var(--font-sans);
    font-weight: 800;
    text-transform: uppercase;
    font-size: 0.8rem;
    letter-spacing: 2px;
    color: var(--accent-color);
    margin-bottom: 1rem;
}

.ingredients-list {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
}

.ingredient-tag {
    background: rgba(255, 255, 255, 0.05);
    padding: 0.5rem 1rem;
    font-size: 0.8rem;
    color: rgba(255, 255, 255, 0.7);
    border: 1px solid rgba(255, 255, 255, 0.1);
}

.modal-actions {
    margin-top: auto;
}

/* Transitions */
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

@media (max-width: 992px) {
    .modal-content {
        grid-template-columns: 1fr;
    }

    .modal-image {
        height: 300px;
    }

    .modal-info {
        padding: 2rem;
    }

    .dish-name {
        font-size: 1.8rem !important;
    }
}
</style>

<script setup>
import { toast } from '@/store/toast';
import { computed } from 'vue';

const toasts = computed(() => toast.toasts.value);
</script>

<template>
    <div class="toast-container">
        <TransitionGroup name="toast-fade">
            <div v-for="t in toasts" :key="t.id" class="toast-item" :class="t.type" @click="toast.remove(t.id)">
                <div class="toast-icon">
                    <i v-if="t.type === 'success'" class="fa-solid fa-circle-check"></i>
                    <i v-else-if="t.type === 'error'" class="fa-solid fa-circle-exclamation"></i>
                    <i v-else class="fa-solid fa-circle-info"></i>
                </div>
                <div class="toast-content">
                    <p class="toast-message">{{ t.message }}</p>
                </div>
                <button class="toast-close">
                    <i class="fa-solid fa-xmark"></i>
                </button>
            </div>
        </TransitionGroup>
    </div>
</template>

<style scoped>
.toast-container {
    position: fixed;
    top: 2rem;
    right: 2rem;
    z-index: 10001;
    /* Above everything */
    display: flex;
    flex-direction: column;
    gap: 1rem;
    pointer-events: none;
}

.toast-item {
    pointer-events: auto;
    background: var(--color-charcoal);
    border: 1px solid rgba(255, 255, 255, 0.1);
    color: var(--color-bone);
    padding: 1rem 1.5rem;
    min-width: 300px;
    max-width: 400px;
    display: flex;
    align-items: center;
    gap: 1rem;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
    cursor: pointer;
    position: relative;
    overflow: hidden;
}

.toast-item::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    height: 3px;
    background: var(--accent-color);
    width: 100%;
}

.toast-item.success::after {
    background: #4ade80;
}

.toast-item.error::after {
    background: var(--accent-color);
}

.toast-item.info::after {
    background: #38bdf8;
}

.toast-icon {
    font-size: 1.25rem;
}

.toast-item.success .toast-icon {
    color: #4ade80;
}

.toast-item.error .toast-icon {
    color: var(--accent-color);
}

.toast-item.info .toast-icon {
    color: #38bdf8;
}

.toast-content {
    flex: 1;
}

.toast-message {
    font-size: 0.9rem;
    font-weight: 500;
    margin: 0;
    color: var(--color-bone);
}

.toast-close {
    background: transparent;
    border: none;
    color: rgba(255, 255, 255, 0.3);
    cursor: pointer;
    font-size: 1rem;
    padding: 0.25rem;
    transition: var(--transition);
}

.toast-close:hover {
    color: var(--white);
}

/* Animations */
.toast-fade-enter-active,
.toast-fade-leave-active {
    transition: all 0.4s cubic-bezier(0.19, 1, 0.22, 1);
}

.toast-fade-enter-from {
    opacity: 0;
    transform: translateX(30px);
}

.toast-fade-leave-to {
    opacity: 0;
    transform: translateX(30px);
}
</style>

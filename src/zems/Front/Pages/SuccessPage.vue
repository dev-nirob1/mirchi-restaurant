<script setup>
import { useRouter } from 'vue-router';
import HeroTitle from '@/components/element/HeroTitle.vue';

const router = useRouter();
</script>

<template>
    <main class="success-page">
        <div class="container text-center">
            <div class="success-icon mb-5" v-fade-in="'up'">
                <i class="fa-solid fa-fire-burner"></i>
            </div>
            <HeroTitle class="text-white mb-3" v-fade-in="'up'">The Ritual Has Begun</HeroTitle>
            <BaseParagraph class="mb-5 mx-auto max-w-md" v-fade-in="'up'">
                Our masters are now tending to the embers. Your selected
                delicacies are being prepared with the absolute soul of spices.
            </BaseParagraph>
            <div class="actions" v-fade-in="'up'">
                <BaseButton class="btn-primary" @click="router.push('/')">Return to Sanctuary</BaseButton>
            </div>

            <div class="decoration" v-fade-in="'up'">
                <div class="smoke-particle"></div>
                <div class="smoke-particle"></div>
                <div class="smoke-particle"></div>
            </div>
        </div>
    </main>
</template>

<style scoped>
.success-page {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--color-noir);
    position: relative;
    overflow: hidden;
}

.success-icon {
    font-size: 5rem;
    color: var(--accent-color);
}

.max-w-md {
    max-width: 500px;
}

.decoration {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 300px;
    background: linear-gradient(to top, rgba(var(--accent-rgb), 0.1), transparent);
    pointer-events: none;
}

.smoke-particle {
    position: absolute;
    bottom: -50px;
    width: 200px;
    height: 200px;
    background: radial-gradient(circle, rgba(255, 255, 255, 0.05), transparent 70%);
    border-radius: 50%;
    filter: blur(40px);
    animation: smoke 10s infinite ease-out;
}

.smoke-particle:nth-child(1) {
    left: 20%;
    animation-delay: 0s;
}

.smoke-particle:nth-child(2) {
    left: 50%;
    animation-delay: 3s;
}

.smoke-particle:nth-child(3) {
    left: 80%;
    animation-delay: 6s;
}

@keyframes smoke {
    0% {
        transform: translateY(0) scale(1);
        opacity: 0;
    }

    50% {
        opacity: 0.5;
    }

    100% {
        transform: translateY(-300px) scale(3);
        opacity: 0;
    }
}
</style>

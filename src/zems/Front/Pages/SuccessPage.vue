<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();
</script>

<template>
  <main class="success-page">
    <!-- Ambient background elements -->
    <div class="ambient-glow"></div>
    <div class="smoke-layer">
      <div class="smoke-particle" v-for="n in 5" :key="n"></div>
    </div>

    <div class="container content-wrapper">
      <div class="ritual-seal-container mb-3" v-fade-in="'up'">
        <div class="seal-outer"></div>
        <div class="seal-inner">
          <i class="fa-solid fa-fire-burner"></i>
        </div>
        <div class="seal-glow"></div>
      </div>

      <div class="message-card p-4" v-fade-in="'up'">
        <h1 class="display-title mb-1">The Ritual Has Begun</h1>
        <div class="divider mx-auto mb-1"></div>
        <p class="success-description mb-1">
          Our masters are now tending to the embers. Your selected delicacies are being
          prepared with the absolute soul of spices. Expect the manifestation soon.
        </p>
        <div class="actions">
          <BaseButton class="btn-primary px-4 py-2" @click="router.push('/')">
            Return to Sanctuary
          </BaseButton>
        </div>
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
  background: radial-gradient(circle at center, #1a0202 0%, var(--bg-dark) 100%);
  position: relative;
  overflow: hidden;
  padding: 7rem 1.5rem 4.5rem 1.5rem;
}

.content-wrapper {
  position: relative;
  z-index: 10;
  max-width: 700px;
  text-align: center;
}

/* Ritual Seal Stylings */
.ritual-seal-container {
  position: relative;
  width: 120px;
  height: 120px;
  margin: 0 auto;
}

.seal-outer {
  position: absolute;
  inset: 0;
  border: 2px solid var(--accent-color);
  border-radius: 50%;
  animation: rotate 10s linear infinite;
  opacity: 0.3;
}

.seal-inner {
  position: absolute;
  inset: 15px;
  background: rgba(var(--accent-rgb), 0.1);
  border: 1px solid var(--accent-color);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  color: var(--accent-color);
  box-shadow: inset 0 0 20px rgba(var(--accent-rgb), 0.2);
}

.seal-glow {
  position: absolute;
  inset: -20px;
  background: radial-gradient(circle, rgba(var(--accent-rgb), 0.2), transparent 70%);
  border-radius: 50%;
  animation: pulse 3s ease-in-out infinite;
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}

@keyframes pulse {

  0%,
  100% {
    transform: scale(1);
    opacity: 0.5;
  }

  50% {
    transform: scale(1.2);
    opacity: 0.8;
  }
}

/* Message Card */
.message-card {
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 2px;
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.5);
}

.display-title {
  font-family: var(--font-serif);
  font-size: 3rem;
  color: var(--color-bone);
  letter-spacing: -1px;
  line-height: 1.1;
}

.divider {
  width: 60px;
  height: 1px;
  background: var(--accent-color);
}

.success-description {
  font-family: var(--font-sans);
  font-size: 1.1rem;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.7);
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
}

/* Atmospheric Background */
.ambient-glow {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 150%;
  height: 150%;
  background: radial-gradient(circle, rgba(var(--accent-rgb), 0.05) 0%, transparent 60%);
  pointer-events: none;
}

.smoke-layer {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.smoke-particle {
  position: absolute;
  bottom: -100px;
  width: 300px;
  height: 300px;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.03), transparent 70%);
  border-radius: 50%;
  filter: blur(50px);
  animation: move-smoke 15s infinite linear;
}

.smoke-particle:nth-child(1) {
  left: 10%;
  animation-duration: 18s;
}

.smoke-particle:nth-child(2) {
  left: 40%;
  animation-duration: 12s;
  animation-delay: -5s;
}

.smoke-particle:nth-child(3) {
  left: 70%;
  animation-duration: 20s;
  animation-delay: -10s;
}

.smoke-particle:nth-child(4) {
  left: 25%;
  animation-duration: 15s;
  animation-delay: -2s;
}

.smoke-particle:nth-child(5) {
  left: 85%;
  animation-duration: 14s;
  animation-delay: -7s;
}

@keyframes move-smoke {
  0% {
    transform: translateY(0) scale(1) rotate(0deg);
    opacity: 0;
  }

  20% {
    opacity: 0.4;
  }

  100% {
    transform: translateY(-120vh) scale(2) rotate(360deg);
    opacity: 0;
  }
}

@media (max-width: 768px) {
  .display-title {
    font-size: 2.2rem;
  }

  .message-card {
    padding: 3rem 1.5rem !important;
  }
}
</style>

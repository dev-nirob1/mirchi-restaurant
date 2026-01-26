<script setup>
import { onMounted, ref } from 'vue';
import { RouterLink } from 'vue-router';

const isMenuOpen = ref(false);
const isScrolled = ref(false);

const handleHamburger = () => {
  isMenuOpen.value = !isMenuOpen.value;
}

onMounted(() => {
  window.addEventListener('scroll', () => {
    isScrolled.value = window.scrollY > 20;
  });
});
</script>

<template>
  <header class="navbar" :class="{ 'is-scrolled': isScrolled }">
    <div class="container">
      <nav class="nav-inner flex justify-between align-center">
        <!-- Logo -->
        <RouterLink to="/" class="nav-logo" @click="isMenuOpen = false">
          MIRCHI
        </RouterLink>

        <!-- Navigation Links -->
        <div class="nav-links-wrap" :class="{ 'is-active': isMenuOpen }">
          <ul class="nav-list flex align-center">
            <li class="nav-item">
              <RouterLink to="/" @click="isMenuOpen = false" class="nav-link">Home</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/about" @click="isMenuOpen = false" class="nav-link">Our Story</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/menu" @click="isMenuOpen = false" class="nav-link">Menu</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/reservation" @click="isMenuOpen = false" class="nav-link">Reservations</RouterLink>
            </li>
          </ul>
        </div>

        <!-- Call to Action -->
        <div class="nav-meta flex align-center gap-2">
          <RouterLink to="/reservation" class="nav-btn">Reserve</RouterLink>
          <button @click="handleHamburger" class="nav-toggle" :class="{ 'is-active': isMenuOpen }">
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  padding: 2.5rem 0;
  transition: var(--transition);
}

.navbar.is-scrolled {
  padding: 1.25rem 0;
  background: rgba(5, 5, 5, 0.9);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}



.nav-logo {
  font-family: var(--font-serif);
  font-size: 1.5rem;
  font-weight: 800;
  letter-spacing: 0.2em;
  color: var(--color-bone);
  z-index: 1001;
}

.nav-list {
  gap: 3rem;
}

.nav-link {
  font-family: var(--font-sans);
  font-size: 0.875rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--color-bone);
  transition: var(--transition);
  position: relative;
}

.nav-link:hover,
.router-link-exact-active {
  opacity: 1;
  color: var(--color-crimson);
}

.nav-btn {
  padding: 0.875rem 2rem;
  font-family: var(--font-sans);
  font-weight: 600;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  background: var(--color-crimson);
  color: var(--color-white);
  border-radius: 0;
  transition: var(--transition);
}

.nav-btn:hover {
  background: var(--color-blood);
}

.nav-toggle {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  position: relative;
  width: 30px;
  height: 20px;
  z-index: 1001;
}

.nav-toggle span {
  display: block;
  width: 100%;
  height: 2px;
  background: var(--color-bone);
  transition: var(--transition);
  position: absolute;
}

.nav-toggle span:first-child {
  top: 0;
}

.nav-toggle span:last-child {
  bottom: 0;
}

.nav-toggle.is-active span:first-child {
  transform: rotate(45deg) translateY(9px);
}

.nav-toggle.is-active span:last-child {
  transform: rotate(-45deg) translateY(-9px);
}

@media (max-width: 992px) {
  .nav-toggle {
    display: block;
  }

  .nav-links-wrap {
    position: fixed;
    top: 0;
    right: -100%;
    width: 100%;
    height: 100vh;
    background: #000;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: var(--transition);
    z-index: 1000;
  }

  .nav-links-wrap.is-active {
    right: 0;
  }

  .nav-list {
    flex-direction: column;
    gap: 2rem;
  }

  .nav-link {
    font-size: 2rem;
    text-transform: none;
  }

  .nav-btn {
    display: none;
  }
}
</style>

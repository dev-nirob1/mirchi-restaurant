<script setup>
import { onMounted, ref } from 'vue';

const isMenuOpen = ref(false);
const isScrolled = ref(false);

const handleHamburger = () => {
  isMenuOpen.value = !isMenuOpen.value;
}

onMounted(() => {
  window.addEventListener('scroll', () => {
    isScrolled.value = window.scrollY > 50;
  });
});
</script>

<template>
  <header class="navbar-wrapper" :class="{ 'scrolled': isScrolled }">
    <div class="container">
      <nav class="navbar flex justify-between align-center">
        <a href="#" class="logo">
          <span class="logo-text">MIR<span class="text-secondary">CHI</span></span>
        </a>

        <!-- Links for Desktop & Mobile -->
        <div class="nav-links-wrapper" :class="{ 'active': isMenuOpen }">
          <ul class="nav-links flex">
            <ListItem class="mobile-only logo-item">
               <span class="logo-text">MIR<span class="text-secondary">CHI</span></span>
            </ListItem>
            <ListItem><a href="#hero" @click="isMenuOpen = false">Home</a></ListItem>
            <ListItem><a href="#menu" @click="isMenuOpen = false">Menu</a></ListItem>
            <ListItem><a href="#reservations" @click="isMenuOpen = false">Reservations</a></ListItem>
            <ListItem><a href="#contact" @click="isMenuOpen = false">Contact</a></ListItem>
          </ul>
        </div>

        <div class="nav-actions flex align-center gap-2">
          <a href="tel:+8801234567890" class="phone-link hide-mobile">
            <i class="fa-solid fa-phone text-secondary mr-1"></i>
            <span class="text-main">+880 1234 567 890</span>
          </a>
          <BaseButton class="bg-secondary text-primary btn-book" @click="isMenuOpen = false">
            Order Now
          </BaseButton>
          <div @click="handleHamburger" class="hamburger flex-center">
            <div class="bar" :class="{ 'active': isMenuOpen }"></div>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.navbar-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  padding: 1.5rem 0;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.navbar-wrapper.scrolled {
  padding: 0.75rem 0;
  background: rgba(15, 15, 15, 0.9);
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  border-bottom: 1px solid rgba(212, 175, 55, 0.15);
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
}

.logo-text {
  font-family: var(--heading-font);
  font-size: 1.8rem;
  font-weight: 800;
  letter-spacing: 2px;
  color: var(--white);
  transition: transform 0.3s ease;
}

.logo:hover .logo-text {
  transform: scale(1.05);
}

.nav-links {
  gap: 2.5rem;
}

.nav-links a {
  font-weight: 600;
  font-size: 0.95rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: var(--text-main);
  position: relative;
  transition: color 0.3s ease;
}

.nav-links a::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--secondary-color);
  transition: width 0.3s ease;
}

.nav-links a:hover {
  color: var(--secondary-color);
}

.nav-links a:hover::after {
  width: 100%;
}

.btn-book {
  padding: 0.75rem 1.8rem;
  font-size: 0.9rem;
  font-weight: 700;
  border-radius: 4px;
  box-shadow: var(--glow-gold);
  transition: all 0.3s ease;
}

.btn-book:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(212, 175, 55, 0.2);
}

.hamburger {
  display: none;
  cursor: pointer;
  width: 30px;
  height: 20px;
  position: relative;
  z-index: 1001;
}

.bar {
  width: 100%;
  height: 2px;
  background: var(--white);
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  transition: background 0.3s ease;
}

.bar::before, .bar::after {
  content: '';
  width: 100%;
  height: 2px;
  background: var(--white);
  position: absolute;
  left: 0;
  transition: all 0.3s ease;
}

.bar::before { top: -8px; }
.bar::after { top: 8px; }

.bar.active { background: transparent; }
.bar.active::before { top: 0; transform: rotate(45deg); }
.bar.active::after { top: 0; transform: rotate(-45deg); }

.mobile-only {
  display: none;
}

@media (max-width: 992px) {
  .hamburger { display: block; }
  .hide-mobile { display: none; }
  .mobile-only { display: block; }
  
  .nav-links-wrapper {
    position: fixed;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100vh;
    background: var(--primary-color);
    padding: 100px 2rem;
    transition: all 0.5s cubic-bezier(0.77, 0.2, 0.05, 1.0);
    z-index: 1000;
    overflow-y: auto;
  }

  .nav-links-wrapper.active {
    left: 0;
  }

  .nav-links {
    flex-direction: column;
    align-items: center;
    gap: 2.5rem;
  }

  .logo-item { margin-bottom: 3rem; }
  .logo-text { font-size: 2rem; }
}
</style>

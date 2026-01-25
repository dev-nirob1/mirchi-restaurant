<script setup>
import { onMounted, ref } from 'vue';

const isLoaded = ref(false);

onMounted(() => {
  window.scrollTo(0, 0);
  setTimeout(() => {
    isLoaded.value = true;
  }, 100);
});
</script>

<template>
  <main class="about-premium" :class="{ 'is-loaded': isLoaded }">
    <!-- Premium Hero Section -->
    <section class="hero-full flex-center col">
      <div class="parallax-bg"></div>
      <div class="particles shadow-glow"></div>
      
      <div class="container relative z-10 text-center">
        <div class="pre-title reveal-up">EST. 1995</div>
        <h1 class="glitch-title mb-1" data-text="BEYOND FLAVOR">BEYOND <span class="text-gradient">FLAVOR</span></h1>
        <p class="hero-desc reveal-up-delayed">Crafting the zenith of culinary art through the alchemy of spice.</p>
        
        <div class="scroll-indicator">
          <div class="mouse"></div>
          <span>EXPLORE OUR LEGACY</span>
        </div>
      </div>
      <div class="bottom-gradient"></div>
    </section>

    <!-- Asymmetric Heritage Section -->
    <section class="section heritage-asymmetric">
      <div class="container">
        <div class="asymmetric-grid">
          <div class="text-block" v-fade-in>
            <span class="section-tag">HERITAGE</span>
            <h2 class="massive-title">THE MIRCHI <br/> <span class="text-secondary">SOUL</span></h2>
            <div class="accent-line"></div>
            <p>
              Born from the embers of traditional clay ovens and fueled by an obsession for perfection, Mirchi isn't just a restaurant. It's a sanctuary for those who seek the extraordinary. 
            </p>
            <p class="mt-2">
              Our history is written in the smoke of aromatic woods and the vibrant hues of hand-ground spices, creating a legacy that transcends generations.
            </p>
          </div>
          <div class="visual-block" v-fade-in="'up'">
            <div class="main-img-wrapper">
              <img src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=1200" alt="Authentic Kitchen" class="parallax-img">
              <div class="floating-badge shadow-glow">29 YEARS OF BOLDNESS</div>
            </div>
            <div class="side-img-wrapper">
              <img src="https://images.unsplash.com/photo-1534080564607-c92751e89991?auto=format&fit=crop&q=80&w=600" alt="Spices Detail">
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Glassmorphic Values Section -->
    <section class="section values-glass">
      <div class="container text-center mb-5" v-fade-in>
        <h2 class="section-title">OUR <span class="text-secondary">ESOTERIC</span> PILLARS</h2>
      </div>
      <div class="container grid grid-3 gap-3">
        <div class="glass-card" v-fade-in="'up'">
          <div class="card-glow"></div>
          <div class="icon-box">
             <i class="fa-solid fa-fire-flame-curved"></i>
          </div>
          <h3>Obsessive Heat</h3>
          <p>We don't just use spice; we harness its energy to create multidimensional flavor profiles that ignite the senses.</p>
        </div>
        <div class="glass-card" v-fade-in="'up'">
          <div class="card-glow"></div>
          <div class="icon-box">
             <i class="fa-solid fa-crown"></i>
          </div>
          <h3>Rare Provenance</h3>
          <p>Sourcing ingredients from exclusive micro-regions ensures a purity of taste that cannot be replicated.</p>
        </div>
        <div class="glass-card" v-fade-in="'up'">
          <div class="card-glow"></div>
          <div class="icon-box">
             <i class="fa-solid fa-wand-sparkles"></i>
          </div>
          <h3>Alchemy in Motion</h3>
          <p>Our kitchen is a lab where traditional techniques are refined with modernist precision and flair.</p>
        </div>
      </div>
    </section>

    <!-- Spotlight Team Section -->
    <section class="section team-spotlight">
      <div class="container">
        <div class="flex justify-between align-end mb-5 wrap gap-2">
          <div v-fade-in>
             <span class="section-tag">CURATORS</span>
             <h2 class="massive-title">THE CULINARY <span class="text-secondary">MASTERS</span></h2>
          </div>
          <p class="max-600" v-fade-in="'up'">A collective of visionaries dedicated to redefining the boundaries of gastonomy.</p>
        </div>
        
        <div class="chef-grid">
          <div class="chef-item" v-fade-in="'up'">
            <div class="chef-visual">
              <img src="https://images.unsplash.com/photo-1625631980653-65f60e65660d?auto=format&fit=crop&q=80&w=600" alt="Head Chef">
              <div class="spotlight"></div>
            </div>
            <div class="chef-meta">
              <h3>Ishaq Al-Mirchi</h3>
              <p>Founder & Flavor Alchemist</p>
            </div>
          </div>
          <div class="chef-item" v-fade-in="'up'">
            <div class="chef-visual">
              <img src="https://images.unsplash.com/photo-1595273670150-db0a3d39074f?auto=format&fit=crop&q=80&w=600" alt="Sous Chef">
              <div class="spotlight"></div>
            </div>
            <div class="chef-meta">
              <h3>Dimitri Vane</h3>
              <p>Modernist Techniques Director</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Final Call to Action -->
    <section class="final-cta text-center section">
      <div class="container" v-fade-in="'up'">
        <h2 class="massive-title mb-2">READY TO <span class="text-secondary">TASTE</span> THE STORY?</h2>
        <a href="/menu" class="premium-btn">
          <span>SECURE YOUR TABLE</span>
          <i class="fa-solid fa-arrow-right"></i>
        </a>
      </div>
    </section>
  </main>
</template>

<style scoped>
/* Base Variables & Layout */
.about-premium {
  background: var(--primary-color);
  color: var(--white);
  overflow-x: hidden;
  opacity: 0;
  transition: opacity 1s ease;
}

.about-premium.is-loaded {
  opacity: 1;
}

.section {
  padding: 10rem 0;
}

.section-tag {
  display: block;
  letter-spacing: 4px;
  color: var(--secondary-color);
  font-weight: 700;
  font-size: 0.9rem;
  margin-bottom: 1rem;
}

.massive-title {
  font-family: var(--heading-font);
  font-size: 5rem;
  line-height: 0.9;
  font-weight: 900;
  letter-spacing: -2px;
}

.text-gradient {
  background: linear-gradient(45deg, var(--secondary-color), #fff);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* Premium Hero */
.hero-full {
  height: 100vh;
  position: relative;
  overflow: hidden;
}

.parallax-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 110%;
  background: url('https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&q=80&w=2000') center/cover no-repeat;
  filter: brightness(0.4) saturate(1.2);
  transform: scale(1.1);
  animation: slowZoom 20s infinite alternate;
}

@keyframes slowZoom {
  to { transform: scale(1.2) translateY(-2%); }
}

.particles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.8) 100%);
  z-index: 1;
}

.pre-title {
  font-size: 1.2rem;
  letter-spacing: 6px;
  color: var(--secondary-color);
  margin-bottom: 2rem;
}

.glitch-title {
  font-size: 8rem;
  font-weight: 950;
  font-family: var(--heading-font);
}

.hero-desc {
  font-size: 1.5rem;
  font-weight: 300;
  letter-spacing: 1px;
  color: var(--text-muted);
  max-width: 800px;
  margin: 0 auto;
}

.scroll-indicator {
  position: absolute;
  bottom: 3rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  z-index: 10;
}

.mouse {
  width: 25px;
  height: 45px;
  border: 2px solid var(--secondary-color);
  border-radius: 20px;
  position: relative;
}

.mouse::after {
  content: '';
  position: absolute;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  width: 4px;
  height: 8px;
  background: var(--secondary-color);
  border-radius: 2px;
  animation: scrollAnim 1.5s infinite;
}

@keyframes scrollAnim {
  0% { transform: translate(-50%, 0); opacity: 1; }
  100% { transform: translate(-50%, 20px); opacity: 0; }
}

.bottom-gradient {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 200px;
  background: linear-gradient(to top, var(--primary-color), transparent);
  z-index: 2;
}

/* Asymmetric Heritage */
.asymmetric-grid {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  align-items: center;
  gap: 6rem;
}

.accent-line {
  width: 100px;
  height: 4px;
  background: var(--secondary-color);
  margin: 2rem 0;
}

.visual-block {
  position: relative;
}

.main-img-wrapper {
  position: relative;
  width: 100%;
  height: 600px;
  overflow: hidden;
  clip-path: polygon(0 10%, 100% 0, 100% 90%, 0 100%);
}

.main-img-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.side-img-wrapper {
  position: absolute;
  bottom: -40px;
  left: -80px;
  width: 300px;
  height: 400px;
  border: 10px solid var(--primary-color);
  box-shadow: 0 30px 60px rgba(0,0,0,0.5);
  overflow: hidden;
  z-index: 5;
}

.side-img-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.floating-badge {
  position: absolute;
  top: 50%;
  right: -30px;
  background: var(--secondary-color);
  color: var(--primary-color);
  padding: 1.5rem 3rem;
  font-weight: 900;
  transform: rotate(90deg) translateY(-50%);
  font-size: 1.2rem;
  letter-spacing: 2px;
  white-space: nowrap;
}

/* Glass Cards */
.glass-card {
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 4rem 2.5rem;
  border-radius: 24px;
  position: relative;
  transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
  overflow: hidden;
}

.glass-card:hover {
  transform: translateY(-20px);
  background: rgba(255, 255, 255, 0.07);
  border-color: var(--secondary-color);
  box-shadow: 0 40px 80px rgba(0,0,0,0.4);
}

.card-glow {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(800px circle at var(--mouse-x) var(--mouse-y), rgba(212, 175, 55, 0.15), transparent 40%);
  opacity: 0;
  transition: opacity 0.5s;
}

.glass-card:hover .card-glow {
  opacity: 1;
}

.icon-box {
  width: 80px;
  height: 80px;
  background: rgba(212, 175, 55, 0.1);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
  font-size: 2.5rem;
  color: var(--secondary-color);
  transition: 0.3s;
}

.glass-card:hover .icon-box {
  background: var(--secondary-color);
  color: var(--primary-color);
  transform: rotate(10deg);
}

/* Chef Spotlight */
.chef-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 4rem;
}

.chef-item {
  position: relative;
  overflow: hidden;
  border-radius: 30px;
}

.chef-visual {
  height: 700px;
  position: relative;
  background: #000;
}

.chef-visual img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.7;
  transition: 0.7s;
}

.spotlight {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at center, transparent 0%, #000 70%);
  mix-blend-mode: multiply;
  transition: 0.5s;
}

.chef-item:hover img {
  opacity: 1;
  transform: scale(1.05);
}

.chef-item:hover .spotlight {
  opacity: 0.4;
}

.chef-meta {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 3rem;
  background: linear-gradient(transparent, rgba(0,0,0,0.9));
}

.chef-meta h3 {
  font-family: var(--heading-font);
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
}

/* Premium Button */
.premium-btn {
  display: inline-flex;
  align-items: center;
  gap: 1.5rem;
  padding: 1.5rem 4rem;
  background: var(--secondary-color);
  color: var(--primary-color);
  font-weight: 900;
  border-radius: 50px;
  text-decoration: none;
  font-size: 1.2rem;
  transition: all 0.4s;
  box-shadow: 0 20px 40px rgba(212, 175, 55, 0.3);
}

.premium-btn:hover {
  transform: scale(1.05) translateY(-5px);
  box-shadow: 0 30px 60px rgba(212, 175, 55, 0.5);
}

/* Mobile Responsiveness */
@media (max-width: 1200px) {
  .glitch-title { font-size: 5rem; }
  .massive-title { font-size: 3.5rem; }
}

@media (max-width: 992px) {
  .asymmetric-grid { grid-template-columns: 1fr; gap: 4rem; }
  .side-img-wrapper { display: none; }
  .chef-grid { grid-template-columns: 1fr; }
  .chef-visual { height: 500px; }
  .section { padding: 6rem 0; }
}

@media (max-width: 768px) {
  .glitch-title { font-size: 3.5rem; }
  .hero-desc { font-size: 1.1rem; }
}

/* Animations */
.reveal-up { transform: translateY(50px); opacity: 0; transition: all 1s ease; }
.reveal-up-delayed { transform: translateY(50px); opacity: 0; transition: all 1s ease 0.3s; }
.reveal-left { transform: translateX(-50px); opacity: 0; transition: all 1s ease; }
.reveal-right { transform: translateX(50px); opacity: 0; transition: all 1s ease; }

.is-loaded .reveal-up,
.is-loaded .reveal-up-delayed,
.is-loaded .reveal-left,
.is-loaded .reveal-right {
  transform: translate(0, 0);
  opacity: 1;
}
</style>

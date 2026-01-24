<script setup>
</script>

<template>
  <section class="mirchi-experience">
    <div class="experience-grid">
      <div class="item img-1" v-fade-in>
        <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2000&auto=format&fit=crop" alt="Dining Ambiance">
        <div class="caption">Fine Ambiance</div>
      </div>
      <div class="item img-2" v-fade-in="'up'">
        <img src="https://images.unsplash.com/photo-1541510912111-823075b6c3f6?q=80&w=2000&auto=format&fit=crop" alt="Kitchen Action">
        <div class="caption">Live Kitchen</div>
      </div>
      <div class="item center-box flex-center" v-fade-in="'up'">
        <div class="text-block">
          <h2>THE MIRCHI EXPERIENCE</h2>
          <p>Where fire meets flavor. A visual treat before the first bite.</p>
        </div>
      </div>
      <div class="item img-3" v-fade-in="'up'">
        <img src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?q=80&w=2000&auto=format&fit=crop" alt="Happy Customers">
        <div class="caption">Happy Moments</div>
      </div>
      <div class="item img-4" v-fade-in>
        <img src="https://images.unsplash.com/photo-1589113103133-7090f42dfaf3?q=80&w=2000&auto=format&fit=crop" alt="Plating">
        <div class="caption">Art of Plating</div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.mirchi-experience {
  background: #050505;
  padding: 4rem 1rem;
}

.experience-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 400px);
  gap: 1rem;
  max-width: 1600px;
  margin: 0 auto;
}

.item {
  position: relative;
  overflow: hidden;
}

.item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 1s ease;
}

.item:hover img {
  transform: scale(1.1);
}

.caption {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 2rem;
  background: linear-gradient(transparent, rgba(0,0,0,0.8));
  color: #fff;
  font-weight: 700;
  letter-spacing: 2px;
  transform: translateY(20px);
  opacity: 0;
  transition: 0.4s;
}

.item:hover .caption {
  transform: translateY(0);
  opacity: 1;
}

.center-box {
  grid-column: span 2;
  padding: 4rem;
  background: #d4af37;
  color: #000;
  text-align: center;
}

.center-box h2 {
  font-size: 2.5rem;
  font-weight: 900;
  margin-bottom: 1rem;
}

.center-box p {
  font-size: 1.2rem;
  font-weight: 600;
}

.img-1 { grid-area: 1 / 1 / 2 / 2; }
.img-2 { grid-area: 1 / 2 / 2 / 3; }
.img-3 { grid-area: 2 / 3 / 3 / 4; }
.img-4 { grid-area: 2 / 4 / 3 / 5; }

@media (max-width: 1200px) {
  .experience-grid {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto;
  }
  .center-box { grid-column: span 2; order: -1; }
  .img-1, .img-2, .img-3, .img-4 { grid-area: auto; height: 350px; }
}

@media (max-width: 768px) {
  .experience-grid { grid-template-columns: 1fr; }
  .center-box { grid-column: span 1; padding: 2rem; }
}
</style>

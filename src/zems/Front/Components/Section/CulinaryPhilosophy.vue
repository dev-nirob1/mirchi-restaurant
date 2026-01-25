<template>
  <section class="philosophy section bg-light">
    <div class="container flex align-center justify-between wrap gap-4">
      <div class="philosophy-text" v-fade-in>
        <span class="accent-text mb-2 block">Our Ethos</span>
        <h2 class="text-white">A Symphony of <br/> <span class="accent-text">Heritage & Innovation</span></h2>
        <div class="line mt-2 mb-2"></div>
        <p>
          At Mirchi, we believe that cooking is a form of alchemy. We source the rarest spices from micro-regions across the globe, hand-grinding them in our kitchen to preserve their deepest essences.
        </p>
        <p class="mt-2 text-muted">
          Our culinary philosophy is rooted in respect for the ingredient, the tradition, and the modern palate. Every plate is a carefully curated narrative of flavor and fire.
        </p>
      </div>
      
      <div class="philosophy-image" v-fade-in="'up'">
         <div class="img-frame shadow-large">
            <img src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=800" alt="Chef's specialized tools">
         </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.philosophy-text {
  flex: 1;
  min-width: 400px;
}

.philosophy-image {
  flex: 1;
  min-width: 400px;
  display: flex;
  justify-content: flex-end;
}

.img-frame {
  width: 90%;
  height: 500px;
  overflow: hidden;
  clip-path: polygon(0 0, 100% 0, 100% 85%, 85% 100%, 0 100%);
}

.img-frame img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.line {
  width: 60px;
  height: 2px;
  background-color: var(--color-crimson);
}

.block { display: block; }
.mt-2 { margin-top: 2rem; }
.mb-2 { margin-bottom: 2rem; }

.shadow-large {
  box-shadow: 0 40px 80px rgba(0,0,0,0.1);
}

@media (max-width: 992px) {
  .philosophy-image {
    justify-content: center;
    width: 100%;
  }
  .img-frame {
    width: 100%;
    height: 400px;
  }
}
</style>

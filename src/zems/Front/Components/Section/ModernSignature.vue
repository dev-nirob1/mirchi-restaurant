<template>
  <section class="signature section">
    <div class="container mb-5" v-fade-in>
      <span class="accent-text block mb-1">Our Manifestation</span>
      <h2 class="massive-title">Signature <span class="accent-text">Creations</span></h2>
    </div>
    
    <div class="container grid-signature">
      <div class="dish-card" v-fade-in="'up'">
        <div class="dish-img shadow-large">
          <img src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800" alt="Saffron Smoked Lamb">
          <div class="dish-tag">Chef's Choice</div>
        </div>
        <div class="dish-meta">
          <h3>Saffron Smoked Lamb</h3>
          <p>Braised for 12 hours in a vessel of ancient clay and wild saffron.</p>
          <span class="dish-price">$38</span>
        </div>
      </div>
      
      <div class="dish-card" v-fade-in="'up'">
        <div class="dish-img shadow-large">
          <img src="https://images.unsplash.com/photo-1626777553732-48f860d5b62b?auto=format&fit=crop&q=80&w=800" alt="Charcoal Sea Bass">
        </div>
        <div class="dish-meta">
          <h3>Charcoal Sea Bass</h3>
          <p>Line-caught bass charred over aromatic sandalwood embers.</p>
          <span class="dish-price">$32</span>
        </div>
      </div>

      <div class="dish-card" v-fade-in="'up'">
        <div class="dish-img shadow-large">
          <img src="https://images.unsplash.com/photo-1603894584284-93cd24844331?auto=format&fit=crop&q=80&w=800" alt="Wild Cardamom Mousse">
        </div>
        <div class="dish-meta">
          <h3>Wild Cardamom Mousse</h3>
          <p>A delicate cloud of cream infused with hand-picked green cardamom.</p>
          <span class="dish-price">$14</span>
        </div>
      </div>
    </div>
    
    <div class="container text-center mt-5" v-fade-in>
      <RouterLink to="/menu" class="btn btn-outline">Explore the Full Anthology</RouterLink>
    </div>
  </section>
</template>

<style scoped>
.grid-signature {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
}

.dish-card {
  transition: var(--transition);
}

.dish-img {
  width: 100%;
  height: 450px;
  overflow: hidden;
  position: relative;
  margin-bottom: 2rem;
}

.dish-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 1.2s var(--transition);
}

.dish-card:hover .dish-img img {
  transform: scale(1.08);
}

.dish-tag {
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  background: var(--color-crimson);
  color: var(--color-white);
  padding: 0.5rem 1rem;
  font-family: var(--font-sans);
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.dish-meta h3 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: var(--color-bone);
}

.dish-price {
  display: block;
  margin-top: 1rem;
  font-family: var(--font-serif);
  font-size: 1.25rem;
  color: var(--color-crimson);
  font-weight: 600;
}

.massive-title {
  font-size: var(--heading-2);
}

.mt-5 { margin-top: 5rem; }
.mb-1 { margin-bottom: 1rem; }
.block { display: block; }

.shadow-large {
  box-shadow: 0 40px 100px rgba(0,0,0,0.1);
}

@media (max-width: 992px) {
  .grid-signature { grid-template-columns: 1fr 1fr; }
}

@media (max-width: 768px) {
  .grid-signature { grid-template-columns: 1fr; }
}
</style>

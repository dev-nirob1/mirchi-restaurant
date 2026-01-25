<script setup>
import SectionTitle from '@/components/Widget/SectionTitle.vue';
import { ref, onMounted, onUnmounted } from 'vue';

const testimonials = [
  {
    id: 1,
    quote: "Mirchi is not just a dinner; it's a sensory pilgrimage. The play of textures and the architectural use of spice is unlike anything I've experienced.",
    author: "Julian Vane",
    role: "Culinary Critic",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200"
  },
  {
    id: 2,
    quote: "The Guntur Chili Chicken is life-changing. I've never tasted such depth of flavor combined with the perfect heat level. Simply unparalleled.",
    author: "Sarah Jenkins",
    role: "Food Blogger",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200"
  },
  {
    id: 3,
    quote: "Finally, an Indian restaurant that balances traditional heritage with modern elegance. The ambiance is as spicy and vibrant as the food.",
    author: "Michael Chen",
    role: "Gourmet Enthusiast",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200"
  }
];

const currentIndex = ref(0);
let autoPlayTimer = null;

const startAutoPlay = () => {
  autoPlayTimer = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % testimonials.length;
  }, 5000);
};

const stopAutoPlay = () => {
  if (autoPlayTimer) clearInterval(autoPlayTimer);
};

const goToSlide = (index) => {
  currentIndex.value = index;
  stopAutoPlay();
  startAutoPlay(); // Reset timer on manual click
};

onMounted(() => startAutoPlay());
onUnmounted(() => stopAutoPlay());

</script>

<template>
  <section class="testimonial-section bg-light">
    <div class="container text-center">
      <SectionTitle title="What Diners Enjoy" subTitle="Testimonials" class="mb-3" />

      <div class="carousel-container">
        <!-- Single slide with :key forces re-render/animation on index change -->
        <div v-if="testimonials[currentIndex]" :key="currentIndex" class="testimonial-slide" v-fade-in="'up'">
          <div class="quote-icon">
            <i class="fa-solid fa-quote-left text-secondary"></i>
          </div>

          <BaseParagraph class="quote-text mb-2">
            "{{ testimonials[currentIndex].quote }}"
          </BaseParagraph>

          <div class="author-meta flex-center col gap-1">
            <div class="avatar">
              <img :src="testimonials[currentIndex].image" :alt="testimonials[currentIndex].author">
            </div>
            <div class="info">
              <SubTitle>{{ testimonials[currentIndex].author }}</SubTitle>
              <span class="role text-muted small uppercase letter-spacing">
                {{ testimonials[currentIndex].role }}
              </span>
            </div>
          </div>
        </div>

        <!-- Dot Pagination -->
        <div class="dots-pagination flex-center gap-1 mt-3">
          <span v-for="(_, index) in testimonials" :key="index" class="dot" :class="{ active: currentIndex === index }"
            @click="goToSlide(index)"></span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.testimonial-section {
  padding: 8rem 0;
  background-color: var(--bg-darker);
}

.carousel-container {
  max-width: 850px;
  margin: 0 auto;
  position: relative;
  min-height: 480px;
}


.quote-icon {
  font-size: 3rem;
  opacity: 0.3;
}

.quote-text {
  font-size: 1.8rem;
  font-family: var(--heading-font);
  font-style: italic;
  line-height: 1.4;
  color: var(--white);
}

.avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid var(--secondary-color);
  margin-bottom: 1rem;
}

.avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.role {
  display: block;
  letter-spacing: 2px;
  font-weight: 700;
}

.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--text-muted);
  opacity: 0.3;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.dot.active {
  background: var(--secondary-color);
  opacity: 1;
  transform: scale(1.4);
}

@media (max-width: 768px) {
  .quote-text {
    font-size: 1.4rem;
  }

  .carousel-container {
    min-height: 550px;
  }
}
</style>

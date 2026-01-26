<script setup>
import SectionTitle from '@/components/Widget/SectionTitle.vue';

const milestones = [
  {
    id: 1,
    year: '2012',
    title: 'THE FIRST EMBER',
    desc: 'Began as a boutique spice-mixing studio in a quiet alley of Mirpur.'
  },
  {
    id: 2,
    year: '2016',
    title: 'THE STONE ROASTERY',
    desc: 'Opened our first full-scale kitchen dedicated to ancient clay-pot techniques.'
  },
  {
    id: 3,
    year: '2020',
    title: 'CULINARY ANTHOLOGY',
    desc: 'Launched our signature spice-collection and reached 100k curated meals.'
  },
  {
    id: 4,
    year: '2024',
    title: 'MODERN SANCTUARY',
    desc: 'Unveiling the premium Mirchi experience you see today.'
  }
];
</script>

<template>
  <section class="about-timeline">
    <div class="container">
      <SectionTitle subTitle="The Journey" title="OUR MILESTONES" class="mb-3" />

      <div class="timeline-container mt-4">
        <div v-for="m in milestones" :key="m.id" class="timeline-item" v-fade-in="'up'">
          <div class="timeline-dot"></div>
          <div class="timeline-content">
            <div class="timeline-year">{{ m.year }}</div>
            <h4 class="m-title">{{ m.title }}</h4>
            <BaseParagraph class="m-desc">{{ m.desc }}</BaseParagraph>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-timeline {
  padding: 3.75rem 0;
  overflow: hidden;
}

.timeline-container {
  position: relative;
  max-width: 1000px;
  margin: 4rem auto 0;
  padding: 2rem 0;
}

/* Central Vertical Line */
.timeline-container::before {
  content: '';
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(to bottom,
      transparent,
      var(--accent-color) 15%,
      var(--accent-color) 85%,
      transparent);
}

.timeline-item {
  display: flex;
  justify-content: flex-end;
  padding-right: 50%;
  margin-bottom: 4rem;
  position: relative;
  width: 100%;
}

.timeline-item:nth-child(even) {
  justify-content: flex-start;
  padding-right: 0;
  padding-left: 50%;
}

.timeline-dot {
  position: absolute;
  left: 50%;
  top: 0;
  transform: translateX(-50%);
  width: 16px;
  height: 16px;
  background: var(--bg-surface);
  border: 3px solid var(--accent-color);
  border-radius: 50%;
  z-index: 2;
  box-shadow: 0 0 10px rgba(var(--accent-rgb), 0.3);
}

.timeline-content {
  width: 100%;
  padding: 0 3rem;
  position: relative;
  text-align: right;
}

.timeline-item:nth-child(even) .timeline-content {
  text-align: left;
}

.timeline-year {
  font-family: var(--font-sans);
  font-weight: 900;
  color: var(--accent-color);
  font-size: 1.2rem;
  letter-spacing: 2px;
  margin-bottom: 0.5rem;
}

.m-title {
  font-family: var(--font-sans);
  font-size: 1.25rem;
  font-weight: 800;
  letter-spacing: 1px;
  color: var(--white);
  margin-bottom: 0.75rem;
  text-transform: uppercase;
}

.m-desc {
  font-size: 0.95rem;
  line-height: 1.6;
  opacity: 0.8;
}

@media (max-width: 768px) {
  .timeline-container::before {
    left: 20px;
  }

  .timeline-item {
    justify-content: flex-start;
    padding-left: 45px;
    padding-right: 0;
    margin-bottom: 3rem;
  }

  .timeline-item:nth-child(even) {
    padding-left: 45px;
  }

  .timeline-dot {
    left: 20px;
  }

  .timeline-content,
  .timeline-item:nth-child(even) .timeline-content {
    text-align: left;
    padding: 0;
  }

  .timeline-year {
    font-size: 1rem;
  }
}
</style>

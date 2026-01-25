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
    <section class="about-timeline bg-light">
        <div class="container">
            <SectionTitle subTitle="The Journey" title="OUR MILESTONES" class="mb-3" />

            <div class="timeline-container mt-4">
                <div v-for="m in milestones" :key="m.id" class="timeline-item" v-fade-in="'up'">
                    <div class="timeline-year">{{ m.year }}</div>
                    <div class="timeline-bullet"></div>
                    <div class="timeline-content">
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
}

.timeline-container {
    position: relative;
    max-width: 800px;
    margin: 4rem auto 0;
    padding-left: 2rem;
}

/* Vertical Line */
.timeline-container::before {
    content: '';
    position: absolute;
    left: 31px;
    top: 0;
    bottom: 0;
    width: 2px;
    background: linear-gradient(to bottom, transparent, var(--accent-color), transparent);
}

.timeline-item {
    display: flex;
    gap: 2rem;
    margin-bottom: 4rem;
    position: relative;
}

.timeline-item:last-child {
    margin-bottom: 0;
}

.timeline-year {
    flex: 0 0 60px;
    font-family: var(--font-sans);
    font-weight: 900;
    color: var(--accent-color);
    font-size: 0.9rem;
    letter-spacing: 2px;
    text-align: right;
    padding-top: 0.25rem;
}

.timeline-bullet {
    flex: 0 0 16px;
    height: 16px;
    background: var(--bg-surface);
    border: 4px solid var(--accent-color);
    border-radius: 50%;
    margin-top: 0.4rem;
    z-index: 1;
}

.timeline-content {
    flex: 1;
}

.m-title {
    font-family: var(--font-sans);
    font-size: 1.1rem;
    font-weight: 800;
    letter-spacing: 1px;
    color: var(--white);
    margin-bottom: 0.5rem;
    text-transform: uppercase;
}

.m-desc {
    font-size: 0.95rem;
    line-height: 1.6;
    opacity: 0.7;
}

@media (max-width: 600px) {
    .timeline-container {
        padding-left: 0;
    }

    .timeline-year {
        text-align: left;
        margin-bottom: 0.5rem;
    }

    .timeline-item {
        flex-direction: column;
        gap: 0.5rem;
    }

    .timeline-bullet {
        display: none;
    }

    .timeline-container::before {
        left: 0;
        display: none;
    }
}
</style>

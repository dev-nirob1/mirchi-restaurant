<script setup>
import SectionTitle from '@/components/Widget/SectionTitle.vue';

const awards = [
    {
        id: 1,
        year: '2024',
        title: 'BEST SPICE HOUSE',
        org: 'Global Culinary Guild',
        icon: 'fa-award'
    },
    {
        id: 2,
        year: '2023',
        title: 'EXCELLENCE IN DESIGN',
        org: 'Modern Interior Awards',
        icon: 'fa-monument'
    },
    {
        id: 3,
        year: '2022',
        title: 'SOCIALLY CONSCIOUS',
        org: 'Green Earth Foundation',
        icon: 'fa-leaf'
    }
];
</script>

<template>
    <section class="about-awards">
        <div class="container">
            <SectionTitle subTitle="Recognition" title="ACCOLADES" class="mb-3" />

            <div class="awards-grid">
                <div v-for="award in awards" :key="award.id" class="award-item flex-center col text-center"
                    v-fade-in="'up'">
                    <div class="award-icon">
                        <i :class="`fa-solid ${award.icon}`"></i>
                    </div>
                    <span class="award-year">{{ award.year }}</span>
                    <h4 class="award-title">{{ award.title }}</h4>
                    <span class="award-org">{{ award.org }}</span>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.about-awards {
    padding: 3.75rem 0;
    background-color: var(--primary-color);
}

.awards-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 3rem;
    margin-top: 3rem;
}

.award-item {
    position: relative;
}

.award-icon {
    font-size: 2.5rem;
    color: var(--accent-color);
    margin-bottom: 1rem;
    opacity: 0.8;
}

.award-year {
    font-size: 0.75rem;
    font-weight: 900;
    color: var(--secondary-color);
    letter-spacing: 2px;
    margin-bottom: 0.5rem;
}

.award-title {
    font-family: var(--font-sans);
    font-size: 1rem;
    font-weight: 800;
    letter-spacing: 2px;
    color: var(--white);
    margin-bottom: 0.25rem;
}

.award-org {
    font-size: 0.8rem;
    text-transform: uppercase;
    color: var(--text-muted);
    letter-spacing: 1px;
}

@media (min-width: 768px) {
    .awards-grid {
        grid-template-columns: repeat(3, 1fr);
    }
}
</style>

<script setup>
import SectionTitle from '@/components/Widget/SectionTitle.vue';

const pillars = [
    {
        id: 1,
        title: 'THE ART OF GRINDING',
        desc: 'Each spice is hand-pounded in traditional stone mortars to preserve the volatile oils and soul of the spice.',
        icon: 'fa-mortar-pestle'
    },
    {
        id: 2,
        title: '12-HOUR MASTERY',
        desc: 'Our signature dals and meats are slow-braised over low embers, allowing flavors to mature in darkness.',
        icon: 'fa-fire-burner'
    },
    {
        id: 3,
        title: 'BEYOND SUSTAINABLE',
        desc: 'We source exclusively from heritage farms that prioritize earth-health as much as flavor-intensity.',
        icon: 'fa-leaf'
    }
];
</script>

<template>
    <section class="about-philosophy">
        <div class="container">
            <SectionTitle subTitle="The Craft" title="OUR CULINARY PILLARS" class="mb-3" />

            <div class="pillars-grid">
                <div v-for="pillar in pillars" :key="pillar.id" class="pillar-card" v-fade-in="'up'">
                    <div class="pillar-icon">
                        <i :class="`fa-solid ${pillar.icon}`"></i>
                    </div>
                    <h3 class="pillar-title">{{ pillar.title }}</h3>
                    <BaseParagraph class="pillar-desc">{{ pillar.desc }}</BaseParagraph>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.about-philosophy {
    padding: 3.75rem 0;
}

.pillars-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 3rem;
    margin-top: 4rem;
}

.pillar-card {
    text-align: center;
    padding: 2rem;
    border: 1px solid var(--border-muted);
    transition: var(--transition);
}

.pillar-card:hover {
    border-color: var(--accent-color);
}

.pillar-icon {
    font-size: 2.5rem;
    color: var(--accent-color);
    margin-bottom: 1.5rem;
}

.pillar-title {
    font-family: var(--font-sans);
    font-size: 1rem;
    font-weight: 800;
    letter-spacing: 2px;
    margin-bottom: 1rem;
    color: var(--white);
}

.pillar-desc {
    font-size: 0.95rem;
    color: var(--text-muted);
    line-height: 1.6;
}

@media (min-width: 768px) {
    .pillars-grid {
        grid-template-columns: repeat(3, 1fr);
    }
}

@media (min-width: 1200px) {
    .pillars-grid {
        gap: 5rem;
    }

    .pillar-card {
        padding: 4rem 2rem;
    }
}
</style>

<script setup>
import SectionTitle from '@/components/Widget/SectionTitle.vue';

const team = [
    {
        id: 1,
        name: 'RAJIV CHOKSHI',
        role: 'Executive Chef & Visionary',
        image: 'https://images.unsplash.com/photo-1577219481157-06d2e5a05b1f?auto=format&fit=crop&q=80&w=800'
    },
    {
        id: 2,
        name: 'ANANYA REDDY',
        role: 'Master of Grinds',
        image: 'https://images.unsplash.com/photo-1581299894007-aaa50297cf16?auto=format&fit=crop&q=80&w=800'
    },
    {
        id: 3,
        name: 'SAMIR KHAN',
        role: 'Alchemist of Smoke',
        image: 'https://images.unsplash.com/photo-1583394238235-941e998f6a45?auto=format&fit=crop&q=80&w=800'
    }
];
</script>

<template>
    <section class="about-team bg-light">
        <div class="container">
            <SectionTitle subTitle="The Masterminds" title="BEHIND THE SPICE" class="mb-3" />

            <div class="team-grid">
                <div v-for="member in team" :key="member.id" class="team-card" v-fade-in="'up'">
                    <div class="member-img">
                        <img :src="member.image" :alt="member.name" />
                    </div>
                    <div class="member-info text-center">
                        <h3 class="name">{{ member.name }}</h3>
                        <span class="role">{{ member.role }}</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.about-team {
    padding: 3.75rem 0;
}

.team-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
}

.team-card {
    transition: var(--transition);
}

.member-img {
    height: 420px;
    /* Fixed height for consistency */
    overflow: hidden;
    margin-bottom: 1.5rem;
    background-color: var(--primary-color);
}

.member-img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: grayscale(100%);
    transition: filter 0.8s ease, transform 0.8s ease;
}

.team-card:hover .member-img img {
    filter: grayscale(0%);
    transform: scale(1.05);
}

.name {
    font-family: var(--font-sans);
    font-weight: 900;
    letter-spacing: 2px;
    font-size: 1.15rem;
    color: var(--white);
    margin-bottom: 0.25rem;
}

.role {
    display: block;
    font-size: 0.75rem;
    text-transform: uppercase;
    color: var(--accent-color);
    font-weight: 700;
    letter-spacing: 2px;
}

/* Desktop sizing */
@media (min-width: 768px) {
    .team-grid {
        grid-template-columns: repeat(3, 1fr);
    }
}
</style>

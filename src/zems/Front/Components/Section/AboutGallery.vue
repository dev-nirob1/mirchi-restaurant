<script setup>
import SectionTitle from '@/components/Widget/SectionTitle.vue';

const galleryImages = [
    { id: 1, url: 'https://images.unsplash.com/photo-1541510912111-823075b6c3f6?auto=format&fit=crop&q=80&w=1000', size: 'large' },
    { id: 2, url: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=800', size: 'small' },
    { id: 3, url: 'https://images.unsplash.com/photo-1601050633647-8f8f1f3ca419?auto=format&fit=crop&q=80&w=800', size: 'medium' },
    { id: 4, url: 'https://images.unsplash.com/photo-1567184109171-9b5757d5d21c?auto=format&fit=crop&q=80&w=800', size: 'small' },
    { id: 5, url: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=800', size: 'medium' }
];
</script>

<template>
    <section class="about-gallery">
        <div class="container">
            <SectionTitle subTitle="The Vibe" title="VISUAL ANTHOLOGY" class="mb-3" />

            <div class="masonry-gallery mt-4">
                <div v-for="img in galleryImages" :key="img.id" class="gallery-item" :class="img.size" v-fade-in="'up'">
                    <img :src="img.url" alt="Restaurant Vibe" />
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.about-gallery {
    padding: 3.75rem 0;
    background-color: var(--primary-color);
}

.masonry-gallery {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
}

.gallery-item {
    overflow: hidden;
    position: relative;
    background: var(--bg-surface);
}

.gallery-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.8s ease;
}

.gallery-item:hover img {
    transform: scale(1.1);
}

.large {
    grid-column: span 2;
    height: 500px;
}

.medium {
    height: 400px;
}

.small {
    height: 300px;
}

@media (min-width: 992px) {
    .masonry-gallery {
        grid-template-columns: repeat(3, 1fr);
    }

    .large {
        grid-column: span 2;
        grid-row: span 2;
        height: 720px;
    }

    .medium {
        height: 450px;
    }

    .small {
        height: 250px;
    }
}
</style>

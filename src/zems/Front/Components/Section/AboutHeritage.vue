<script setup>
import SectionTitle from '@/components/Widget/SectionTitle.vue';
</script>

<template>
    <section class="about-heritage bg-light">
        <div class="container container-flex">
            <div class="image-area" v-fade-in="'up'">
                <div class="image-wrapper">
                    <img src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=1000"
                        alt="Handcrafted Heritage" />
                </div>
            </div>

            <div class="content-area" v-fade-in="'up'">
                <SectionTitle subTitle="Our Manifestation" title="A LEGACY OF SPICE" class="title-left" />
                <BaseParagraph>
                    Mirchi wasn’t born in a kitchen, but in the memory of a grandmother’s stone grinder.
                    Our journey began with a single vision: to revive the ancient art of slow-roasting
                    spices that had been lost to the rush of modern life.
                </BaseParagraph>
                <BaseParagraph>
                    In every "Mirchi" (Chili) lies a story of fire and flavor. We source our chilies
                    directly from the Guntur fields and our saffron from the valleys of Pampore,
                    ensuring that every bite you take is a tribute to the diverse landscape of our heritage.
                </BaseParagraph>
                <BaseParagraph>
                    This is not just dining; it is a ritual of smoke, earth, and soul. We invite you
                    to be part of our unfolding anthology.
                </BaseParagraph>
            </div>
        </div>
    </section>
</template>

<style scoped>
.about-heritage {
    background-color: var(--bg-darker);
    padding: 3.75rem 0;
}

.container-flex {
    display: flex;
    flex-direction: column;
    gap: 3rem;
}

.image-wrapper {
    position: relative;
    height: 400px;
    overflow: hidden;
}

.image-wrapper img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.8s ease;
}

.title-left {
    text-align: left;
    margin-bottom: 2rem;
}

.content-area {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

/* Mobile First: Min-width 992px for Desktop Layout */
@media (min-width: 992px) {
    .container-flex {
        flex-direction: row;
        gap: 5rem;
    }

    .image-area,
    .content-area {
        flex: 1;
    }

    .image-wrapper {
        height: 600px;
    }
}
</style>

<script setup>
import SectionTitle from '@/components/Widget/SectionTitle.vue';
</script>

<template>
    <section class="about-newsletter bg-light">
        <div class="container container-narrow text-center">
            <SectionTitle subTitle="Join the Ritual" title="STAY SPICED" class="mb-2" />
            <BaseParagraph class="mb-4">
                Sign up to receive exclusive invites to our secret spice-tasting events
                and seasonal menu reveals.
            </BaseParagraph>

            <form class="newsletter-form flex-center gap-1" @submit.prevent>
                <input type="email" placeholder="Your Sacred Email" class="email-input" required />
                <BaseButton class="btn-primary">Subscribe</BaseButton>
            </form>
        </div>
    </section>
</template>

<style scoped>
.about-newsletter {
    padding: 5rem 0;
    /* Extra padding for CTA feel */
}

.container-narrow {
    max-width: 600px;
}

.newsletter-form {
    width: 100%;
    margin-top: 2rem;
}

.email-input {
    flex: 1;
    background: var(--bg-surface);
    border: 1px solid var(--border-muted);
    padding: 1.15rem 1.5rem;
    color: var(--white);
    font-family: var(--font-sans);
    font-size: 0.9rem;
    transition: var(--transition);
}

.email-input:focus {
    outline: none;
    border-color: var(--accent-color);
}

@media (max-width: 600px) {
    .newsletter-form {
        flex-direction: column;
    }

    .email-input {
        width: 100%;
    }
}
</style>

<script setup>
import { reactive } from 'vue';
import { toast } from '@/store/toast';
import SectionTitle from '@/components/Widget/SectionTitle.vue';
import PageHero from '@/zems/Front/Components/Widget/PageHero.vue';

const form = reactive({
    name: '',
    email: '',
    subject: '',
    message: ''
});

const handleSubmit = () => {
    console.log('Contact Form Submitted:', form);
    toast.success('Your message has been received. Our masters will respond shortly.');
    Object.keys(form).forEach(key => form[key] = '');
};
</script>

<template>
    <main class="contact-page">
        <PageHero title="Get in Touch"
            backgroundImage="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=2000" />

        <section class="contact-content section">
            <div class="container">
                <div class="contact-grid">
                    <!-- Left: Form -->
                    <div class="contact-form-area" v-fade-in="'left'">
                        <SectionTitle subTitle="Inquiry" title="SEND A MESSAGE" class="text-start mb-4" />
                        <BaseParagraph class="mb-5">
                            For private events, catering inquiries, or just to say hello,
                            please use the ritual form below.
                        </BaseParagraph>

                        <form @submit.prevent="handleSubmit" class="contact-form">
                            <div class="field mb-3">
                                <label>Full Name</label>
                                <InputField v-model="form.name" required placeholder="Enter your name" />
                            </div>
                            <div class="field mb-3">
                                <label>Email Address</label>
                                <InputField v-model="form.email" type="email" required placeholder="your@email.com" />
                            </div>
                            <div class="field mb-3">
                                <label>Subject</label>
                                <InputField v-model="form.subject" required placeholder="How can we help?" />
                            </div>
                            <div class="field mb-4">
                                <label>Message</label>
                                <BaseTextArea v-model="form.message" required placeholder="Tell us your story..."
                                    rows="5" />
                            </div>
                            <BaseButton type="submit" class="btn-primary py-3 px-5">Submit Inquiry</BaseButton>
                        </form>
                    </div>

                    <!-- Right: Info & Map -->
                    <div class="contact-info-area" v-fade-in="'right'">
                        <div class="info-block mb-5">
                            <h3 class="info-title">The Sanctuary</h3>
                            <div class="info-items mt-4">
                                <div class="info-item">
                                    <i class="fa-solid fa-location-dot"></i>
                                    <div class="text">
                                        <p>Mirpur 12, Dhaka 1216</p>
                                        <p>The Heart of Spices, Bangladesh</p>
                                    </div>
                                </div>
                                <div class="info-item">
                                    <i class="fa-solid fa-phone"></i>
                                    <div class="text">
                                        <p>+880 1234 567 890</p>
                                        <p>+880 9876 543 210</p>
                                    </div>
                                </div>
                                <div class="info-item">
                                    <i class="fa-solid fa-envelope"></i>
                                    <div class="text">
                                        <p>ritual@mirchi.com</p>
                                        <p>events@mirchi.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="map-placeholder mt-5">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14602.700312015842!2d90.3547!3d23.8223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c1106093836d%3A0x6e7887556a31f792!2sMirpur%2012%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1706220000000!5m2!1sen!2sbd"
                                width="100%" height="400" style="border:0;" allowfullscreen="" loading="lazy"
                                referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<style scoped>
.contact-page {
    background: var(--color-noir);
}

.contact-grid {
    display: grid;
    grid-template-columns: 1.2fr 1fr;
    gap: 6rem;
}

.field label {
    display: block;
    font-size: 0.75rem;
    font-weight: 700;
    color: var(--accent-color);
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 0.5rem;
}

.info-title {
    font-family: var(--font-serif);
    font-size: 2rem;
    color: var(--color-bone);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    padding-bottom: 1rem;
}

.info-items {
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

.info-item {
    display: flex;
    gap: 1.5rem;
    align-items: flex-start;
}

.info-item i {
    font-size: 1.25rem;
    color: var(--accent-color);
    margin-top: 0.25rem;
}

.info-item p {
    margin: 0;
    color: rgba(255, 255, 255, 0.7);
    font-size: 1rem;
}

.map-placeholder {
    border: 1px solid rgba(255, 255, 255, 0.05);
    filter: grayscale(1) invert(0.9) contrast(1.2);
    transition: var(--transition);
}

.map-placeholder:hover {
    filter: none;
}

@media (max-width: 992px) {
    .contact-grid {
        grid-template-columns: 1fr;
        gap: 4rem;
    }
}
</style>

<script setup>
import { reactive } from 'vue';
import { toast } from '@/store/toast';
import SectionTitle from '@/components/Widget/SectionTitle.vue';

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
  <main class="contact-page bg-light">
    <section class="contact-section">
      <div class="container overflow-hidden">
        <div class="medium-2 gap-2">
          <!-- Left: Info -->
          <div class="contact-info" v-fade-in="'left'">
            <SectionTitle subTitle="Connect With Us" title="GET IN TOUCH" class="mb-1" />
            <BaseParagraph>
              For private events, catering inquiries, or to simply share your experience,
              reach out to us. We are here to assist you with every detail.
            </BaseParagraph>

            <div class="info-items mt-1">
              <div class="info-item">
                <span class="label">The Hearth (Location)</span>
                <span class="value">Mirpur 12, Dhaka 1216, Bangladesh</span>
              </div>
              <div class="info-item">
                <span class="label">The Voice (Contact)</span>
                <span class="value">+880 1234 567 890 / ritual@mirchi.com</span>
              </div>
              <div class="info-item">
                <span class="label">Oracle Hours (Opening Times)</span>
                <span class="value">Tue - Thu: 12:00 PM - 10:00 PM</span>
                <span class="value text-accent">Fri - Sun: 11:00 AM - 11:30 PM</span>
                <span class="value opacity-50 italic">Mon: Sanctuary Closed</span>
              </div>
              <div class="info-item">
                <span class="label">Digital Echoes</span>
                <div class="social-links mt-1">
                  <a href="#" class="social-link">Instagram</a>
                  <a href="#" class="social-link">Facebook</a>
                  <a href="#" class="social-link">Eater</a>
                </div>
              </div>
            </div>
          </div>

          <!-- Right: Form -->
          <div class="contact-form-container" v-fade-in="'right'">
            <form @submit.prevent="handleSubmit" class="contact-form">
              <div class="form-grid">
                <div class="field">
                  <label>Manifestation (Full Name)</label>
                  <InputField v-model="form.name" type="text" placeholder="Enter your name" required />
                </div>
                <div class="field">
                  <label>Digital Echo (Email Address)</label>
                  <InputField v-model="form.email" type="email" placeholder="your@email.com" required />
                </div>
                <div class="field full-width">
                  <label>Vibration (Subject)</label>
                  <InputField v-model="form.subject" type="text" placeholder="How can we assist?" required />
                </div>
                <div class="field full-width">
                  <label>Proclamation (Message)</label>
                  <BaseTextArea v-model="form.message" placeholder="Tell us your story..." rows="5" required />
                </div>
              </div>

              <BaseButton type="submit" class="btn-primary w-full mt-1">
                Submit Inquiry
              </BaseButton>
            </form>
          </div>
        </div>

        <!-- Map Section Integrated Below -->
        <div class="map-wrapper mt-5" v-fade-in="'up'">
          <div class="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14602.700312015842!2d90.3547!3d23.8223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c1106093836d%3A0x6e7887556a31f792!2sMirpur%2012%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1706220000000!5m2!1sen!2sbd"
              width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
.contact-page {
  padding-top: 8rem;
  min-height: 100vh;
}

.contact-section {
  padding: 6rem 0;
  background: var(--bg-dark);
}

.info-items {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.info-item {
  display: flex;
  flex-direction: column;
}

.info-item .label {
  font-family: var(--font-sans);
  font-weight: 700;
  color: var(--accent-color);
  text-transform: uppercase;
  font-size: 0.8rem;
  letter-spacing: 2px;
  margin-bottom: 0.5rem;
}

.info-item .value {
  color: var(--color-bone);
  font-size: 1.1rem;
  opacity: 0.8;
  line-height: 1.4;
}

.text-accent {
  color: var(--accent-color) !important;
}

.social-links {
  display: flex;
  gap: 1.5rem;
}

.social-link {
  font-size: 0.9rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: rgba(255, 255, 255, 0.5);
  transition: all 0.3s ease;
}

.social-link:hover {
  color: var(--accent-color);
  transform: translateY(-2px);
}

/* Opaque Container - Matching ReservationSection */
.contact-form-container {
  background: #0a0a0a;
  padding: 3rem;
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.form-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
}

.field {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.field label {
  font-family: var(--font-sans);
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--color-bone);
  opacity: 0.9;
}

.field.full-width {
  grid-column: span 2;
}

/* Customizing Input Elements to match theme (matching ReservationSection) */
:deep(input),
:deep(textarea) {
  background: rgba(255, 255, 255, 0.05) !important;
  border: 1px solid rgba(255, 255, 255, 0.1) !important;
  color: var(--white) !important;
  padding: 1rem 1.25rem !important;
  border-radius: 0 !important;
  width: 100%;
  font-family: var(--font-sans);
  transition: all 0.3s ease;
}

:deep(input:focus),
:deep(textarea:focus) {
  border-color: var(--accent-color) !important;
  outline: none;
  background: rgba(255, 255, 255, 0.08) !important;
  box-shadow: 0 0 15px rgba(139, 0, 0, 0.1);
}

/* Map Styling */
.map-container {
  filter: grayscale(1) invert(0.9) contrast(1.2);
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: all 0.6s ease;
}

.map-container:hover {
  filter: grayscale(0.5) invert(0) contrast(1);
}

@media (max-width: 1024px) {
  .contact-info {
    text-align: center;
    margin-bottom: 4rem;
  }

  .info-items {
    align-items: center;
  }

  .contact-form-container {
    padding: 2rem;
  }
}

@media (max-width: 640px) {
  .form-grid {
    grid-template-columns: 1fr;
  }

  .field.full-width {
    grid-column: span 1;
  }
}
</style>

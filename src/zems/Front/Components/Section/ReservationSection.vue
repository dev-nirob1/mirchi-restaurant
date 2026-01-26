<script setup>
import { reactive } from 'vue';
import SectionTitle from '@/components/Widget/SectionTitle.vue';
import { toast } from '@/store/toast';

const form = reactive({
  name: '',
  email: '',
  phone: '',
  guests: '2',
  date: '',
  time: '',
  message: ''
});

const submitForm = () => {
  console.log('Reservation Submitted:', form);
  toast.success('The ritual is set. We will contact you shortly to confirm your table.');
  // Reset form
  Object.keys(form).forEach(key => form[key] = '');
  form.guests = '2';
};
</script>

<template>
  <section class="reservation-section">
    <div class="container overflow-hidden">
      <div class="medium-2 gap-2">
        <!-- Left: Info & Image -->
        <div class="reservation-info" v-fade-in="'left'">
          <SectionTitle subTitle="Secure Your Table" title="A CULINARY RITUAL AWAITS" class="mb-1" />
          <BaseParagraph>
            Join us for an unforgettable journey through the soul of spices.
            Whether it's an intimate dinner or a grand celebration, we ensure every detail is perfected.
          </BaseParagraph>

          <div class="info-items mt-1">
            <div class="info-item">
              <span class="label">Opening Hours</span>
              <span class="value">Mon - Sun: 12:00 PM - 11:00 PM</span>
            </div>
            <div class="info-item">
              <span class="label">Location</span>
              <span class="value">Mirpur 12, Dhaka - The Heart of Spices</span>
            </div>
            <div class="info-item">
              <span class="label">Contact</span>
              <span class="value">+880 1234 567 890 / info@mirchi.com</span>
            </div>
          </div>

        </div>

        <!-- Right: Form -->
        <div class="reservation-form-container" v-fade-in="'right'">
          <form @submit.prevent="submitForm" class="reservation-form">
            <div class="form-grid">
              <div class="field">
                <label>Full Name</label>
                <InputField v-model="form.name" type="text" placeholder="Enter your name" required />
              </div>
              <div class="field">
                <label>Email Address</label>
                <InputField v-model="form.email" type="email" placeholder="your@email.com" required />
              </div>
              <div class="field">
                <label>Phone Number</label>
                <InputField v-model="form.phone" type="tel" placeholder="+880" required />
              </div>
              <div class="field">
                <label>Number of Guests</label>
                <SelectDropdown v-model="form.guests" required>
                  <option value="1">1 Person</option>
                  <option value="2">2 People</option>
                  <option value="3">3 People</option>
                  <option value="4">4 People</option>
                  <option value="5">5+ People</option>
                </SelectDropdown>
              </div>
              <div class="field">
                <label>Preferred Date</label>
                <InputField v-model="form.date" type="date" required />
              </div>
              <div class="field">
                <label>Preferred Time</label>
                <InputField v-model="form.time" type="time" required />
              </div>
              <div class="field full-width">
                <label>Special Requests</label>
                <BaseTextArea v-model="form.message" placeholder="Any dietary requirements or special occasions?"
                  rows="4" />
              </div>
            </div>

            <BaseButton type="submit" class="btn-primary w-full mt-1">
              Book Now
            </BaseButton>

            <p class="form-note">
              <small>* You will receive a confirmation call shortly after booking.</small>
            </p>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.reservation-section {
  padding: 6rem 0 3.75rem 0;
  background: var(--bg-dark);
}

.info-items {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
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
  letter-spacing: 1px;
  margin-bottom: 0.25rem;
}

.info-item .value {
  color: var(--color-bone);
  font-size: 1rem;
  opacity: 0.8;
}

.image-wrapper img {
  width: 100%;
  height: 300px;
  object-fit: cover;
  border: 1px solid rgba(var(--accent-rgb), 0.2);
}

/* Form Styling */
.reservation-form-container {
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(10px);
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.form-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
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

/* Customizing Input Elements to match theme */
:deep(input),
:deep(select),
:deep(textarea) {
  background: rgba(255, 255, 255, 0.05) !important;
  border: 1px solid rgba(255, 255, 255, 0.1) !important;
  color: var(--white) !important;
  padding: 0.8rem 1.2rem !important;
  border-radius: 0 !important;
  width: 100%;
}

:deep(select option) {
  background-color: var(--color-noir);
  color: var(--color-bone);
}

:deep(select) {
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='white'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 1rem center;
  background-size: 1rem;
}

:deep(input:focus),
:deep(select:focus),
:deep(textarea:focus) {
  border-color: var(--accent-color) !important;
  outline: none;
  background: var(--color-charcoal) !important;
}

.form-note {
  opacity: 0.5;
}

@media (max-width: 1024px) {

  .reservation-info {
    text-align: center;
  }

  .info-items {
    align-items: center;
  }
}

@media (max-width: 640px) {
  .form-grid {
    grid-template-columns: 1fr;
  }

  .field.full-width {
    grid-column: span 1;
  }

  .reservation-form-container {
    padding: 1.5rem;
  }
}
</style>

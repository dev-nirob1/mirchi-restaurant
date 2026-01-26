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
  padding: 3.75rem 0;
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
  background: var(--primary-color);
  border: 1px solid var(--primary-color);
  padding: 1.25rem 1.5rem;
  color: var(--white);
  margin: 0 !important;
}

.email-input:focus {
  outline: none;
}

.btn-primary {
  padding: 1.15rem 2rem;
  margin: 0 !important;
}

.btn-primary:hover {
  box-shadow: none;
}

.email-input {
  border-radius: unset;
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

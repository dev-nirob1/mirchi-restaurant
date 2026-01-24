<script setup>
defineProps({
  isModalOpen: {
    type: Boolean
  },
  handleModalOpen: {
    type: Function
  },
  handleCloseModal: {
    type: Function
  },
  handlePrev: {
    type: Function
  },
  handleNext: {
    type: Function
  },
})
</script>

<template>
  <div v-if="isModalOpen" class="modal">
    <div class="modal-content flex-center">
      <!-- Navigation Buttons -->
      <BaseButton @click="handlePrev" class="btn-prev">
        <i class="fa-solid fa-arrow-left"></i>
      </BaseButton>
      <BaseButton @click="handleNext" class="btn-next">
        <i class="fa-solid fa-arrow-right"></i>
      </BaseButton>

      <!-- modal content -->
      <div class="modal-details">
        <slot></slot>
      </div>

      <!-- Close Button -->
      <BaseButton @click="handleCloseModal" class="close-btn">
        <i class="fa-solid fa-xmark"></i>
      </BaseButton>
    </div>
  </div>
</template>

<style>
.modal {
  position: relative;
}

.modal .modal-content {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.9);
  z-index: 999;
}

.modal .btn {
  position: fixed;
  background: var(--secondary-color);
  color: var(--white-color);
  padding: .75rem;
  border-radius: .25rem;
  border: none;
}

.modal .btn-prev,
.modal .btn-next {
  top: 50%;
  transform: translateY(-50%);
}

.modal .btn-prev {
  left: 1rem;
}

.modal .btn-next {
  right: 1rem;
}

.modal .close-btn {
  position: fixed;
  top: 1rem;
  right: 1rem;
}

.modal .modal-details {
  height: 70vh;
  width: 80vw;
}

.modal .modal-details .image {
  height: 100%;
  width: 100%;
}

.modal .modal-details img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@media (min-width: 768px) {
  .modal .modal-details {
    height: 60vh;
    width: 40vw;
  }
}
</style>

<script setup>

defineProps({
  isModalOpen: {
    type: Boolean
  },
  handleCloseModal: {
    type: Function
  }
})
</script>

<template>
  <div v-if="isModalOpen" class="video-modal flex-center">

    <div class="modal-content">
      <BaseButton @click="handleCloseModal" class="video-close"><i class="fa-solid fa-x"></i></BaseButton>
      <div class="width-full height-full">
        <iframe src="https://www.youtube.com/embed/NrgkeOR_g5E" title="YouTube video player" frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen>
        </iframe>
      </div>
    </div>
  </div>
</template>

<style scoped>
.video-modal {
  position: fixed;
  inset: 0;
  z-index: 1000;
}

.video-modal::before {
  content: "";
  position: absolute;
  inset: 0;
  background: rgb(0, 0, 0, .7);
}

.modal-content {
  position: relative;
  height: 70vh;
  width: 80%;
  aspect-ratio: 16 / 9;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: var(--box-shadow);
  z-index: 1;
}

.video-close {
  position: absolute;
  top: 0;
  right: 0.5rem;
  background: var(--secondary-color);
  border: none;
  color: var(--white-color);
  padding: 0.5rem .75rem;
  border-radius: 0.25rem;
  cursor: pointer;
  z-index: 1000;
}

iframe {
  width: 100%;
  height: 100%;
  border: none;
}
@media (min-width: 768px){
  .modal-content {
  height: 80vh;
  width: 60vw;}
}

</style>

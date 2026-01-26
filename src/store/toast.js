import { reactive, computed } from 'vue'

const state = reactive({
  toasts: [],
})

export const toast = {
  state,

  // Getters
  toasts: computed(() => state.toasts),

  // Actions
  add(message, type = 'success', duration = 3000) {
    const id = Date.now()
    state.toasts.push({
      id,
      message,
      type,
      duration,
    })

    setTimeout(() => {
      this.remove(id)
    }, duration)
  },

  remove(id) {
    const index = state.toasts.findIndex((t) => t.id === id)
    if (index !== -1) {
      state.toasts.splice(index, 1)
    }
  },

  // Shortcuts
  success(message, duration) {
    this.add(message, 'success', duration)
  },

  error(message, duration) {
    this.add(message, 'error', duration)
  },

  info(message, duration) {
    this.add(message, 'info', duration)
  },
}

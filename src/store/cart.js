import { reactive, computed } from 'vue'

const state = reactive({
  items: [],
  isOpen: false,
})

export const cart = {
  state,

  // Getters
  items: computed(() => state.items),
  isOpen: computed(() => state.isOpen),
  totalItems: computed(() => state.items.reduce((sum, item) => sum + item.quantity, 0)),
  totalPrice: computed(() =>
    state.items.reduce(
      (sum, item) => sum + parseFloat(item.price.replace(/[^0-9.]/g, '')) * item.quantity,
      0,
    ),
  ),

  // Actions
  toggle() {
    state.isOpen = !state.isOpen
  },

  open() {
    state.isOpen = true
  },

  close() {
    state.isOpen = false
  },

  addItem(dish) {
    const existingItem = state.items.find(
      (item) => item.id === dish.id || item.title === dish.title,
    )
    if (existingItem) {
      existingItem.quantity++
    } else {
      state.items.push({
        ...dish,
        quantity: 1,
      })
    }
    this.open() // Automatically open drawer when item is added
  },

  removeItem(dishId) {
    const index = state.items.findIndex((item) => item.id === dishId)
    if (index !== -1) {
      state.items.splice(index, 1)
    }
  },

  updateQuantity(dishId, quantity) {
    const item = state.items.find((item) => item.id === dishId)
    if (item) {
      item.quantity = Math.max(1, quantity)
    }
  },

  clear() {
    state.items = []
  },
}

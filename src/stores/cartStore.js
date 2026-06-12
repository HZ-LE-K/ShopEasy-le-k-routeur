import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {

  state: () => ({
    cartItems: JSON.parse(
      localStorage.getItem('cart')
    ) || []
  }),

  getters: {

    cartCount: (state) => {
      return state.cartItems.reduce(
        (total, item) => total + item.quantity,
        0
      )
    },

    cartTotal: (state) => {
      return state.cartItems.reduce(
        (total, item) =>
          total + item.price * item.quantity,
        0
      )
    }

  },

  actions: {

    saveCart() {
      localStorage.setItem(
        'cart',
        JSON.stringify(this.cartItems)
      )
    },

    addToCart(product) {

      const existingProduct =
        this.cartItems.find(
          item => item.id === product.id
        )

      if (existingProduct) {

        existingProduct.quantity++

      } else {

        this.cartItems.push({
          ...product,
          quantity: 1
        })

      }

      this.saveCart()
    },

    increaseQuantity(id) {

     const product = this.cartItems.find(
     item => item.id === id
     )

     if (product) {
     product.quantity++
     this.saveCart()
      }

    },

decreaseQuantity(id) {

  const product = this.cartItems.find(
    item => item.id === id
  )

  if (product) {

    if (product.quantity > 1) {

      product.quantity--

    } else {

      this.removeFromCart(id)

    }

    this.saveCart()
  }

},


    removeFromCart(id) {

      this.cartItems =
        this.cartItems.filter(
          item => item.id !== id
        )

      this.saveCart()
    },

    clearCart() {

      this.cartItems = []

      this.saveCart()
    }

  }

})
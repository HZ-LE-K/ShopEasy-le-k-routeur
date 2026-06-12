<script setup>
import CartItem from '../components/CartItem.vue'
import CartSummary from '../components/CartSummary.vue'

import '../assets/css/cart.css'

import { useCartStore } from '../stores/cartStore'

const cartStore = useCartStore()

const removeItem = (id) => {
  cartStore.removeFromCart(id)
}

const increaseQuantity = (id) => {
  cartStore.increaseQuantity(id)
}

const decreaseQuantity = (id) => {
  cartStore.decreaseQuantity(id)
}

const clearCart = () => {

  const confirmation = confirm(
    'Voulez-vous vider le panier ?'
  )

  if (confirmation) {
    cartStore.clearCart()
  }
}
</script>

<template>

<div>

  <h1 class="section-title mb-4">
    Mon Panier
  </h1>

  <div
    v-if="cartStore.cartItems.length === 0"
    class="alert alert-warning"
  >
    Votre panier est vide.
  </div>

  <div v-else>

    <div class="row">

      <div class="col-lg-8">

        <CartItem
          v-for="item in cartStore.cartItems"
          :key="item.id"
          :item="item"
          @remove-item="removeItem"
          @increase-quantity="increaseQuantity"
          @decrease-quantity="decreaseQuantity"
        />

      </div>

      <div class="col-lg-4">

        <CartSummary
          :count="cartStore.cartCount"
          :total="cartStore.cartTotal"
          @clear-cart="clearCart"
        />

      </div>

    </div>

  </div>

</div>

</template>
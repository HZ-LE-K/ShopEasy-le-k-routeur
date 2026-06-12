<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

import ProductDetails from '../components/ProductDetails.vue'
import { useCartStore } from '../stores/cartStore'

import '../assets/css/product-details.css'

const route = useRoute()
const cartStore = useCartStore()

const product = ref(null)
const loading = ref(true)

const fetchProduct = async () => {

  try {

    const response = await fetch(
      `https://dummyjson.com/products/${route.params.id}`
    )

    const data = await response.json()

    product.value = data

  } catch (error) {

    console.error(error)

  } finally {

    loading.value = false

  }
}

const addToCart = (product) => {

  cartStore.addToCart(product)

  alert(`${product.title} ajouté au panier`)
}

onMounted(() => {
  fetchProduct()
})
</script>

<template>

<div>

  <div
    v-if="loading"
    class="text-center"
  >
    Chargement...
  </div>

  <ProductDetails
    v-else
    :product="product"
    @add-to-cart="addToCart"
  />

</div>

</template>
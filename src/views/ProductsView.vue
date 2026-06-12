<script setup>
import {
  ref,
  computed,
  onMounted,
  watch
} from 'vue'

import ProductCard from '../components/ProductCard.vue'
import { useCartStore } from '../stores/cartStore'
import '../assets/css/products.css'

const cartStore = useCartStore()

const products = ref([])
const loading = ref(false)
const error = ref('')

const search = ref('')
const selectedCategory = ref('all')

const currentPage = ref(1)
const itemsPerPage = 12

const loadProducts = async () => {

  loading.value = true
  error.value = ''

  try {

    const response = await fetch(
      'https://dummyjson.com/products?limit=0'
    )

    const data = await response.json()

    products.value = data.products

  } catch (err) {

    error.value = 'Erreur lors du chargement'

  } finally {

    loading.value = false

  }
}

const categories = computed(() => {

  return [
    ...new Set(
      products.value.map(
        product => product.category
      )
    )
  ]
})

const filteredProducts = computed(() => {

  return products.value.filter(product => {

    const searchText =
      search.value.toLowerCase().trim()

    const matchSearch =
      searchText === '' ||
      product.title
        .toLowerCase()
        .startsWith(searchText)

    const matchCategory =
      selectedCategory.value === 'all' ||
      product.category === selectedCategory.value

    return matchSearch && matchCategory
  })
})

const totalPages = computed(() => {

  return Math.ceil(
    filteredProducts.value.length /
    itemsPerPage
  )
})

const paginatedProducts = computed(() => {

  const start =
    (currentPage.value - 1) *
    itemsPerPage

  const end =
    start + itemsPerPage

  return filteredProducts.value.slice(
    start,
    end
  )
})

const changePage = (page) => {
  currentPage.value = page
}

watch(search, () => {
  currentPage.value = 1
})

watch(selectedCategory, () => {
  currentPage.value = 1
})

const addToCart = (product) => {

  cartStore.addToCart(product)

  alert(`${product.title} ajouté au panier`)
}

onMounted(() => {
  loadProducts()
})
</script>

<template>

<div>

  <h1 class="section-title mb-4">
    <i class="bi bi-bag-fill"></i>
    Nos Produits
  </h1>

  <div class="row g-3 mb-4">

    <div class="col-md-6">

      <input
        v-model="search"
        type="text"
        class="form-control"
        placeholder="Rechercher..."
      >

    </div>

    <div class="col-md-6">

      <select
        v-model="selectedCategory"
        class="form-select"
      >

        <option value="all">
          Toutes les catégories
        </option>

        <option
          v-for="category in categories"
          :key="category"
          :value="category"
        >
          {{ category }}
        </option>

      </select>

    </div>

  </div>

  <div
    v-if="loading"
    class="alert alert-info"
  >
    Chargement...
  </div>

  <div
    v-if="error"
    class="alert alert-danger"
  >
    {{ error }}
  </div>

  <div class="row">

    <div
      v-for="product in paginatedProducts"
      :key="product.id"
      class="col-md-3 mb-4"
    >

      <ProductCard
        :product="product"
        @add-to-cart="addToCart"
      />

    </div>

  </div>

  <div
    class="d-flex justify-content-center flex-wrap mt-4"
    v-if="totalPages > 1"
  >

    <button
      v-for="page in totalPages"
      :key="page"
      class="btn mx-1 mb-2"
      :class="
        currentPage === page
          ? 'btn-shop'
          : 'btn-outline-secondary'
      "
      @click="changePage(page)"
    >
      {{ page }}
    </button>

  </div>

</div>

</template>



<!-- <script setup>
import { ref, onMounted } from 'vue'

import ProductCard from '../components/ProductCard.vue'
import { useCartStore } from '../stores/cartStore'

const cartStore = useCartStore()

const products = ref([])
const loading = ref(true)

const fetchProducts = async () => {
  try {
    const response = await fetch(
      'https://dummyjson.com/products'
    )

    const data = await response.json()

    products.value = data.products
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
  fetchProducts()
})
</script>


<template>
  <div>

    <h1 class="section-title mb-4">
      Nos Produits
    </h1>

    <div
      v-if="loading"
      class="text-center"
    >
      Chargement...
    </div>

    <div
      v-else
      class="row"
    >

      <div
        v-for="product in products"
        :key="product.id"
        class="col-md-4 mb-4"
      >

        <ProductCard
          :product="product"
          @add-to-cart="addToCart"
        />

      </div>

    </div>

  </div>
</template> -->
<template>
  <nav class="navbar navbar-expand-lg navbar-dark custom-navbar">

    <div class="container">

      <RouterLink
        class="navbar-brand"
        to="/"
      >
        ShopEasy LE-K
      </RouterLink>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div
        class="collapse navbar-collapse"
        id="navbarNav"
      >

        <ul class="navbar-nav ms-auto">

          <li class="nav-item">
            <RouterLink class="nav-link" to="/">
              Accueil
            </RouterLink>
          </li>

          <li class="nav-item">
            <RouterLink class="nav-link" to="/products">
              Produits
            </RouterLink>
          </li>

          <li class="nav-item">
            <RouterLink class="nav-link" to="/cart">
              Panier ({{ cartStore.cartCount }})
            </RouterLink>
          </li>

          <li class="nav-item">
            <RouterLink class="nav-link" to="/contact">
              Contact
            </RouterLink>
          </li>

        </ul>

      </div>

    </div>

  </nav>
</template>

<script setup>
import { useCartStore } from '../stores/cartStore'

const cartStore = useCartStore()
</script>

<style scoped>
.custom-navbar {
  background-color: #197091;
}

.navbar-brand {
  font-weight: bold;
}

.nav-link {
  color: white !important;
}

.nav-link:hover {
  color: #81b0e0 !important;
}
</style>
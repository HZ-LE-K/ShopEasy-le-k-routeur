<template>
  <div v-if="product" class="card shadow p-4">

    <div class="row">

      <div class="col-md-5 text-center">
        <img
          :src="product.thumbnail"
          :alt="product.title"
          class="img-fluid rounded"
        >
      </div>

      <div class="col-md-7">

        <h2 class="mb-3">
          {{ product.title }}
        </h2>

        <p>
          {{ product.description }}
        </p>

        <p>
          <strong>Catégorie :</strong>
          {{ product.category }}
        </p>

        <p>
          <strong>Marque :</strong>
          {{ product.brand }}
        </p>

        <h3 class="text-success">
          {{ product.price }} $
        </h3>

        <button
          class="btn btn-shop me-2"
          @click="$emit('add-to-cart', product)"
        >
          Ajouter au panier
        </button>

        <RouterLink
          to="/products"
          class="btn btn-secondary"
        >
          Retour
        </RouterLink>

      </div>

    </div>

  </div>
</template>

<script setup>
defineProps({
  product: Object
})

defineEmits([
  'add-to-cart'
])
</script>
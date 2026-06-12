<template>
  <div class="card custom-card h-100">

    <img
      :src="product.thumbnail"
      :alt="product.title"
      class="card-img-top product-image"
    >

    <div class="card-body d-flex flex-column">

      <h5 class="card-title">
        {{ product.title }}
      </h5>

      <p class="fw-bold text-success">
        {{ product.price }} $
      </p>

      <div class="mt-auto">

        <RouterLink
          :to="`/products/${product.id}`"
          class="btn btn-shop me-2"
        >
          Voir détails
        </RouterLink>

        <button
          class="btn btn-outline-secondary"
          @click="addProduct"
        >
          Ajouter
        </button>

      </div>

    </div>

  </div>
</template>

<script setup>
const props = defineProps({
  product: Object
})

const emit = defineEmits([
  'add-to-cart'
])

const addProduct = () => {
  emit('add-to-cart', props.product)
}
</script>



<style scoped>
.product-image {
  height: 220px;
  object-fit: cover;
}
.card {
  overflow: hidden;
}

.product-image {
  transition: .4s;
}

.card:hover .product-image {
  transform: scale(1.08);
}
</style>
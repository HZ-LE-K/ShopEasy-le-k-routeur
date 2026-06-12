<template>

<div class="card p-4 shadow">

  <h3 class="mb-3">
    Résumé du panier
  </h3>

  <p>
    Articles :
    <strong>{{ count }}</strong>
  </p>

  <p>
    Total :
    <strong>{{ total.toFixed(2) }} $</strong>
  </p>

  <button
    class="btn btn-danger"
    @click="$emit('clear-cart')"
  >
    Vider le panier
  </button>

</div>

</template>

<script setup>
defineProps({
  count: Number,
  total: Number
})

defineEmits([
  'clear-cart'
])
</script>
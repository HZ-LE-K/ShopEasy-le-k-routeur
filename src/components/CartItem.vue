<template>
  <div class="card mb-3 p-3">

    <div class="row align-items-center">

      <div class="col-md-2">
        <img
          :src="item.thumbnail"
          :alt="item.title"
          class="img-fluid rounded"
        >
      </div>

      <div class="col-md-4">
        <h5>{{ item.title }}</h5>
      </div>

      <div class="col-md-2">
        {{ item.price }} $
      </div>


        <div class="col-md-3">

        <div class="d-flex align-items-center justify-content-center">

        <button class="btn btn-outline-danger btn-sm" @click="$emit('decrease-quantity', item.id)" >
         -
        </button>

        <span class="mx-3 fw-bold">
        {{ item.quantity }}
        </span>

        <button  class="btn btn-outline-success btn-sm"  @click="$emit('increase-quantity', item.id)" > 

         +
        </button>

        </div>

        </div>



      <div class="col-md-2">

        <button
          class="btn btn-danger"
          @click="$emit('remove-item', item.id)"
        >
          Supprimer
        </button>

      </div>

    </div>

  </div>
</template>

<script setup>
defineProps({
  item: Object
})

defineEmits([
  'remove-item',
  'increase-quantity',
  'decrease-quantity'
])
</script>
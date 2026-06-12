<template>
  <div class="card custom-card h-100">
    <div class="card-body text-center">

      <h4 class="card-title card-title-custom">
        {{ title }}
      </h4>

      <p class="card-text">
        {{ description }}
      </p>

    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  description: String
})
</script>

<style scoped>
.card-title-custom {
  color: #197091;
  font-weight: 700;
}
</style>
<script setup>
import NavbarComponent from './components/NavbarComponent.vue'
import FooterComponent from './components/FooterComponent.vue'
</script>

<template>
  <div>
    <NavbarComponent />

    <main class="container my-4">
      <router-view />
    </main>

    <FooterComponent />
  </div>
 
</template>

<script setup>
import ContactForm from '../components/ContactForm.vue'
import '../assets/css/contact.css'
</script>

<template>

<div class="contact-container">

  <h1 class="section-title text-center mb-4">
    Contactez-nous
  </h1>

  <p class="text-center mb-5">
    Une question ? Une suggestion ?
    N'hésitez pas à nous écrire.
  </p>

  <div class="row justify-content-center">

    <div class="col-lg-8">

      <ContactForm />

    </div>

  </div>

</div>

</template>
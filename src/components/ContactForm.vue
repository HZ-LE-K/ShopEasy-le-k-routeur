<script setup>
import { ref } from 'vue'

const name = ref('')
const email = ref('')
const message = ref('')

const successMessage = ref('')
const errors = ref({})

const validateForm = () => {

  errors.value = {}

  if (!name.value.trim()) {
    errors.value.name = 'Le nom est obligatoire'
  }

  if (!email.value.trim()) {

    errors.value.email = 'L’email est obligatoire'

  } else if (
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)
  ) {

    errors.value.email = 'Email invalide'
  }

  if (!message.value.trim()) {
    errors.value.message = 'Le message est obligatoire'
  }

  return Object.keys(errors.value).length === 0
}

const submitForm = () => {

  if (!validateForm()) return

  successMessage.value =
    'Votre message a été envoyé avec succès !'

  name.value = ''
  email.value = ''
  message.value = ''
}
</script>

<template>

<form
  class="contact-form"
  @submit.prevent="submitForm"
>

  <div class="mb-3">

    <label class="form-label">
      Nom
    </label>

    <input
      type="text"
      class="form-control"
      v-model="name"
    >

    <small
      class="text-danger"
      v-if="errors.name"
    >
      {{ errors.name }}
    </small>

  </div>

  <div class="mb-3">

    <label class="form-label">
      Email
    </label>

    <input
      type="email"
      class="form-control"
      v-model="email"
    >

    <small
      class="text-danger"
      v-if="errors.email"
    >
      {{ errors.email }}
    </small>

  </div>

  <div class="mb-3">

    <label class="form-label">
      Message
    </label>

    <textarea
      rows="5"
      class="form-control"
      v-model="message"
    ></textarea>

    <small
      class="text-danger"
      v-if="errors.message"
    >
      {{ errors.message }}
    </small>

  </div>

  <button
    type="submit"
    class="btn btn-shop"
  >
    Envoyer
  </button>

  <div
    class="alert alert-success mt-3"
    v-if="successMessage"
  >
    {{ successMessage }}
  </div>

</form>

</template>
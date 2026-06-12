<template>
  <div>
    <h1>Bienvenue sur ShopEasy LE-K </h1>

    <HeroComponent />

    <section class="mt-5">

      <h2 class="text-center mb-4">
        Pourquoi choisir ShopEasy LE-K ?
      </h2>

      <div class="row">

        <div
          class="col-md-4 mb-3"
          v-for="(advantage, index) in advantages"
          :key="index"
        >
          <AdvantageCard
            :title="advantage.title"
            :description="advantage.description"
          />
        </div>

      </div>

    </section>

    
  </div>
</template>

<script setup>
import '../assets/css/home.css'

import HeroComponent from '../components/HeroComponent.vue'
import AdvantageCard from '../components/AdvantageCard.vue'

const advantages = [
  {
    title: 'Livraison rapide',
    description: 'Recevez vos produits en quelques jours.'
  },
  {
    title: 'Paiement sécurisé',
    description: 'Vos transactions sont totalement protégées.'
  },
  {
    title: 'Support 24/7',
    description: 'Une équipe disponible à tout moment.'
  }
]

</script>


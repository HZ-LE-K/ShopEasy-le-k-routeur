<template>
  <div class="hero-section text-center">
    <h1 class="display-4">Bienvenue sur ShopEasy LE-K</h1>

    <p class="lead">
      Ma boutique en ligne simple, rapide et moderne.
    </p>

    <RouterLink
      to="/products"
      class="btn btn-light btn-lg mt-3"
    >
      Voir les produits
    </RouterLink>
  </div>
</template>

<style scoped>
.hero-section {
  background: linear-gradient(
    135deg,
    #197091,
    #81b0e0
  );
  color: white;
  padding: 80px 30px;
  border-radius: 20px;
}
</style>
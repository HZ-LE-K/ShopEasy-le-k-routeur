import { createRouter, createWebHistory } from "vue-router";

import HomeView from "../views/HomeView.vue";
import ProductsView from "../views/ProductsView.vue";
import ProductDetailsView from "../views/ProductDetailsView.vue";
import CartView from "../views/CartView.vue";
import ContactView from "../views/ContactView.vue";
import NotFoundView from '../views/NotFoundView.vue'

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/products",
    name: "products",
    component: ProductsView,
  },
  {
    path: "/products/:id",
    name: "product-details",
    component: ProductDetailsView,
  },
  {
    path: "/cart",
    name: "cart",
    component: CartView,
  },
  {
    path: "/contact",
    name: "contact",
    component: ContactView,
  },
  {
  path: '/:pathMatch(.*)*',
  name: 'not-found',
  component: NotFoundView
 },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});



export default router;
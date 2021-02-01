import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/pedido",
    name: "Pedido",
    component: () => import("@/views/Pedido.vue"),
  },
  {
    path: "/productos",
    name: "Producto",
    component: () => import("@/views/Productos.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

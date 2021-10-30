import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

import Login                from "../views/Login.vue";
import NuevaSimulacion      from "../views/NuevaSimulacion.vue";
import ListadoCompraDivisas from "../views/ListadoCompraDivisas.vue";
import Error404             from "../views/Error404.vue";
import DashBoardCompras     from "../views/DashboardCompras.vue";



Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "*",
    name: "Error404",
    component: Error404,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/nuevasimulacion",
    name: "NuevaSimulacion",
    component: NuevaSimulacion,
  },
  {
    path: "/listadocompradivisas",
    name: "ListadoCompraDivisas",
    component: ListadoCompraDivisas,
  },
  {
    path: "/dashboardcompras",
    name: "DashBoardCompras",
    component: DashBoardCompras,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

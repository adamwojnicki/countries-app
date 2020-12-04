import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/Home.vue")
  },
  {
    path: "/country/:name",
    name: "Country",
    component: () => import("@/views/Country.vue")
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;

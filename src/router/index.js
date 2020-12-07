import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/country/:name",
    name: "Country",
    component: () => import("@/views/Country.vue")
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;

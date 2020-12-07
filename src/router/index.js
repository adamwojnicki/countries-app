import { createRouter, createWebHistory } from "vue-router";
const Home = () => import("@/views/Home");
const Country = () => import("@/views/Country");

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/country/:name",
    name: "Country",
    component: Country
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;

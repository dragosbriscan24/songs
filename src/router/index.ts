import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import SongsView from "@/views/SongsView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/songs",
      name: "songs",
      component: SongsView,
    },
  ],
});

export default router;

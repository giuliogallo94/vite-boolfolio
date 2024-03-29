import { createRouter, createWebHistory } from "vue-router";

import AppHome from "../pages/AppHome.vue";
import AppProjects from "../pages/AppProjects.vue";
import AppDetailsProject from "../pages/AppDetailsProject.vue";
import NotFound from "../pages/NotFound.vue";
import ContactPage from "../pages/ContactPage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: AppHome,
    },
    {
      path: "/projects",
      name: "projects",
      component: AppProjects,
    },
    {
      path: "/projects/:slug",
      name: "details-project",
      component: AppDetailsProject,
    },
    {
      path: "/contact",
      name: "contact",
      component: ContactPage,
    },
    {
      path: "/not-found",
      name: "not-found",
      component: NotFound,
    },
  ],
});

export { router };

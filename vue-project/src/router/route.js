import { createRouter, createWebHistory } from "vue-router";
import store from "../store/store.js";
import Login from "../views/Login.vue";
import Register from "../views/Registration.vue";
import Forgot_password from "../views/Forgot_password.vue";
import Home from "../views/Home.vue";
import Footer from "../components/Footer.vue";
import Dashboard from "../views/Dashboard.vue";
import Index from "../views/Index.vue";
import Publish from "../views/Publish.vue";
import Details from "../views/Details.vue";
import email_check from "../views/EmailCheck.vue";

const routes = [
  {
    path: "/login",
    name: "login",
    component: Login,
    meta: {
      requiresAuth: false,
    },
  },
  {
    path: "/Registration",
    name: "register",
    component: Register,
    meta: {
      requiresAuth: false,
    },
  },
  {
    path: "/email_check",
    name: "email_check",
    component: email_check,
    meta: {
      requiresAuth: false,
    },
  },
  {
    path: "/Forgot_password",
    name: "forgot_password",
    component: Forgot_password,
    meta: {
      requiresAuth: false,
    },
  },
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      requiresAuth: false,
    },
  },
  {
    path: "/Dashboard",
    name: "Dashboard",
    component: Dashboard,
    meta: {
      requiresAuth: true,
    },
  },

  {
    path: "/index",
    name: "index",
    component: Index,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/publish",
    name: "Publish",
    component: Publish,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/Details",
    name: "Details",
    component: Details,
    meta: {
      requiresAuth: true,
    },
  },
];
const router = createRouter({ history: createWebHistory(), routes });
router.beforeEach((to, from, next) => {
  const token = store.state.token;
  if (to.meta.requiresAuth && !token) {
    next("/login");
  } else if (!to.meta.requiresAuth && token) {
    next("/index");
  } else {
    next();
  }
});

export default router;

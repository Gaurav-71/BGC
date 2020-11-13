import Vue from "vue";
import VueRouter from "vue-router";

//user
import Landing from "../views/User/Landing.vue";
import Corona from "../views/User/Corona.vue";

//admin
import Home from "../views/Admin/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Landing",
    component: Landing,
  },
  {
    path: "/covid-19/testing",
    name: "Corona",
    component: Corona,
  },
  /*{
    path: "/admin",
    name: "Home",
    component: Home,
    meta: {
      //requiresAuth: true,
    },
    children: [{
      path: "/"
    }],
  },*/
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  },
});

export default router;

import Vue from "vue";
import VueRouter from "vue-router";

import store from "../store/index.js";

//user
import Landing from "../views/User/Landing.vue";
import Corona from "../views/User/Corona.vue";
import Messages from "../views/User/Messages.vue";
import Services from "../views/User/Services.vue";
import DnaRna from "../views/User/DnaRna.vue";
import Bioinformatics from "../views/User/Bioinformatics.vue";
import UserAnnouncement from "../views/User/Announcements.vue";
import UserTraining from "../views/User/Training.vue";
import UserResource from "../views/User/Resources.vue";
import UserWorkshop from "../views/User/Workshop.vue";
import UserInternship from "../views/User/Internships.vue";

//admin
import Login from "../views/Admin/Login.vue";
import Home from "../views/Admin/Home.vue";
import Dashboard from "../views/Admin/Dashboard.vue";
import AdminMessages from "../views/Admin/Messages.vue";
import Settings from "../views/Admin/Settings.vue";

//admin > create
import Announcement from "../views/Admin/Create/Announcement.vue";
import Internship from "../views/Admin/Create/Internship.vue";
import Resource from "../views/Admin/Create/Resource.vue";
import Training from "../views/Admin/Create/Training.vue";
import Workshop from "../views/Admin/Create/Workshop.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Landing",
    component: Landing,
    meta: {
      title: "BGC | Home",
    },
  },
  {
    path: "/covid-19/testing",
    name: "Corona",
    component: Corona,
    meta: {
      title: "BGC | COVID-19 Testing",
    },
  },
  {
    path: "/contact-us",
    name: "Messages",
    component: Messages,
    meta: {
      title: "BGC | Contact Us",
    },
  },
  {
    path: "/admin/login",
    name: "Login",
    component: Login,
    meta: {
      title: "BGC | Admin Login",
    },
  },
  {
    path: "/services/about",
    name: "Service",
    component: Services,
    meta: {
      title: "BGC | Services",
    },
  },
  {
    path: "/services/DNA-RNA-Sequencing",
    name: "DnaRna",
    component: DnaRna,
    meta: {
      title: "BGC | DNA-RNA Sequencing",
    },
  },
  {
    path: "/services/Bioinformatics-analyisis",
    name: "Bioinformatics",
    component: Bioinformatics,
    meta: {
      title: "BGC | Bioinformatics Analysis",
    },
  },
  {
    path: "/announcements",
    name: "UserAnnouncement",
    component: UserAnnouncement,
    meta: {
      title: "BGC | Announcements",
    },
  },
  {
    path: "/internships",
    name: "UserInternship",
    component: UserInternship,
    meta: {
      title: "BGC | Internships",
    },
  },
  {
    path: "/trainings",
    name: "UserTraining",
    component: UserTraining,
    meta: {
      title: "BGC | Trainings",
    },
  },
  {
    path: "/workshops",
    name: "UserWorkshop",
    component: UserWorkshop,
    meta: {
      title: "BGC | Workshops",
    },
  },
  {
    path: "/resources",
    name: "UserResource",
    component: UserResource,
    meta: {
      title: "BGC | Resources",
    },
  },
  {
    path: "/admin",
    component: Home,
    meta: {
      requiresAuth: true,
    },
    children: [
      {
        path: "/",
        name: "Dashboard",
        component: Dashboard,
        meta: {
          title: "Admin | Dashboard",
          requiresAuth: true,
        },
      },
      {
        path: "/admin/messages",
        name: "AdminMessages",
        component: AdminMessages,
        meta: {
          title: "Admin | Messages",
          requiresAuth: true,
        },
      },
      {
        path: "/admin/settings",
        name: "Settings",
        component: Settings,
        meta: {
          title: "Admin | Dashboard",
          requiresAuth: true,
        },
      },
      {
        path: "/admin/create/training",
        name: "Training",
        component: Training,
        meta: {
          title: "Admin | Add Training",
          requiresAuth: true,
        },
      },
      {
        path: "/admin/create/internship",
        name: "Internship",
        component: Internship,
        meta: {
          title: "Admin | Add Internship",
          requiresAuth: true,
        },
      },
      {
        path: "/admin/create/workshop",
        name: "Workshop",
        component: Workshop,
        meta: {
          title: "Admin | Add Workshop",
          requiresAuth: true,
        },
      },
      {
        path: "/admin/create/announcement",
        name: "Announcement",
        component: Announcement,
        meta: {
          title: "Admin | Add Announcement",
          requiresAuth: true,
        },
      },
      {
        path: "/admin/create/resources",
        name: "Resource",
        component: Resource,
        meta: {
          title: "Admin | Add Resource",
          requiresAuth: true,
        },
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  },
});

router.beforeEach((to, from, next) => {
  let isloggedIn = false;
  if (store.state.isLoggedIn == "true") {
    isloggedIn = true;
  } else if (store.state.isLoggedIn == "false") {
    isloggedIn = false;
  }
  const loggedIn = isloggedIn;
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
  document.title = to.meta.title;
  if (!loggedIn && requiresAuth) {
    next("/admin/login");
  } else {
    next();
  }
});

export default router;

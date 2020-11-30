import Vue from "vue";
import VueRouter from "vue-router";

//user
import Landing from "../views/User/Landing.vue";
import Corona from "../views/User/Corona.vue";
import Messages from "../views/User/Messages.vue";
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
  },
  {
    path: "/covid-19/testing",
    name: "Corona",
    component: Corona,
  },
  {
    path: "/contact-us",
    name: "Messages",
    component: Messages,
  },
  {
    path: "/admin/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/announcements",
    name: "UserAnnouncement",
    component: UserAnnouncement,
  },
  {
    path: "/internships",
    name: "UserInternship",
    component: UserInternship,
  },
  {
    path: "/training",
    name: "UserTraining",
    component: UserTraining,
  },
  {
    path: "/workshops",
    name: "UserWorkshop",
    component: UserWorkshop,
  },
  {
    path: "/resources",
    name: "UserResource",
    component: UserResource,
  },
  {
    path: "/admin",
    name: "Home",
    component: Home,
    children: [
      {
        path: "/",
        name: "Dashboard",
        component: Dashboard,
      },
      {
        path: "/admin/messages",
        name: "AdminMessages",
        component: AdminMessages,
      },
      {
        path: "/admin/settings",
        name: "Settings",
        component: Settings,
      },
      {
        path: "/admin/create/training",
        name: "Training",
        component: Training,
      },
      {
        path: "/admin/create/internship",
        name: "Internship",
        component: Internship,
      },
      {
        path: "/admin/create/workshop",
        name: "Workshop",
        component: Workshop,
      },
      {
        path: "/admin/create/announcement",
        name: "Announcement",
        component: Announcement,
      },
      {
        path: "/admin/create/resources",
        name: "Resource",
        component: Resource,
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

export default router;

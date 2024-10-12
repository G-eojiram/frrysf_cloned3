import { createRouter, createWebHistory } from "vue-router";
import { createApp } from "vue";

// import regis from '../views/shelter_registration.vue'
import landingpage from "../layouts/index.vue";
import landingcontent from "../views/index.vue";

// layouts
import adminDashboard from "../layouts/Admin/dashboard.vue";
import shelterDashboard from "../layouts/Client/Shelter/dashboard.vue";

// Admin Views
import dashboard from "../views/Admin/dashboard.vue";
import request_preview from "@/views/Admin/registration_requestpreview.vue";
import admin_registration from "../views/Admin/manage_registration.vue";
import details from "../views/Admin/manage_animaldetails.vue";
import mockup from "../views/mockup.vue";

// Shelter Views
import shelterdashboardContent from "../views/Shelter/dashboard.vue";
import shelterprofile from "../views/Shelter/myshelter.vue";
import shelteranimalprofile from "../views/Shelter/animalprofile.vue";
import rescueoperation from "../views/Shelter/rescueoperation.vue";

// my shelter feed, view post, edit profile
import shelterfeed from "../components/shelter_NewsfeedCard.vue";
import shelterviewpost from "../components/shelter_ViewPostCard.vue";
import editshelterprofile from "../views/Shelter/myshelter_EditProfile.vue";

// animal profile
import createanimalprofile from "../views/Shelter/animalprofile_CreateNewProfile.vue";
import viewanimalprofile from "../views/Shelter/animalprofile_ViewProfile.vue";
import editanimalprofile from "../views/Shelter/animalprofile_EditProfile.vue";

import viewreportdetails from "@/components/Client/Shelter/shelter_RescueOp_ViewReport.vue";

//jene
import login from "../views/login.vue";
import buddy_registration from "../views/registration.vue";
import shelter_registration from "@/views/shelter_registration.vue";
import map from "../views/mapview.vue";
import confirm_email from "../views/confirm_Email.vue";
import location from "@/components/location_prompt.vue";
//import forgot_password from "../views/forgotpassword.vue"

// import map from "../views/shelter/pin_Location.vue"
import test from "@/components/pin_MapModal.vue";


// from dolends idk ackkkkkkk
import buddyDashboard from '../layouts/Client/Buddy/dashboard.vue';
import home from '../views/Buddy/home.vue';
import explore from '../views/Buddy/Explore.vue';
import messages from '../views/Buddy/Message.vue';
import loginpage from '../views/Buddy/login.vue';
import Regispage from '../views/Buddy/registration.vue';
import upload from '../views/Buddy/upload.vue';
import loginshel from '../views/Buddy/login_shelter.vue';
import Profile from '../views/Buddy/Profile.vue';
import petProfile from '../views/Buddy/Petprofile.vue';
import Timeline from '../views/Buddy/Timeline.vue';

const routes = [
  //jene loginhelp huehfjkgjgsad
  {
    path: "/login",
    name: "login",
    component: login,
  },
  {
    path: "/buddy-registration",
    name: "buddy_registration",
    component: buddy_registration,
  },
  {
    path: "/shelter-registration",
    name: "shelter_registration",
    component: shelter_registration,
  },
  {
    path: "/confirming-email",
    name: "confirm_Email",
    component: confirm_email,
  },
  {
    path: "/map",
    name: "map",
    component: map,
  },
  // {
  //   path: '/forgot-password',
  //   name: 'forgot_password',
  //   component: forgot_password
  // },
  //
  {
    path: "/Furrysafe_admin",
    name: "adminDashboard",
    component: adminDashboard,
    redirect: "/dashboard",
    children: [
      {
        // dashboard
        path: "/dashboard",
        name: "dashboard",
        component: dashboard,
      },
      {
        // registration
        path: "/registration",
        name: "registration",
        component: admin_registration,
      },
      {
        // registration details
        path: "/request_preview/:id",
        name: "request_preview",
        component: request_preview,
      },
      {
        //docu details
        path: "/details",
        name: "details",
        component: details,
      },
      {
        //add admin
        path: "/mockup",
        name: "mockup",
        component: mockup,
      },
    ],
  },
  {
    path: "/",
    name: "landingpage",
    component: landingpage,
    redirect: "/landingcontent",
    children: [
      {
        // dashboard
        path: "/landingcontent",
        name: "landingcontent",
        component: landingcontent,
      },
    ],
  },
  {
    // modal
    path: "/modal",
    name: "modal",
    component: test, // import test from '@/components/pin_MapModal.vue'
    props: (route) => ({ open: route.query.open }),
    beforeRouteLeave(to, from, next) {
      console.log("beforeRouteLeave called");
      console.log("from.query.open:", from.query.open);
      if (!from.query.open) {
        console.log("Navigating to shelterDashboard");
        next({ name: "shelterDashboard" });
      } else {
        console.log("Not navigating");
        next();
      }
    },
  },
  {
    // LOCATION RETRIEVAL TESTING
    path: "/location",
    name: "location",
    component: location, // import test from '@/components/pin_MapModal.vue'
  },
  {
    path: "/FurrySafe_shelter",
    name: "shelterDashboard",
    component: shelterDashboard,
    redirect: "/shelterdashboard", // Redirect to the modal route by default
    meta: { requiresAuth: true, userType: "shelter" }, //testing
    children: [
      {
        // dashboard
        path: "/shelterdashboard",
        name: "dashboardContent",
        component: shelterdashboardContent,
      },
      {
        // my shelter view
        path: "/myshelter",
        name: "shelterprofile",
        component: shelterprofile,
        redirect: "/myshelter_feed", // shelter_NewsfeedCard.vue
        children: [
          {
            // a component shelter_NewsfeedCard.vue
            path: "/myshelter_feed",
            name: "shelterfeed",
            component: shelterfeed,
          },
          {
            // a component shelter_ViewPostCard.vue
            path: "/myshelter_viewpost",
            name: "shelterviewpost",
            component: shelterviewpost,
          },
        ],
      },
      {
        // my shelter - Edit Profile
        path: "/edit_shelterprofile",
        name: "editshelterprofile",
        component: editshelterprofile,
      },
      {
        // animal profile
        path: "/animalprofile",
        name: "animalprofile",
        component: shelteranimalprofile,
      },
      {
        // animal profile - create animal profile
        path: "/create_animalprofileform",
        name: "createanimalprofile",
        component: createanimalprofile,
      },
      {
        // animal profile - view animal profile
        path: "/view_animalprofileform/:petid",
        name: "viewanimalprofile",
        component: viewanimalprofile,
        props: true,
      },
      {
        // animal profile - edit animal profile
        path: "/edit_animalprofileform/:petid",
        name: "editanimalprofile",
        component: editanimalprofile,
        props: true,
      },
      {
        // rescue operation
        path: "/rescueoperation",
        name: "rescueoperation",
        component: rescueoperation,
      },
      {
        // rescue operation - view report details
        path: "/viewreportdetails",
        name: "viewreportdetails",
        component: viewreportdetails,
      },
    ],
  },
  // dolends ui
  {
    name: "Dashboard",
    path: "/FurrySafe_buddy",
    component: buddyDashboard,
    children: [
      {
        name: "Home",
        path: "home",
        component: home,
      },
      {
        name: "Explore",
        path: "explore",
        component: explore,
      },
      {
        name: "Messages",
        path: "messages",
        component: messages,
      },
    ],
  },
  {
    name: "loginpage",
    path: "/loginpage",
    component: loginpage,
  },
  {
    name: "Regispage",
    path: "/Regispage",
    component: Regispage,
  },
  {
    name: "upload",
    path: "/upload",
    component: upload,
  },
  {
    name: "loginshel",
    path: "/loginshel",
    component: loginshel,
  },
  {
    name: "profile",
    path: "/profile",
    component: Profile,
  },
  {
    name: "timeline",
    path: "/timeline",
    component: Timeline,
  },
  {
    name: "petprofile",
    path: "/petprofile",
    component: petProfile,
  },
  // console.log('shelterDashboard component:', shelterDashboard),
  // console.log('shelterdashboardContent component:', shelterdashboardContent),
];
routes.forEach((route, index) => {
  console.log(`Route ${index}:`, route);
  if (!route.path) {
    console.error(`Route ${index} has no path!`);
  }
});

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem("access_token");
  const userType = localStorage.getItem("u_type");

  // Prevent navigating to login or landing if the user is already authenticated
  if (
    isAuthenticated &&
    (to.path === "/login" || to.path === "/landingcontent")
  ) {
    // Landing page check
    if (userType === "shelter") {
      return next("/shelterDashboard"); // Redirect shelter users to their dashboard
    } else if (userType === "buddy") {
      return next("/buddydashboard"); // Redirect buddy users to their dashboard
    } else if (userType === "admin") {
      return next("/dashboard"); // Redirect admin users to their dashboard
    }
  }

  // Check if the route requires authentication
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!isAuthenticated) {
      return next("/login"); // Redirect to login if not authenticated
    } else if (to.meta.userType && to.meta.userType !== userType) {
      console.log(`Access denied for user type: ${userType}`);
      return next("/"); // Redirect to home if user type is not allowed
    }
  }

  next(); // Proceed if no guards block the navigation
});

export default router;

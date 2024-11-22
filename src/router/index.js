import { createRouter, createWebHistory } from 'vue-router';

// Import components for the routes
import LayoutView from '../views/LayoutView.vue';
import LoginView from '../views/LoginView.vue';
import SignUpView from '../views/SignUpView.vue';
import DashboardView from '../views/DashboardView.vue';
import ProfileView from '../views/ProfileView.vue';
import SettingsView from '../views/SettingsView.vue'

const routes = [
  //{ path: '/', name: 'Home', component: Home },
  { 
    path: '/sign-up', 
    name: 'SignUpView', 
    component: SignUpView 
  },
  { 
    path: '/login', 
    name: 'LoginView', 
    component: LoginView 
  },
  { 
    path: '/', 
    component: LayoutView, 
    children: [
        {
          path: 'dash',
          component: DashboardView,
          name: 'dashboard',
        },
        {
          path: 'profile',
          component: ProfileView,
          name: 'profile',
        },
        {
          path: 'settings',
          component: SettingsView,
          name: 'settings',
        },
      ],
  },
//   { 
//     path: '/dash', 
//     name: 'DashboardView', 
//     component: DashboardView 
//   },
//   { 
//     path: '/profile', 
//     name: 'ProfileView', 
//     component: ProfileView 
//   },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

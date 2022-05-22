import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SignUp from '../components/SignUp.vue'
import Login from '../components/Login.vue'
import Add from '../views/Add.vue'
import Update from '../views/Update.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/sign-up',
      name: 'signUp',
      component: SignUp
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/add-restaruant',
      name: 'Add',
      component: Add
    },
    {
      path: '/update-restaruant/:id',
      name: 'Update',
      component: Update,
      props: true
    }
  ]
})

export default router

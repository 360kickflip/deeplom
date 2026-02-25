import { createRouter, createWebHistory } from 'vue-router'
import { isAuthenticated } from '../auth.js' // Импортируем нашу переменную
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/cars', name: 'cars', component: () => import('../views/CarsView.vue') },
    // Единая страница для Входа и Регистрации
    { path: '/auth', name: 'auth', component: () => import('../views/AuthView.vue') }, 
    { 
      path: '/profile', 
      name: 'profile', 
      component: () => import('../views/ProfileView.vue'),
      meta: { requiresAuth: true } 
    },
    { 
      path: '/tariffs', 
      name: 'tariffs', 
      component: () => import('../views/TariffsView.vue') 
    },
    { 
      path: '/contacts', 
      name: 'contacts', 
      component: () => import('../views/ContactsView.vue') 
    }
    ]
  })

// Навигационный страж
router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !isAuthenticated.value) {
    next('/auth') // Если не авторизован — на страницу входа
  } else if (to.name === 'auth' && isAuthenticated.value) {
    next('/profile') // Если уже авторизован — не пускаем на страницу логина
  } else {
    next()
  }
})

export default router

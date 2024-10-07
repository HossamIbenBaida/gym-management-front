import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import LoginPage from '@/views/auth/LoginPage.vue'
import RegisterPage from '@/views/auth/RegisterPage.vue'
import { useAuthStore } from '@/store/auth'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
  { path: '/', name: 'Home', component: HomePage ,meta: { requiresAuth: true } },
  { path: '/login', name: 'Login', component: LoginPage ,  meta: { requiresGuest: true }},   
  { path: '/register', name: 'register', component: RegisterPage }, 
  ]
})

// Add navigation guard
router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();
  const isAuthenticated = !!authStore.token;  // Check if token exists

  // Redirect logged-in users trying to access the login page
  if (to.meta.requiresGuest && isAuthenticated) {
    next({ name: 'Home' });
    
  }
  else if (to.meta.requiresAuth && !isAuthenticated) {
    next({ name: 'Login' }); // Redirect to login if not authenticated
  } 
  else {
    next(); 
  }
 
});

export default router

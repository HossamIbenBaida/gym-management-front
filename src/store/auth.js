import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    token: localStorage.getItem('token') || '',
    authorities: [],  // To store user roles like ADMIN, TRAINER, etc.
  }),
  actions: {
    setToken(token) {
      this.token = token;
      localStorage.setItem('token', token); // Save token in localStorage
    },
    login(userData) {
      this.user = userData.user; // Use the 'subject' as the username
      this.authorities = userData.authorities.map(auth => auth.authority); // Store roles
    },
    
    logout() {
      this.user = null;
      this.token = '';
      this.authorities = [];
      localStorage.removeItem('token');
    },
   
  },
});

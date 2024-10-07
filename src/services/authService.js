// src/services/authService.js
import apiClient from '@/services/apiService';

const authService = {
  // Login
  login(credentials) {
    return apiClient.post('/auth/login', credentials);
  },

  // Fetch profile information (once authenticated)
  getProfile() {
   return apiClient.get('/auth/profile');
  },
};

export default authService;

<template>
    <div class="flex items-center justify-center min-h-screen bg-gray-100">
      <div class="w-full max-w-md p-8 bg-white shadow-lg rounded-lg">
        <h1 class="text-2xl font-semibold text-center text-gray-700 mb-6">Login</h1>
        <form @submit.prevent="login" class="space-y-6">
          <div>
            <label for="username" class="block text-sm font-medium text-gray-700">Username:</label>
            <input 
              v-model="username" 
              id="username" 
              class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            >
          </div>
          <div>
            <label for="password" class="block text-sm font-medium text-gray-700">Password:</label>
            <input 
              type="password" 
              v-model="password" 
              id="password"
              class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            >
          </div>
          <div class="flex items-center justify-between">
            <button 
              type="submit" 
              class="w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useAuthStore } from '@/store/auth'; // Import your auth store
  import authService from '@/services/authService';
  import NProgress from 'nprogress'; // Import NProgress
import router from '@/router';
  
  const username = ref('');
  const password = ref('');
  
  const authStore = useAuthStore(); // Use the Pinia store
  // Sleep function for testing
  const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));
  const login = async () => {
    try {
      NProgress.start(); // Start the loading bar
      const response = await authService.login({
        username: username.value,
        password: password.value,
      });
      
      console.log(response.data.token);
      authStore.setToken(response.data.token);
     
      
    const profileResponse = await authService.getProfile();
    const userData = {
      user: profileResponse.data.principal.subject, // Assuming 'subject' is the user identifier
      authorities: profileResponse.data.authorities, // The user's roles
    };
    
    console.log(userData)
    // Save the user's profile data in the store
    authStore.login(userData);
  
      // Redirect to another page or show success message
      console.log('Login successful');
      router.push('/')
    } catch (error) {
      console.error('Login failed:', error);
    }finally{
      NProgress.done(); // Finish the loading bar
    }
    
  };
  </script>
  
  
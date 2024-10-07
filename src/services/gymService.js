// src/services/gymService.js
import apiClient from '@/apiClient';

const gymService = {
  // Get all gyms
  getAllGyms() {
    return apiClient.get('/gyms');
  },

  // Get gym by ID
  getGymById(id) {
    return apiClient.get(`/gyms/${id}`);
  },

  // Add a new gym
  addGym(gymData) {
    return apiClient.post('/gyms', gymData);
  },

  // Update gym by ID
  updateGym(id, gymData) {
    return apiClient.put(`/gyms/${id}`, gymData);
  },

  // Delete gym by ID
  deleteGym(id) {
    return apiClient.delete(`/gyms/${id}`);
  },

  // Get users of a gym by gym ID
  getGymUsers(id) {
    return apiClient.get(`/gyms/${id}/users`);
  },
};

export default gymService;

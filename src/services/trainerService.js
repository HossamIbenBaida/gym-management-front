// src/services/trainerService.js
import apiClient from '@/apiClient';

const trainerService = {
  // Get all trainers
  getAllTrainers() {
    return apiClient.get('/trainers');
  },

  // Get trainer by ID
  getTrainerById(id) {
    return apiClient.get(`/trainers/${id}`);
  },

  // Add a new trainer
  addTrainer(trainerData) {
    return apiClient.post('/trainers', trainerData);
  },

  // Update trainer by ID
  updateTrainer(id, trainerData) {
    return apiClient.put(`/trainers/${id}`, trainerData);
  },

  // Delete trainer by ID
  deleteTrainer(id) {
    return apiClient.delete(`/trainers/${id}`);
  },

  // Get trainer's gym by ID
  getTrainerGym(id) {
    return apiClient.get(`/trainers/${id}/gym`);
  },
};

export default trainerService;

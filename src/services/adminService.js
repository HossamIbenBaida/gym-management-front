// src/services/adminService.js
import apiClient from '@/apiClient';

const adminService = {
  // Get admin by ID
  getAdminById(id) {
    return apiClient.get(`/admin/${id}`);
  },

  // Add a new admin
  addAdmin(adminData) {
    return apiClient.post('/admin', adminData);
  },

  // Update admin by ID
  updateAdmin(id, adminData) {
    return apiClient.put(`/admin/${id}`, adminData);
  },

  // Delete admin by ID
  deleteAdmin(id) {
    return apiClient.delete(`/admin/${id}`);
  },

  // Get the gyms managed by the admin
  getAdminGyms(id) {
    return apiClient.get(`/admin/${id}/gym`);
  },
};

export default adminService;

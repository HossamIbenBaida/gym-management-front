// src/services/memberService.js
import apiClient from '@/apiClient';

const memberService = {
  // Get all members
  getAllMembers() {
    return apiClient.get('/member');
  },

  // Get member by ID
  getMemberById(id) {
    return apiClient.get(`/member/${id}`);
  },

  // Add a new member
  addMember(memberData) {
    return apiClient.post('/member', memberData);
  },

  // Update member by ID
  updateMember(id, memberData) {
    return apiClient.put(`/member/${id}`, memberData);
  },

  // Delete member by ID
  deleteMember(id) {
    return apiClient.delete(`/member/${id}`);
  },

  // Get member's gym by ID
  getMemberGym(id) {
    return apiClient.get(`/member/${id}/gym`);
  },

  // Update member's gym by ID
  updateMemberGym(id, gymData) {
    return apiClient.put(`/member/${id}/gym`, gymData);
  },
};

export default memberService;

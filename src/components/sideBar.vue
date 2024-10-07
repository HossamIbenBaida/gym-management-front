<template>
    <div class="flex flex-col h-screen bg-gray-800 text-white p-4">
      <h2 class="text-xl font-bold mb-6">{{ userName }}</h2>
     <!-- Admin Section -->
     <div class="mb-6">
        <h3 @click="toggleAdmin" class="cursor-pointer text-lg font-semibold mb-2 flex justify-between">
          Admins <span class="text-sm" :class="{'rotate-180': isAdminOpen}">▼</span>
        </h3>
        <ul v-if="isAdminOpen">
          <li>
            <router-link to="/admins/add" class="block py-2 px-3 hover:bg-gray-700 rounded">Add Admin</router-link>
          </li>
          <li>
            <router-link to="/admins/list" class="block py-2 px-3 hover:bg-gray-700 rounded">View Admins</router-link>
          </li>
          <li>
            <router-link to="/admins/:id/edit" class="block py-2 px-3 hover:bg-gray-700 rounded">Edit Admin</router-link>
          </li>
          <li>
            <router-link to="/admins/:id/delete" class="block py-2 px-3 hover:bg-gray-700 rounded">Delete Admin</router-link>
          </li>
        </ul>
      </div>
  
      <!-- Trainer Section -->
      <div class="mb-6">
        <h3 @click="toggleTrainer" class="cursor-pointer text-lg font-semibold mb-2 flex justify-between">
          Trainers <span class="text-sm" :class="{'rotate-180': isTrainerOpen}">▼</span>
        </h3>
        <ul v-if="isTrainerOpen">
          <li>
            <router-link to="/trainers/add" class="block py-2 px-3 hover:bg-gray-700 rounded">Add Trainer</router-link>
          </li>
          <li>
            <router-link to="/trainers/list" class="block py-2 px-3 hover:bg-gray-700 rounded">View Trainers</router-link>
          </li>
          <li>
            <router-link to="/trainers/:id/edit" class="block py-2 px-3 hover:bg-gray-700 rounded">Edit Trainer</router-link>
          </li>
          <li>
            <router-link to="/trainers/:id/delete" class="block py-2 px-3 hover:bg-gray-700 rounded">Delete Trainer</router-link>
          </li>
        </ul>
      </div>
  
      <!-- Member Section -->
      <div class="mb-6">
        <h3 @click="toggleMember" class="cursor-pointer text-lg font-semibold mb-2 flex justify-between">
          Member <span class="text-sm" :class="{'rotate-180': isMemberOpen}">▼</span>
        </h3>
        <ul v-if="isMemberOpen">
          <li>
            <router-link to="/members/add" class="block py-2 px-3 hover:bg-gray-700 rounded">Add Member</router-link>
          </li>
          <li>
            <router-link to="/members/list" class="block py-2 px-3 hover:bg-gray-700 rounded">View Members</router-link>
          </li>
          <li>
            <router-link to="/members/:id/edit" class="block py-2 px-3 hover:bg-gray-700 rounded">Edit Member</router-link>
          </li>
          <li>
            <router-link to="/members/:id/delete" class="block py-2 px-3 hover:bg-gray-700 rounded">Delete Member</router-link>
          </li>
        </ul>
      </div>
  
   
      <!-- Gym Section -->
      <div class="mb-6">
        <h3 @click="toggleGyms" class="cursor-pointer text-lg font-semibold mb-2 flex justify-between">
          Gyms <span class="text-sm" :class="{'rotate-180': isGymsOpen}">▼</span>
        </h3>
        <ul v-if="isGymsOpen">
          <li>
            <router-link to="/gyms/add" class="block py-2 px-3 hover:bg-gray-700 rounded">Add Gym</router-link>
          </li>
          <li>
            <router-link to="/gyms/list" class="block py-2 px-3 hover:bg-gray-700 rounded">View Gyms</router-link>
          </li>
          <li>
            <router-link to="/gyms/:id/edit" class="block py-2 px-3 hover:bg-gray-700 rounded">Edit Gym</router-link>
          </li>
          <li>
            <router-link to="/gyms/:id/delete" class="block py-2 px-3 hover:bg-gray-700 rounded">Delete Gym</router-link>
          </li>
        </ul>
      </div>
  
      <div class="flex-grow"></div> <!-- Pushes footer down -->
  
      <footer class="mt-6 text-sm">
        <p>&copy; 2024 Hossam IBENBAIDA</p>
      </footer>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useAuthStore } from '@/store/auth';
  // Toggles for each section
  const isTrainerOpen = ref(false);
  const isMemberOpen = ref(false);
  const isAdminOpen = ref(false);
  const isGymsOpen = ref(false);

  const isTrainer = ref(false);
  const isMember = ref(false);
  const isAdmin = ref(false);
  const isGyms = ref(false);
  
  const toggleTrainer = () => {
    isTrainerOpen.value = !isTrainerOpen.value;
    closeOtherSections('trainer');
  };
  
  const toggleMember = () => {
    isMemberOpen.value = !isMemberOpen.value;
    closeOtherSections('member');
  };
  
  const toggleAdmin = () => {
    isAdminOpen.value = !isAdminOpen.value;
    closeOtherSections('admin');
  };
  
  const toggleGyms = () => {
    isGymsOpen.value = !isGymsOpen.value;
    closeOtherSections('gyms');
  };
  
  // Close all other sections when one is opened
  const closeOtherSections = (section) => {
    if (section !== 'trainer') isTrainerOpen.value = false;
    if (section !== 'member') isMemberOpen.value = false;
    if (section !== 'admin') isAdminOpen.value = false;
    if (section !== 'gyms') isGymsOpen.value = false;
  };

  const authUser = useAuthStore();
  //console.log(authUser)
  const userName = ref(authUser.user ? authUser.user : 'Guest'); 
  console.log(authUser.authorities)
  isAdmin.value = authUser.authorities.includes("SCOPE_TRAINER") ? true: false
  isMember.value = authUser.authorities.includes("SCOPE_MEMBER") ? true: false
  isTrainer.value = authUser.authorities.includes("SCOPE_TRAINER") ? true: false
  </script>
  <style scoped>
  .rotate-180 {
    transform: rotate(180deg);
  }
  </style>
  
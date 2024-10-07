<script setup>
import { useToast } from "vue-toastification";
import Nav from "@/layouts/Nav.vue";
import sideBar from "@/components/sideBar.vue";
const toast = useToast();

</script>
<template>
  <Nav></Nav>
    <div class="flex">
    <sideBar />
    <main class="flex-1 p-4">
      <router-view />
    </main>
  </div>
</template>
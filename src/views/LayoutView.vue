<template>
    <div class="layout-container">
      <!-- Sidebar (conditionally shown based on menuOpen) -->
      <SideMenu v-if="menuOpen" class="side-menu" />
  
      <!-- Main Content -->
      <main class="main-content">
        <!-- Header -->
        <HeaderComponent 
          :currentPage="currentPage" 
          @toggleMenu="toggleMenu" 
        />
  
        <!-- Dynamic Main Content -->
        <section class="content">
          <router-view></router-view>
        </section>
      </main>
    </div>
  </template>
  
  <script>
  import HeaderComponent from "@/components/HeaderComponent.vue";
  import SideMenu from "@/components/SideMenu.vue";
  
  export default {
    components: { HeaderComponent, SideMenu },
    data() {
      return {
        menuOpen: true, // State to track if the side menu is open
      };
    },
    computed: {
      currentPage() {
        return this.$route.name || "dashboard";
      },
    },
    methods: {
      toggleMenu() {
        this.menuOpen = !this.menuOpen; // Toggle side menu visibility
      },
    },
  };
  </script>
  
  <style scoped>
  .layout-container {
    display: flex;
    height: 100vh;
    font-family: Arial, sans-serif;
    color: #333;
  }
  
  /* Conditionally adjust layout when sidebar is hidden */
  .side-menu {
    transition: width 0.3s ease;
    width: 250px;
  }
  
  .main-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    background: #ecf0f1;
    overflow-y: auto;
  }
  
  /* Add a class when menu is closed to expand main content */
  .layout-container:not(.menu-open) .main-content {
    margin-left: 0;
  }
  </style>
  
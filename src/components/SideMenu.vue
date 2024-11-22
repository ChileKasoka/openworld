<template>
    <aside class="side-menu">
      <nav>
        <router-link
          to="/dash"
          class="menu-item"
          :class="{ active: $route.path === '/dash' }"
        >
          <i class="fas fa-tachometer-alt"></i>
          <span>Dashboard</span>
        </router-link>
        <router-link
          to="/profile"
          class="menu-item"
          :class="{ active: $route.path === '/profile' }"
        >
          <i class="fas fa-user"></i>
          <span>Profile</span>
        </router-link>
        <router-link
          to="/settings"
          class="menu-item"
          :class="{ active: $route.path === '/settings' }"
        >
          <i class="fas fa-cog"></i>
          <span>Settings</span>
        </router-link>
        <button @click="logout" class="menu-item logout">
          <i class="fas fa-sign-out-alt"></i>
          <span>Logout</span>
        </button>
      </nav>
    </aside>
  </template>
  
  <script>
  export default {
    methods: {
      logout() {
        // Logout logic
        alert("Logged out successfully.");
        this.$router.push("/login");
      },
    },
  };
  </script>
  
  <style scoped>
  .side-menu {
    background-color: #2c3e50;
    color: white;
    width: 200px;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  }
  
  nav {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  
  .menu-item {
    text-decoration: none;
    color: white;
    padding: 0.8rem 1rem;
    border-radius: 5px;
    display: flex;
    align-items: center;
    gap: 1rem;
    font-size: 1rem;
    transition: background-color 0.3s ease;
  }
  
  .menu-item i {
    font-size: 1.2rem;
  }
  
  .menu-item:hover {
    background-color: #34495e;
  }
  
  .active {
    background-color: #9263ff;
  }
  
  .logout {
    background: none;
    border: none;
    color: white;
    cursor: pointer;
    text-align: left;
    font-size: 1rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 0.8rem 1rem;
    transition: background-color 0.3s ease;
  }
  
  .logout:hover {
    background-color: #e74c3c;
  }
  </style>
  
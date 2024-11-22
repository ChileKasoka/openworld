<template>
    <header class="app-header">
      <!-- Left Section: Title -->
      <div class="header-left">
        <button class="hamburger-btn" @click="toggleMenu">
          <i class="fas fa-bars"></i> <!-- Hamburger icon -->
        </button>
        <h1>{{ currentPage }}</h1>
      </div>
  
      <!-- Right Section: Profile, Settings, Dashboard, and Logout -->
      <div class="header-right">
        <router-link to="/profile" class="avatar-link" title="Profile">
          <img :src="user.avatar" alt="User Avatar" class="user-avatar" />
        </router-link>
        <nav>
          <router-link to="/dash" class="nav-icon" title="Dashboard">
            <i class="fas fa-tachometer-alt"></i>
          </router-link>
          <router-link to="/settings" class="nav-icon" title="Settings">
            <i class="fas fa-cog"></i>
          </router-link>
          <button @click="logout" class="nav-icon logout-btn" title="Logout">
            <i class="fas fa-sign-out-alt"></i>
          </button>
        </nav>
      </div>
    </header>
  </template>
  
  <script>
  export default {
    props: ["currentPage"],
    data() {
      return {
        user: {
          avatar: "https://via.placeholder.com/50",
          name: "John Doe",
        },
      };
    },
    methods: {
      // Emit an event to the parent to toggle the sidebar
      toggleMenu() {
        this.$emit("toggleMenu");
      },
      logout() {
        alert("You have logged out.");
        this.$router.push("/login");
      },
    },
  };
  </script>
  
  <style scoped>
  /* General Header Styling */
  .app-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #9263ff;
    color: white;
    padding: 0.5rem 1rem;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }
  
  /* Left Section */
  .header-left {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  
  .hamburger-btn {
    display: none; /* Default: hidden */
    background: none;
    border: none;
    color: white;
    font-size: 1.5rem;
    cursor: pointer;
    transition: color 0.3s;
  }
  
  .hamburger-btn:hover {
    color: #ecf0f1;
  }
  
  .header-left h1 {
    font-size: 1.5rem;
    margin: 0;
  }
  
  /* Right Section */
  .header-right {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  
  .user-avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 2px solid white;
  }
  
  /* Navigation Icons */
  .nav-icon {
    color: white;
    font-size: 1.2rem;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: color 0.3s;
    padding-right: 15px;
  }
  
  .nav-icon:hover {
    color: #ecf0f1;
  }
  
  .logout-btn {
    background: none;
    border: none;
    cursor: pointer;
    color: white;
    font-size: 1.2rem;
    transition: color 0.3s;
  }
  
  .logout-btn:hover {
    color: #e74c3c;
  }
  
.hamburger-btn {
    display: block;
}
  

  </style>
  
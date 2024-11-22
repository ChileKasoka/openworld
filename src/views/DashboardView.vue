<template>
    <div class="dashboard-container">
      <!-- Sidebar -->
      <!-- <aside class="sidebar">
        <h2 class="sidebar-title">My Dashboard</h2>
        <nav class="sidebar-nav">
          <ul>
            <li><router-link to="/dashboard" class="nav-link">Dashboard</router-link></li>
            <li><router-link to="/profile" class="nav-link">Profile</router-link></li>
            <li><router-link to="/settings" class="nav-link">Settings</router-link></li>
            <li><a href="/login" @click.prevent="logout" class="nav-link">Logout</a></li>
          </ul>
        </nav>
      </aside> -->
  
      <!-- Main Content -->
      <main class="main-content">
        <!-- Header -->
        <!-- <header class="header">
          <h1>Hello, {{ username }} 👋</h1>
          <p>Welcome back! Here’s what’s happening today:</p>
        </header>
   -->
        <!-- Dashboard Widgets -->
        <section class="widgets">
          <!-- Statistics Cards -->
          <div class="stats-card" v-for="stat in stats" :key="stat.title">
            <div class="stat-content">
              <h2>{{ stat.value }}</h2>
              <p>{{ stat.title }}</p>
            </div>
            <div class="stat-icon">
              <i :class="stat.icon"></i>
            </div>
          </div>
        </section>
  
        <!-- Chart and Recent Activity -->
        <section class="details">
          <!-- Chart Placeholder -->
          <div class="chart-container">
            <h3>Performance Overview</h3>
            <p>Chart goes here (use Chart.js or other libraries).</p>
          </div>
  
          <!-- Recent Activity -->
          <div class="recent-activity">
            <h3>Recent Activity</h3>
            <ul>
              <li v-for="activity in recentActivities" :key="activity.id">
                <span class="activity-time">{{ activity.time }}</span>
                <span class="activity-description">{{ activity.description }}</span>
              </li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: "John Doe", // Replace with dynamic user data
        stats: [
          { title: "Total Users", value: "1,024", icon: "fas fa-users" },
          { title: "New Orders", value: "256", icon: "fas fa-shopping-cart" },
          { title: "Revenue", value: "$12,345", icon: "fas fa-dollar-sign" },
          { title: "Tickets", value: "78", icon: "fas fa-ticket-alt" },
        ],
        recentActivities: [
          { id: 1, time: "10:30 AM", description: "User John added a new order." },
          { id: 2, time: "9:45 AM", description: "Revenue crossed $10,000 today." },
          { id: 3, time: "8:15 AM", description: "New user Maria signed up." },
        ],
      };
    },
    methods: {
      logout() {
        console.log("User logged out");
        this.$router.push("/login");
      },
    },
  };
  </script>
  
  <style scoped>
  /* Dashboard Layout */
  .dashboard-container {
    display: flex;
    height: 100vh;
    font-family: Arial, sans-serif;
    color: #333;
  }
  
  /* Sidebar */
  .sidebar {
    width: 250px;
    background: #2c3e50;
    color: #ecf0f1;
    display: flex;
    flex-direction: column;
    padding: 1rem;
  }
  
  .sidebar-title {
    font-size: 1.5rem;
    margin-bottom: 2rem;
    text-align: center;
  }
  
  .sidebar-nav ul {
    list-style: none;
    padding: 0;
  }
  
  .sidebar-nav li {
    margin: 1rem 0;
  }
  
  .nav-link {
    color: #ecf0f1;
    text-decoration: none;
    padding: 0.5rem 1rem;
    display: block;
    border-radius: 5px;
    transition: background-color 0.3s;
  }
  
  .nav-link:hover {
    background: #34495e;
  }
  
  /* Main Content */
  .main-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    background: #ecf0f1;
    overflow-y: auto;
  }
  
  /* Header */
  .header {
    background: #9263ff;
    color: #fff;
    padding: 2rem;
    text-align: center;
  }
  
  .header h1 {
    font-size: 20px;
    margin: 0;
  }
  
  .header p {
    margin-top: 0.5rem;
    font-size: 1.1rem;
  }
  
  /* Widgets Section */
  .widgets {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
    padding: 1.5rem;
  }
  
  .stats-card {
    background: #fff;
    padding: 1.5rem;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  
  .stat-content h2 {
    margin: 0;
    font-size: 1.5rem;
    color: #2c3e50;
  }
  
  .stat-content p {
    margin: 0.5rem 0 0;
    color: #7f8c8d;
  }
  
  .stat-icon {
    font-size: 2.5rem;
    color: #3498db;
  }
  
  /* Details Section */
  .details {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 1rem;
    padding: 1.5rem;
  }
  
  .chart-container,
  .recent-activity {
    background: #fff;
    padding: 1.5rem;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }
  
  .recent-activity ul {
    list-style: none;
    padding: 0;
  }
  
  .recent-activity li {
    padding: 0.5rem 0;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #ddd;
  }
  
  .activity-time {
    font-weight: bold;
    color: #3498db;
  }
  
  .activity-description {
    color: #7f8c8d;
  }
  </style>
  
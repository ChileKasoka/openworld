<template>
    <div class="settings">
      <h2>Edit Profile</h2>
      <form @submit.prevent="updateProfile">
        <div class="form-group">
          <label for="name">Name:</label>
          <input v-model="user.name" type="text" id="name" required />
        </div>
        <div class="form-group">
          <label for="email">Email:</label>
          <input v-model="user.email" type="email" id="email" required />
        </div>
        <div class="form-group">
          <label for="password">Password:</label>
          <input v-model="user.password" type="password" id="password" />
        </div>
        <button type="submit">Update Profile</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        user: {
          name: "John Doe",
          email: "john.doe@example.com",
          password: "",
        },
      };
    },
    methods: {
      updateProfile() {
        // Mock saving the updated profile
        alert("Profile updated successfully!");
        console.log("Updated user details:", this.user);
      },
    },
  };
  </script>
  
  <style scoped>
  .settings {
    background: #fff;
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }
  
  h2 {
    margin-bottom: 1rem;
  }
  
  .form-group {
    margin-bottom: 1rem;
  }
  
  label {
    display: block;
    margin-bottom: 0.5rem;
  }
  
  input {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  button {
    background: #3498db;
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    cursor: pointer;
    transition: background 0.3s;
  }
  
  button:hover {
    background: #2980b9;
  }
  </style>
  
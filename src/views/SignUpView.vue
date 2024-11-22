<template>
    <div class="signup-container">
      <div class="signup-card">
        <h1 class="title">Create an Account</h1>
        <form @submit.prevent="handleSignUp">
          <div class="input-group">
            <label for="username">Username</label>
            <input
              type="text"
              id="username"
              v-model="username"
              placeholder="Enter your username"
              required
            />
          </div>
          <div class="input-group">
            <label for="email">Email</label>
            <input
              type="email"
              id="email"
              v-model="email"
              placeholder="Enter your email"
              required
            />
          </div>
          <div class="input-group">
            <label for="password">Password</label>
            <input
              type="password"
              id="password"
              v-model="password"
              placeholder="Enter your password"
              required
            />
          </div>
          <div class="input-group">
            <label for="confirm-password">Confirm Password</label>
            <input
              type="password"
              id="confirm-password"
              v-model="confirmPassword"
              placeholder="Confirm your password"
              required
            />
          </div>
          <button type="submit" class="signup-button">Sign Up</button>
          <p class="login-text">
            Already have an account? <a href="/login" class="login-link">Log In</a>
          </p>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
      };
    },
    methods: {
      handleSignUp() {
        if (this.password !== this.confirmPassword) {
          alert('Passwords do not match!');
          return;
        }
  
        // Simulate API call or handle sign-up logic
        console.log('Signing up with:', {
          username: this.username,
          email: this.email,
          password: this.password,
        });
      },
    },
  };
  </script>
  
  <style scoped>
  /* Container and Card */
  .signup-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: linear-gradient(135deg, #8e44ad, #3498db);
  }
  
  .signup-card {
    background: #ffffff;
    padding: 2rem;
    border-radius: 12px;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 400px;
  }
  
  /* Typography */
  .title {
    font-size: 2rem;
    font-weight: bold;
    text-align: center;
    margin-bottom: 1rem;
    color: #333;
  }
  
  /* Form Elements */
  .input-group {
    margin-bottom: 1.5rem;
  }
  
  .input-group label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 500;
    color: #666;
  }
  
  .input-group input {
    width: 100%;
    padding: 0.8rem;
    font-size: 1rem;
    border: 1px solid #ddd;
    border-radius: 8px;
    transition: border-color 0.3s;
  }
  
  .input-group input:focus {
    border-color: #8e44ad;
    outline: none;
  }
  
  /* Button */
  .signup-button {
    width: 100%;
    padding: 0.8rem;
    font-size: 1rem;
    font-weight: bold;
    color: #fff;
    background: #8e44ad;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: background 0.3s;
  }
  
  .signup-button:hover {
    background: #732d91;
  }
  
  /* Login Text */
  .login-text {
    text-align: center;
    margin-top: 1rem;
    color: #666;
  }
  
  .login-link {
    color: #8e44ad;
    text-decoration: none;
  }
  
  .login-link:hover {
    text-decoration: underline;
  }
  </style>
  
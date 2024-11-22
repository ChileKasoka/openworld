<template>
    <div class="login-container">
      <div class="login-card">
        <h1 class="title">Welcome Back</h1>
        <form @submit.prevent="handleLogin">
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
          <button type="submit" class="login-button">Login</button>
          <p class="signup-text">
            Don’t have an account? <a href="/sign-up" class="signup-link">Sign Up</a>
          </p>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: '',
        password: '',
      };
    },
    methods: {
      handleLogin() {
        if (this.email && this.password) {
          // Call your login API
          console.log('Logging in with:', this.email, this.password);
          alert('Ahhh hurrrr');
          this.$router.push("/dash"); 
        } else {
          alert('Please fill in all fields');
        }
      },
    },
  };
  </script>
  
  <style scoped>
  /* Container and Card */
  .login-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: linear-gradient(135deg, #4a90e2, #9013fe);
  }
  
  .login-card {
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
    border-color: #4a90e2;
    outline: none;
  }
  
  /* Button */
  .login-button {
    width: 100%;
    padding: 0.8rem;
    font-size: 1rem;
    font-weight: bold;
    color: #fff;
    background: #4a90e2;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: background 0.3s;
  }
  
  .login-button:hover {
    background: #357ab8;
  }
  
  /* Signup Text */
  .signup-text {
    text-align: center;
    margin-top: 1rem;
    color: #666;
  }
  
  .signup-link {
    color: #4a90e2;
    text-decoration: none;
  }
  
  .signup-link:hover {
    text-decoration: underline;
  }
  </style>
  
<template>
    <div class="skeleton-container" v-if="isLoading">
      <div class="skeleton-card">
        <div class="skeleton-avatar"></div>
        <div class="skeleton-line"></div>
        <div class="skeleton-line short"></div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isLoading: true,
      };
    },
  };
  </script>
  
  <style scoped>
  /* Skeleton Container */
  .skeleton-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: rgba(255, 255, 255, 0.8);
  }
  
  /* Skeleton Card */
  .skeleton-card {
    width: 300px;
    padding: 20px;
    border-radius: 8px;
    background: #f0f0f0;
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  
  /* Skeleton Avatar */
  .skeleton-avatar {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: linear-gradient(90deg, #e0e0e0 25%, #f0f0f0 50%, #e0e0e0 75%);
    background-size: 200% 100%;
    animation: shimmer 1.5s infinite;
  }
  
  /* Skeleton Lines */
  .skeleton-line {
    width: 100%;
    height: 15px;
    border-radius: 4px;
    background: linear-gradient(90deg, #e0e0e0 25%, #f0f0f0 50%, #e0e0e0 75%);
    background-size: 200% 100%;
    animation: shimmer 1.5s infinite;
  }
  
  .skeleton-line.short {
    width: 60%;
  }
  
  /* Shimmer Animation */
  @keyframes shimmer {
    0% {
      background-position: -200% 0;
    }
    100% {
      background-position: 200% 0;
    }
  }
  </style>
  
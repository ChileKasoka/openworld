<template>
    <h3 class="service-list-title">Service Rates</h3>
    <div class="service-list-container">
      <div>
        <ul v-if="services.length" class="service-list">
        <li v-for="(service, index) in services" :key="index" class="service-item">
          <span>{{ service.name }} - ${{ service.price }}</span>
          <button @click="$emit('removeService', index)" class="remove-btn">❌</button>
        </li>
      </ul>
      <p v-else class="no-services">No services added yet.</p>
      </div>
    </div>
    <!-- Emit event to parent when clicked -->
    <button @click="$emit('openModal')" class="open-modal-btn">+ Add Service</button>
  </template>
  
  <script>
  export default {
    props: {
      services: Array,
    },
  };
  </script>
  
  <style scoped>
  .service-list-container {
    background: #f8f9fa;
    padding: 15px;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    margin-top: 15px;
  }
  
  .service-list-title {
    text-align: center;
    color: #001e3d;
    font-size: 2.0em;
  }
  
  .service-list {
    list-style: none;
    padding: 0;
  }
  
  .service-item {
    display: flex;
    justify-content: space-between;
    padding: 8px;
    border-bottom: 1px solid #ddd;
  }
  
  .remove-btn {
    background: red;
    color: white;
    border: none;
    padding: 5px;
    cursor: pointer;
    border-radius: 4px;
  }
  
  .no-services {
    text-align: center;
    color: #888;
  }

  .open-modal-btn {
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    background: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background 0.3s;
  }
  
  .open-modal-btn:hover {
    background: #0056b3;
  }
  </style>
  
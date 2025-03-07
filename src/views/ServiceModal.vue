<template>
    <div class="modal-overlay">
      <div class="modal">
        <h3>Add Service</h3>
        <input v-model="newService.name" placeholder="Service Name" class="modal-input" />
        <input v-model="newService.price" type="number" placeholder="Price" class="modal-input" />
        <button @click="addService" class="modal-add-btn">➕ Add Service</button>
        <button @click="$emit('close')" class="close-btn">Close</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        newService: { name: "", price: "" },
      };
    },
    methods: {
      addService() {
        if (this.newService.name && this.newService.price) {
          this.$emit('addService', { ...this.newService });
          this.newService = { name: "", price: "" };
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .modal {
    background: white;
    padding: 20px;
    border-radius: 8px;
    text-align: center;
    width: 300px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  }
  
  .modal-input {
    width: 100%;
    padding: 8px;
    margin: 5px 0;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  .modal-add-btn {
    background: #007bff;
    color: white;
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .close-btn {
    margin-top: 10px;
    padding: 8px;
    border-radius: 5px;
    cursor: pointer;
    background: #ff4d4d;
    color: white;
    border: none;
  }
  </style>
  
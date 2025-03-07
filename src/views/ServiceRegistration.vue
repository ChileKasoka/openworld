<template>
    <div class="service-container">
      <div class="content-wrapper">
        <!-- Form Section -->
        <div class="service-registration-card">
          <h1 class="form-title">Your Service Details</h1>
  
          <div class="input-group">
            <label for="address">Business Address:</label>
            <input type="text" id="address" v-model="vendor.address" required />
          </div>

          <div class="input-group">
            <label for="location">Location:</label>
            <input type="url" id="location" v-model="vendor.location" />
          </div>
  
          <div class="input-group">
            <label for="website">Website url (Optional):</label>
            <input type="url" id="website" v-model="vendor.website" />
          </div>
  
          <div class="input-group">
            <label>Days Available:</label>
            <VueMultiselect 
              v-model="vendor.daysAvailable" 
              :options="days" 
              :multiple="true" 
              placeholder="Select available days" 
            />
          </div>
  
          <div class="input-group">
            <label for="businessType">Business Type:</label>
            <input type="text" id="businessType" v-model="vendor.businessType" required />
          </div>
  
          <div class="input-group">
            <label for="experience">Years of Experience:</label>
            <input type="number" id="experience" v-model="vendor.experience" required />
          </div>
  
          <div class="input-group">
            <label for="certifications">Certifications:</label>
            <input type="text" id="certifications" v-model="vendor.certifications" />
          </div>
  
          <!-- <button @click="openModal" class="open-modal-btn">+ Add Service</button> -->
  
          <button type="submit" :disabled="loading" class="submit-btn">
            {{ loading ? "Submitting..." : "Register Vendor" }}
          </button>
  
          <p v-if="error" class="error">{{ error }}</p>
        </div>
  
        <!-- Service List and Payment Section -->
        <div class="service-details-wrapper">
          <div class="service-list-card">
            <ServiceList :services="services" @removeService="removeService" @openModal="openModal" />
          </div>
          <div class="payment-requirements-card">
            <PaymentRequirements />
          </div>
        </div>
      </div>
  
      <!-- Service Modal -->
      <ServiceModal v-if="showModal" @close="closeModal" @addService="addService" />
    </div>
  </template>  
  
  <script>
  import VueMultiselect from "vue-multiselect";
  import "vue-multiselect/dist/vue-multiselect.min.css";
  import ServiceList from "./ServiceList.vue";
  import ServiceModal from "./ServiceModal.vue";
  import PaymentRequirements from "./PaymentRequirements.vue";
  
  export default {
    components: { VueMultiselect, ServiceList, ServiceModal, PaymentRequirements },
    data() {
      return {
        showModal: false,
        services: [],
        vendor: {
          address: "",
          location: "",
          website: "",
          daysAvailable: [],
          businessType: "",
          experience: "",
          certifications: "",
        },
        days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        loading: false,
        error: null,
      };
    },
    methods: {
      openModal() {
        this.showModal = true;
      },
      closeModal() {
        this.showModal = false;
      },
      addService(service) {
        this.services.push(service);
      },
      removeService(index) {
        this.services.splice(index, 1);
      },
    },
  };
  </script>
  
  <style scoped>
  /* Full Page Layout */
  .service-container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: linear-gradient(135deg, #4a98e2, #37303d);
    padding: 20px;
  }
  
  /* Wrapper for Form & Service List */
  .content-wrapper {
    display: flex;
    gap: 20px;
    max-width: 1000px;
    width: 100%;
  }
  
  /* Form Card */
  .service-registration-card,
  .service-list-card {
    flex: 1;
    background: #fff;
    padding: 20px;
    border-radius: 12px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }

  .service-details-wrapper {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 50%;
}

.payment-requirements-card {
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

  
  /* Form Title */
  .form-title {
    text-align: center;
    color: #001e3d;
    margin-bottom: 20px;
  }
  
  /* Input Fields */
  .input-group {
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
  }
  
  .input-group input {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  /* Add Service Button */
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
  
  /* Submit Button */
  .submit-btn {
    width: 100%;
    padding: 10px;
    background: #28a745;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background 0.3s;
  }
  
  .submit-btn:hover {
    background: #218838;
  }
  
  .error {
    color: red;
    text-align: center;
    margin-top: 10px;
  }
  
  /* Service List Card */
  .service-list-card {
    flex: 1;
    background: #f8f9fa;
    border-radius: 12px;
    padding: 20px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }
  
  /* Responsive Design */
  @media (max-width: 768px) {
    .content-wrapper {
      flex-direction: column;
    }
  }
  </style>
  
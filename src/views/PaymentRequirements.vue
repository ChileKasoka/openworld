<template>
    <h2 class="card-title">Payment Details</h2>
    <div class="payment-requirements-card">
      
      
      <div class="input-group">
        <label for="accountNumber">Account Number:</label>
        <input type="text" id="accountNumber" v-model="paymentDetails.accountNumber" required />
      </div>
      
      <div class="input-group">
        <label for="bankName">Bank Name:</label>
        <input type="text" id="bankName" v-model="paymentDetails.bankName" required />
      </div>
  
      <div class="input-group">
        <label>Payment Methods:</label>
        <VueMultiselect v-model="paymentDetails.paymentMethods" :options="methods" :multiple="true" placeholder="Select payment methods" />
      </div>
      
      <button type="button" class="save-btn" @click="savePaymentDetails">Save Payment Details</button>
    </div>
  </template>
  
  <script>
  import VueMultiselect from "vue-multiselect";
  import "vue-multiselect/dist/vue-multiselect.min.css";
  
  export default {
    components: { VueMultiselect },
    data() {
      return {
        paymentDetails: {
          accountNumber: "",
          bankName: "",
          paymentMethods: []
        },
        methods: ["Credit Card", "PayPal", "Bank Transfer", "Mobile Money"]
      };
    },
    methods: {
      savePaymentDetails() {
        console.log("Payment Details Saved:", this.paymentDetails);
      }
    }
  };
  </script>
  
  <style scoped>
  .payment-requirements-card {
    background: #fff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    width: 100%;
  }
  
  .card-title {
    font-size: 2.0em;
    text-align: center;
    color: #001e3d;
    margin-bottom: 15px;
  }
  
  .input-group {
    margin-bottom: 15px;
  }
  
  .input-group input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  .save-btn {
    width: 100%;
    padding: 10px;
    background: #28a745;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background 0.3s;
  }
  
  .save-btn:hover {
    background: #218838;
  }
  </style>
  
<template>
    <div class="vendor-registration-container">
        <div class="vendor-registration-card"> 
            <h1 class="form-title">Register Vendor</h1>  
      <form @submit.prevent="submitVendor" class="form-grid">
        <div class="row-input">
            <div class="input-group full-width">
                <label for="fname">First Name:</label>
                <input class="fname" type="text" id="fname" v-model="vendor.fname" required/>
            </div>

            <div class="input-group full-width">
                <label for="lname">Last Name:</label>
                <input type="text" id="lname" v-model="vendor.lname" required/>
            </div>
        </div>


        <div class="input-group full-width">
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="vendor.email" required/>
        </div>

        <div class="input-group full-width">
          <label for="phone">Phone:</label>
          <input type="tel" id="phone" name="phone" v-model="vendor.phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}">
        </div>
  
        <div class="input-group full-width">
          <label for="biography">Biography:</label>
          <textarea id="biography" v-model="vendor.biography" required></textarea>
        </div>
  
        <label for="profilePicture" class="custom-file-upload">
          <span class="file-button">📷 Upload Profile Image</span>
        </label>
        <input type="file" id="profilePicture" multiple accept="image/*" @change="handleFileUpload" hidden />
        
        <div class="preview-container" v-if="vendor.profilePicture">
            <div class="preview-item">
                <img :src="vendor.profilePicture.url" alt="Preview" />
                <button type="button" @click="removeImage">❌</button>
            </div>
        </div>

  
        <button type="submit" :disabled="loading" class="submit-btn">
          {{ loading ? "Submitting..." : "Proceed" }}
        </button>
  
        <p v-if="error" class="error">{{ error }}</p>
      </form>
    </div>
    </div>

  </template>
  
  <script>
  import axios from "axios";
  
  export default {
    data() {
      return {
        vendor: {
          fname: "",
          lname: "",
          email: "",
          phone: "",
          biography: "",
          profilePicture: null, // Store the file object
        },
        loading: false,
        error: null,
      };
    },
    methods: {
      async submitVendor() {
        this.loading = true;
        this.error = null;
  
        try {
          // Prepare form data for file upload
          let formData = new FormData();
          formData.append("fname", this.vendor.fname);
          formData.append("lname", this.vendor.lname);
          formData.append("email", this.vendor.email);
          formData.append("phone", this.vendor.phone);
          formData.append("biography", this.vendor.biography);
          
          if (this.vendor.profilePicture) {
            formData.append("profilePicture", this.vendor.profilePicture.file); // Append file
          }
  
          // Send data using Axios
          const response = await axios.post(
            "http://localhost:8081/v1/new-vendor",
            formData,
            {
              headers: { "Content-Type": "multipart/form-data" },
            }
          );
  
          console.log("Vendor submitted successfully:", response.data);
  
          // Reset form after successful submission
          this.vendor = {
            fname: "",
            lname: "",
            email: "",
            phone: "",
            biography: "",
            profilePicture: null,
          };
        } catch (err) {
          console.error("Error submitting vendor:", err);
          this.error = err.response?.data?.message || "An error occurred while submitting.";
        } finally {
          this.loading = false;
        }
      },
      handleFileUpload(event) {
        const file = event.target.files[0];
        if (file) {
          this.vendor.profilePicture = {
            file,
            url: URL.createObjectURL(file), // Preview image
          };
        }
      },
      removeImage() {
        this.vendor.profilePicture = null;
      },
    },
  };
  </script>
  
  <style scoped>
.vendor-registration-container {
  display: flex;
  justify-content: center; /* Centers horizontally */
  align-items: center; /* Centers vertically */
  height: auto; /* Full viewport height */
  background: linear-gradient(135deg, #4a98e2, #37303d);
}

.vendor-registration-card {
  width: 100%;
  max-width: 600px;
  padding: 20px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

  .form-title {
    text-align: center;
    margin-bottom: 20px;
    color: #001e3d;
  }
  .input-group {
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
  }
  .input-group input,
  .input-group textarea {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  .submit-btn {
    width: 100%;
    padding: 10px;
    background: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background 0.3s;
    text-align: center;
  }
  .submit-btn:hover {
    background: #0056b3;
  }
  .error {
    color: red;
    text-align: center;
  }
  .preview-container {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }
  .preview-item img {
    width: 50px;
    height: 50px;
    border-radius: 5px;
  }
  .custom-file-upload {
    display: inline-block;
    padding: 10px;
    background: #007bff;
    color: white;
    border-radius: 5px;
    cursor: pointer;
    text-align: center;
    margin-bottom: 15px;
  }
  .file-button {
    font-weight: bold;
  }
  .row-input {
  display: flex;
  gap: 50px;
}
.fname{
    width: 300px;
}
  </style>
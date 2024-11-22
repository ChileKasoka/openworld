<template>
    <div class="profile-container">
      <!-- Profile Card -->
      <section class="profile-card">
        <div class="profile-picture">
          <img :src="user.avatar" alt="User Avatar" />
        </div>
        <h2>{{ user.name }}</h2>
        <p class="email">{{ user.email }}</p>
        <p class="bio">{{ user.bio }}</p>
        <button @click="editProfile" class="edit-profile-btn">Edit Profile</button>
      </section>
  
      <!-- Main Content -->
      <div class="main-content">
        <!-- Upload Section -->
        <div class="upload-section">
          <h3>Upload a New Post</h3>
          <textarea v-model="newPost" placeholder="Write something..." rows="4"></textarea>
          <div class="actions">
            <input type="file" @change="selectFile" />
            <button @click="submitPost" :disabled="!newPost && !fileToUpload">Post</button>
          </div>
        </div>
  
        <!-- Posts/Feeds Section -->
        <div class="feed">
          <h3>Your Posts</h3>
          <div v-if="feeds.length === 0" class="no-posts">
            <p>You haven't posted anything yet. Start by sharing something!</p>
          </div>
          <div v-else class="feed-list">
            <div v-for="(feed, index) in feeds" :key="index" class="feed-item">
              <p class="post-text">{{ feed.text }}</p>
              <img v-if="feed.image" :src="feed.image" alt="Uploaded Post" />
              <span class="post-date">{{ feed.date }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  
  export default {
    data() {
      return {
        user: {
          name: "",
          email: "",
          avatar: "https://via.placeholder.com/150", // Default avatar
          bio: "Frontend Developer at MyCompany. Passionate about Vue.js and web design.",
        },
        newPost: "",
        fileToUpload: null,
        feeds: [], // Array to store posts
      };
    },
    methods: {
      async fetchCurrentUser() {
        try {
          // Fetch the current user dynamically from the API
          const response = await axios.get("http://localhost:8081/v1/user/{id}", {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("accessToken")}`, // Include the JWT token if required
            },
          });
          
          // Update the user data from the response
          this.user.name = response.data.name;
          this.user.email = response.data.email;
          console.log("User data fetched:", response.data);
        } catch (error) {
          console.error("Error fetching user data:", error);
          this.$router.push("/login"); // Redirect to login if unauthorized
        }
      },
      editProfile() {
        // Redirect to settings or open a modal to edit the profile
        this.$router.push("/settings");
      },
      selectFile(event) {
        this.fileToUpload = event.target.files[0];
      },
      submitPost() {
        if (this.newPost || this.fileToUpload) {
          const reader = new FileReader();
          if (this.fileToUpload) {
            reader.onload = () => {
              this.feeds.unshift({
                text: this.newPost,
                image: reader.result,
                date: new Date().toLocaleString(),
              });
              this.clearPostInput();
            };
            reader.readAsDataURL(this.fileToUpload);
          } else {
            this.feeds.unshift({
              text: this.newPost,
              image: null,
              date: new Date().toLocaleString(),
            });
            this.clearPostInput();
          }
        }
      },
      clearPostInput() {
        this.newPost = "";
        this.fileToUpload = null;
      },
    },
    async mounted() {
      // Fetch the current user details on component mount
      await this.fetchCurrentUser();
    },
  };
  </script>
  
  
  <style scoped>
  /* Profile Page Layout */
  .profile-container {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 2rem;
    padding: 2rem;
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
    color: #333;
    min-height: 100vh;
  }
  
  /* Profile Card */
  .profile-card {
    background: #fff;
    padding: 2rem;
    text-align: center;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }
  
  .profile-picture img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin-bottom: 1rem;
    object-fit: cover;
  }
  
  .profile-card h2 {
    margin: 0.5rem 0;
    font-size: 1.8rem;
    font-weight: bold;
  }
  
  .email, .bio {
    color: #7f8c8d;
    font-size: 1rem;
    margin-bottom: 1rem;
  }
  
  .edit-profile-btn {
    background: #3498db;
    color: #fff;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1rem;
    transition: background-color 0.3s ease;
  }
  
  .edit-profile-btn:hover {
    background: #2980b9;
  }
  
  /* Main Content */
  .main-content {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
  
  /* Upload Section */
  .upload-section {
    background: #fff;
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }
  
  .upload-section h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
  
  .upload-section textarea {
    width: 100%;
    padding: 0.8rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 1rem;
    margin-bottom: 1rem;
  }
  
  .actions {
    display: flex;
    gap: 1rem;
    align-items: center;
  }
  
  .actions input {
    flex-grow: 1;
  }
  
  .actions button {
    background: #2ecc71;
    color: #fff;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1rem;
    transition: background-color 0.3s ease;
  }
  
  .actions button:disabled {
    background: #95a5a6;
    cursor: not-allowed;
  }
  
  .actions button:hover:not(:disabled) {
    background: #27ae60;
  }
  
  /* Feed Section */
  .feed {
    background: #fff;
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }
  
  .feed h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
  
  .no-posts {
    text-align: center;
    color: #7f8c8d;
  }
  
  .feed-list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  
  .feed-item {
    background: #f9f9f9;
    padding: 1rem;
    border-radius: 5px;
    border: 1px solid #ccc;
  }
  
  .feed-item .post-text {
    margin-bottom: 0.5rem;
  }
  
  .feed-item img {
    width: 100%;
    height: auto;
    margin-bottom: 0.5rem;
    border-radius: 5px;
  }
  
  .feed-item .post-date {
    font-size: 0.9rem;
    color: #7f8c8d;
  }
  </style>
  
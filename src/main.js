import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Import the router
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";


const app = createApp(App);

app.use(router); // Use the router
app.mount('#app');

# open-vue

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


Overview

This is a modern Vue.js web application that features user authentication (Login and Sign-Up), a dynamic layout with a Sidebar, and a customizable Dashboard. After logging in, users can navigate to their Profile and Settings pages, where they can manage their information and preferences. The application also provides a flexible layout system with a dynamic header and sidebar navigation.

Features
Login & Sign-Up Pages: Users can sign up and log in to access their personalized dashboard.

Dynamic Layout: The app utilizes a layout with a Sidebar for navigation and a Header to display the current page's title.

Responsive Dashboard: The Dashboard page can be customized to display widgets, charts, or other components.

Profile & Settings Pages: Users can manage their profile and settings after logging in.

Dynamic Page Titles: The header dynamically updates to show the current page's title based on the active route (Dashboard, Profile, Settings).


Tree Structure

|-- App.vue
|-- assets
|   `-- logo.png
|-- components
|   `-- HelloWorld.vue
|-- main.js
|-- router
|   `-- index.js
`-- views
    |-- DashboardView.vue
    |-- LayoutView.vue
    |-- LoginView.vue
    |-- ProfileView.vue
    `-- SignUpView.vue
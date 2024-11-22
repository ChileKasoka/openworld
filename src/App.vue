<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>


export default {
  name: 'App',
}
</script>

<style>
/* Reset styles for body */
body {
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
  background: none;
  box-sizing: border-box;
  overflow-x: hidden; /* Ensures no horizontal scrollbars */
}

/* Reset for all child elements */
* {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}
</style>

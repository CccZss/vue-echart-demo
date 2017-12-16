<template>
  <div id="app">
    <img src="./assets/logo.png">
    <home-page />
  </div>
</template>

<script>

import homePage from './components/demo/homePage'

export default {
  name: 'app',

  components: {
    'home-page' : homePage
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<template>
  <div id="app">
    <v-app id="oneDoc">
      <img alt="One-doc TM" src="./assets/logo.svg" />
      <HelloWorld msg="Welcome to Your Vue.js App" />
      <Logo src="./assets/logo.svg"></Logo>
    </v-app>
  </div>
</template>

<script>
import Logo from "./components/Logo.vue";

export default {
  name: "App",
  components: {
    Logo
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

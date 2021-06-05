<template>
  <div id="app" class="d-flex flex-column justify-content-between">
    <div> <Navigation  /></div>
    <div> <router-view></router-view></div>
    <div><Footer   /></div>
   
   
    <!-- Footer -->
    
  </div>
</template>
<script>
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
export default {
  components: {
    Navigation,
    Footer,
  },
  data() {
    return {};
  },
 
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>

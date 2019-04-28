<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  // fonction qui permet de dimentionner #app à la taille de window
  updated: function() {
    this.$nextTick(function() {
      document.querySelector("#app").style.width = window.innerWidth + "px";
      document.querySelector("#app").style.height = window.innerHeight + "px";
    });
  }
};
</script>
  
<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: rgb(65, 184, 131);
}
</style>

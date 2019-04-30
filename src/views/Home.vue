<template>
  <div id="home">
    <HomeHead style="padding-bottom: 40px; "></HomeHead > 
    <Login v-if="true"></Login>
    <h2>Battez vous pour votre santé!</h2>
    <!-- image du fixée sur la page home -->
    <div class="fixed-bottom"><img src="../assets/g2.png" alt="test" width="100%" z-index="-1"></div>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeHead from "@/components/Home/HomeHead.vue";
import Login from "@/components/Home/Login.vue";


export default {
  name: "home",
  components: {
    HomeHead,
     Login,
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Wendy+One');
h2{
  font-family: 'Wendy One', sans-serif;
  
  font-size: 20px;
}


</style>





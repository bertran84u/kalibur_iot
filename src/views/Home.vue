<template>
  <div id="home">
    <HomeHead/>
    <Login v-if="true"></Login>
    <!-- image du fixée sur la page home -->
    <div class="fixed-bottom"><img src="../assets/g2.png" alt="test" width="100%" z-index="-1"></div>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeHead from "@/components/HomeHead.vue";
import Login from "@/components/Login.vue";
import Signin from "@/components/Signin.vue";

export default {
  name: "home",
  components: {
    HomeHead,
     Login,
  }
};
</script>




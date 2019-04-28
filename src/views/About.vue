<template>
  <div class="about">
    <router-link to="/">Retour à l'acceuil</router-link> 
    <!-- <router-link v-bind:to="'/'">Home</router-link> -->
    <h1>S'inscrire</h1>
    <Signin/>
  </div>
</template>

<script>
// @ is an alias to /src
import Signin from '@/components/Signin.vue'

export default {
  name: 'home',
  components: {
    Signin
  }
}
</script>


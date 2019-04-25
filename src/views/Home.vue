<template>
  <div class="home">
    <HomeHead/>
    <Connexion/>
    <!-- <router-link to="/about">About</router-link> -->
  </div>
</template>

<script>
// @ is an alias to /src
import HomeHead from '@/components/HomeHead.vue'
import Connexion from '@/components/Connexion.vue'

export default {
  name: 'home',
  components: {
    HomeHead,
    Connexion
  }
}
</script>

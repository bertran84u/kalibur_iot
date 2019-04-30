<template>
  <div class="account">
    <!-- Bonjour {{userLoggedIn.people.firstname}} -->
    <Settings/>
    <Menu/>
    <MasterChallenges></MasterChallenges>
  </div>
</template>

<script>
// @ is an alias to /src
import Profil from "@/components/Profil/Profil.vue";
import Settings from "@/components/Settings.vue";
import MasterChallenges from "@/components/MasterChallenges";
import Menu from "@/components/Menu.vue";
export default {
  name: "Chall",
  computed: {
    userLoggedIn() {
      return this.$store.getters.userLoggedIn;
    }
  },
  components: {
    Profil,
    Settings,
    Menu,
    MasterChallenges
  },

  data: function() {
    return {
      show: false
    };
  }
};
</script>

<style scoped>



</style>
<template>
  <div class="account">
    <!-- Bonjour {{userLoggedIn.people.firstname}} -->
    <Settings/>
    <Profil/>
    <Menu/>
  </div>
</template>

<script>
// @ is an alias to /src
import Profil from "@/components/Profil/Profil.vue";
import Settings from "@/components/Settings.vue";
import Menu from "@/components/Menu.vue";
export default {
  name: "Account",
  computed: {
    userLoggedIn() {
      return this.$store.getters.userLoggedIn;
    }
  },
  components: {
    Profil,
    Settings,
    Menu
  },

  data: function() {
    return {
      show: false
    };
  }
};
</script>

<style scoped>
.header {
  padding: 0px;
}
.btn-group {
  width: 100%;
}

div.avatar {
  /* background-color:rgba(0, 255, 98, 0.609); */

  z-index: 1;
}
#avatar {
  position: static;
  transform: translate(10px, 0px);
}

#plate {
  position: static;
  transform: translate(0px, -10px);
}


</style>

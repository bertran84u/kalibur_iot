<template>
  <div class="menu">
    <b-navbar class="header" variant="info" fixed="bottom">
      <div class="btn-group" role="group" aria-label="Basic example">
        <router-link :to="{name: 'account'}">
          <button type="button" class="btn btn-secondary" >
          
          <img class="icone-nav-bar" alt="icone" src="../assets/profile.png">
  
        </button>
        </router-link>
        <button type="button" class="btn btn-secondary">
          <img class="icone-nav-bar" alt="icone" src="../assets/dash.png">
        </button>
        <router-link :to="{name: 'chall'}">
          <button type="button" class="btn btn-secondary" >
          <img class="icone-nav-bar" alt="icone" src="../assets/goal.png">
        </button>
        </router-link>
        
        <button type="button" class="btn btn-secondary" @click="lol">
          <img class="icone-nav-bar" alt="icone" src="../assets/jeu2.png">
        </button>
      </div>
    </b-navbar>
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  data: function() {
    return {
      msglol: [
        "je ne crois pas que ta maman serait contente si elle apprenait que tu t'es battu",
        "vu tes statistique ça serait t’envoyer à l’abattoir"
      ],
      show : false,
    };
  },

  // ajuste la hauteur de la barre de bouton fixée en bas de page
  beforeCreate: function() {
    this.$nextTick(function() {
      var images = document.querySelectorAll("img.icone-nav-bar");
      images.forEach(function(image) {
        image.style.height = window.innerHeight / 10 + "px";
      });
    });
  },
  methods: {
    // fonction pour obtenir aléatoirement 0 ou 1
    getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max));
    },
    
  

    // méthode qui affiche un message si la personne veut faire un combat ( si elle veut jouer)
    lol() {
      this.$bvModal.msgBoxOk(this.msglol[this.getRandomInt(2)], {
        title: "Confirmation",
        size: "sm",
        buttonSize: "sm",
        okVariant: "success",
        headerClass: "p-2 border-bottom-0",
        footerClass: "p-2 border-top-0",
        centered: true
      });
    }
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

#test {
  margin: 50px;
  left: 20px;
  width: 200px;
}
</style>

















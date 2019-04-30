<template>
  <!-- barre de caractèristique du personnage -->
  <div class="potion">
    <!-- ajouter "show-progress " pour afficher les valeurs-->
   <ul>
    <li  v-for="(potion, index) in potions " v-bind:key="index">
     <button class="items" v-on:click="clickMe()" >
    <img :src="potion.url">
     </button>
    </li>
   </ul>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      potions: [
        {
          url: require("@/assets/potions/potion1.png"),
          bonusF: 4,
          bonusV: 6,
          bonusA: 3
        },
        {
          url: require("@/assets/potions/potion2.png"),
          bonusF: 6,
          bonusV: 10,
          bonusA: 30
        },
        {
          url: require("@/assets/potions/potion3.png"),
          bonusF: 20,
          bonusV: 8,
          bonusA: 7
        }
      ]
    };
  }
  // methods: {
  //   barColor: function() {
  //     if (this.bar.name == "Force") {
  //       return  "danger"
  //     } else if (this.bar.name == "Vitesse") {
  //       return  "warning"
  //     } else if (this.bar.name == "Agilité") {
  //       return  "primary"
  //     }
  //   }
  // }

  //tentative pour redimentionner la progress bar en fonction de la valeur pour la caractérique du perso.
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

li {
display: inline;
}

.progress {
  margin-bottom: 20px;
}

.potion {
  text-align: left ;
}

img {
  width: 50px;

}

.items{
  width: 50px;
  margin: 5px;
  padding: 0px;
  background-color:rgba(240, 248, 255, 0);
  border: none;
}
</style>


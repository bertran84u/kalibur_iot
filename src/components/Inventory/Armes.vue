<template>
  <!-- barre de caractèristique du personnage -->
  <div class="arme">
    
 <button class="items" v-for="(arme, index) in armes " v-bind:key="index" >
    <img :src="arme.url">
    </button>
    
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      armes: [
        {
          url: require("@/assets/swords/sword1.png"),
          bonusF: 4,
          bonusV: 6,
          bonusA: 3
        },
        {
          url: require("@/assets/swords/sword2.png"),
          bonusF: 6,
          bonusV: 10,
          bonusA: 30
        },
        {
          url: require("@/assets/swords/sword3.png"),
          bonusF: 20,
          bonusV: 8,
          bonusA: 7
        },
        {
          url: require("@/assets/swords/sword4.png"),
          bonusF: 20,
          bonusV: 8,
          bonusA: 7
        }
      ]
    };
  }


  //tentative pour redimentionner la progress bar en fonction de la valeur pour la caractérique du perso.
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.progress {
  margin-bottom: 20px;
}

.arme {
  text-align: left;
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


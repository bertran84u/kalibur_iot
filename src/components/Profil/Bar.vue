<template>
  <!-- barre de caractèristique du personnage -->
  <div class="Bar">
    {{this.bar.name}}
    <!-- ajouter "show-progress " pour afficher les valeurs-->
    <b-progress :value="this.bar.value" :max="100" :variant="barColor()"></b-progress>
  </div>
</template>

<script>
import { EventBus } from "../../store.js";

export default {
  props: ["bar"],

  data: function() {
    return {};
 
    },
  methods: {
    barColor: function() {
      if (this.bar.name == "Force") {
          
        return "danger";
      } else if (this.bar.name == "Vitesse") {
        // this.bar.value =  this.bar.value + this.bonusV
        return "warning";
      } else if (this.bar.name == "Agilité") {
        // this.bar.value =  this.bar.value + this.bonusA
        return "primary";
      }
    },
  }

  //tentative pour redimentionner la progress bar en fonction de la valeur pour la caractérique du perso.
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.progress {
  margin-bottom: 20px;
}
</style>


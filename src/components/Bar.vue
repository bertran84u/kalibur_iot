<template>
  <!-- barre de caractèristique du personnage -->
  <div class="Bar">
    <div class="progress">
      <div
        class="progress-bar t"
        role="progressbar"
        aria-valuemin="0"
        aria-valuemax="100"
      >{{this.bar.value}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["bar"],

  data: function() {
    return {
      v: 0
    };
  },

  //tentative pour redimentionner la progress bar en fonction de la valeur pour la caractérique du perso.
  updated: function() {
    this.v = this.bar.value;
    this.$nextTick(function() {
      document
        .querySelectorAll(".t")
        .style.css("width", this.v.toString() + "%");
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.progress {
  margin-bottom: 30px;
}
</style>


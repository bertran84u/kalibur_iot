<template>
  <section>
    <!-- affiche sous forme de liste les barres de caractéristique -->
    <ul>
      <li v-for="(bar, index) in bars" v-bind:key="index">
        <Bar :bar="bar"/>
      </li>
    </ul>
  </section>
</template>

<script>
import Bar from "./Bar.vue";

export default {
  name: "MasterBar",
  components: {
    Bar
  },
  data: function() {
    return {
      bars: [
        {
          name: "Force",
          value: 1,
          color: "red"
        },
        {
          name: "Vitesse",
          value: 50,
          color: "blue"
        },
        {
          name: "Agilité",
          value: 30,
          color: "green"
        }
      ]
    };
  }
};
</script>

<style scoped >
li {
  list-style: none;
}
</style>

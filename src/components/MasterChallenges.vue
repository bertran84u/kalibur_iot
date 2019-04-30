<template>
  <div class="C">
    <h1>Défis</h1>
    <ul>
      <li v-for="(Challenge,index) in Challenges" v-bind:key="index">
        <Challenges :Challenge="Challenge"/>
      </li>
    </ul>
  </div>
</template>

<script>
import Challenges from "./Challenges";
export default {
  name: "MasterChallenges",
  components: {
    Challenges
  },
  data: function() {
    return {
      Challenges: [
        {
          desc: "Boir",
          status: false
        },
        {
          desc: "Acheter des pommes",
          status: true
        },
        {
          desc: "Apprendre Vue.js",
          status: false
        },
        {
          desc: "Acheter des cerises",
          status: false
        }
      ]
    };
  
  
  
}
}



</script>

<style scoped>
li {
  list-style: none;
}

ul{
  margin-top: 40px;
  padding-left: 0px;
  width: 300px;

}



</style>

<template>
  <!-- barre de caractèristique du personnage -->
  <div class="sorts">
    <div  v-for="(sort, index) in sorts " v-bind:key="index">
     <button class="items" v-on:click="addSort(sort)" >
    <img :src="sort.url">
     </button>
    </div>
   
   
  </div>
</template>

<script>
import { EventBus } from '../../store.js';
export default {
  data: function() {
    return {
      sorts: [
        {
          url: require("@/assets/sorts/fox.png"),
          effect:require("@/assets/fox_avatar (2).png"),
          bonusF: -30,
          bonusV: 30,
          bonusA: 30
        }
      ]
    };
    
  },methods: {
    addSort(sort) {
      EventBus.$emit('emittedEventSort', sort);
    }
  }
 


};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.progress {
  margin-bottom: 20px;
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


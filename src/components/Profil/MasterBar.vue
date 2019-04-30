<template>
  <section>
    <!-- affiche sous forme de liste les barres de caractéristique -->
    <ul>
      <li v-for="(bar, index) in bars" v-bind:key="index">
        <Bar  :bar="bar"/>
      </li>
    </ul>
  </section>
</template>

<script>
import Bar from "./Bar.vue";
import { EventBus } from "../../store.js";


export default {
  name: "MasterBar",
  components: {
    Bar
  },
  data: function() {
    return {
      temp:null,
      bars: [
        {
          name: "Force",
          value:45,
       
        },
        {
          name: "Vitesse",
          value: 45,
     
        },
        {
          name: "Agilité",
          value: 45,
  
        }
      ],
    } },mounted() {
        EventBus.$on('emittedEventSort', data => {
          if(this.temp == null ){
             this.bars[0].value = this.bars[0].value + data.bonusF
            this.bars[1].value = this.bars[1].value + data.bonusV
            this.bars[2].value = this.bars[2].value + data.bonusA
            this.temp = data
            }
          
                  });
    
  } 
};
</script>

<style scoped >
li {
  list-style: none;
}

ul{
  margin: 0px;
  padding: 0px;
  width: 170px;
}
</style>

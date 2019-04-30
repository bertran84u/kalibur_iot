<template>
  <div class="masterprofil">
    <!-- barre menu  -->
    <!-- image du perso sur la plate forme  -->
    <!-- <b-button @click="show = !show" > -->
    <div v-if="!show" class="headprofil">
      <div class="avatar" style="margin-top: 50px">
        <img id="avatar" alt="avatar" :src="this.effect" >
        <br>
        <img id="plate" alt="avatar" src="@/assets/plate.png" >
      </div>
      <div>
        <!-- <b-button id="chest" v-b-modal.modal-scrollable>
        <img alt="avatar" src="@/assets/chest.png" style="width: 50px">
        </b-button>-->

        <button
          id="chest"
          type="button"
          class="btn-inventaire"
          data-toggle="modal"
          data-target="#exampleModalScrollable"
        >
          <img alt="avatar" src="@/assets/chest1.png" style="width: 50px">
        </button>
        <Inventory/>

        <!-- <p class="my-4" v-for="i in 20" :key="i">
      Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
      in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
        </p>-->
      </div>

      <!-- </b-button> -->
    </div>
    <div id="Bars">
      <MasterBar v-if="!show"></MasterBar>
    </div>

    <MasterChallenges v-if="show"></MasterChallenges>
  </div>
</template>

<script>
// @ is an alias to /src
import MasterBar from "@/components/Profil/MasterBar.vue";
import Inventory from "@/components/Inventory/Inventory.vue";
import MasterChallenges from "@/components/MasterChallenges";
import { EventBus } from "../../store.js";
import Bootstrap from "bootstrap";
// Import the EventBus we just created.

export default {
  name: "Profil",
  components: {
    MasterBar,
    Inventory,
    MasterChallenges
  },

  data: function() {
    return {
      show:false,
      temp: null,
      effect: require("@/assets/chevalier(2).png")
    };
  },
  mounted() {
    EventBus.$on("emittedEventSort", data => {
      if (this.temp != data) {
        this.effect = data.effect;
        this.temp = data;
      }
    })
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
#chest {
  position: relative;
  top: -200px;
  left: -130px;
}
#Bars {
  padding-left: 25%;
}

.btn-inventaire {
  background-color: rgba(52, 58, 64, 0);
  border: 0px;
}
.modal-content {
  background-color: #343a40;
  border-bottom: 0px;
}
.modal-header,
.modal-footer {
  border-bottom: 0px;
  border-top: 0px;
}
</style>
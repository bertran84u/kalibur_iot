<template>
  <div class="inventory">
    <div
      class="modal fade"
      id="exampleModalScrollable"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalScrollableTitle"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-scrollable" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalScrollableTitle">Inventaire</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <b-card no-body>
              <b-tabs pills card>
                <b-tab title="Sors" active>
                  <b-card-text>
                    <Sorts/>
                  </b-card-text>
                </b-tab>
                <b-tab title="Potions">
                  <b-card-text>
                    <Potions/>
                  </b-card-text>
                </b-tab>
                <b-tab title="Armes" active>
                  <b-card-text>
                    <Armes/>
                  </b-card-text>
                </b-tab>
              </b-tabs>
            </b-card>
          </div>
          <div id="coins">
            <ul>
              <li>
                <img src="@/assets/coins.png" width="25px">
              </li>
              <li>{{nbCoins}}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- <p class="my-4" v-for="i in 20" :key="i">
      Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
      in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
    </p>-->
  </div>

  <!-- </b-button> -->
</template>

<script>
// @ is an alias to /src
import Potions from "@/components/Inventory/Potions.vue";
import Armes from "@/components/Inventory/Armes.vue";
import Sorts from "@/components/Inventory/Sorts.vue";
import Bootstrap from "bootstrap";
export default {
  name: "Inventory",
  components: {
    Potions,
    Armes,
    Sorts
  },

  data: function() {
    return {
      show: false,
      nbCoins: 157
    };
  }, 
};
</script>


<style scoped>
@import url("https://fonts.googleapis.com/css?family=Wendy+One");

ul{
    text-align: left;
}
li{
    color: aliceblue;
    list-style: none;
    display : inline;
}
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
#test {
  position: relative;
  margin-top: 10px;
  left: 50px;
  width: 200px;
}
.modal-title {
  color: aliceblue;
  font-family: "Wendy One", sans-serif;
}
span {
  color: white;
}

.btn-inventaire {
  background-color: rgba(52, 58, 64, 0);
  border: 0px;
}
.modal-content {
  background-color: #343a40;
  border-bottom: 0px;
}

.Armes, .Potions, .Sorts{
  text-align: left;
}
.modal-header,
.modal-footer {
  border-bottom: 0px;
  border-top: 0px;
}
 
</style>
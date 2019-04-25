<template>
  <div class="profil">
    <b-navbar class="header menuk"  variant="info" fixed="top">


  </b-navbar>
    <img alt="avatar" src="../assets/chevalier.png" style="margin-top: 100px" >
    


  <b-navbar class="header navk"  variant="info" fixed="bottom">
    <div class="btn-group g" role="group" aria-label="Basic example">
  <button type="button" class="btn btn-secondary "><img class="icone-nav-bar" alt="icone" src="../assets/dash.png"></button>
  <button type="button" class="btn btn-secondary "><img class="icone-nav-bar" alt="icone" src="../assets/classement.png"></button>
  <button type="button" class="btn btn-secondary "><img class="icone-nav-bar" alt="icone" src="../assets/jeu.png"></button>
</div>
  </b-navbar>
  </div>

  
</template>

<script>
// @ is an alias to /src


export default {
  name: 'profil',
  
}
</script>

</<style scoped>
.navk{
  padding: 0px;
}
.g{
  width: 100%;
  height: 100px;
}

.btn-secondary{

}

.icone-nav-bar{
   width: 75px;
  
}
/* 
.bg-info{
  height:10px !important;
  background: #2c3e50 !important;
} */








/* .profil{
  background:#c5cae9;
} */





</style>

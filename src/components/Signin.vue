<template>
  <div class="formulaire">
    <form class="needs-validation" novalidate>
      <div class="form-row">
        <div class="col-md-4 mb-3">
          <!-- <label for="validationTooltip01">First name</label> -->
          <input
            v-bind="{}"
            type="text"
            class="form-control"
            id="validationTooltip01"
            placeholder="Prenom"
            required
          >
          <div class="valid-tooltip">Looks good!</div>
        </div>
        <div class="col-md-4 mb-3">
          <!-- <label for="validationTooltip02">Last name</label> -->
          <input
            type="text"
            class="form-control"
            id="validationTooltip02"
            placeholder="Nom"
            required
          >
          <div class="valid-tooltip">Looks good!</div>
        </div>
        <div class="col-md-4 mb-3">
          <!-- <label for="validationTooltip02">Last name</label> -->
          <input
            type="text"
            class="form-control"
            id="validationTooltip02"
            placeholder="Email"
            required
          >
          <div class="valid-tooltip">Looks good!</div>
        </div>
        <div class="col-md-6 mb-3">
          <!-- <label for="validationTooltip03">City</label> -->
          <input
            type="text"
            class="form-control"
            id="validationTooltip03"
            placeholder="Ville"
            required
          >
          <div class="invalid-tooltip">Please provide a valid city.</div>
        </div>
        <div class="col-md-3 mb-3">
          <!-- <label for="validationTooltip04">State</label> -->
          <input
            type="text"
            class="form-control"
            id="validationTooltip04"
            placeholder="Pays"
            required
          >
          <div class="invalid-tooltip">Please provide a valid state.</div>
        </div>
        <div class="col-md-3 mb-3">
          <!-- <label for="validationTooltip05">Zip</label> -->
          <input
            type="text"
            class="form-control"
            id="validationTooltip05"
            placeholder="Zip"
            required
          >
          <div class="invalid-tooltip">Please provide a valid zip.</div>
        </div>
      </div>
      <button class="btn btn-primary" type="submit">Validé</button>
    </form>
  </div>
</template>

<script>
export default {};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.btn-home {
  margin: 10px;
}

.g {
  width: 100%;
  height: 100px;
}

.navk {
  padding: 0px;
}

.formulaire {
  padding: 50px;
}
</style>

<template>
  <div class="login">
    <ul>
      <li>
        <div v-if="show" class="formconnexion">
          <div class="input-group flex-nowrap">
            <input
              type="text"
              class="form-control"
              placeholder="Email"
              v-model="input.email"
              aria-describedby="addon-wrapping"
            >
          </div>
          <div class="input-group flex-nowrap">
            <input
              type="text"
              class="form-control"
              placeholder="Mot de passe"
              v-model="input.password"
              aria-describedby="addon-wrapping"
            >
          </div>
        </div>
      </li>
      <li>
        <div v-if="alert" class="alert alert-danger" role="alert">{{ msgAlert }}</div>
      </li>
      <br>
      <li>
        <button v-on:click="login" type="button" class="btn btn-primary btn-login">{{ msg }}</button>
      </li>
      <br>
      <li>
        <button type="button" class="btn btn-primary btn-login" margin-bottom="200px">
          <router-link to="/about">Sign in</router-link>
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      show: false,
      alert: false,
      msgAlert: String,
      msg: "login",
      log: "",
      input: {
        email: "",
        password: ""
      }
    };
  },

  methods: {

    // fonction à decouper en plusieurs fonction
    login: function() {
      if (this.show == false) {
        this.show = true;
        this.msg = "Go!";
      } else {
        if (this.input.email != "" && this.input.password != "") {
          if (this.input.email == "test" || this.input.password == "test") {
            if (this.input.email == "test" && this.input.password == "test") {
              this.$router.replace({ name: "profil" });
            } else {
              this.alert = true;
              this.msgAlert = "Email ou Mot de passe incorrect ";
            }
          } else {
            this.alert = true;
            this.msgAlert = "Compte inconnu";
          }
        } else {
          this.alert = true;
          this.msgAlert = "Email ou Mot de passe manquant";
        }
      }
    }
  }
};
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

.btn {
  margin: 10px;
  padding: 14px 24px;
  border: 0 none;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  width: 200px;
}

.btn:focus,
.btn:active:focus,
.btn.active:focus {
  outline: 0 none;
}

.btn-primary {
  background: rgb(53, 73, 94);
  color: #ffffff;
}

.btn-primary:hover,
.btn-primary:focus,
.btn-primary:active,
.btn-primary.active,
.open > .dropdown-toggle.btn-primary {
  background: rgb(53, 73, 94);
}

.btn-primary:active,
.btn-primary.active {
  background: #8f9900;
  box-shadow: none;
}
</style>

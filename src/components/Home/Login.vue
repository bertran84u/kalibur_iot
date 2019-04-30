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
        <b-button variant="danger" @click="user_login" class="btn btn-primary">{{ label }}</b-button>
      </li>
      <br>

      <li>
        <router-link :to="{name: 'about'}">
          <button class="btn btn-primary">Sign up</button>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      show: false,
      label: "login",
      input: {
        email: "",
        password: ""
      }
    };
  },

  methods: {
    makeToast(variant, msgalert) {
      this.$bvToast.toast(msgalert, {
        title: "Erreur de connexion",
        variant: variant,
        autoHideDelay: 3000,
        solid: true
      });
    },
    // fonction à decouper en plusieurs fonction

    user_login: function() {
      if (this.show === false) {
        this.show = true;
        this.label = "Go!"
      } else {
        if (this.input.email != "" && this.input.password != "") {
          this.$store
            .dispatch("user_login", {
              email: this.input.email,
              password: this.input.password
            })
            .then(response => {
              if (response.data.authentication == 1) {
                this.$router.push({ name: "account" });
              } else {
                this.makeToast("danger", "Email ou mot de passe incorrect");
              }
            });
        } else {
          this.makeToast(
            "danger",
            "veuillez remplir tout les champs pour se connecter"
          );
        }
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  list-style-type: none;
  padding: 0px;
}
li {
  display: inline-block;
  list-style-type: none;
  margin-bottom: 10px;
}
a {
  color: #42b983;
}

.btn {
  border: 0 none;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  width: 200px;
  height: 50px;
}

.btn:focus,
.btn:active:focus,
.btn.active:focus {
  outline: 0 none;
  background: rgb(53, 73, 94);
}

.btn-primary {
  background: rgb(53, 73, 94);
  color: #ffffff;
}
</style>

import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
//const axios = require("axios");

Vue.use(Vuex)

export const EventBus = new Vue();
export const EventBusShow = new Vue();



const endpoint = "https://api.fake-health-data.sherpa.one";
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1NTQ1MDI4OTgsImV4cCI6MTU1OTY4Njg5OH0.uCwHvUCn4FDO81JMQwSUcJrrojq6NPlfUIDqserFOqk";
const config = {
  headers: {
    "x-access-token": token,
    "Content-Type": "Application/json"
  }
};

export const store = new Vuex.Store({
    state: {
      user: localStorage.getItem('logged_user') || null
    },
    getters: {
        userLoggedIn(state) {
            return state.user
        },
    },
    mutations: {
        user_login(state, user) {
            state.user = user
        },
    },

    actions: {
        user_login(context, credentials) {
            // url,body,header
            // post données dans le corps de la requet , pour données critique
            return new Promise((resolve, reject) => {
                axios.post(endpoint+"/people/authenticate", {
                    email: credentials.email,
                    password: credentials.password,
                    }, config
                )
                .then(response => {
                    const user = response.data
                    // enregistre en local les donnée de l'api
                    localStorage.setItem('logged_user', user)
                    context.commit('user_login', user)
                    console.log(response)
                    //this.$actions.user_login_healthdatas
                    resolve(response)
                })
                .catch(error => {
                    console.log(error);//en cas d'erreur
                    reject(error)
                })
            })
        },
    }
  })




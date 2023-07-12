import { createStore } from "vuex";
import axios from "../axios/utils.js";
import router from "../router/route.js";

const store = createStore({
  state: {
    token: localStorage.getItem("token"),
  },
  mutations: {
    SET_TOKEN(state, token) {
      localStorage.setItem("token", token);
    },
  },
  actions: {
    Login({ commit }, client) {
      return new Promise((resolve, reject) => {
        axios
          .post("client-login", client)
          .then((response) => {
            const token = response.data.token;
            console.log(token);
            commit("SET_TOKEN", token);
            router.push("index");
            window.location.reload();
            resolve();
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
  },
  getters: {},
});
export default store;

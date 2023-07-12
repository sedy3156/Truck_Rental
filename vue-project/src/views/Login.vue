<script>
import axios from "../axios/utils.js";
import store from "../store/store.js";
import router from "../router/route";
export default {
  data() {
    return {
      client: {
        email: "",
        password: "",
      },
      Login_error: [],
    };
  },
  methods: {
    go_home() {
      router.push("/");
    },
    Login() {
      const client = this.client;
      console.log(client);
      store
        .dispatch("Login", client)
        .then((response) => {
          // console.log(response)
        })
        .catch((error) => {
          this.Login_error.push(error.data.error);
        });
    },
  },
};
</script>

<template>
  <div class="lg_body"></div>
  <div class="lg_center">
    <h1 @click="go_home()">Login</h1>
    <p>
      Please enter your <span>email</span> and <span>password</span> to log in
      to your account.
    </p>
    <form action="" @submit.prevent="Login()">
      <div class="lg_txt_field">
        <input
          v-model="client.email"
          type="text"
          name=""
          id="lg_text_email"
          required
        />
        <span></span>
        <label for="lg_text_email">Email</label>
      </div>
      <div class="lg_txt_field">
        <input
          v-model="client.password"
          type="password"
          name=""
          id="lg_password"
          required
        />
        <span></span>
        <label for="lg_password">Password</label>
      </div>
      <div class="lg_pass">
        <router-link :to="{ name: 'forgot_password' }"
          >Forgot password?</router-link
        >
      </div>
      <input class="loginbtn" type="submit" value="Login" />
      <div class="lg_signup_link">
        Not a member?
        <router-link :to="{ name: 'register' }"> <a>Sign Up</a></router-link>
      </div>
    </form>
  </div>
</template>

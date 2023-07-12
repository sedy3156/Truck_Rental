<script>
import axios from "../axios/utils.js";
import router from '../router/route.js'
export default {
  data() {
    return {
      client: {
        name: "",
        email: "",
        address: "",
        phone_number: null,
        password: "",
        password_confirmation: "",
      },
    };
  },
  methods: {
    go_home(){
      router.push('/')
    },
    save_client_info() {
      console.log(this.client);
      axios
        .post("create-client", this.client)
        .then((response) => {
          this.$router.replace('email_check')
          this.client = {
            name: "",
            email: "",
            address: "",
            phone_number: null,
            password: "",
            password_confirmation: "",
          };
          console.log(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
};
</script>

<template>
  <div class="lg_body"></div>
  <div class="lg_center">
    <h1 @click="go_home()">Registration</h1>
    <form action="" @submit.prevent="save_client_info()">
      <div class="lg_txt_field">
        <input
          v-model="client.name"
          type="text"
          name=""
          id="lg_text_name"
          required
        />
        <span></span>
        <label for="lg_text_name">Name</label>
      </div>
      <div class="lg_txt_field">
        <input
          v-model="client.email"
          type="email"
          name=""
          id="lg_text_mail"
          required
        />
        <span></span>
        <label for="lg_text_mail">Email</label>
      </div>
      <div class="lg_txt_field">
        <input
          v-model="client.phone_number"
          type="text"
          name=""
          id="lg_text_phone"
          required
        />
        <span></span>
        <label for="lg_text_phone">Phone number</label>
      </div>
      <div class="lg_txt_field">
        <input
          v-model="client.address"
          type="text"
          name=""
          id="lg_text_adress"
          required
        />
        <span></span>
        <label for="lg_text_adress">Adress</label>
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
      <div class="lg_txt_field">
        <input
          v-model="client.password_confirmation"
          type="password"
          name=""
          id="lg_password_conf"
          required
        />
        <span></span>
        <label for="lg_password_conf">Password Confirmation</label>
      </div>
      <input class="loginbtn" type="submit" value="Signup" />
      <div class="lg_signup_link">
        <router-link :to="{ name: 'login' }"> <a>Log In</a></router-link>
      </div>
    </form>
  </div>
</template>

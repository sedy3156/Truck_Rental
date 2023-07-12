<script>
// import { RouterView } from "vue-router";
import axios from "..//axios/utils.js";
import router from "../router/route";
export default {
  data() {
    return {
      validation_code: "",
    };
  },
  methods: {
    send_code() {
      axios
        .post("account-verification", {
          validation_codes: this.validation_code,
        })
        .then((response) => {
          console.log(response.data.token);
          localStorage.setItem("token", response.data.token);
          router.push("index");
          window.location.reload();
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<template>
  <div class="lg_body"></div>
  <div class="lg_center">
    <h1>Verification</h1>
    <form action="" @submit.prevent="send_code()">
      <div class="lg_txt_field">
        <input
          v-model="this.validation_code"
          type="text"
          name=""
          id="lg_text_email"
          required
        />
        <span></span>
        <label for="lg_text_email">Validation code</label>
      </div>
      <input class="loginbtn" type="submit" value="ok" />
      <div class="lg_signup_link">
        <p>
          <span
            >To confirm your account, please check your email for the
            verification code.</span
          >
        </p>
      </div>
    </form>
  </div>
</template>

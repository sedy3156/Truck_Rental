<script setup>
// import { RouterView } from "vue-router";
</script>

<template>
  <div class="lg_body">
    
  </div><div class="lg_center">
      <h1>Forgot Password</h1>
      <form action="">
        <div class="lg_txt_field">
          <input type="text" name="" id="lg_text_email" required />
          <span></span>
          <label for="lg_text_email">Email</label>
        </div>
        <input class="loginbtn" type="submit" value="Send" />
        <div class="lg_signup_link">
          <router-link :to="{ name: 'login' }"> <a>Log in</a></router-link>
        </div>
      </form>
    </div>
</template>

<script setup>
// import { RouterView } from "vue-router";
</script>

<template>
  <div class="lg_body">
    
  </div>
  <div class="lg_center">
      <h1>Login</h1>
      <form action="">
        <div class="lg_txt_field">
          <input type="text" name="" id="lg_text_email" required />
          <span></span>
          <label for="lg_text_email">Email</label>
        </div>
        <div class="lg_txt_field">
          <input type="password" name="" id="lg_password" required />
          <span></span>
          <label for="lg_password">Password</label>
        </div>
        <div class="lg_pass"> <router-link :to="{ name: 'forgot_password' }">Forgot password?</router-link></div>
        <input type="submit" value="Login" />
        <div class="lg_signup_link">
          Not a member?
          <router-link :to="{ name: 'register' }"> <a>Sign Up</a></router-link>
        </div>
      </form>
    </div>
</template>

<script></script>

<template>
  <div class="nav_hero">
    <nav>
      <h2 class="nav_logo">Logo</h2>
      <ul>
        <li>
          <a href="#home">
            <i class="fa fa-home" aria-hidden="true"></i>Home</a
          >
        </li>
        <li><a href="#about"><i class="fa fa-info"></i>About</a></li>
        <li><a href="#service"><i class="fa fa-wrench"></i>Service</a></li>
        <li><a href="#image"><i class="fa fa-image"></i>Related Image</a></li>
        <li><a href="#contact"><i class="fa fa-phone"></i>Contact</a></li>
      </ul>
      <router-link class="nav_btn" :to="{ name: 'register' }"
        >Sign Up</router-link
      >
    </nav>
  </div>
</template>

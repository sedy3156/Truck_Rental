<script setup>
import Car_adding_form from "../components/Car_adding.vue";
import chat from "../components/chat.vue";
</script>

<template>
  <div class="nav_hero">
    <nav>
      <ul>
        <li>
          <router-link :to="{ name: 'index' }"><a href="#"><i class="fa fa-home"></i>Home</a
          ></router-link>
        </li>
        <li>
          <a href="#"> <i class="fa fa-calendar"></i>Reservation</a>
        </li>
        <li>
          <a href="#">
            <i class="fa fa-comments" aria-hidden="true"></i>Movers' Exchange</a
          >
        </li>
      </ul>
      <div class="notification-logout">
        <i class="notification fa fa-bell" aria-hidden="true"></i
        ><i class="logout fa fa-sign-out"></i>
      </div>
    </nav>
  </div>
  <Car_adding_form />
  <!-- <chat /> -->
</template>

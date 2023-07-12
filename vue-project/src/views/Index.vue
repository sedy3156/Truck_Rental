<script setup>
import sort_form from "../components/sort_form.vue";
import Car_adding_form from "../components/Car_adding.vue";
import router from "../router/route";

function logout() {
  localStorage.removeItem("token");
  router.push("login");
  window.location.reload();
}
</script>

<template>
  <div class="nav_hero">
    <nav>
      <ul>
        <li>
          <a href="#" class="active"><i class="fa fa-home"></i>Home</a>
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
        ><i @click="logout()" class="logout fa fa-sign-out"></i>
      </div>
    </nav>
  </div>
  <sort_form />
</template>

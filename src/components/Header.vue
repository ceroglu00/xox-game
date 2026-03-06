<template>
  <v-app-bar scroll-behavior="elevate">
    <v-app-bar-nav-icon @click="openMenu=!openMenu" class="hidden-sm-and-up" icon="mdi-menu">

    </v-app-bar-nav-icon>
    <v-app-bar-title>
      <div class="d-flex align-center justify-center justify-sm-start">
        <v-img class="ml-n10 ml-sm-0" inline src="@/Assets/logo.avif" width="50"></v-img>
        <span class="ml-2 font-weight-black">XOX ÇILGIN GAMEPLAY</span>
      </div>
    </v-app-bar-title>


    <div name="BUTTONLAR" class="hidden-sm-and-down">
      <div class="d-flex ga-2">
        <v-btn v-for="button in menuItems" :class="button.class" :prepend-icon="button.icon">
          {{ button.value }}
        </v-btn>
      </div>

    </div>


  </v-app-bar>


  <v-navigation-drawer v-model="openMenu">
    <v-list-item v-for="button in menuItems">

      <v-btn block :class="button.class">
        <template #prepend>
          <v-icon :icon="button.icon"></v-icon>
        </template>
        {{ button.value }}
      </v-btn>
    </v-list-item>
  </v-navigation-drawer>


</template>

<script setup>
import {ref} from "vue";

var openMenu = ref(false);


var menuItems = [
  {
    value: "Nasıl Oynanır",
    icon: "mdi-book-outline",
    class: "bg-grey"
  },
  {
    value: "Login",
    icon: "mdi-login",
    class: "bg-green"
  },
  {
    value: "Logout",
    icon: "mdi-logout",
    class: "bg-error"
  }
]

</script>


<style scoped>

</style>

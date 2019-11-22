<template>
  <v-app>
    <nav-bar />
    <demo />
  </v-app>
</template>

<script>
import NavBar from "./components/NavBar";
import Demo from "./components/Demo";

export default {
  name: "App",

  components: {
    NavBar,
    Demo
  },

  data: () => ({
    //
  })
};
</script>
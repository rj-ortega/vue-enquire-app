<template>
  <v-app>
    <nav-bar />
    <vue-particles
      color="#3fb0ef"
      :particleOpacity=".6"
      :particlesNumber="80"
      shapeType="circle"
      :particleSize="4"
      linesColor="#dedede"
      :linesWidth="1.3"
      :lineLinked="true"
      :lineOpacity="0.5"
      :linesDistance="150"
      :moveSpeed="3"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push"
    ></vue-particles>
  </v-app>
</template>

<script>
import NavBar from "./components/NavBar";
import Demo from "./components/Demo";

const routes = [{ path: "/demo", component: Demo }];
export default {
  name: "App",
  routes,
  components: {
    NavBar,
    Demo
  }
}.$mount("#app");
</script>
<style>
html,
body {
  height: 100%;
}
.demo {
  z-index: 999;
}
#particles-js {
  position: absolute;
  height: 100%;
  width: 100%;
}
</style>
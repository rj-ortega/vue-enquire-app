<template>
  <section>
    <v-app-bar color="#3fafef" class="nav-bar" dark>
      <v-toolbar-title class="nav-title">progress.io</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <router-link :to="{demo: 'demo'}">
          <v-btn x-large text>Demo</v-btn>
        </router-link>
      </v-toolbar-items>
    </v-app-bar>
  </section>
</template>

<script>
export default {
  name: "NavBar"
};
</script>

<style scoped>
.nav-title {
  font-size: 30px;
}
section {
  font-size: 20px;
  z-index: 999;
}
</style>
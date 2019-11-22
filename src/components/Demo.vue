<template>
  <v-container>
    <v-row dense>
      <v-col cols="12" v-for="member in members" :key="member.id">
        <card :member="member" :selected="selected" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Card from "./Card";
import API from "../lib/api.js";

export default {
  name: "Demo",
  data() {
    return {
      members: [],
      selected: {}
    };
  },
  mounted() {
    this.members = API.getMembers();
  },
  components: {
    Card
  }
};
</script>
<template>
  <v-container>
    <progressCard v-if="selected.id" :selected="selected" />
    <v-row>
      <v-col cols="12" v-for="member in members" :key="member.id">
        <card :member="member" :selected.sync="selected" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Card from "./Card";
import ProgressCard from "./ProgressCard";
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
    Card,
    ProgressCard
  }
};
</script>
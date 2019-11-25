<template>
  <v-container class="demo">
    <progress-card v-if="selected.id" :selected="selected" />
    <skeleton-card v-else />
    <v-row>
      <v-col cols="12" v-for="member in members" :key="member.id">
        <card :member="member" :selected.sync="selected" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Card from "../components/Card";
import ProgressCard from "../components/ProgressCard";
import API from "../lib/api.js";
import SkeletonCard from "../components/SkeletonCard";

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
    ProgressCard,
    SkeletonCard
  }
};
</script>

<style>
.demo {
  z-index: 999;
}
</style>
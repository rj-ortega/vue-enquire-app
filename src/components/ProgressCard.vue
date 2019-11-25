<template>
  <v-card class="mx-auto" max-width="344" outlined>
    <v-list-item class="v-d-flex justify-space-between">
      <v-list-item-content>{{selected.name}}</v-list-item-content>
      <v-list-item-content class="justify-end">{{value}}%</v-list-item-content>
    </v-list-item>
    <v-progress-linear color="light-blue" height="25" :value="value" striped></v-progress-linear>
    <v-tooltip right>
      <template v-slot:activator="{ on }">
        <div v-on="on">
          <v-stepper alt-labels :value="firstKey">
            <v-stepper-header>
              <v-stepper-step step="1" :complete="firstKey > 1"></v-stepper-step>
              <v-divider></v-divider>
              <v-stepper-step step="2" :complete="firstKey > 2"></v-stepper-step>
              <v-divider></v-divider>
              <v-stepper-step step="3" :complete="firstKey > 3"></v-stepper-step>
              <v-divider></v-divider>
              <v-stepper-step step="4"></v-stepper-step>
            </v-stepper-header>
          </v-stepper>
        </div>
      </template>
      <span>
        1: Inquiry
        <br />2: Tour
        <br />3: Deposit
        <br />4: Move-In
      </span>
    </v-tooltip>
  </v-card>
</template>

<script>
export default {
  name: "ProgressCard",
  props: ["selected"],
  data() {
    return {
      value: 0
    };
  },
  computed: {
    firstKey: function() {
      return Object.keys(this.selected.sales_stage)[0];
    }
  },
  methods: {
    updateValue: function() {
      switch (this.firstKey) {
        case "1":
          this.value = 25;
          break;
        case "2":
          this.value = 50;
          break;
        case "3":
          this.value = 75;
          break;
        case "4":
          this.value = 100;
          break;
      }
    }
  },
  created() {
    this.updateValue();
  },
  updated() {
    this.updateValue();
  }
};
</script>
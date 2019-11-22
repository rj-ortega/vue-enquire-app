<template>
  <v-card
    class="mx-auto"
    v-bind:class="{ selected: isSelected }"
    max-width="344"
    outlined
    v-model="selected"
    @click="this.handleClick"
  >
    <v-list-item three-line>
      <v-list-item-content>
        <div class="overline mb-4" v-if="member.active">
          <v-icon x-small color="green">mdi-check-circle</v-icon>&nbsp;Active
        </div>
        <div class="overline mb-4" v-else>
          <v-icon x-small color="red">mdi-minus-circle</v-icon>&nbsp;Unactive
        </div>
        <v-list-item-title class="headline mb-1">{{member.name}}</v-list-item-title>
        <v-list-item-subtitle>{{member.phone_number}}</v-list-item-subtitle>
        <v-list-item-subtitle>{{member.email}}</v-list-item-subtitle>
      </v-list-item-content>
      <v-list-item-avatar tile size="80">
        <img
          src="https://cdn0.iconfinder.com/data/icons/user-pictures/100/matureman2-512.png"
          alt="Old Man"
        />
      </v-list-item-avatar>
    </v-list-item>

    <v-card-actions>
      <v-btn text>Select</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "Card",
  props: ["member", "selected"],
  updated() {
    if (this.member.id === this.selected.id) {
      this.isSelected = true;
    } else {
      this.isSelected = false;
    }
  },
  methods: {
    handleClick() {
      if (this.member.id === this.selected.id) {
        this.$emit("update:selected", {});
      } else {
        this.$emit("update:selected", this.member);
      }
    }
  },
  data() {
    return {
      isSelected: false
    };
  }
};
</script>

<style>
.selected {
  background-color: #ccedff !important;
}
</style>
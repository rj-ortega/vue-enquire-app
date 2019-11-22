<template>
  <v-card
    class="mx-auto"
    max-width="344"
    outlined
    v-on:click="this.$emit('update:selected', member)"
  >
    <v-list-item three-line>
      <v-list-item-content>
        <div class="overline mb-4" v-if="member.active">
          <v-icon x-small color="green">mdi-check</v-icon>&nbsp;Active
        </div>
        <div class="overline mb-4" v-else>
          <v-icon x-small color="red">mdi-minus-circle</v-icon>&nbsp;Unactive
        </div>
        <v-list-item-title class="headline mb-1">{{member.name}}</v-list-item-title>
        <v-list-item-text>{{member.phone_number}}</v-list-item-text>
        <v-list-item-text>{{member.email}}</v-list-item-text>
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
  props: ["member", "selected"]
};
</script>
<template>
  <v-card class="mx-auto" max-width="344" outlined>
    <v-list-item three-line>
      <v-list-item-content>
        <div class="overline mb-4" v-if="member.active">Active</div>
        <div class="overline mb-4" v-else>Unactive</div>
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
  props: ["member"]
};

// "id": 1,
//             "name": "Zach Grinke",
//             "relationship": "spouse",
//             "phone_number": "555-555-5555",
//             "email": "zach@enquire.com",
//             "created_at": 1574287127576,
//             "active": true
</script>
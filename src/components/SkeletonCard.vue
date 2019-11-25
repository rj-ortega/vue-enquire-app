<template>
  <v-sheet class="mx-auto" max-width="344" height="158">
    <v-skeleton-loader ref="skeleton" boilerplate type="table-heading, list-item@2"></v-skeleton-loader>
  </v-sheet>
</template>

<script>
export default {
  name: "SkeletonCard"
};
</script>
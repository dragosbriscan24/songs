<script setup lang="ts">
defineProps<{
  albums: any;
}>();
</script>

<template>
  <div class="albums-wrapper">
    <p v-for="(album, index) in albums" :key="`album-${index}`">
      {{ album.title }}
    </p>
  </div>
</template>

<style scoped>
.albums-wrapper {
  margin-left: 1rem;
}
</style>

<script setup lang="ts">
import { ref } from "vue";

/* Components */
import AlbumsList from "./AlbumsList.vue";

/* Data */
import data from "@/data/songs.json";

const artists = ref(data.artists);
</script>

<template>
  <div v-for="(artist, index) in artists" :key="`artist-${index}`">
    <p class="artist-name">
      {{ artist.name }}
    </p>
    <AlbumsList :albums="artist.albums" />
  </div>
</template>

<style scoped>
.artist-name {
  font-weight: 700;
}
</style>

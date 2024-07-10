<script setup lang="ts">
import ArtistsList from "@/components/Songs/ArtistsList.vue";
</script>

<template>
  <main>
    <ArtistsList />

    <RouterLink
      :to="{
        name: 'home',
      }"
    >
      <button>Go to Home</button>
    </RouterLink>
  </main>
</template>

<style scoped></style>

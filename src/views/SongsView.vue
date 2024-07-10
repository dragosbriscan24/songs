<script setup lang="ts">
import SongsList from "@/components/Songs/SongsList.vue";
</script>

<template>
  <main>
    <SongsList />

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

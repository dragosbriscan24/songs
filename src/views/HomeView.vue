<script setup lang="ts">
import HelloWorld from "@/components/Home/HelloWorld.vue";
</script>

<template>
  <main>
    <HelloWorld />

    <RouterLink
      :to="{
        name: 'songs',
      }"
    >
      <button>Go to Songs</button>
    </RouterLink>
  </main>
</template>

<style scoped></style>

<script setup lang="ts">
import LanguageToggle from './components/LanguageToggle.vue'
</script>

<template>
  <div class="min-h-screen bg-[#0d1117] text-white">
    <LanguageToggle />
    <router-view />
  </div>
</template>

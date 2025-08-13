<script setup lang="ts">
import LanguageToggle from './components/LanguageToggle.vue'
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 text-gray-900">
    <LanguageToggle />
    <router-view />
  </div>
</template>

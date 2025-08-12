<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { locale, t } = useI18n()

const toggleLanguage = () => {
  locale.value = locale.value === 'ko' ? 'en' : 'ko'
}
</script>

<template>
  <button 
    @click="toggleLanguage"
    class="fixed top-4 right-4 z-50 bg-white/80 backdrop-blur-sm border border-white/30 hover:border-blue-400 text-gray-700 hover:text-blue-600 px-4 py-2 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-400/20 font-medium"
  >
    {{ t('toggleLanguage') }}
  </button>
</template> 
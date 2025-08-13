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
    class="bg-white/60 backdrop-blur-sm border border-white/30 hover:border-blue-400 text-gray-700 hover:text-blue-600 px-3 py-2 rounded-lg transition-all duration-300 hover:shadow-sm hover:shadow-blue-400/20 font-medium text-sm"
  >
    {{ t('toggleLanguage') }}
  </button>
</template> 
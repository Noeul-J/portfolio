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
    class="fixed top-4 right-4 z-50 bg-[#21262d] border border-[#30363d] hover:border-[#93c5fd] text-[#93c5fd] px-4 py-2 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-[#93c5fd]/20 font-medium"
  >
    {{ t('toggleLanguage') }}
  </button>
</template> 
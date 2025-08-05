<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <section class="max-w-4xl">
    <div class="space-y-8">
      <!-- 메인 인트로 -->
      <div class="bg-[#21262d] p-6 rounded-lg border border-[#30363d]">
        <h2 class="text-lg font-semibold text-[#93c5fd] mb-3">
          {{ t('aboutMe') }}
        </h2>
        <p class="text-lg font-medium text-white leading-relaxed">
          {{ t('aboutMeDescription') }}
        </p>
      </div>
      
      <!-- 주요 내용 -->
      <div class="space-y-6">
        <div class="bg-[#21262d] p-6 rounded-lg border border-[#30363d] hover:border-[#93c5fd] transition-colors duration-300">
          <h3 class="text-lg font-semibold text-[#93c5fd] mb-3">{{ t('backgroundExpertise') }}</h3>
          <p class="text-[#c9d1d9] leading-relaxed">
            {{ t('backgroundExpertiseDescription') }}
          </p>
        </div>
        
        <div class="bg-[#21262d] p-6 rounded-lg border border-[#30363d] hover:border-[#93c5fd] transition-colors duration-300">
          <h3 class="text-lg font-semibold text-[#93c5fd] mb-3">{{ t('professionalJourney') }}</h3>
          <p class="text-[#c9d1d9] leading-relaxed">
            {{ t('professionalJourneyDescription') }}
          </p>
        </div>
        
        <div class="bg-[#21262d] p-6 rounded-lg border border-[#30363d] hover:border-[#93c5fd] transition-colors duration-300">
          <h3 class="text-lg font-semibold text-[#93c5fd] mb-3">{{ t('currentFocus') }}</h3>
          <p class="text-[#c9d1d9] leading-relaxed">
            {{ t('currentFocusDescription') }}
          </p>
        </div>
        
        <div class="bg-[#21262d] p-6 rounded-lg border border-[#30363d] hover:border-[#93c5fd] transition-colors duration-300">
          <h3 class="text-lg font-semibold text-[#93c5fd] mb-3">{{ t('whatDrivesMe') }}</h3>
          <p class="text-[#c9d1d9] leading-relaxed">
            {{ t('whatDrivesMeDescription') }}
          </p>
        </div>
        
        <div class="bg-[#21262d] p-6 rounded-lg border border-[#30363d] hover:border-[#93c5fd] transition-colors duration-300">
          <h3 class="text-lg font-semibold text-[#93c5fd] mb-3">{{ t('beyondWork') }}</h3>
          <p class="text-[#c9d1d9] leading-relaxed">
            {{ t('beyondWorkDescription') }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
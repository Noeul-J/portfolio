<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <section class="max-w-4xl">
    <div class="space-y-8">
      <!-- 메인 인트로 -->
      <div class="bg-[#21262d] p-6 rounded-lg border border-[#30363d]">
        <h2 class="text-2xl font-bold bg-gradient-to-r from-[#93c5fd] to-[#60a5fa] bg-clip-text text-transparent mb-4">
          {{ t('aboutMe') }}
        </h2>
        <p class="text-lg font-medium text-white leading-relaxed">
          I'm a developer who thrives at the intersection of logic and impact.
        </p>
      </div>
      
      <!-- 주요 내용 -->
      <div class="space-y-6">
        <div class="bg-[#21262d] p-6 rounded-lg border border-[#30363d] hover:border-[#93c5fd] transition-colors duration-300">
          <h3 class="text-lg font-semibold text-[#93c5fd] mb-3">{{ t('backgroundExpertise') }}</h3>
          <p class="text-[#c9d1d9] leading-relaxed">
            With a strong foundation in automation and a deep interest in building scalable web applications, I take pride in solving real-world problems through clean and thoughtful code.
          </p>
        </div>
        
        <div class="bg-[#21262d] p-6 rounded-lg border border-[#30363d] hover:border-[#93c5fd] transition-colors duration-300">
          <h3 class="text-lg font-semibold text-[#93c5fd] mb-3">{{ t('professionalJourney') }}</h3>
          <p class="text-[#c9d1d9] leading-relaxed">
            My background includes years of experience in process automation (RPA) and backend development, where I've worked closely with cross-functional teams to streamline operations and build internal tools that matter.
          </p>
        </div>
        
        <div class="bg-[#21262d] p-6 rounded-lg border border-[#30363d] hover:border-[#93c5fd] transition-colors duration-300">
          <h3 class="text-lg font-semibold text-[#93c5fd] mb-3">{{ t('currentFocus') }}</h3>
          <p class="text-[#c9d1d9] leading-relaxed">
            Recently, I've shifted my focus to frontend development using Vue.js, TypeScript, and Tailwind CSS, exploring how great UX and maintainable architecture go hand in hand.
          </p>
        </div>
        
        <div class="bg-[#21262d] p-6 rounded-lg border border-[#30363d] hover:border-[#93c5fd] transition-colors duration-300">
          <h3 class="text-lg font-semibold text-[#93c5fd] mb-3">{{ t('whatDrivesMe') }}</h3>
          <p class="text-[#c9d1d9] leading-relaxed">
            What excites me most is designing business logic that truly reflects a product's purpose — whether that means architecting a data pipeline, crafting a custom API, or translating a fuzzy requirement into something that actually works.
          </p>
        </div>
        
        <div class="bg-[#21262d] p-6 rounded-lg border border-[#30363d] hover:border-[#93c5fd] transition-colors duration-300">
          <h3 class="text-lg font-semibold text-[#93c5fd] mb-3">{{ t('beyondWork') }}</h3>
          <p class="text-[#c9d1d9] leading-relaxed">
            Outside of work, I'm passionate about learning, whether that's picking up a new language (currently improving my Japanese), exploring digital design, or studying cognitive science.
          </p>
        </div>
      </div>
      
      <!-- 기술 스택 하이라이트 -->
      <div class="bg-gradient-to-r from-[#1e3a8a] to-[#3b82f6] p-6 rounded-lg">
        <h3 class="text-lg font-semibold text-white mb-4">{{ t('coreTechnologies') }}</h3>
        <div class="flex flex-wrap gap-3">
          <span class="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-medium">Vue.js</span>
          <span class="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-medium">TypeScript</span>
          <span class="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-medium">RPA</span>
          <span class="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-medium">Automation</span>
          <span class="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-medium">Web Development</span>
        </div>
      </div>
    </div>
  </section>
</template>
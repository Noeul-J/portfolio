<script setup lang="ts">
import About from '../components/about.vue'
import LeftSide from '../components/leftSide.vue'
import SkillSet from '../components/SkillSet.vue'
import ProjectSummary from '../components/ProjectSummary.vue'
import Footer from '../components/Footer.vue'
import LanguageToggle from '../components/LanguageToggle.vue'
import { ref } from 'vue'
import Experience from '../components/experience.vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const activeMenu = ref('About')

const showComponent = (menu: string) => {
  activeMenu.value = menu
}
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <!-- Top Navigation Bar -->
    <div class="fixed top-0 left-0 right-0 z-40 bg-white/80 backdrop-blur-sm border-b border-gray-200/50">
      <div class="max-w-7xl mx-auto px-4 lg:px-8 xl:px-12">
        <div class="flex items-center justify-between h-16">
          <!-- Logo/Title -->
          <div class="text-xl font-bold text-gray-800">
            Portfolio
          </div>
          
          <!-- Navigation Menu -->
          <div class="flex items-center space-x-4">
            <div class="bg-white/60 backdrop-blur-sm rounded-xl p-1 shadow-sm border border-white/30">
              <ul class="flex space-x-1">
                <li>
                  <button 
                    @click="showComponent('About')" 
                    :class="activeMenu === 'About' ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-sm' : 'text-gray-700 hover:text-blue-600 hover:bg-white/50'"
                    class="px-4 py-2 rounded-lg font-medium transition-all duration-300 text-sm"
                  >
                    {{ t('about') }}
                  </button>
                </li>
                <li>
                  <button 
                    @click="showComponent('Skill')" 
                    :class="activeMenu === 'Skill' ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-sm' : 'text-gray-700 hover:text-blue-600 hover:bg-white/50'"
                    class="px-4 py-2 rounded-lg font-medium transition-all duration-300 text-sm"
                  >
                    {{ t('skills') }}
                  </button>
                </li>
                <li>
                  <button 
                    @click="showComponent('Experience')" 
                    :class="activeMenu === 'Experience' ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-sm' : 'text-gray-700 hover:text-blue-600 hover:bg-white/50'"
                    class="px-4 py-2 rounded-lg font-medium transition-all duration-300 text-sm"
                  >
                    {{ t('experience') }}
                  </button>
                </li>
                <li>
                  <button 
                    @click="showComponent('Project')" 
                    :class="activeMenu === 'Project' ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-sm' : 'text-gray-700 hover:text-blue-600 hover:bg-white/50'"
                    class="px-4 py-2 rounded-lg font-medium transition-all duration-300 text-sm"
                  >
                    {{ t('projects') }}
                  </button>
                </li>
              </ul>
            </div>
            
            <!-- Language Toggle -->
            <LanguageToggle />
          </div>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="flex-1 flex items-start justify-center pt-20">
      <div class="w-full max-w-7xl mx-auto px-4 lg:px-8 xl:px-12">
        <!-- Content Area -->
        <div class="grid grid-cols-1 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 gap-6 lg:gap-8">
          <!-- Left Column: Profile Info -->
          <div class="lg:col-span-2 xl:col-span-2 2xl:col-span-2 order-2 lg:order-1">
            <div class="lg:sticky lg:top-20">
              <LeftSide />
            </div>
          </div>
          
          <!-- Right Column: Content -->
          <div class="lg:col-span-3 xl:col-span-4 2xl:col-span-5 order-1 lg:order-2">
            <!-- Content Area -->
            <div class="bg-white/60 backdrop-blur-sm rounded-2xl border border-white/30 shadow-lg overflow-hidden">
              <div class="h-[calc(100vh-120px)] lg:h-[calc(100vh-140px)] overflow-y-auto custom-scrollbar">
                <!-- About Section -->
                <About v-if="activeMenu === 'About'" />
                
                <!-- Skills Section -->
                <SkillSet v-else-if="activeMenu === 'Skill'" />
                
                <!-- Experience Section -->
                <Experience v-else-if="activeMenu === 'Experience'" />
                
                <!-- Projects Section -->
                <ProjectSummary v-else-if="activeMenu === 'Project'" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <Footer />
  </div>
</template>

<style scoped>
.custom-scrollbar::-webkit-scrollbar {
  width: 6px;
}

.custom-scrollbar::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.2);
  border-radius: 3px;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background: rgba(59, 130, 246, 0.4);
  border-radius: 3px;
  transition: background 0.3s ease;
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: rgba(59, 130, 246, 0.7);
}

/* 스크롤바가 나타날 때 부드러운 애니메이션 */
.custom-scrollbar {
  transition: all 0.3s ease;
}

/* 스크롤바가 숨겨져 있을 때는 더 얇게 */
.custom-scrollbar:hover::-webkit-scrollbar-thumb {
  background: rgba(59, 130, 246, 0.7);
}
</style>
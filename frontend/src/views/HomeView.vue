<script setup lang="ts">
import About from '../components/about.vue'
import LeftSide from '../components/leftSide.vue'
import SkillSet from '../components/SkillSet.vue'
import ProjectSummary from '../components/ProjectSummary.vue'
import Footer from '../components/Footer.vue'
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
    <div class="flex-1 flex items-start justify-center pt-8">
      <div class="w-full max-w-7xl mx-auto px-6 lg:px-8">
        <!-- Content Area -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <!-- Left Column: Profile Info -->
          <div class="lg:col-span-1 lg:sticky lg:top-25 lg:h-fit">
            <LeftSide />
          </div>
          
          <!-- Right Column: Navigation & Content -->
          <div class="lg:col-span-2">
            <!-- Navigation Menu -->
            <div class="flex justify-center lg:justify-start mb-8">
              <div class="bg-white/80 backdrop-blur-sm rounded-2xl p-2 shadow-lg border border-white/20">
                <ul class="flex flex-wrap justify-center lg:justify-start space-x-2">
                  <li>
                    <button 
                      @click="showComponent('About')" 
                      :class="activeMenu === 'About' ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-md' : 'text-gray-700 hover:text-blue-600 hover:bg-white/50'"
                      class="px-6 py-3 rounded-xl font-medium transition-all duration-300 text-sm"
                    >
                      {{ t('about') }}
                    </button>
                  </li>
                  <li>
                    <button 
                      @click="showComponent('Skill')" 
                      :class="activeMenu === 'Skill' ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-md' : 'text-gray-700 hover:text-blue-600 hover:bg-white/50'"
                      class="px-6 py-3 rounded-xl font-medium transition-all duration-300 text-sm"
                    >
                      {{ t('skills') }}
                    </button>
                  </li>
                  <li>
                    <button 
                      @click="showComponent('Experience')" 
                      :class="activeMenu === 'Experience' ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-md' : 'text-gray-700 hover:text-blue-600 hover:bg-white/50'"
                      class="px-6 py-3 rounded-xl font-medium transition-all duration-300 text-sm"
                    >
                      {{ t('experience') }}
                    </button>
                  </li>
                  <li>
                    <button 
                      @click="showComponent('Project')" 
                      :class="activeMenu === 'Project' ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-md' : 'text-gray-700 hover:text-blue-600 hover:bg-white/50'"
                      class="px-6 py-3 rounded-xl font-medium transition-all duration-300 text-sm"
                    >
                      {{ t('projects') }}
                    </button>
                  </li>
                </ul>
              </div>
            </div>
            
            <!-- Content Area -->
            <div class="h-[700px] overflow-y-auto custom-scrollbar">
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
    
    <Footer />
  </div>
</template>

<style scoped>
.custom-scrollbar::-webkit-scrollbar {
  width: 8px;
}

.custom-scrollbar::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background: rgba(59, 130, 246, 0.5);
  border-radius: 4px;
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: rgba(59, 130, 246, 0.8);
}

/* 스크롤바가 나타날 때 부드러운 애니메이션 */
.custom-scrollbar {
  transition: all 0.3s ease;
}

/* 스크롤바가 숨겨져 있을 때는 더 얇게 */
.custom-scrollbar:hover::-webkit-scrollbar-thumb {
  background: rgba(59, 130, 246, 0.8);
}
</style>
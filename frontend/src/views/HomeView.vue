<script setup lang="ts">
import About from '../components/about.vue'
import LeftSide from '../components/leftSide.vue'
import SkillSet from '../components/SkillSet.vue'
import ProjectSummary from '../components/ProjectSummary.vue'
import Footer from '../components/Footer.vue'
import { ref } from 'vue'
import Experience from '../components/experience.vue'

const activeMenu = ref('About')

const showComponent = (menu: string) => {
  activeMenu.value = menu
}
</script>

<template>
  <div class="min-h-screen flex flex-col bg-[#0d1117]">
    <div class="flex-1 flex items-start justify-center pt-8">
      <div class="w-full max-w-7xl mx-auto px-6 lg:px-8">
        <!-- Content Area -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <!-- Left Column: Profile Info -->
          <div class="lg:col-span-1 lg:sticky lg:top-25 lg:h-fit">
            <LeftSide />
          </div>
          
          <!-- Right Column: Navigation & Content -->
          <div class="lg:col-span-2">
            <!-- Navigation Menu -->
            <div class="flex justify-center lg:justify-start mb-8">
              <ul class="flex flex-wrap justify-center lg:justify-start space-x-6 lg:space-x-8">
                <li>
                  <button 
                    @click="showComponent('About')" 
                    :class="activeMenu === 'About' ? 'text-blue-400 border-b-2 border-blue-400' : 'text-[#c9d1d9] hover:text-blue-400'"
                    class="px-4 py-2 transition-colors duration-300"
                  >
                    About
                  </button>
                </li>
                <li>
                  <button 
                    @click="showComponent('Skill')" 
                    :class="activeMenu === 'Skill' ? 'text-blue-400 border-b-2 border-blue-400' : 'text-[#c9d1d9] hover:text-blue-400'"
                    class="px-4 py-2 transition-colors duration-300"
                  >
                    Skills
                  </button>
                </li>
                <li>
                  <button 
                    @click="showComponent('Experience')" 
                    :class="activeMenu === 'Experience' ? 'text-blue-400 border-b-2 border-blue-400' : 'text-[#c9d1d9] hover:text-blue-400'"
                    class="px-4 py-2 transition-colors duration-300"
                  >
                    Experience
                  </button>
                </li>
                <li>
                  <button 
                    @click="showComponent('Project')" 
                    :class="activeMenu === 'Project' ? 'text-blue-400 border-b-2 border-blue-400' : 'text-[#c9d1d9] hover:text-blue-400'"
                    class="px-4 py-2 transition-colors duration-300"
                  >
                    Projects
                  </button>
                </li>
              </ul>
            </div>
            
            <!-- Content Area -->
            <div class="h-[800px] overflow-y-auto custom-scrollbar">
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
.custom-scrollbar {
  scrollbar-width: thin;
  scrollbar-color: #3b82f6 #1e293b;
}

.custom-scrollbar::-webkit-scrollbar {
  width: 8px;
}

.custom-scrollbar::-webkit-scrollbar-track {
  background: #1e293b;
  border-radius: 4px;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background: #3b82f6;
  border-radius: 4px;
  transition: background 0.3s ease;
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: #60a5fa;
}

/* 스크롤바가 나타날 때 부드러운 애니메이션 */
.custom-scrollbar {
  transition: all 0.3s ease;
}

/* 스크롤바가 숨겨져 있을 때는 더 얇게 */
.custom-scrollbar:hover::-webkit-scrollbar-thumb {
  background: #3b82f6;
}
</style>
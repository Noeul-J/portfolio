<script setup lang="ts">
import About from '../components/about.vue'
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
  <div class="min-h-screen flex flex-col">
    <div class="flex items-center justify-center">
      <div class="w-full max-w-8xl mx-auto px-50 py-16">
        <!-- Navigation Menu -->
        <div class="flex justify-center mb-8">
          <ul class="flex space-x-8">
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
                Skills and Techniques
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
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <!-- Left Column: Experience -->
          <div class="lg:col-span-1">
            <Experience />
          </div>
          
          <!-- Right Column: Dynamic Content -->
          <div class="lg:col-span-2">
            <!-- About Section -->
            <About v-if="activeMenu === 'About'" />
            
            <!-- Skills Section -->
            <SkillSet v-else-if="activeMenu === 'Skill'" />
            
            <!-- Projects Section -->
            <ProjectSummary v-else-if="activeMenu === 'Project'" />
          </div>
        </div>
        
      </div>
    </div>
    
    <Footer />
  </div>
</template>
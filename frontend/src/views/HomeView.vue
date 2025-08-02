<script setup lang="ts">
import Header from '../components/Header.vue'
import SkillSet from '../components/SkillSet.vue'
import ProjectSummary from '../components/ProjectSummary.vue'
import Introduce from '../components/Introduce.vue'
import Footer from '../components/Footer.vue'
import { ref } from 'vue'

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
          <!-- Left Column: Introduce -->
          <div class="lg:col-span-1">
            <Introduce />
          </div>
          
          <!-- Right Column: Dynamic Content -->
          <div class="lg:col-span-2">
            <div v-if="activeMenu === 'About'" class="bg-[#161b22] rounded-xl border-[#30363d] p-6">
              <h2 class="text-2xl font-bold text-white mb-4">About Me</h2>
              <p class="text-[#c9d1d9] leading-relaxed">
                안녕하세요! 저는 풀스택 개발자이자 RPA 전문가입니다. 
                새로운 기술을 배우는 것을 좋아하며, 실용적인 솔루션을 만드는 데 열정을 가지고 있습니다.
                팀워크를 통해 의미 있는 프로젝트를 완성하는 것을 즐기며, 
                지속적인 성장과 혁신을 추구합니다.
              </p>
            </div>
            
            <div v-else-if="activeMenu === 'Skill'">
              <SkillSet />
            </div>
            
            <div v-else-if="activeMenu === 'Project'">
              <ProjectSummary />
            </div>
          </div>
        </div>
        
      </div>
    </div>
    
    <Footer />
  </div>
</template>
<script setup lang="ts">
import Header from '../components/Header.vue'
import SkillSet from '../components/SkillSet.vue'
import ProjectSummary from '../components/ProjectSummary.vue'
import Introduce from '../components/Introduce.vue'
import Footer from '../components/Footer.vue'

</script>

<template>
  <div class="min-h-screen flex flex-col">
    <Header />
  
    <div class="flex items-center justify-center">
      <div class="w-full max-w-8xl mx-auto px-50 py-16">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <!-- Left Column: SkillSet -->
          <div>
            <Introduce />
          </div>
          <div class="lg:col-span-1">
            <SkillSet />
          </div>
          
          <!-- Right Column: ProjectSummary -->
          <div class="lg:col-span-2">
            <ProjectSummary />
          </div>
        </div>
      </div>
    </div>
    
    <Footer />
  </div>
</template>
<script setup lang="ts">
import Header from '../components/Header.vue'
import TechStack from '../components/TechStack.vue'
import ProjectSummary from '../components/ProjectSummary.vue'
import Introduce from '../components/Introduce.vue'
import Footer from '../components/Footer.vue'

</script>

<template>
  <div>
    <Header />
    
    <div class="max-w-8xl mx-auto px-6 py-16">
    <Introduce />
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <!-- Left Column: TechStack -->
        <div class="lg:col-span-1 space-y-20">
          <TechStack />
        </div>
        
        <!-- Right Column: ProjectSummary -->
        <div class="lg:col-span-2">
          <ProjectSummary />
        </div>
      </div>
    </div>
    
    <Footer />
  </div>
</template>
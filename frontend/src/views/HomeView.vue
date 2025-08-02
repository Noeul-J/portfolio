<script setup lang="ts">
import Header from '../components/Header.vue'
import TechStack from '../components/TechStack.vue'
import ProjectSummary from '../components/ProjectSummary.vue'
import Introduce from '../components/Introduce.vue'
import Footer from '../components/Footer.vue'

const particlesLoaded = async () => {
  console.log('Particles loaded')
}
</script>

<template>
  <div>
    <Header />
    <Introduce />
    <TechStack />
    <ProjectSummary />
    <Footer />
  </div>
  
</template>
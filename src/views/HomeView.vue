<script setup lang="ts">
import About from '../components/about.vue'
import Profile from '../components/Profile.vue'
import SkillSet from '../components/SkillSet.vue'
import Experience from '../components/experience.vue'
import Project from '../components/Project.vue'
import Footer from '../components/Footer.vue'
import LanguageToggle from '../components/LanguageToggle.vue'
import { ref } from 'vue'

import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const activeMenu = ref('About')

const showComponent = (menu: string) => {
  activeMenu.value = menu
}
</script>

<style scoped>
/* App Container */
.app-container {
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

/* Navigation Bar */
.navigation-bar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 40;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(8px);
  border-bottom: 1px solid rgba(229, 231, 235, 0.5);
}

.nav-container {
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 16px;
}

@media (min-width: 1024px) {
  .nav-container {
    padding: 0 32px;
  }
}

@media (min-width: 1280px) {
  .nav-container {
    padding: 0 48px;
  }
}

.nav-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
}

.logo {
  font-size: 1.25rem;
  font-weight: 700;
  color: #1f2937;
}

.nav-menu {
  display: flex;
  align-items: center;
  gap: 16px;
}

.menu-container {
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(8px);
  border-radius: 12px;
  padding: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.3);
}

.menu-list {
  display: flex;
  gap: 4px;
  list-style: none;
  margin: 0;
  padding: 0;
}

.menu-btn {
  padding: 8px 16px;
  border-radius: 8px;
  font-weight: 500;
  font-size: 0.875rem;
  transition: all 0.3s ease;
  border: none;
  background: transparent;
  cursor: pointer;
  color: #374151;
}

.menu-btn:hover {
  color: #2563eb;
  background: rgba(255, 255, 255, 0.5);
}

.menu-btn.active {
  background: linear-gradient(135deg, #3b82f6 0%, #4f46e5 100%);
  color: white;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

/* Main Content */
.main-content {
  flex: 1;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-top: 80px;
}

.content-container {
  width: 100%;
  max-width: 90%;
  margin: 0 auto;
  padding: 0 16px;
}

/* Content Grid */
.content-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
}

@media (min-width: 1024px) {
  .content-grid {
    grid-template-columns: 0.8fr 6fr;
    gap: 32px;
  }
}

@media (min-width: 1280px) {
  .content-grid {
    grid-template-columns: 0.7fr 7fr;
  }
}

@media (min-width: 1536px) {
  .content-grid {
    grid-template-columns: 0.6fr 8fr;
  }
}

/* Left Column */
.left-column {
  order: 2;
}

@media (min-width: 1024px) {
  .left-column {
    order: 1;
    position: sticky;
    top: 32px;
  }
}

/* Right Column */
.right-column {
  order: 1;
}

@media (min-width: 1024px) {
  .right-column {
    order: 2;
  }
}

/* Content Wrapper */
.content-wrapper {
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(8px);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  overflow: hidden;
}

.content-scroll {
  height: calc(100vh - 120px);
  overflow-y: auto;
  display: flex;
  flex-direction: column;
}

@media (min-width: 1024px) {
  .content-scroll {
    height: calc(100vh - 140px);
  }
}

/* Responsive Design */
@media (max-width: 768px) {
  .nav-container {
    padding: 0 12px;
  }
  
  .content-container {
    padding: 0 12px;
  }
  
  .nav-content {
    height: 56px;
  }
  
  .logo {
    font-size: 1.125rem;
  }
  
  .menu-btn {
    padding: 6px 12px;
    font-size: 0.8rem;
  }
  
  .main-content {
    padding-top: 72px;
  }
}
</style>

<template>
  <div class="app-container">
    <!-- Top Navigation Bar -->
    <div class="navigation-bar">
      <div class="nav-container">
        <div class="nav-content">
          <!-- Logo/Title -->
          <div class="logo">
            Portfolio
          </div>
          
          <!-- Navigation Menu -->
          <div class="nav-menu">
            <div class="menu-container">
              <ul class="menu-list">
                <li>
                  <button 
                    @click="showComponent('About')" 
                    :class="activeMenu === 'About' ? 'menu-btn active' : 'menu-btn'"
                  >
                    {{ t('about') }}
                  </button>
                </li>
                <li>
                  <button 
                    @click="showComponent('Skill')" 
                    :class="activeMenu === 'Skill' ? 'menu-btn active' : 'menu-btn'"
                  >
                    {{ t('skills') }}
                  </button>
                </li>
                <li>
                  <button 
                    @click="showComponent('Experience')" 
                    :class="activeMenu === 'Experience' ? 'menu-btn active' : 'menu-btn'"
                  >
                    {{ t('experience') }}
                  </button>
                </li>
                <li>
                  <button 
                    @click="showComponent('Project')" 
                    :class="activeMenu === 'Project' ? 'menu-btn active' : 'menu-btn'"
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
    <div class="main-content">
      <div class="content-container">
        <!-- Content Area -->
        <div class="content-grid">
          <!-- Left Column: Profile Info -->
          <div class="left-column">
            <Profile />
          </div>
          
          <!-- Right Column: Content -->
          <div class="right-column">
            <!-- Content Area -->
            <div class="content-wrapper">
              <div class="content-scroll">
                <!-- About Section -->
                <About v-if="activeMenu === 'About'" />
                
                <!-- Skills Section -->
                <SkillSet v-else-if="activeMenu === 'Skill'" />
                
                <!-- Experience Section -->
                <Experience v-else-if="activeMenu === 'Experience'" />
                
                <!-- Projects Section -->
                <Project v-else-if="activeMenu === 'Project'" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <Footer />
  </div>
</template>


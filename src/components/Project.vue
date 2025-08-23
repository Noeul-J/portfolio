
<script setup>
import { computed, ref } from 'vue'
import { selectLanguage, useProjectStore } from '../store'
import ProjectModal from './ProjectModal.vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const { getProjects } = useProjectStore()
const projects = getProjects(t)

// Category tabs
const categories = computed(() => [
  { label: t('project_category_all'), value: 'all' },
  { label: t('project_category_rpa'), value: 'rpa' },
  { label: t('project_category_dev'), value: 'dev' },
  { label: t('project_category_ops'), value: 'ops' },
  { label: t('project_category_edu'), value: 'edu' },
])

const activeCategory = ref('all')
const query = ref('')
const selectedTags = ref([])
const active = ref(null)

function toggleTag(t) {
  if (selectedTags.value.includes(t)) {
    selectedTags.value = selectedTags.value.filter((x) => x !== t)
  } else {
    selectedTags.value = [...selectedTags.value, t]
  }
}

function open(p) {
  active.value = p
}

function closeModal() {
  active.value = null
}

const allTags = computed(() => {
  const set = new Set()
  projects.value.forEach((p) => p.tags?.forEach((t) => set.add(t)))
  return Array.from(set).sort((a, b) => a.localeCompare(b))
})

const filtered = computed(() => {
  const q = query.value.trim().toLowerCase()
  const list = projects.value
    .filter((p) => (activeCategory.value === 'all' ? true : p.category === activeCategory.value))
    .filter((p) =>
      selectedTags.value.length === 0 ? true : selectedTags.value.every((t) => p.tags?.includes(t))
    )
    .filter((p) => {
      if (!q) return true
      const hay = [p.title, p.highlight, p.overview, ...(p.tags || [])].join(' ').toLowerCase()
      return hay.includes(q)
    })
  const result = list.slice().reverse()
  // 생명보험 카드가 항상 마지막에 오도록 보정
  result.sort((a, b) => {
    if (a.id === 'life-insurance-rpa') return 1
    if (b.id === 'life-insurance-rpa') return -1
    return 0
  })
  return result
})
</script>

<template>
  <div class="projects">
    <div class="container">
      <!-- Header -->
      <header class="header">

        <!-- Controls -->
        <div class="controls">
          <!-- Category Tabs -->
          <nav class="category-tabs">
            <button
              v-for="c in categories"
              :key="c.value"
              @click="activeCategory = c.value"
              class="category-tab"
              :class="activeCategory === c.value ? 'active' : ''"
            >
              {{ c.label }}
            </button>
          </nav>
        </div>
      </header>

      <!-- Projects Grid -->
      <main class="projects-grid">
        <article
          v-for="p in filtered"
          :key="p.id"
          class="project-card"
          @click="open(p)"
        >
          <div class="project-emoji">
            {{ p.emoji }}
          </div>
          <div class="project-content">
            <div class="project-header">
              <h3 class="project-title">{{ p.title }}</h3>
            </div>
            <div class="project-period">
              <span>{{ p.period }}</span>
            </div>
            <p class="project-highlight">{{ p.highlight }}</p>
            <div class="project-tags">
              <span v-for="tag in p.tags" :key="tag" class="project-tag">
                #{{ tag }}
              </span>
            </div>
            <div class="project-action">
              <span class="view-details">{{ t('project_detail_button') }}</span>
              <svg class="arrow-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </div>
          </div>
        </article>
        <!-- <div v-if="filtered.length === 0" class="no-results">
          <div class="no-results-icon">🔍</div>
          <h3>조건에 맞는 프로젝트가 없습니다</h3>
          <p>다른 검색어나 카테고리를 시도해보세요</p>
        </div> -->
      </main>
    </div>

    <!-- Project Modal -->
    <ProjectModal 
      :active="active" 
      :categories="categories"
      @close="closeModal"
    />
  </div>
</template>


<style scoped>
.projects {
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #cbd5e1 100%);
  color: #1e293b;
  position: relative;
  padding: 110px 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  position: relative;
  z-index: 1;
  width: 100%;
  transform: scale(0.97);
}

/* Header */
.header {
  margin-bottom: 40px;
}

/* Controls */
.controls {
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
}

.category-tabs {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: center;
}

.category-tab {
  padding: 12px 20px;
  border-radius: 25px;
  font-size: 0.875rem;
  font-weight: 500;
  border: 1px solid #e2e8f0;
  background: #ffffff;
  color: #475569;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.category-tab:hover {
  border-color: #3b82f6;
  background: #f8fafc;
  transform: translateY(-1px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.category-tab.active {
  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
  border-color: transparent;
  color: white;
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
}

/* Projects Grid */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 24px;
  margin-bottom: 40px;
}

.project-card {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 16px;
  padding: 24px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  position: relative;
  overflow: hidden;
  cursor: pointer;
}

.project-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, #3b82f6, #8b5cf6, #06b6d4);
}

.project-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 16px 20px -5px rgba(0, 0, 0, 0.1), 0 8px 8px -5px rgba(0, 0, 0, 0.04);
  border-color: #3b82f6;
}

.project-emoji {
  font-size: 3rem;
  margin-bottom: 16px;
  text-align: center;
}

.project-content {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.project-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 12px;
}

.project-title {
  font-size: 1.125rem;
  font-weight: 600;
  color: #1e293b;
  line-height: 1.3;
  flex: 1;
}

.project-period {
  font-size: 0.75rem;
  color: #475569;
  white-space: nowrap;
  padding: 8px 16px;
  background: linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(59, 130, 246, 0.1) 100%);
  border-radius: 12px;
  border: 1px solid rgba(16, 185, 129, 0.2);
  font-weight: 600;
  letter-spacing: 0.03em;
  position: relative;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(16, 185, 129, 0.1);
  transition: all 0.3s ease;
}

.project-period::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(16, 185, 129, 0.15) 0%, rgba(59, 130, 246, 0.15) 100%);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.project-card:hover .project-period {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(16, 185, 129, 0.2);
  border-color: rgba(16, 185, 129, 0.3);
}

.project-card:hover .project-period::before {
  opacity: 1;
}

.project-highlight {
  color: #475569;
  font-size: 0.875rem;
  line-height: 1.5;
  margin: 0;
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.project-tag {
  font-size: 0.7rem;
  padding: 4px 8px;
  background: rgba(59, 130, 246, 0.1);
  border: 1px solid rgba(59, 130, 246, 0.2);
  border-radius: 12px;
  color: #3b82f6;
}

.project-action {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 8px;
  color: #3b82f6;
  font-size: 0.875rem;
  font-weight: 500;
}

.arrow-icon {
  transition: transform 0.3s ease;
}

.project-card:hover .arrow-icon {
  transform: translateX(4px);
}

/* Animations */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsive Design */
@media (max-width: 1024px) {
  .projects {
    padding: 40px 0 60px 0;
    min-height: auto;
  }
  
  .container {
    padding: 0 20px;
    transform: scale(1);
  }
  
  .projects-grid {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
  }
  
  .project-card {
    padding: 20px;
  }
  
  .project-emoji {
    font-size: 2rem;
  }
  
  .project-title {
    font-size: 1.25rem;
  }
  
  .project-highlight {
    font-size: 0.9rem;
  }
  
  .project-tag {
    font-size: 0.75rem;
    padding: 4px 8px;
  }
}

@media (max-width: 768px) {
  .projects {
    padding: 30px 0 50px 0;
    min-height: auto;
  }
  
  .container {
    padding: 0 16px;
  }
  
  .controls {
    gap: 20px;
  }
  
  .category-tabs {
    gap: 8px;
  }
  
  .category-tab {
    padding: 10px 16px;
    font-size: 0.8rem;
  }
  
  .projects-grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }
  
  .project-card {
    padding: 16px;
  }
  
  .project-emoji {
    font-size: 1.75rem;
  }
  
  .project-title {
    font-size: 1.125rem;
  }
  
  .project-highlight {
    font-size: 0.85rem;
  }
  
  .project-tag {
    font-size: 0.7rem;
    padding: 3px 6px;
  }
}

@media (max-width: 480px) {
  .projects {
    padding: 20px 0 40px 0;
    min-height: auto;
  }
  
  .container {
    padding: 0 12px;
  }
  
  .controls {
    gap: 16px;
  }
  
  .category-tabs {
    gap: 6px;
  }
  
  .category-tab {
    padding: 8px 12px;
    font-size: 0.75rem;
  }
  
  .projects-grid {
    gap: 12px;
  }
  
  .project-card {
    padding: 12px;
  }
  
  .project-emoji {
    font-size: 1.5rem;
  }
  
  .project-title {
    font-size: 1rem;
  }
  
  .project-highlight {
    font-size: 0.8rem;
  }
  
  .project-tag {
    font-size: 0.65rem;
    padding: 2px 4px;
  }
}
</style>
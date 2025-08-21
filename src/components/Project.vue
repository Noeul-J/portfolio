<style scoped>
.projects {
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #cbd5e1 100%);
  color: #1e293b;
  position: relative;
  overflow: hidden;
  min-height: 200vh;
  padding: 40px 0;
}

.projects::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.08) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.08) 0%, transparent 50%),
    radial-gradient(circle at 40% 40%, rgba(16, 185, 129, 0.05) 0%, transparent 50%);
  pointer-events: none;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  position: relative;
  z-index: 1;
  width: 100%;
}

/* Header */
.header {
  margin-bottom: 40px;
}

.hero-section {
  text-align: center;
  margin-bottom: 48px;
  animation: fadeInUp 1s ease-out;
}

.hero-title {
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 24px;
  letter-spacing: -0.02em;
}

.hero-subtitle {
  font-size: 1.25rem;
  color: #475569;
  line-height: 1.6;
  max-width: 600px;
  margin: 0 auto;
}

.highlight {
  color: #fbbf24;
  font-weight: 600;
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

.search-container {
  width: 100%;
  max-width: 400px;
}

.search-input {
  width: 100%;
  padding: 16px 20px;
  border-radius: 12px;
  border: 1px solid #e2e8f0;
  background: #ffffff;
  color: #1e293b;
  font-size: 0.875rem;
  transition: all 0.3s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.search-input::placeholder {
  color: #94a3b8;
}

.search-input:focus {
  outline: none;
  border-color: #3b82f6;
  background: #ffffff;
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.1);
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

/* No Results */
.no-results {
  grid-column: 1 / -1;
  text-align: center;
  padding: 80px 20px;
  color: #64748b;
}

.no-results-icon {
  font-size: 4rem;
  margin-bottom: 24px;
}

.no-results h3 {
  font-size: 1.5rem;
  margin-bottom: 12px;
  color: #1e293b;
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
@media (max-width: 768px) {
  .projects {
    padding: 30px 0;
    min-height: 50vh;
  }
  
  .container {
    padding: 0 16px;
  }
  
  .controls {
    gap: 16px;
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
    padding: 20px;
  }
  
  .modal-header {
    padding: 24px 24px 0;
  }
  
  .modal-body {
    padding: 24px;
  }
  
  .modal-emoji {
    font-size: 2.5rem;
  }
  
  .modal-title {
    font-size: 1.25rem;
  }
}

@media (max-width: 480px) {
  .project-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }
  
  .project-period {
    align-self: flex-start;
  }
  
  .modal-header {
    flex-direction: column;
    text-align: center;
    gap: 12px;
  }
  
  .modal-emoji {
    align-self: center;
  }
}
</style>
<script setup>
import { computed, onMounted, ref } from 'vue'
import { selectLanguage } from '../store'
import ProjectModal from './ProjectModal.vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

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

// Project data (요청해 주신 내용 반영)
const projects = computed(() => [
  {
    id: 'life-insurance-rpa',
    category: 'rpa',
    emoji: '🏦',
    title: t('project_title_insurance'),
    period: '2019.07 - 2021.09',
    highlight: t('project_highlight_insurance'),
    tags: ['RPA', t('project_tag_Accounting'), t('project_tag_Contract'), 'CS'],
    overview:
      t('project_overview_insurance'),
    features: [
      t('project_features_insurance_one'),
      t('project_features_insurance_two'),
      t('project_features_insurance_three'),
    ],
    outcomes: [t('project_outcomes_insurance_one'), t('project_outcomes_insurance_two'), t('project_outcomes_insurance_three')],
  },
  {
    id: 'distribution-edi-erp',
    category: 'rpa',
    emoji: '🔗',
    title: t('projcet_title_edi'),
    period: '2021.10 - 2022.02',
    highlight: t('project_highlight_edi'),
    tags: ['RPA', 'ERP', 'EDI'],
    overview:
      t('project_overview_edi'),
    features: [
      t('project_features_edi_one'),
      t('project_features_edi_two'),
      t('project_features_edi_three'),
    ],
    outcomes: [t('project_outcomes_edi_one'), t('project_outcomes_edi_two'), t('project_outcomes_edi_three')],
  },
  {
    id: 'manufacturing-voucher',
    category: 'rpa',
    emoji: '🏭',
    title: t('project_title_manufacturing'),
    period: '2022.03 - 2022.06',
    highlight: t('project_highlight_manufacturing'),
    tags: ['RPA', t('project_tag_voucher'), t('project_tag_crawling')],
    overview:
      t('project_overview_manufacturing'),
    features: [
      t('project_features_manufacturing_one'),
      t('project_features_manufacturing_two'),
      t('project_features_manufacturing_three'),
    ],
    outcomes: [t('project_outcomes_manufacturing_one'), t('project_outcomes_manufacturing_two'), t('project_outcomes_manufacturing_three')],
  },
  {
    id: 'covid-notice',
    category: 'rpa',
    emoji: '🦠',
    title: t('project_title_covid'),
    period: '2022.07 - 2022.09',
    highlight: t('project_highlight_covid'),
    tags: ['RPA', t('project_tag_document'), t('project_tag_text')],
    overview:
      t('project_overview_covid'),
    features: [
      t('project_features_covid_one'),
      t('project_features_covid_two'),
      t('project_features_covid_three'),
    ],
    outcomes: [t('project_outcomes_covid_one'), t('project_outcomes_covid_two'), t('project_outcomes_covid_three')],
  },
  {
    id: 'energy-invoice',
    category: 'rpa',
    emoji: '⚡️',
    title: t('project_title_energy'),
    period: '2022.10 - 2023.02',
    highlight: t('project_highlight_energy'),
    tags: ['RPA', t('project_tag_tax'), t('project_tag_cert')],
    overview:
      t('project_overview_energy'),
    features: [
      t('project_features_energy_one'),
      t('project_features_energy_two'),
      t('project_features_energy_three'),
    ],
    outcomes: [t('project_outcomes_energy_one'), t('project_outcomes_energy_two'), t('project_outcomes_energy_three')],
  },
  {
    id: 'server-ops',
    category: 'rpa',
    emoji: '🖥️',
    title: t('project_title_server'),
    period: '2023.03 - 2023.05',
    highlight: t('project_highlight_server'),
    tags: ['RPA', 'linux', 'PuTTY'],
    overview:
      t('project_overview_server'),
    features: [
      t('project_features_server_one'),
      t('project_features_server_two'),
      t('project_features_server_three'),
    ],
    outcomes: [t('project_outcomes_server_one'), t('project_outcomes_server_two'), t('project_outcomes_server_three')],
  },
  {
    id: 'tax-filing',
    category: 'rpa',
    emoji: '🧾',
    title: t('project_title_tax'),
    period: '2023.06 ~ 2023.07',
    highlight: t('project_highlight_tax'),
    tags: ['RPA', t('project_tag_taxation'), 'HomeTax', 'wehagoT'],
    overview:
      t('project_overview_tax'),
    features: [
      t('project_features_tax_one'),
      t('project_features_tax_two'),
      t('project_features_tax_three'),
    ],
    outcomes: [t('project_outcomes_tax_one'), t('project_outcomes_tax_two'), t('project_outcomes_tax_three')],
  },
  {
    id: 'food-inventory',
    category: 'rpa',
    emoji: '🥫',
    title: t('project_title_food'),
    period: '2023.08 ~ 2023.12',
    highlight: t('project_highlight_food'),
    tags: ['RPA', 'ERP', 'WMS', t('project_tag_voucher')],
    overview:
      t('project_overview_food'),
    features: [
      t('project_features_food_one'),
      t('project_features_food_two'),
      t('project_features_food_three'),
    ],
    outcomes: [t('project_outcomes_food_one'), t('project_outcomes_food_two'), t('project_outcomes_food_three')],
  },
  {
    id: 'training',
    category: 'edu',
    emoji: '🎓',
    title: t('project_title_training'),
    period: '2023.06 ~ 2024.06',
    highlight: t('project_highlight_training'),
    tags: [t('project_tag_edu'), t('project_tag_curriculum'), 'Worktro'],
    overview:
      t('project_overview_training'),
    features: [
      t('project_features_training_one'),
      t('project_features_training_two'),
      t('project_features_training_three'),
    ],
    outcomes: [t('project_outcomes_training_one'), t('project_outcomes_training_two'), t('project_outcomes_training_three')],
  },
  {
    id: 'credit-automation',
    category: 'rpa',
    emoji: '📄',
    title: t('project_title_credit'),
    period: '2024.06 ~ 2024.12',
    highlight: t('project_highlight_credit'),
    tags: ['RPA', 'OCR', 'ERP', 'BPR'],
    overview:
      t('project_overview_credit'),
    features: [
      t('project_features_credit_one'),
      t('project_features_credit_two'),
      t('project_features_credit_three'),
    ],
    outcomes: [t('project_outcomes_credit_one'), t('project_outcomes_credit_two'), t('project_outcomes_credit_three')],
  },
  {
    id: 'worktro-vue3',
    category: 'dev',
    emoji: '🎛️',
    title: t('project_title_worktro'),
    period: '2025.01 ~ 2025.05',
    highlight: t('project_highlight_worktro'),
    tags: ['Vue3', 'frontend', 'UI/UX'],
    overview:
      t('project_overview_worktro'),
    features: [
      t('project_features_worktro_one'),
      t('project_features_worktro_two'),
      t('project_features_worktro_three'),
    ],
    outcomes: [t('project_outcomes_worktro_one'), t('project_outcomes_worktro_two'), t('project_outcomes_worktro_three')],
  },
  {
    id: 'bot-stabilization',
    category: 'ops',
    emoji: '🤖',
    title: t('project_title_workbot'),
    period: '2025.06 ~ Present',
    highlight: t('project_highlight_workbot'),
    tags: [t('project_tag_operation'), t('project_tag_monitoring'), t('project_tag_stability')],
    overview:
      t('project_overview_workbot'),
    features: [
      t('project_features_workbot_one'),
      t('project_features_workbot_two'),
      t('project_features_workbot_three'),
    ],
    outcomes: [t('project_outcomes_workbot_one'), t('project_outcomes_workbot_two'), t('project_outcomes_workbot_three')],
  },
])

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



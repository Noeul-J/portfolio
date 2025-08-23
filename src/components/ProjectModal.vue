<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useProjectStore } from '../store'

interface Project {
  id: string;
  category: string;
  emoji: string;
  title: string;
  period: string;
  highlight: string;
  tags: string[];
  overview: string;
  features: string[];
  outcomes: string[];
}

interface Props {
  active: Project | null;
  categories: Array<{ label: string; value: string }>;
}

const props = defineProps<Props>();

const emit = defineEmits<{
  close: [];
}>();

const { t } = useI18n();
const { getProjects } = useProjectStore();
const projects = getProjects(t);

function categoryLabel(v: string) {
  const f = props.categories.find((c) => c.value === v);
  return f ? f.label : v;
}

function closeModal() {
  emit('close');
}

// 현재 활성화된 프로젝트를 스토어에서 가져오기
const currentProject = computed(() => {
  if (!props.active?.id) return null;
  return projects.value.find(p => p.id === props.active?.id);
});
</script>

<template>
  <!-- Modal -->
  <transition name="modal">
    <div v-if="currentProject" class="modal-overlay" @click="closeModal">
      <div class="modal-content" @click.stop>
        <div class="modal-header">
          <div class="modal-emoji">{{ currentProject.emoji }}</div>
          <div class="modal-info">
            <h3 class="modal-title">{{ currentProject.title }}</h3>
            <p class="modal-meta">
              {{ categoryLabel(currentProject.category) }} · {{ currentProject.period }}
            </p>
          </div>
          <button class="modal-close" @click="closeModal">✕</button>
        </div>

        <div class="modal-body">
          <p class="modal-overview">{{ currentProject.overview }}</p>

          <section class="modal-section">
            <h4 class="section-title">주요 기능 / 활동</h4>
            <ul class="feature-list">
              <li v-for="(f,i) in currentProject.features" :key="i">{{ f }}</li>
            </ul>
          </section>

          <section class="modal-section">
            <h4 class="section-title">성과</h4>
            <ul class="outcome-list">
              <li v-for="(o,i) in currentProject.outcomes" :key="i">{{ o }}</li>
            </ul>
          </section>

          <div class="modal-tags">
            <span v-for="tag in currentProject.tags" :key="tag" class="modal-tag">
              #{{ tag }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<style scoped>
/* Modal */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
}

.modal-content {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 16px;
  max-width: 600px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

.modal-header {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  padding: 32px 32px 0;
  border-bottom: 1px solid #e2e8f0;
  padding-bottom: 24px;
}

.modal-emoji {
  font-size: 3rem;
  flex-shrink: 0;
}

.modal-info {
  flex: 1;
}

.modal-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 8px;
}

.modal-meta {
  color: #64748b;
  font-size: 0.875rem;
}

.modal-close {
  background: none;
  border: none;
  color: #64748b;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 8px;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.modal-close:hover {
  background: rgba(59, 130, 246, 0.1);
  color: #3b82f6;
}

.modal-body {
  padding: 32px;
}

.modal-overview {
  color: #475569;
  line-height: 1.6;
  margin-bottom: 32px;
}

.modal-section {
  margin-bottom: 24px;
}

.section-title {
  font-size: 1rem;
  font-weight: 600;
  color: #1e293b;
  margin-bottom: 12px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.feature-list,
.outcome-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.feature-list li,
.outcome-list li {
  color: #64748b;
  padding: 8px 0;
  padding-left: 20px;
  position: relative;
}

.feature-list li::before,
.outcome-list li::before {
  content: '•';
  color: #3b82f6;
  position: absolute;
  left: 0;
  font-weight: bold;
}

.modal-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 24px;
}

.modal-tag {
  font-size: 0.75rem;
  padding: 6px 12px;
  background: rgba(59, 130, 246, 0.1);
  border: 1px solid rgba(59, 130, 246, 0.2);
  border-radius: 16px;
  color: #3b82f6;
}

/* Modal Transitions */
.modal-enter-active,
.modal-leave-active {
  transition: all 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
  transform: scale(0.9);
}

/* Responsive Design */
@media (max-width: 768px) {
  .modal-overlay {
    padding: 10px;
  }
  
  .modal-content {
    max-height: 85vh;
  }
  
  .modal-header {
    padding: 20px 20px 0;
  }
  
  .modal-body {
    padding: 20px;
  }
  
  .modal-emoji {
    font-size: 2rem;
  }
  
  .modal-title {
    font-size: 1.125rem;
  }
  
  .modal-overview {
    font-size: 0.9rem;
  }
  
  .section-title {
    font-size: 0.9rem;
  }
  
  .feature-list li,
  .outcome-list li {
    font-size: 0.85rem;
    padding: 6px 0;
    padding-left: 16px;
  }
  
  .modal-tag {
    font-size: 0.7rem;
    padding: 4px 8px;
  }
}

@media (max-width: 480px) {
  .modal-overlay {
    padding: 5px;
  }
  
  .modal-content {
    max-height: 80vh;
  }
  
  .modal-header {
    flex-direction: column;
    text-align: center;
    gap: 8px;
    padding: 16px 16px 0;
  }
  
  .modal-emoji {
    align-self: center;
    font-size: 1.75rem;
  }
  
  .modal-title {
    font-size: 1rem;
  }
  
  .modal-meta {
    font-size: 0.8rem;
  }
  
  .modal-body {
    padding: 16px;
  }
  
  .modal-overview {
    font-size: 0.85rem;
    margin-bottom: 20px;
  }
  
  .modal-section {
    margin-bottom: 16px;
  }
  
  .section-title {
    font-size: 0.85rem;
    margin-bottom: 8px;
  }
  
  .feature-list li,
  .outcome-list li {
    font-size: 0.8rem;
    padding: 4px 0;
    padding-left: 12px;
  }
  
  .modal-tags {
    gap: 6px;
    margin-top: 16px;
  }
  
  .modal-tag {
    font-size: 0.65rem;
    padding: 3px 6px;
  }
  
  .modal-close {
    font-size: 1.25rem;
    padding: 6px;
  }
}
</style>

<script setup lang="ts">
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

function categoryLabel(v: string) {
  const f = props.categories.find((c) => c.value === v);
  return f ? f.label : v;
}

function closeModal() {
  emit('close');
}
</script>

<template>
  <!-- Modal -->
  <transition name="modal">
    <div v-if="active" class="modal-overlay" @click="closeModal">
      <div class="modal-content" @click.stop>
        <div class="modal-header">
          <div class="modal-emoji">{{ active.emoji }}</div>
          <div class="modal-info">
            <h3 class="modal-title">{{ active.title }}</h3>
            <p class="modal-meta">
              {{ categoryLabel(active.category) }} · {{ active.period }}
            </p>
          </div>
          <button class="modal-close" @click="closeModal">✕</button>
        </div>

        <div class="modal-body">
          <p class="modal-overview">{{ active.overview }}</p>

          <section class="modal-section">
            <h4 class="section-title">주요 기능 / 활동</h4>
            <ul class="feature-list">
              <li v-for="(f,i) in active.features" :key="i">{{ f }}</li>
            </ul>
          </section>

          <section class="modal-section">
            <h4 class="section-title">성과</h4>
            <ul class="outcome-list">
              <li v-for="(o,i) in active.outcomes" :key="i">{{ o }}</li>
            </ul>
          </section>

          <div class="modal-tags">
            <span v-for="tag in active.tags" :key="tag" class="modal-tag">
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

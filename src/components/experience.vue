<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<template>
  <section class="experience">
    <div class="container">
      <!-- Horizontal Timeline -->
      <div class="timeline-container">
        <div class="timeline">
          <!-- 2019-2022 -->
          <div class="timeline-item">
            <div class="timeline-marker">
              <div class="marker-dot"></div>
              <div class="marker-line"></div>
            </div>
            <div class="timeline-content">
              <div class="timeline-header">
                <div class="timeline-period">2019.06 ~ 2022.12</div>
                <div class="timeline-company">
                  <span class="company-name">EDENTNS</span>
                  <span class="position">RPA developer</span>
                </div>
              </div>
              <div class="timeline-description">
                <div class="achievement-item">
                  <div class="achievement-icon">⚙️</div>
                  <div class="achievement-text">{{ t('experience_StepOne_descriptionOne') }}</div>
                </div>
                <div class="achievement-item">
                  <div class="achievement-icon">🔗</div>
                  <div class="achievement-text">{{ t('experience_StepOne_descriptionTwo') }}</div>
                </div>
                <div class="achievement-item">
                  <div class="achievement-icon">📊</div>
                  <div class="achievement-text">{{ t('experience_StepOne_descriptionThree') }}</div>
                </div>
              </div>
            </div>
          </div>

          <!-- 2023-2024 -->
          <div class="timeline-item">
            <div class="timeline-marker">
              <div class="marker-dot"></div>
              <div class="marker-line"></div>
            </div>
            <div class="timeline-content">
              <div class="timeline-header">
                <div class="timeline-period">2023.01 ~ 2024.12</div>
                <div class="timeline-company">
                  <span class="company-name">EDENTNS</span>
                  <span class="position">Team Leader & RPA Senior developer</span>
                </div>
              </div>
              <div class="timeline-description">
                <div class="achievement-item">
                  <div class="achievement-icon">👥</div>
                  <div class="achievement-text">{{ t('experience_StepTwo_descriptionOne') }}</div>
                </div>
                <div class="achievement-item">
                  <div class="achievement-icon">📚</div>
                  <div class="achievement-text">{{ t('experience_StepTwo_descriptionTwo') }}</div>
                </div>
                <div class="achievement-item">
                  <div class="achievement-icon">🔍</div>
                  <div class="achievement-text">{{ t('experience_StepTwo_descriptionThree') }}</div>
                </div>
                <div class="achievement-item">
                  <div class="achievement-icon">🤖</div>
                  <div class="achievement-text">{{ t('experience_StepTwo_descriptionFour') }}</div>
                </div>
              </div>
            </div>
          </div>

          <!-- 2025 -->
          <div class="timeline-item">
            <div class="timeline-marker">
              <div class="marker-dot"></div>
            </div>
            <div class="timeline-content">
              <div class="timeline-header">
                <div class="timeline-period">2025.01 ~</div>
                <div class="timeline-company">
                  <span class="company-name">EDENTNS</span>
                  <span class="position">Full-Stack Developer</span>
                </div>
              </div>
              <div class="timeline-description">
                <div class="achievement-item">
                  <div class="achievement-icon">💻</div>
                  <div class="achievement-text">{{ t('experience_StepThree_descriptionOne') }}</div>
                </div>
                <div class="achievement-item">
                  <div class="achievement-icon">⚡</div>
                  <div class="achievement-text">{{ t('experience_StepThree_descriptionTwo') }}</div>
                </div>
                <div class="achievement-item">
                  <div class="achievement-icon">🔄</div>
                  <div class="achievement-text">{{ t('experience_StepThree_descriptionThree') }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.experience {
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #cbd5e1 100%);
  background-attachment: fixed;
  color: #1e293b;
  position: relative;
  padding: 40px 0 170px 0;
}

.experience::before {
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
  padding: 0 20px;
  position: relative;
  z-index: 1;
  width: 100%;
  transform: scale(0.9);
}

/* Section Header */
.section-header {
  text-align: center;
  margin-bottom: 60px;
  animation: fadeInUp 1s ease-out;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 16px;
  letter-spacing: -0.02em;
  color: #1e293b;
}

.section-subtitle {
  font-size: 1.125rem;
  color: #64748b;
  font-weight: 500;
  max-width: 600px;
  margin: 0 auto;
}

/* Horizontal Timeline */
.timeline-container {
  width: 100%;
  position: relative;
}

.timeline {
  position: relative;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  align-items: stretch;
}

/* Main Timeline Line */
.timeline::before {
  content: '';
  position: absolute;
  top: 10px;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, #3b82f6, #8b5cf6, #06b6d4);
  border-radius: 2px;
  z-index: 1;
}

.timeline-item {
  position: relative;
  display: flex;
  flex-direction: column;
}

.timeline-marker {
  position: relative;
  margin-bottom: 24px;
  text-align: center;
  z-index: 2;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.marker-dot {
  width: 20px;
  height: 20px;
  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
  border-radius: 50%;
  border: 4px solid #ffffff;
  box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.2), 0 4px 12px rgba(0, 0, 0, 0.1);
  z-index: 3;
  position: relative;
  margin: 0 auto;
  transition: all 0.3s ease;
}

.timeline-item:hover .marker-dot {
  transform: scale(1.3);
  box-shadow: 0 0 0 6px rgba(59, 130, 246, 0.3), 0 8px 24px rgba(0, 0, 0, 0.15);
}

/* Remove individual marker lines since we have a main timeline line */
.marker-line {
  display: none;
}

.timeline-content {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 20px;
  padding: 32px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  height: 100%;
  position: relative;
  overflow: hidden;
  margin-top: 20px;
}

.timeline-content::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
}

.timeline-content:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  border-color: #3b82f6;
}

.timeline-header {
  margin-bottom: 24px;
  text-align: center;
  position: relative;
}

.timeline-period {
  font-size: 0.875rem;
  color: #64748b;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 8px;
  background: #f1f5f9;
  padding: 6px 12px;
  border-radius: 20px;
  display: inline-block;
}

.timeline-company {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

.company-name {
  font-size: 1.5rem;
  font-weight: 700;
  color: #1e293b;
  position: relative;
}

.company-name::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 50%;
  transform: translateX(-50%);
  width: 30px;
  height: 2px;
  background: linear-gradient(90deg, #3b82f6, #8b5cf6);
  border-radius: 1px;
}

.position {
  font-size: 1rem;
  color: #475569;
  font-weight: 600;
  background: linear-gradient(135deg, #3b82f6, #8b5cf6);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.timeline-description {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.achievement-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 16px;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  transition: all 0.3s ease;
  position: relative;
}

.achievement-item:hover {
  background: #f1f5f9;
  border-color: #3b82f6;
  transform: translateX(8px);
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.15);
}

.achievement-icon {
  font-size: 1.25rem;
  flex-shrink: 0;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border: 1px solid #e2e8f0;
}

.achievement-text {
  color: #334155;
  line-height: 1.5;
  font-size: 0.95rem;
  font-weight: 500;
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

@media (max-width: 1440px) {
  .experience {
    padding: 15px 0 80px 0;
    min-height: 110vh;
  }
}

@media (max-width: 1024px) {
  .experience {
    padding: 15px 0 100px 0;
    min-height: 110vh;
  }
  
  .container {
    padding: 0 20px;
  }
  
  .section-title {
    font-size: 2.25rem;
  }
  
  .timeline {
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 24px;
  }
  
  .timeline-content {
    padding: 24px;
  }
  
  .company-name {
    font-size: 1.375rem;
  }
  
  .timeline-period {
    font-size: 0.9rem;
  }
  
  .achievement-text {
    font-size: 0.9rem;
  }
}

@media (max-width: 768px) {
  .experience {
    padding: 10px 0 60px 0;
    min-height: auto;
  }
  
  .container {
    padding: 0 16px;
  }
  
  .section-title {
    font-size: 1.75rem;
  }
  
  .timeline {
    grid-template-columns: 1fr;
    gap: 16px;
  }
  
  /* Vertical timeline for mobile */
  .timeline::before {
    top: 0;
    left: 15px;
    right: auto;
    width: 2px;
    height: 100%;
    background: linear-gradient(180deg, #3b82f6, #8b5cf6, #06b6d4);
    transform: none;
  }
  
  .timeline-marker {
    text-align: left;
    margin-left: 15px;
    height: auto;
    margin-bottom: 12px;
  }
  
  .marker-dot {
    margin: 0;
    position: absolute;
    left: -7px;
    top: 50%;
    transform: translateY(-50%);
    width: 16px;
    height: 16px;
  }
  
  .timeline-item:hover .marker-dot {
    transform: translateY(-50%) scale(1.2);
  }
  
  .timeline-content {
    padding: 20px;
    margin-top: 0;
    margin-left: 30px;
  }
  
  .timeline-header {
    text-align: left;
  }
  
  .timeline-company {
    flex-direction: row;
    align-items: center;
    gap: 8px;
  }
  
  .company-name {
    font-size: 1.125rem;
  }
  
  .company-name::after {
    left: 0;
    transform: none;
  }
  
  .achievement-item {
    padding: 10px;
  }
  
  .achievement-text {
    font-size: 0.85rem;
  }
  
  .achievement-icon {
    width: 28px;
    height: 28px;
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .experience {
    padding: 8px 0 50px 0;
  }
  
  .container {
    padding: 0 12px;
  }
  
  .section-title {
    font-size: 1.5rem;
  }
  
  .timeline {
    gap: 12px;
  }
  
  .timeline::before {
    left: 12px;
  }
  
  .timeline-marker {
    margin-left: 12px;
  }
  
  .marker-dot {
    left: -6px;
    width: 14px;
    height: 14px;
  }
  
  .timeline-content {
    padding: 16px;
    margin-left: 24px;
  }
  
  .achievement-item {
    flex-direction: column;
    text-align: center;
    gap: 6px;
    padding: 8px;
  }
  
  .achievement-icon {
    align-self: center;
    width: 24px;
    height: 24px;
    font-size: 0.9rem;
  }
  
  .achievement-text {
    font-size: 0.8rem;
  }
  
  .timeline-company {
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
  }
  
  .company-name {
    font-size: 1rem;
  }
  
  .position {
    font-size: 0.9rem;
  }
}
</style>

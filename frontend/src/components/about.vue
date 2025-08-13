<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { selectLanguage } from '../store'
import css from '../assets/main.css'
const { t } = useI18n()

const mailto = 'mailto:you@example.com?subject=%5B협업문의%5D%20포트폴리오%20보고%20연락드립니다'
</script>

<style scoped>
.about {
  min-height: auto;
  display: flex;
  align-items: center;
  padding: 40px 0;
}

.about::before {
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

/* Hero Section */
.hero-section {
  text-align: center;
  margin-bottom: 32px;
  animation: fadeInUp 1s ease-out;
}

.hero-subtitle {
  font-size: 1.125rem;
  color: #475569;
  margin-bottom: 24px;
  line-height: 1.5;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

.hero-stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 16px;
  max-width: 400px;
  margin: 0 auto;
}

.stat-card {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 16px;
  padding: 16px;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  position: relative;
  overflow: hidden;
}

.stat-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, #3b82f6, #8b5cf6, #06b6d4);
}

.stat-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 16px 20px -5px rgba(0, 0, 0, 0.1), 0 8px 8px -5px rgba(0, 0, 0, 0.04);
  border-color: #3b82f6;
}

.stat-number {
  font-size: 2rem;
  font-weight: 800;
  color: #3b82f6;
  margin-bottom: 6px;
}

.stat-label {
  font-size: 0.875rem;
  color: #64748b;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

/* Contact Section */
.contact-section {
  text-align: center;
}

.contact-card {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 16px;
  padding: 32px;
  max-width: 600px;
  margin: 0 auto;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  position: relative;
  overflow: hidden;
}

.contact-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, #3b82f6, #8b5cf6, #06b6d4);
}

.contact-card h2 {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 8px;
  color: #1e293b;
}

.contact-card p {
  color: #64748b;
  margin-bottom: 32px;
  font-size: 1.125rem;
}

.contact-btn {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
  color: white;
  padding: 16px 32px;
  border-radius: 12px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px rgba(59, 130, 246, 0.3);
}

.contact-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 30px rgba(59, 130, 246, 0.4);
}

.contact-btn svg {
  transition: transform 0.3s ease;
}

.contact-btn:hover svg {
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
@media (max-width: 768px) {
  .about {
    padding: 30px 0;
    min-height: 50vh;
  }
  
  .container {
    padding: 0 16px;
  }
  
  .hero-stats {
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
  }
  
  .stat-card {
    padding: 16px;
  }
  
  .stat-number {
    font-size: 2rem;
  }
  
  .contact-card {
    padding: 24px;
  }
}

@media (max-width: 480px) {
  .hero-stats {
    grid-template-columns: 1fr;
    max-width: 200px;
  }
}
</style>

<template>
  <section id="about" class="about">
    <div class="container">
      <!-- Hero Section -->
      <div class="hero-section">
        <div class="hero-content">
          <p class="hero-subtitle">
            6년+ 경력으로 95건의 자동화 프로젝트를 성공적으로 완료한 자동화 엔지니어<br />
            6년+ 경력으로 95건의 자동화 프로젝트를 성공적으로 완료한 자동화 엔지니어<br />
            6년+ 경력으로 95건의 자동화 프로젝트를 성공적으로 완료한 자동화 엔지니어<br />  
            6년+ 경력으로 95건의 자동화 프로젝트를 성공적으로 완료한 자동화 엔지니어<br />
            6년+ 경력으로 95건의 자동화 프로젝트를 성공적으로 완료한 자동화 엔지니어<br />
            6년+ 경력으로 95건의 자동화 프로젝트를 성공적으로 완료한 자동화 엔지니어<br />
          </p>
        </div>
        <div class="hero-stats">
          <div class="stat-card">
            <div class="stat-number">95+</div>
            <div class="stat-label">자동화 과제</div>
          </div>
          <div class="stat-card">
            <div class="stat-number">6년+</div>
            <div class="stat-label">경력</div>
          </div>
          <div class="stat-card">
            <div class="stat-number">10+</div>
            <div class="stat-label">프로젝트</div>
          </div>
        </div>
      </div>

      <!-- Contact CTA -->
      <div class="contact-section">
        <div class="contact-card">
          <h2>함께 일하고 싶으신가요?</h2>
          <p>자동화 프로젝트나 협업에 대해 이야기해보세요</p>
          <a :href="mailto" class="contact-btn">
            <span>연락하기</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>



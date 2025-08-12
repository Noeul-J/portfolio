<script setup lang="ts">

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
                  <div class="achievement-text">Worktro, WinAutomation을 활용한 업무 자동화 개발</div>
                </div>
                <div class="achievement-item">
                  <div class="achievement-icon">🔗</div>
                  <div class="achievement-text">Excel, ERP, WMS 시스템 연동 및 데이터 처리</div>
                </div>
                <div class="achievement-item">
                  <div class="achievement-icon">📊</div>
                  <div class="achievement-text">Python, VBA를 활용한 데이터 분석 및 보고서 자동 생성</div>
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
                  <div class="achievement-text">5명 개발팀 리드 및 프로젝트 관리</div>
                </div>
                <div class="achievement-item">
                  <div class="achievement-icon">📚</div>
                  <div class="achievement-text">팀 멤버 기술 교육 및 코드 리뷰 진행</div>
                </div>
                <div class="achievement-item">
                  <div class="achievement-icon">🔍</div>
                  <div class="achievement-text">OCR 기술을 활용한 문서 자동화 및 신용평가 시스템 구축</div>
                </div>
                <div class="achievement-item">
                  <div class="achievement-icon">🤖</div>
                  <div class="achievement-text">복잡한 업무 프로세스 자동화 설계 및 구현</div>
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
                  <div class="achievement-text">C# 기반의 RPA bot 기능 개선</div>
                </div>
                <div class="achievement-item">
                  <div class="achievement-icon">⚡</div>
                  <div class="achievement-text">Vue.js, TypeScript를 활용한 웹페이지 개발</div>
                </div>
                <div class="achievement-item">
                  <div class="achievement-icon">🔄</div>
                  <div class="achievement-text">Vue2에서 Vue3 마이그레이션 주도 및 UI/UX 개선</div>
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
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(248, 250, 252, 0.8) 50%, rgba(241, 245, 249, 0.9) 100%);
  color: #1e293b;
  min-height: 100vh;
  padding: 20px 0;
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(10px);
}

.experience::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(99, 102, 241, 0.1) 0%, transparent 50%);
  pointer-events: none;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  position: relative;
  z-index: 1;
}

/* Hero Section */
.hero-section {
  text-align: center;
  margin-bottom: 24px;
  animation: fadeInUp 1s ease-out;
}

.hero-title {
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 16px;
  letter-spacing: -0.02em;
}

.gradient-text {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  display: inline-block;
}

.hero-subtitle {
  font-size: 1rem;
  color: #475569;
  line-height: 1.4;
  max-width: 600px;
  margin: 0 auto;
}

.highlight {
  color: #fbbf24;
  font-weight: 600;
}

/* Horizontal Timeline */
.timeline-container {
  max-width: 1200px;
  margin: 0 auto;
}

.timeline {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 20px;
}

.timeline-item {
  flex: 1;
  position: relative;
  min-width: 0;
}

.timeline-marker {
  position: relative;
  margin-bottom: 16px;
  text-align: center;
}

.marker-dot {
  width: 12px;
  height: 12px;
  background: linear-gradient(135deg, #3b82f6 0%, #6366f1 100%);
  border-radius: 50%;
  border: 2px solid #1e293b;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.2);
  z-index: 2;
  position: relative;
  margin: 0 auto;
}

.marker-line {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 40px;
  height: 2px;
  background: linear-gradient(to right, #3b82f6, transparent);
  z-index: 1;
}

.timeline-item:last-child .marker-line {
  display: none;
}

.timeline-content {
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 16px;
  padding: 16px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  height: 100%;
}

.timeline-content:hover {
  transform: translateY(-2px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  border-color: rgba(59, 130, 246, 0.3);
}

.timeline-header {
  margin-bottom: 12px;
  text-align: center;
}

.timeline-period {
  font-size: 0.75rem;
  color: #64748b;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 6px;
}

.timeline-company {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
}

.company-name {
  font-size: 1.125rem;
  font-weight: 700;
  background: linear-gradient(135deg, #3b82f6 0%, #6366f1 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.position {
  font-size: 0.8rem;
  color: #475569;
  font-weight: 500;
}

.timeline-description {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.achievement-item {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  padding: 6px;
  background: rgba(255, 255, 255, 0.6);
  border-radius: 6px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
}

.achievement-item:hover {
  background: rgba(255, 255, 255, 0.8);
  border-color: rgba(59, 130, 246, 0.3);
  transform: translateX(4px);
}

.achievement-icon {
  font-size: 0.875rem;
  flex-shrink: 0;
}

.achievement-text {
  color: #64748b;
  line-height: 1.3;
  font-size: 0.75rem;
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
  .experience {
    padding: 15px 0;
  }
  
  .container {
    padding: 0 16px;
  }
  
  .timeline {
    flex-direction: column;
    gap: 16px;
  }
  
  .timeline-item {
    margin-bottom: 0;
  }
  
  .timeline-marker {
    margin-bottom: 12px;
  }
  
  .timeline-content {
    padding: 12px;
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
}

@media (max-width: 480px) {
  .timeline {
    gap: 12px;
  }
  
  .achievement-item {
    flex-direction: column;
    text-align: center;
  }
  
  .achievement-icon {
    align-self: center;
  }
}
</style>

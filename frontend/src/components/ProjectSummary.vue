<script setup>
import { computed, onMounted, ref } from 'vue'

// Category tabs
const categories = [
  { label: '전체', value: 'all' },
  { label: 'RPA · 업무자동화', value: 'rpa' },
  { label: '개발 · UI', value: 'dev' },
  { label: '운영 · 안정화', value: 'ops' },
  { label: '교육', value: 'edu' },
]

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

function categoryLabel(v) {
  const f = categories.find((c) => c.value === v)
  return f ? f.label : v
}

// Project data (요청해 주신 내용 반영)
const projects = ref([
  {
    id: 'life-insurance-rpa',
    category: 'rpa',
    emoji: '🏦',
    title: '생명보험사 전사 업무 자동화',
    period: '2년',
    highlight: '64개 프로세스 자동화, 연간 00시간 절감',
    tags: ['RPA', '회계', '계약관리', 'CS'],
    overview:
      '생명보험사 전사 RPA를 기획·개발. 회계/영업지원/계약관리/고객서비스 등 64개 프로세스 자동화로 처리 속도·정확성 향상.',
    features: [
      '제지급계정 일마감 자동화',
      '변액보험 안내장 검증',
      '데이터 수집·정합성 검증·보고 자동화',
    ],
    outcomes: ['연간 00시간 절감', '오류율 감소', '보고 체계 표준화'],
  },
  {
    id: 'distribution-edi-erp',
    category: 'rpa',
    emoji: '🔗',
    title: '유통업체 EDI 취합·ERP 업로드 자동화',
    period: '3개월',
    highlight: '일일 반복 업무 제거, 인건비 절감',
    tags: ['RPA', 'ERP', 'EDI'],
    overview:
      '거래처별 EDI 데이터를 자동 취합하고 ERP로 업로드. 수작업 제거와 데이터 품질 향상.',
    features: ['EDI 수집·통합', 'ERP 업로드 포맷 표준화', '정합성 검증·오류 로그'],
    outcomes: ['인건비 절감', '품질 향상', '업무 연속성 강화'],
  },
  {
    id: 'manufacturing-voucher',
    category: 'rpa',
    emoji: '🏭',
    title: '제조업체 입출금 전표 처리 자동화',
    period: '3개월',
    highlight: '월 단위 처리 → 일일 분산으로 전환',
    tags: ['RPA', '전표', '크롤링'],
    overview:
      '새벽 스케줄로 데이터 수집·전표 생성·반제처리를 자동화. 카드매출은 카드사 홈페이지에서 크롤링 후 전표 생성.',
    features: ['새벽 스케줄링', '반제처리 자동화', '카드사 크롤링·전표 생성'],
    outcomes: ['업무 부하 분산', '정확도 향상', '타 업무 시간 확보'],
  },
  {
    id: 'covid-notice',
    category: 'rpa',
    emoji: '🦠',
    title: '코로나19 격리통지서 생성·발송 자동화',
    period: '3개월',
    highlight: '대상자 급증 상황에서도 안정적 발송',
    tags: ['RPA', '문서자동화', '문자발송'],
    overview:
      '워드 템플릿에 대상자 정보를 자동 반영하고 문자발송 시스템과 연계하여 격리통지서 대량 발송.',
    features: ['워드 템플릿 자동 작성', '문자발송 시스템 연계', '발송 결과 로그 관리'],
    outcomes: ['업무 부하 경감', '신속 대응', '품질 일관성 확보'],
  },
  {
    id: 'energy-invoice',
    category: 'rpa',
    emoji: '⚡️',
    title: '에너지 발전기별 세금계산서 발행 자동화',
    period: '3개월',
    highlight: 'REC/SMP 및 수력발전 데이터 취합·발행',
    tags: ['RPA', '세금계산서', '인증서'],
    overview:
      '발전기(REC, SMP)별로 관련 사이트에서 데이터를 수집·취합하여 세금계산서를 자동 발행. 공인인증서(USB) 환경 대응.',
    features: ['다중 사이트 데이터 수집', 'USB 인증서 자동 로그인', '발행 프로세스 자동화'],
    outcomes: ['정확성·속도 향상', '변동 업체 대응 향상', '무인화로 인력 소모 최소화'],
  },
  {
    id: 'server-ops',
    category: 'ops',
    emoji: '🖥️',
    title: '서버 관리 점검 자동화',
    period: '3개월',
    highlight: '월간 점검 자동화로 안정성 강화',
    tags: ['운영', '리눅스', 'PuTTY'],
    overview:
      'PuTTY로 서버 접속 후 메모리/네트워크 등 핵심 지표를 명령어로 점검하여 수집·보고까지 자동화.',
    features: ['원격 접속 자동화', '상태 점검 명령 자동 실행', '보고서 생성'],
    outcomes: ['점검 시간 단축', '오류 감소', '안정성 확보'],
  },
  {
    id: 'tax-filing',
    category: 'rpa',
    emoji: '🧾',
    title: '종합소득세 신고 자동화',
    period: '2개월',
    highlight: 'ERP 연계 · wehagoT 전환 대응',
    tags: ['RPA', '세무', 'HomeTax', 'wehagoT'],
    overview:
      'smartA → wehagoT 전환에 맞춰 프로세스 재설계. ERP 데이터 취합 후 홈택스에 자동 신고. 회계사 협업으로 검증 강화.',
    features: ['데이터 변환·검증', 'wehagoT 연계', '홈택스 자동 신고'],
    outcomes: ['정확성·속도 향상', '시스템 전환 대응', '오류 최소화'],
  },
  {
    id: 'food-inventory',
    category: 'rpa',
    emoji: '🥫',
    title: '식품유통 재고관리·매출 전표 자동화',
    period: '4개월',
    highlight: 'ERP/WMS 연계, 일일 스케줄 운용',
    tags: ['RPA', 'ERP', 'WMS', '전표'],
    overview:
      '일일재고수불·시즌자재 재고관리 자동화. 입출고/판매량 비교, ERP·WMS 연계, 가맹/직영 매출 취합 후 전표 자동 생성.',
    features: ['재고 지표 자동화', '데이터 정합성 검증', '스케줄 기반 실행'],
    outcomes: ['정확성·효율성 향상', '수작업 절감', '의사결정 지원'],
  },
  {
    id: 'training',
    category: 'edu',
    emoji: '🎓',
    title: '신입·파트너 교육 운영 (Worktro)',
    period: '1년',
    highlight: '초급/중급 커리큘럼 표준화',
    tags: ['교육', '커리큘럼', 'Worktro'],
    overview:
      'Worktro로 신입·파트너 대상 교육 운영. 초급/중급 과정으로 난이도별 구성, 과제·피드백 제공.',
    features: ['과정 설계·운영', '맞춤형 커리큘럼', '과제 및 피드백'],
    outcomes: ['현장 적용성 강화', '적응 기간 단축', '역량 향상'],
  },
  {
    id: 'credit-automation',
    category: 'rpa',
    emoji: '📄',
    title: '신용평가 전과정 자동화',
    period: '기간 미기입',
    highlight: '수신→분류→OCR→검증→의견서 자동화',
    tags: ['RPA', 'OCR', 'ERP', 'BPR'],
    overview:
      '문서 수신 후 분류, OCR 추출, 항목별 검증/오류 알림, 확정 데이터로 재무제표·의견서 자동 작성. ERP/OCR/BPR 연계.',
    features: ['자동 분류·OCR', '검증·알림', '재무제표/의견서 생성'],
    outcomes: ['처리 속도·정확성 향상', '품질 관리 강화', '업무 표준화'],
  },
  {
    id: 'worktro-vue3',
    category: 'dev',
    emoji: '🎛️',
    title: 'Worktro UI 개선 · Vue3 마이그레이션',
    period: '3개월',
    highlight: 'Vue2 → Vue3, UI/UX 품질 향상',
    tags: ['Vue3', '프론트엔드', 'UI/UX'],
    overview:
      '기존 Vue2 화면을 Vue3로 마이그레이션. 디자이너 협업으로 UI/UX 개선, 컴포넌트 구조 최적화.',
    features: ['마이그레이션', '디자인 반영', '컴포넌트 구조 개선'],
    outcomes: ['성능·안정성 향상', '유지보수성 강화', '확장성 확보'],
  },
  {
    id: 'bot-stabilization',
    category: 'ops',
    emoji: '🤖',
    title: 'RPA 봇 기능 안정화·운영 대응',
    period: '기간 미기입',
    highlight: '모니터링·장애대응·지속개선 체계 구축',
    tags: ['운영', '모니터링', '알림'],
    overview:
      '실운영 봇의 로그 분석·오류 원인 파악, 모니터링·알림 체계 강화, 요구사항 반영 및 성능 최적화.',
    features: ['로그 분석', '장애 대응', '기능 개선·최적화'],
    outcomes: ['가용성 향상', '복구 시간 단축', '만족도 제고'],
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

// Keyboard: ⌘K focuses search
onMounted(() => {
  window.addEventListener('keydown', (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault()
      const el = document.querySelector('input[placeholder^="검색:"]')
      el && el.focus()
    }
  })
})
</script>

<template>
  <div class="projects">
    <div class="container">
      <!-- Header -->
      <header class="header">
        <div class="hero-section">
          <h1 class="hero-title">
            <span class="gradient-text">프로젝트 포트폴리오</span>
          </h1>
          <p class="hero-subtitle">
            6년간 <span class="highlight">95건의 자동화 프로젝트</span>를 통해 쌓은 경험과 성과
          </p>
        </div>

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

          <!-- Search -->
          <div class="search-container">
            <input
              v-model="query"
              type="text"
              placeholder="검색: 프로젝트명, 기술, 성과..."
              class="search-input"
            />
          </div>
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
              <span class="project-period">{{ p.period }}</span>
            </div>
            <p class="project-highlight">{{ p.highlight }}</p>
            <div class="project-tags">
              <span v-for="tag in p.tags" :key="tag" class="project-tag">
                #{{ tag }}
              </span>
            </div>
            <div class="project-action">
              <span class="view-details">자세히 보기</span>
              <svg class="arrow-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </div>
          </div>
        </article>

        <div v-if="filtered.length === 0" class="no-results">
          <div class="no-results-icon">🔍</div>
          <h3>조건에 맞는 프로젝트가 없습니다</h3>
          <p>다른 검색어나 카테고리를 시도해보세요</p>
        </div>
      </main>

      <!-- Modal -->
      <transition name="modal">
        <div v-if="active" class="modal-overlay" @click="active = null">
          <div class="modal-content" @click.stop>
            <div class="modal-header">
              <div class="modal-emoji">{{ active.emoji }}</div>
              <div class="modal-info">
                <h3 class="modal-title">{{ active.title }}</h3>
                <p class="modal-meta">
                  {{ categoryLabel(active.category) }} · {{ active.period }}
                </p>
              </div>
              <button class="modal-close" @click="active = null">✕</button>
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
    </div>
  </div>
</template>

<style scoped>
.projects {
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(248, 250, 252, 0.8) 50%, rgba(241, 245, 249, 0.9) 100%);
  color: #1e293b;
  min-height: 100vh;
  padding: 80px 0;
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(10px);
}

.projects::before {
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

/* Header */
.header {
  margin-bottom: 60px;
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

.gradient-text {
  background: linear-gradient(135deg, #3b82f6 0%, #6366f1 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  display: inline-block;
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
  border: 1px solid rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.6);
  color: #475569;
  cursor: pointer;
  transition: all 0.3s ease;
}

.category-tab:hover {
  border-color: rgba(59, 130, 246, 0.3);
  background: rgba(255, 255, 255, 0.8);
}

.category-tab.active {
  background: linear-gradient(135deg, #3b82f6 0%, #6366f1 100%);
  border-color: transparent;
  color: white;
}

.search-container {
  width: 100%;
  max-width: 400px;
}

.search-input {
  width: 100%;
  padding: 16px 20px;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.6);
  color: #1e293b;
  font-size: 0.875rem;
  transition: all 0.3s ease;
}

.search-input::placeholder {
  color: rgba(71, 85, 105, 0.6);
}

.search-input:focus {
  outline: none;
  border-color: #3b82f6;
  background: rgba(255, 255, 255, 0.8);
}

/* Projects Grid */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 24px;
  margin-bottom: 80px;
}

.project-card {
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 20px;
  padding: 24px;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.project-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #3b82f6, #6366f1);
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.project-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  border-color: rgba(59, 130, 246, 0.3);
}

.project-card:hover::before {
  transform: scaleX(1);
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
  color: #64748b;
  white-space: nowrap;
  padding: 4px 8px;
  background: rgba(255, 255, 255, 0.6);
  border-radius: 6px;
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
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(248, 250, 252, 0.9) 100%);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 24px;
  max-width: 600px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  backdrop-filter: blur(10px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

.modal-header {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  padding: 32px 32px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
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
    padding: 60px 0;
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

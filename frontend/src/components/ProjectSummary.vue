<script setup lang="ts">
import { ref, computed } from 'vue';
import ProjectModal from './ProjectModal.vue';
import { useI18n } from 'vue-i18n';

const selectedProject = ref<Project | null>(null);
const { t } = useI18n()


const openModal = (project: Project) => {
  selectedProject.value = project;
};

interface Project {
  title: string;
  category: string;
  period: string;
  description: string;
  technologies: string[];
}

const contents: Project[] = [
  {
    title: t('portfolio'),
    category: "Web",
    period: "2025.08 - Present",
    description: t('portfolioDescription'),
    technologies: ["Vue.js", "TypeScript", "TailwindCSS"]
  },
  {
    title: t('rpaBotImprovement'),
    category: "App",
    period: "2025.06 - Present",
    description: t('rpaBotImprovementDescription'),
    technologies: ["C#", "Javascript", "NativeMessage"]
  },
  {
    title: t('worktroUiImprovement'),
    category: "Web",
    period: "2025.01 - 2025.05",
    description: t('worktroUiImprovementDescription'),
    technologies: ["Vue.js", "typescript", "Java"]
  },
  {
    title: t('automatedCreditEvaluation'),
    category: "RPA",
    period: "2024.06 - 2024.12",
    description: t('automatedCreditEvaluationDescription'),
    technologies: ["Worktro", "Excel", "OCR"]
  },
  { 
    title: t('monthlySalesClosingJournalEntriesAutomation'),
    category: "RPA",
    period: "2024.01 - 2024.05",
    description: t('monthlySalesClosingJournalEntriesAutomationDescription'),
    technologies: ["Worktro", "Excel", "ERP"]
  },
  {
    title: t('seasonalInventoryManagementAutomation'),
    category: "RPA",
    period: "2023.08 - 2023.12",
    description: t('seasonalInventoryManagementAutomationDescription'),
    technologies: ["Worktro", "Excel", "ERP", "WMS"]
  },
  {
    title: t('comprehensiveIncomeTaxFilingAutomation'),
    category: "RPA",
    period: "2023.06 - 2023.07",
    description: t('comprehensiveIncomeTaxFilingAutomationDescription'),
    technologies: ["Worktro", "Excel", "ERP", "WMS"]
  },
  {
    title: t('serverMaintenanceAutomation'),
    category: "RPA",
    period: "2023.03 - 2023.05",
    description: t('serverMaintenanceAutomationDescription'),
    technologies: ["Worktro", "PuTTY", "Shell Scripting"]
  },
  {
    title: t('powerGenerationTaxInvoiceAutomation'),
    category: "RPA",
    period: "2022.10 - 2023.02",
    description: t('powerGenerationTaxInvoiceAutomationDescription'),
    technologies: ["Worktro", "Excel", "Python"]
  },
  {
    title: t('covid19QuarantineNoticeAutomation'),
    category: "RPA",
    period: "2022.07 - 2022.09",
    description: t('covid19QuarantineNoticeAutomationDescription'),
    technologies: ["Worktro", "Excel", "Word", "SMS System"]
  },
  {
    title: t('depositAndAccountingJournalEntryAutomation'),
    category: "RPA",
    period: "2022.03 - 2022.06",
    description: t('depositAndAccountingJournalEntryAutomationDescription'),
    technologies: ["Peon", "Excel", "MS SQL", "ERP", "Python"]
  },
  {
    title: t('ediDataCollectionAndUploadAutomation'),
    category: "RPA",
    period: "2021.10 - 2022.02",
    description: t('ediDataCollectionAndUploadAutomationDescription'),
    technologies: ["Peon", "EDI System", "ERP"]
  },
  {
    title: t('endToEndAutomationOfLifeInsuranceOperations'),
    category: "RPA",
    period: "2019.07 - 2021.09",
    description: t('endToEndAutomationOfLifeInsuranceOperationsDescription'),
    technologies: ["WinAutomation", "vba", "Core Insurance System", "python"]
  }
]

// 년도별로 프로젝트 그룹화
const groupedProjects = computed(() => {
  const groups: { [key: string]: Project[] } = {};
  
  contents.forEach(project => {
    const year = project.period.split('.')[0]; // "2025.08 - Present"에서 "2025" 추출
    if (!groups[year]) {
      groups[year] = [];
    }
    groups[year].push(project);
  });
  
  // 년도별로 정렬 (최신순)
  return Object.entries(groups)
    .sort(([a], [b]) => parseInt(b) - parseInt(a))
    .map(([year, projects]) => ({
      year,
      projects: projects.sort((a, b) => {
        // 같은 년도 내에서는 시작 월로 정렬
        const aMonth = parseInt(a.period.split('.')[1]);
        const bMonth = parseInt(b.period.split('.')[1]);
        return bMonth - aMonth;
      })
    }));
});
</script>

<template>
  <section class="max-w-4xl relative">
    <div class="text-left pt-2">
      <div class="space-y-10">
        <div v-for="(group, groupIndex) in groupedProjects" :key="group.year" class="flex items-start">
          <div class="flex-shrink-0 w-24 text-sm text-[#8b949e] font-medium">{{ group.year }}</div>
          <div class="flex-1 ml-4 relative">
            <div class="absolute left-0 top-2 w-2 h-2 bg-[#93c5fd] rounded-full"></div>
            <div v-if="groupIndex < groupedProjects.length - 1" 
                 class="absolute left-1 top-6 w-0.5 bg-gradient-to-b from-[#93c5fd] to-transparent"
                 :style="{ height: `${(group.projects.length * 120) + 40}px` }"></div>
            <div class="ml-6 space-y-6">
              <div v-for="(project, projectIndex) in group.projects" :key="project.title" 
                   class="cursor-pointer hover:bg-[#161b22] p-4 rounded-lg transition-colors duration-200"
                   @click="openModal(project)">
                <div class="flex items-start justify-between mb-3">
                  <div class="flex-1">
                    <h3 class="text-lg font-bold text-white mb-1 hover:text-[#93c5fd] transition-colors">{{ project.title }}</h3>
                    <span class="text-[#8b949e] text-sm">{{ project.period }}</span>
                  </div>
                  <span class="bg-gradient-to-r from-[#1e3a8a] to-[#3b82f6] text-white px-3 py-1 rounded-full text-xs ml-2 flex-shrink-0 font-medium">{{ project.category }}</span>
                </div>
                <p class="text-[#c9d1d9] text-sm mb-3 leading-relaxed">{{ project.description }}</p>
                <div class="flex gap-2 flex-wrap">
                  <span 
                    v-for="tech in project.technologies.slice(0, 4)" 
                    :key="tech"
                    class="bg-[#161b22] text-[#93c5fd] px-2 py-1 rounded text-xs border border-[#30363d]"
                  >
                    {{ tech }}
                  </span>
                  <span v-if="project.technologies.length > 4" class="text-[#8b949e] text-xs px-1 py-1">
                    +{{ project.technologies.length - 4 }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <ProjectModal 
      v-if="selectedProject"
      :project="selectedProject"
      @close="selectedProject = null"
    />
  </section>
</template>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>

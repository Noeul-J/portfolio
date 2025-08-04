<script setup lang="ts">
import { ref } from 'vue';
import ProjectModal from './ProjectModal.vue';

const selectedProject = ref<Project | null>(null);

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
    title: "Portfolio",
    category: "Web",
    period: "2025.08 - Present",
    description: "Portfolio site based on Vue.js",
    technologies: ["Vue.js", "TypeScript", "TailwindCSS"]
  },
  {
    title: "RPA Bot Improvement",
    category: "App",
    period: "2025.06 - Present",
    description: "RPA Bot Improvement based on C#",
    technologies: ["C#", "Javascript", "NativeMessage"]
  },
  {
    title: "Worktro UI Improvement",
    category: "UI/UX",
    period: "2025.01 - 2025.05",
    description: "Worktro UI Improvement based on Vue2 -> Vue3 Migration",
    technologies: ["Vue.js", "typescript", "Java"]
  },
  {
    title: "Automated Credit Evaluation",
    category: "RPA",
    period: "2024.06 - 2024.12",
    description: "Developed an automated system that classifies incoming documents, uses OCR to extract data, generates financial statements, and composes credit evaluation reports based on the results",
    technologies: ["Worktro", "Excel", "OCR"]
  },
  { 
    title: "Monthly Sales Closing Journal Entries Automation",
    category: "RPA",
    period: "2024.01 - 2024.05",
    description: "Automated the processing of monthly sales closing journal entries for both company-owned and franchise stores.",
    technologies: ["Worktro", "Excel", "ERP"]
  },
  {
    title: "Seasonal inventory management automation",
    category: "RPA",
    period: "2023.08 - 2023.12",
    description: "I automated the seasonal inventory management process by integrating and analyzing data on purchase orders, shipments, and related figures.",
    technologies: ["Worktro", "Excel", "ERP", "WMS"]
  },
  {
    title: "Comprehensive Income Tax Filing Automation",
    category: "RPA",
    period: "2023.06 - 2023.07",
    description: "Automated the end-to-end comprehensive income tax filing process at a tax firm, including data collection, report generation, and electronic submission via Hometax.",
    technologies: ["Worktro", "Excel", "ERP", "WMS"]
  },
  {
    title: "Server maintenance automation",
    category: "RPA",
    period: "2023.03 - 2023.05",
    description: "Developed a system to automate routine Linux server diagnostics by using PuTTY for remote access and shell scripting.",
    technologies: ["Worktro", "PuTTY", "Shell Scripting"]
  },
  {
    title: "Power Generation Tax Invoice Automation",
    category: "RPA",
    period: "2022.10 - 2023.02",
    description: "Developed a system to automatically issue tax invoices based on power generation from REC and SMP sources.",
    technologies: ["Worktro", "Excel", "Python"]
  },
  {
    title: "COVID-19 Quarantine Notice Automation",
    category: "RPA",
    period: "2022.07 - 2022.09",
    description: "Automated the generation of COVID-19 quarantine notices and their delivery via SMS.",
    technologies: ["Worktro", "Excel", "Word", "SMS System"]
  },
  {
    title: "Deposit and Accounting Journal Entry Automation",
    category: "RPA",
    period: "2022.03 - 2022.06",
    description: "Automated the creation of deposit and accounting journal entries.",
    technologies: ["Peon", "Excel", "MS SQL", "ERP", "Python"]
  },
  {
    title: "EDI Data Collection and Upload Automation",
    category: "RPA",
    period: "2021.10 - 2022.02",
    description: "Developed an automated workflow to collect EDI data from various sources and upload it into the ERP system for further processing.",
    technologies: ["Peon", "EDI System", "ERP"]
  },
  {
    title: "End-to-End Automation of Life Insurance Operations",
    category: "RPA",
    period: "2019.07 - 2021.09",
    description: "Automated key life insurance processes including daily account closing, report generation, journal entry processing, and variable product validation.",
    technologies: ["WinAutomation", "vba", "Core Insurance System", "python"]
  }
]
</script>

<template>
  <section class="p-6">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div 
        v-for="content in contents" 
        :key="content.title"
        class="bg-[#21262d] p-4 rounded-lg border border-[#30363d] hover:border-[#58a6ff] transition-colors hover:shadow-lg hover:shadow-[#58a6ff]/20"
        @click="openModal(content)"      
      >
        <div class="flex items-start justify-between mb-6">
          <div class="flex-1">
            <h3 class="text-base font-semibold text-white mb-1 line-clamp-2">{{ content.title }}</h3>
            <span class="text-[#8b949e] text-xs">{{ content.period }}</span>
          </div>
          <span class="bg-[#161b22] text-[#8b949e] px-2 py-1 rounded-full text-xs ml-2 flex-shrink-0">{{ content.category }}</span>
        </div>
        <p class="text-[#8b949e] text-xs mb-5 line-clamp-3">{{ content.description }}</p>
        <div class="flex gap-1 flex-wrap">
          <span 
            v-for="tech in content.technologies.slice(0, 5)" 
            :key="tech"
            class="bg-[#161b22] text-[#c9d1d9] px-2 py-1 rounded text-xs"
          >
            {{ tech }}
          </span>
          <span v-if="content.technologies.length > 5" class="text-[#8b949e] text-xs px-1 py-1">
            +{{ content.technologies.length - 5 }}
          </span>
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

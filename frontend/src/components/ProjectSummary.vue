<script setup lang="ts">
interface Project {
  title: string;
  category: string;
  description: string;
  technologies: string[];
}

const contents: Project[] = [
  {
    title: "RPA Bot",
    category: "Microsoft App",
    description: "C#기반의 RPA 봇 기능 개발",
    technologies: ["C#", "Javascript", "NativeMessage"]
  },
  {
    title: "Worktro UI 개선",
    category: "UI/UX 개선",
    description: "Vue2 -> Vue3 마이그레이션",
    technologies: ["Vue.js", "typescript", "Java"]
  },
  {
    title: "TaskTracker",
    category: "Web App",
    description: "Vue 기반 업무 관리 시스템",
    technologies: ["Vue.js", "TypeScript", "Node.js"]
  },
  {
    title: "Data Analytics Dashboard",
    category: "Data Visualization",
    description: "실시간 데이터 분석 대시보드",
    technologies: ["React", "D3.js", "Python"]
  },
  {
    title: "Mobile Banking App",
    category: "Mobile App",
    description: "안전한 모바일 뱅킹 서비스",
    technologies: ["React Native", "Firebase", "TypeScript"]
  }
]
</script>

<template>
  <section class="bg-[#161b22] rounded-xl border border-[#30363d] p-6">
    <h2 class="text-2xl font-bold text-white mb-6">Projects</h2>
     
    <div class="space-y-4">
      <div 
        v-for="content in contents" 
        :key="content.title"
        class="bg-[#21262d] p-4 rounded-lg border border-[#30363d] hover:border-[#58a6ff] transition-colors"
      >
        <div class="flex items-center justify-between mb-3">
          <h3 class="text-lg font-semibold text-white">{{ content.title }}</h3>
          <span class="bg-[#161b22] text-[#8b949e] px-2 py-1 rounded-full text-xs">{{ content.category }}</span>
        </div>
        <p class="text-[#8b949e] text-sm mb-3">{{ content.description }}</p>
        <div class="flex gap-2 flex-wrap">
          <span 
            v-for="tech in content.technologies" 
            :key="tech"
            class="bg-[#161b22] text-[#c9d1d9] px-2 py-1 rounded text-xs"
          >
            {{ tech }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

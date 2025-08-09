<script setup lang="ts">
interface Project {
  title: string;
  category: string;
  period: string;
  description: string;
  technologies: string[];
}

interface Props {
  project: Project;
}

defineProps<Props>();
defineEmits<{
  close: [];
}>();
</script>

<template>
  <div class="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 backdrop-blur-sm">
    <div class="bg-[#21262d] rounded-xl p-8 max-w-3xl w-full mx-4 max-h-[85vh] overflow-y-auto border border-[#30363d] shadow-2xl">
      <div class="flex justify-between items-start mb-6">
        <div class="flex-1">
          <h2 class="text-2xl font-bold bg-gradient-to-r from-[#93c5fd] to-[#60a5fa] bg-clip-text text-transparent mb-2">{{ project.title }}</h2>
          <span class="bg-gradient-to-r from-[#1e3a8a] to-[#3b82f6] text-white px-4 py-2 rounded-full text-sm font-medium">{{ project.category }}</span>
        </div>
        <button 
          @click="$emit('close')"
          class="text-[#8b949e] hover:text-[#93c5fd] transition-colors text-2xl font-bold ml-4"
        >
          ✕
        </button>
      </div>
      
      <div class="space-y-6">
        <div class="flex items-center">
          <span class="text-[#8b949e] text-sm font-medium w-20">Period:</span>
          <span class="text-white ml-4 font-medium">{{ project.period }}</span>
        </div>
        
        <div>
          <span class="text-[#8b949e] text-sm font-medium block mb-3">Description:</span>
          <p class="text-[#c9d1d9] leading-relaxed text-base">{{ project.description }}</p>
        </div>
        
        <div>
          <span class="text-[#8b949e] text-sm font-medium block mb-3">Technologies:</span>
          <div class="flex flex-wrap gap-3">
            <span 
              v-for="tech in project.technologies" 
              :key="tech"
              class="bg-[#161b22] text-[#93c5fd] px-4 py-2 rounded-lg text-sm border border-[#30363d] hover:border-[#93c5fd] transition-colors font-medium"
            >
              {{ tech }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

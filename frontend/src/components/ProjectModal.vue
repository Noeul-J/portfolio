<script setup lang="ts">
interface Project {
  id: number;
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
  <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div class="bg-[#21262d] rounded-lg p-6 max-w-2xl w-full mx-4 max-h-[80vh] overflow-y-auto">
      <div class="flex justify-between items-start mb-4">
        <h2 class="text-xl font-bold text-white">{{ project.title }}</h2>
        <button 
          @click="$emit('close')"
          class="text-[#8b949e] hover:text-white transition-colors"
        >
          ✕
        </button>
      </div>
      
      <div class="space-y-4">
        <div>
          <span class="text-[#8b949e] text-sm">Category:</span>
          <span class="text-white ml-2">{{ project.category }}</span>
        </div>
        
        <div>
          <span class="text-[#8b949e] text-sm">Period:</span>
          <span class="text-white ml-2">{{ project.period }}</span>
        </div>
        
        <div>
          <span class="text-[#8b949e] text-sm">Description:</span>
          <p class="text-white mt-1">{{ project.description }}</p>
        </div>
        
        <div>
          <span class="text-[#8b949e] text-sm">Technologies:</span>
          <div class="flex flex-wrap gap-2 mt-1">
            <span 
              v-for="tech in project.technologies" 
              :key="tech"
              class="bg-[#161b22] text-[#c9d1d9] px-2 py-1 rounded text-xs"
            >
              {{ tech }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

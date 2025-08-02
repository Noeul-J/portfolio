<template>
  <section id="projects" class="py-16 px-6 bg-[#0d1117]">
    <div class="container mx-auto">
      <h2 class="text-3xl font-bold text-white mb-12 text-center">Projects Portfolio</h2>
      <div class="grid md:grid-cols-2 gap-8">
        <div class="bg-[#161b22] p-6 rounded-xl border border-[#30363d] hover:border-[#58a6ff] transition-colors">
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-xl font-semibold text-white">SmartBot RPA</h3>
            <span class="bg-[#21262d] text-[#8b949e] px-3 py-1 rounded-full text-sm">RPA</span>
          </div>
          <p class="text-[#8b949e] text-sm mb-4">Chrome 기반 자동화 봇 개발 (C# + Python + Native Messaging)</p>
          <div class="flex gap-2">
            <span class="bg-[#21262d] text-[#c9d1d9] px-2 py-1 rounded text-xs">C#</span>
            <span class="bg-[#21262d] text-[#c9d1d9] px-2 py-1 rounded text-xs">Python</span>
            <span class="bg-[#21262d] text-[#c9d1d9] px-2 py-1 rounded text-xs">Chrome API</span>
          </div>
        </div>
        
        <div class="bg-[#161b22] p-6 rounded-xl border border-[#30363d] hover:border-[#58a6ff] transition-colors">
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-xl font-semibold text-white">TaskTracker</h3>
            <span class="bg-[#21262d] text-[#8b949e] px-3 py-1 rounded-full text-sm">Web App</span>
          </div>
          <p class="text-[#8b949e] text-sm mb-4">Vue 기반 개인 업무 관리 시스템 개발</p>
          <div class="flex gap-2">
            <span class="bg-[#21262d] text-[#c9d1d9] px-2 py-1 rounded text-xs">Vue.js</span>
            <span class="bg-[#21262d] text-[#c9d1d9] px-2 py-1 rounded text-xs">TypeScript</span>
            <span class="bg-[#21262d] text-[#c9d1d9] px-2 py-1 rounded text-xs">Tailwind</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

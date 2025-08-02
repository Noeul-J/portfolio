<template>
  <header class="p-4 flex justify-between items-center bg-[#161b22] border-b border-[#30363d]">
    <div class="flex items-center gap-4">
      <h1 class="text-2xl font-bold text-white"></h1>
      <button class="bg-[#21262d] hover:bg-[#30363d] text-white px-6 py-3 rounded-lg border border-[#30363d] transition-colors flex items-center gap-2">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
        </svg>
        Download CV
      </button>
    </div>
    <nav class="space-x-6">
      <a href="#about" class="text-[#c9d1d9] hover:text-[#58a6ff] transition-colors">About Me</a>
      <a href="#projects" class="text-[#c9d1d9] hover:text-[#58a6ff] transition-colors">Projects</a>
      <a href="#contact" class="text-[#c9d1d9] hover:text-[#58a6ff] transition-colors">Contact</a>
    </nav>
  </header>
</template>
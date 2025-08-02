<script setup lang="ts">
const particlesOptions = {
  background: { color: '#0d1117' },
  particles: {
    number: { value: 60 },
    size: { value: 2 },
    move: { enable: true, speed: 1 },
    opacity: { value: 0.5 }
  }
}
</script>

<template>
  <div class="relative min-h-screen flex items-center justify-center bg-[#0d1117] overflow-hidden">
    <div class="container mx-auto px-6 py-12">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <!-- Left Content -->
        <div class="text-left">
          <h1 class="text-5xl lg:text-6xl font-bold text-white mb-4">
            Hi, I'm HyeongJu Jung
          </h1>
          <p class="text-xl text-[#8b949e] mb-8">
            With a background in automation and frontend development,
            I specialize in turning complex business rules into clean, maintainable logic.
            Whether it’s a UI or a bot, I build software that gets the job done — intelligently.  
          </p>
          <button class="bg-[#21262d] hover:bg-[#30363d] text-white px-6 py-3 rounded-lg border border-[#30363d] transition-colors flex items-center gap-2">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
            </svg>
            Download CV
          </button>
        </div>
        
        <!-- Right Illustration -->
        <div class="flex justify-center lg:justify-end">
          <div class="relative w-80 h-80">
            <!-- Developer illustration placeholder -->
            <div class="w-full h-full bg-gradient-to-br from-[#21262d] to-[#30363d] rounded-2xl border border-[#30363d] flex items-center justify-center">
              <div class="text-center">
                <div class="w-24 h-24 bg-[#58a6ff] rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg class="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                  </svg>
                </div>
                <p class="text-[#8b949e] text-sm">Developer Illustration</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



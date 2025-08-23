import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  define: {
    // 환경변수를 클라이언트에서 사용할 수 있도록 정의
    __VUE_PROD_DEVTOOLS__: false,
  },
  // 환경변수 접두사 설정 (VITE_로 시작하는 변수만 클라이언트에 노출)
  envPrefix: 'VITE_',
})

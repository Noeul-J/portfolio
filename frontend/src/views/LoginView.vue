<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()

import api from '@/axios'
import { onMounted, ref } from 'vue'

const message = ref('')

onMounted(async () => {
  try{
    const response = await api.get('/api/test')
    message.value = response.data.message
  } catch (error) {
    console.error('API 호출 오류:', error)
    message.value = 'API 호출 오류가 발생했습니다.'
  }
})

function mockLogin() {
  // 실제 구현에서는 Firebase Auth 또는 OAuth 연동 가능
  localStorage.setItem('token', 'mock-token')
  router.push('/inbox')
}
</script>

<template>
  <div class="p-8 text-center">
    <h1 class="text-2xl font-bold mb-4">MiniMail 로그인</h1>
    <div class="p-6 text-lg"> 백엔드 메시지 : {{ message }}</div>
    <button @click="mockLogin" class="bg-blue-500 text-white px-4 py-2 rounded">
      GitHub로 로그인 (Mock)
    </button>
  </div>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()

function mockLogin() {
  // 실제 구현에서는 Firebase Auth 또는 OAuth 연동 가능
  localStorage.setItem('token', 'mock-token')
  router.push('/inbox')
}
</script>

<template>
  <div class="p-8 text-center">
    <h1 class="text-2xl font-bold mb-4">MiniMail 로그인</h1>
    <button @click="mockLogin" class="bg-blue-500 text-white px-4 py-2 rounded">
      GitHub로 로그인 (Mock)
    </button>
  </div>
</template>
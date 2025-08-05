// src/main.ts
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { pinia } from './store'
import { createI18n } from 'vue-i18n'
import en from './locales/en.json'
import ko from './locales/ko.json'
import './style.css'

const i18n = createI18n({
  legacy: false,
  locale: 'ko',
  fallbackLocale: 'en',
  messages: {
    en,
    ko
  } as any
})

const app = createApp(App)

app.use(pinia)
app.use(router as any)
app.use(i18n)

app.mount('#app')


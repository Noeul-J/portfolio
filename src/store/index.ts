import {createPinia} from 'pinia'
import { computed } from 'vue';

export const pinia = createPinia();

export const selectLanguage = computed(() => {
    return localStorage.getItem('language') || 'ko';
})
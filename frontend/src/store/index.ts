import {createPinia} from 'pinia'
import { ref } from 'vue';

export const pinia = createPinia();

export const selectLanguage = ref('ko');
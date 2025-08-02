// src/main.ts
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { pinia } from './store'
import { loadFull } from "tsparticles";
import VueParticles from '@tsparticles/vue3';
import './style.css'
// import Particles from "@tsparticles/vue3"
// import { loadSlim } from "@tsparticles/slim"

const app = createApp(App)

app.use(pinia)
app.use(router)

app.use(VueParticles, {
  init: async (engine) => {
    await loadFull(engine)
  }
})
// createApp(App).use(Particles, {
//   init: async engine => {
//     await loadFull(engine); // you can load the full tsParticles library from "tsparticles" if you need it
//     // await loadSlim(engine); // or you can load the slim version from "@tsparticles/slim" if don't need Shapes or Animations
//   },
// });
app.mount('#app')


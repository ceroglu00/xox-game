/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { createRouter, createWebHistory } from 'vue-router'
import { routes } from 'vue-router/auto-routes'

//DOSYALARIM
import Anasayfa from "@/pages/Anasayfa.vue";
import GamePage from "@/pages/GamePage.vue";

// const routes = [
//   {
//     path:"/",
//     component: Anasayfa
//   },
//   {
//     path:"/oyun",
//     component: GamePage
//   }
// ]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})


















// Workaround for https://github.com/vitejs/vite/issues/11804
router.onError((err, to) => {
  if (err?.message?.includes?.('Failed to fetch dynamically imported module')) {
    if (localStorage.getItem('vuetify:dynamic-reload')) {
      console.error('Dynamic import error, reloading page did not fix it', err)
    } else {
      console.log('Reloading page to fix dynamic import error')
      localStorage.setItem('vuetify:dynamic-reload', 'true')
      location.assign(to.fullPath)
    }
  } else {
    console.error(err)
  }
})

router.isReady().then(() => {
  localStorage.removeItem('vuetify:dynamic-reload')
})

export default router

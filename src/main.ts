import { createSSRApp, createApp as baseCreateApp } from 'vue'
import 'windi.css'
import App from './App.vue'
import router from './router'
import store, { key } from './store'

if (!import.meta.env.SSR) {
  const app = baseCreateApp(App)
  app.use(store, key)
  app.use(router)
  app.mount('#app')
}
export function createApp() {
  const app = createSSRApp(App)
  app.use(store, key)
  app.use(router)
  return { app, router }
}

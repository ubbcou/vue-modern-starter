import { createSSRApp } from 'vue'
import 'windi.css'
import App from './App.vue'
import router from './router'
import store, { key } from './store'

export function createApp() {
  const app = createSSRApp(App)
  app.use(store, key)
  app.use(router)
  return { app, router }
}

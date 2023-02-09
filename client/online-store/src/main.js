import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import '@/assets/style/main.scss'

console.log(process.env.VUE_APP_API_URL)

createApp(App).use(store).use(router).mount('#app')


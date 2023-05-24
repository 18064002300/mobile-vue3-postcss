import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
// 2. 引入组件样式
import 'vant/lib/index.css'
const app = createApp(App)

app.use(router)
app.use(createPinia)
app.mount('#app')

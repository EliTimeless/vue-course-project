import { createApp } from 'vue'
import './assets/tailwind.css'
import App from './App.vue'
import VueAwesomePaginate from 'vue-awesome-paginate'
import 'vue-awesome-paginate/dist/style.css'
import router from './router/index'

const app = createApp(App)
app.use(VueAwesomePaginate)
app.use(router)
app.mount('#app')

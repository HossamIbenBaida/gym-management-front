
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Toast from "vue-toastification";
import { createPinia } from 'pinia';
import "vue-toastification/dist/index.css";
import './assets/main.css'
import 'nprogress/nprogress.css';

const app = createApp(App)
const pinia = createPinia();
app.use(router)
app.use(Toast);
app.use(pinia);
app.mount('#app')

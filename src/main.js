import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import * as Vue from 'vue' // in Vue 3
import axios from 'axios'
import VueAxios from 'vue-axios'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

const app = createApp(App).use(router);
app.use(VueAxios, { $request: axios });
app.mount('#app');
import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router/route.js'
import Toasted from 'vue-toasted';
import store from './store/store'
import { library } from '@fortawesome/fontawesome-svg-core'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
library.add(faUserSecret)

const app = createApp(App)
// app.use(store)
app.use(router)
app.use(store)

app.component('font-awesome-icon', FontAwesomeIcon)
// app.use(Toasted)
app.mount('#app')
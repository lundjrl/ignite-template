import router from 'routing/routes'
import storeConfig from 'stores/config'
import { createApp } from 'vue'
import App from './App.vue'
import './index.css'

createApp(App)
  .use(storeConfig)
  .use(router)
  .mount('#app')

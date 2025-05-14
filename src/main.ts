import { createApp } from 'vue'
import './index.css'
import App from './App.vue'
import { router } from './routing/routes'
import storeConfig from './stores/config'

createApp(App)
  .use(storeConfig)
  .use(router)
  .mount('#app')

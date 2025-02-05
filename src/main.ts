import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { router } from './routing/routes'
import storeConfig from './stores/config'
import { wrapper } from './design/config'

createApp(App)
  .use(storeConfig)
  .use(router)
  .use(wrapper.designPlugin, wrapper.designConfig)
  .mount('#app')

import PrimeVue from 'primevue/config'
import preset from './theme'

export const wrapper = {
  designPlugin: PrimeVue,
  designConfig: {
    theme: {
      preset,
      options: {
        prefix: 'p',
        darkModeSelector: 'system',
        cssLayer: false
      }
    }
  }
}

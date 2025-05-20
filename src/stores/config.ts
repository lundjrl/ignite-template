import { createPinia } from 'pinia'
import persistingState from 'pinia-plugin-persistedstate'

// Intentionally left out of main.ts to prevent vendor lockin.
const storeConfig = createPinia().use(persistingState)

export default storeConfig

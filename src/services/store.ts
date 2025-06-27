import { useGlobalStore } from 'stores/global-store'
import { useUserStore } from 'stores/user-store'

// TODO: As your application grows, add more stores to reset here.
export const resetStores = () => {
  useGlobalStore().$reset()
  useUserStore().$reset()
}

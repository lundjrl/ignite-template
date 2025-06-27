import type { User } from 'types/schema/user-example'
import { defineStore } from 'pinia'
import { getUserIfIsLoggedIn } from 'services/auth/user'
import { ref } from 'vue'

const store = () => {
  const user = ref<User | null>(null)

  const fetchUserDataIfNotExists = async () => {
    if (user.value)
      return

    const data = await getUserIfIsLoggedIn()

    if (!data)
      return

    user.value = data
  }

  return { fetchUserDataIfNotExists, user }
}

export const useUserStore = defineStore('user', store)

import type { User } from 'types/schema/user-example'
import { defineStore } from 'pinia'
import { createUser, getUsers } from 'services/models/user-example'
import { ref } from 'vue'

function store() {
  const users = ref<User[]>([])

  const fetchUsers = async () => {
    const data = await getUsers()
    users.value = data
  }

  const addUser = async (user: Partial<User>) => {
    const data = await createUser(user)

    if (!data)
      return

    users.value = [data, ...users.value]
  }

  return { addUser, fetchUsers, users }
}

export const useUserExampleStore = defineStore('user-example', store)

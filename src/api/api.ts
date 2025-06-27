import type {
  AggregationOptions,
  AuthenticationData,
  CollectionType,
  AuthenticationStorage as DirectusAuthenticationStorage,
  Query,
  RegularCollections,
  SingletonCollections,

  UnpackList,
} from '@directus/sdk'
import type { CustomDirectusTypes as Schema } from 'types/schema/types'

import {
  aggregate,
  authentication,
  createDirectus,
  createItem,
  createItems,
  createUser,
  deleteItem,
  deleteItems,
  logout,
  passwordRequest,
  passwordReset,
  readItem,
  readItems,
  readMe,
  readRoles,
  readSingleton,
  readUsers,
  rest,
  updateItem,
  updateItems,
  updateUser,
} from '@directus/sdk'

interface AuthenticationStorage extends DirectusAuthenticationStorage {
  clear: () => void
}

// docs.directus.io/guides/sdk/authentication.html#configure-custom-storage
export const authSessionStorage = (key: string = 'directus_session') =>
  ({
    get: () => {
      if (!key)
        return null

      const content = sessionStorage.getItem(key)
      return content ? JSON.parse(content) : null
    },
    set: (data: AuthenticationData) => {
      if (!key)
        return null
      if (!data)
        sessionStorage.removeItem(key)

      return sessionStorage.setItem(key, JSON.stringify(data))
    },
    clear: () => sessionStorage.removeItem(key),
  }) as AuthenticationStorage

const apiUrl = import.meta.env.VITE_API_BASE_URL

if (!apiUrl) {
  throw new Error(
    'The API URL is not set. Please set API_URL in your .env file. If running staging or production, you\'ll need to set it at build time.',
  )
}

const api = createDirectus<Schema>(new URL(apiUrl).toString())
  .with(
    authentication('cookie', {
      credentials: 'include',
      storage: authSessionStorage(),
    }),
  )
  .with(rest({ credentials: 'include' }))

export {
  aggregate,
  api,
  createItem,
  createItems,
  createUser,
  deleteItem,
  deleteItems,
  logout,
  passwordRequest,
  passwordReset,
  readItem,
  readItems,
  readMe,
  readRoles,
  readSingleton,
  readUsers,
  updateItem,
  updateItems,
  updateUser,
}
export type {
  AggregationOptions,
  CollectionType,
  Query,
  RegularCollections,
  Schema,
  SingletonCollections,
  UnpackList,
}
export default api

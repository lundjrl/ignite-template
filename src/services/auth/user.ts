import { resetStores } from 'services/store'
import {
  api,
  authSessionStorage,
  passwordRequest,
  passwordReset,
  readMe,
  logout as unAuth,
  updateUser,
} from 'src/api/api'

export const getUserIfIsLoggedIn = () =>
  api
    .request(
      readMe({
        fields: [
          'id',
          'first_name',
          'last_name',
          'email',
          'classification',
          'description',
          'status',
          'employee_code',
          'supervisor.id',
          'supervisor.first_name',
          'supervisor.last_name',
          'phone',
          'storm_availability',
          'union_id',
          'union_local_id',
          'union_class_id',
          'wc_code',
          'pay_ids.directus_users_id',
          'pay_ids.pay_ids_id.*',
          'role.id',
          'role.name',
        ],

      }),
    )
    .catch(() => null)

export const login = (email: string, password: string) => {
  if (!email || !password)
    return

  return api.login(email, password, { mode: 'cookie' })
}

export const logout = async () => {
  try {
    await api.request(unAuth())
    authSessionStorage().clear()
    resetStores()
    location.reload()
  }
  catch (error: unknown) {
    console.error(error)
    location.href = '/login'
  }
}

export const forgotPassword = async (email: string) => {
  if (!email)
    return
  return api.request(
    passwordRequest(
      email,
      `${window.location.origin.toString()}/reset-password`,
    ),
  )
}

export const resetPassword = async (token: string, password: string) => {
  if (!token && !password)
    return
  return api.request(passwordReset(token, password))
}

export const updatePassword = async (userId: string, password: string) => {
  if (!userId && !password)
    return
  return api.request(updateUser(userId, { password }))
}

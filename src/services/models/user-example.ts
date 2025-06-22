import type { User } from 'types/schema/user-example'
import { isValidUser } from 'validations/user-validation'
import { toast } from 'vue-sonner'
import { z } from 'zod/v4'

export async function getUsers(): Promise<User[]> {
  const baseUrl = import.meta.env.VITE_API_BASE_URL

  const url = new URL(`${baseUrl}/users/`)

  const headers = new Headers()
  headers.set('Content-Type', 'application/json')
  headers.set('Access-Control-Allow-Origin', '*')

  const params: Partial<RequestInit> = {
    headers,
    method: 'GET',
    body: null,
  }

  const response = await fetch(url.toString(), params)
  const json = await response.json()
  return json.users
}

export async function createUser(user: Partial<User>): Promise<User | undefined> {
  const isValid = isValidUser(user)

  // If the user payload does not match our schema.
  if (!isValid.success) {
    toast('Validation Failed', {
      description: z.prettifyError(isValid.error),
    })
    return
  }

  const baseUrl = import.meta.env.VITE_API_BASE_URL

  const url = new URL(`${baseUrl}/users/add`)

  const headers = new Headers()
  headers.set('Content-Type', 'application/json')
  headers.set('Access-Control-Allow-Origin', '*')

  const params: Partial<RequestInit> = {
    headers,
    method: 'POST',
    body: JSON.stringify(user),
  }

  const response = await fetch(url.toString(), params)
  return response.json()
}

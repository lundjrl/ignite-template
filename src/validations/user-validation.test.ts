/* eslint-disable test/consistent-test-it */
import type { User } from 'types/schema/user-example'
import { expect, test } from 'vitest'
import { isValidUser } from './user-validation'

const truthyUser: User = {
  id: 'fd57e08e-11b6-4724-97b0-0b30ce66b6f9',
  firstName: 'john',
  lastName: 'smith',
  email: 'test@test.com',
  phone: 3333333333,
}

const falsyUser = {
  id: 'test',
}

test('user validation passes on accepted user', () => {
  const isValid = isValidUser(truthyUser)
  expect(isValid.success).toBe(true)
})

test('user validation fails on faulty user', () => {
  const isValid = isValidUser(falsyUser)
  expect(isValid.success).toBe(false)
})

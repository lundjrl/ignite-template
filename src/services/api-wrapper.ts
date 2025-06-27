import type { DirectusUser } from '@directus/sdk'

import type {
  AggregationOptions,
  CollectionType,
  Query,
  RegularCollections,
  Schema,
  SingletonCollections,
  UnpackList,
} from 'src/api/api'
import {
  aggregate,
  api,
  createItem,
  createItems,
  deleteItem,
  deleteItems,
  readItem,
  readItems,
  readRoles,
  readSingleton,
  readUsers,
  updateItem,
  updateItems,
  updateUser,
} from 'src/api/api'

// INFO: This file exists to abstract away from the API SDK. Preventing Vendor Lock in.

type Item<T extends keyof Schema> = Partial<UnpackList<Schema[T]>>
type Items<T extends keyof Schema> = Item<T>[]

// SECTION Aggregate results
export const findManyAndGroupBy = async <
  C extends keyof Omit<Schema, 'application_config'>,
>(
  collection: C,
  query: AggregationOptions<Schema, C>,
) => {
  const result = await api.request(aggregate(collection, query))

  const data = result || []
  return data as Items<C>
}

// SECTION Create Records
export const createOne = async <C extends keyof Schema>(
  collection: C,
  item: Item<C>,
  query?: Query<Schema, Schema[C]>,
) => {
  const result = await api.request(createItem(collection, item, query))

  const data = result || {}
  return data as Item<C>
}

export const createMany = async <C extends keyof Schema>(
  collection: C,
  items: Items<C>,
  query?: Query<Schema, Schema[C]>,
) => {
  const result = await api.request(createItems(collection, items, query))

  const data = result || []
  return data as Items<C>
}
// !SECTION

// SECTION Delete Records
type FNdeleteOne<C extends keyof Schema> = (
  collection: C,
  key: string | number,
) => Promise<void>

export const deleteOne: FNdeleteOne<keyof Schema> = async (collection, key) => {
  return await api.request(deleteItem(collection, key))
}

type FNdeleteMany<C extends keyof Schema> = (
  collection: C,
  keysOrQuery: string[] | number[] | Query<Schema, Schema[C]>,
) => Promise<void>

export const deleteMany: FNdeleteMany<keyof Schema> = async (
  collection,
  keysOrQuery,
) => {
  return await api.request(deleteItems(collection, keysOrQuery))
}
// !SECTION

// SECTION Read Records
export const findOne = async <C extends RegularCollections<Schema>>(
  collection: C,
  key: string | number,
): Promise<CollectionType<Schema, C>> => {
  const result = await api.request(readItem(collection, key))

  return result as CollectionType<Schema, C>
}

export const findMany = async <C extends RegularCollections<Schema>>(
  collection: C,
  query?: Query<Schema, CollectionType<Schema, C>>,
): Promise<CollectionType<Schema, C>[]> => {
  const result = await api.request(readItems(collection, query))

  return result as CollectionType<Schema, C>[]
}
// !SECTION

// SECTION Update Records
export const updateOne = async <C extends keyof Schema>(
  collection: C,
  key: string | number,
  item: Partial<Item<C>>,
  query?: Query<Schema, Schema[C]>,
) => {
  const result = await api.request(updateItem(collection, key, item, query))

  return result as typeof item
}

export const updateMany = async <C extends keyof Schema>(
  collection: C,
  keysOrQuery: string[] | number[] | Query<Schema, Schema[C]>,
  item: Partial<UnpackList<Schema[C]>>,
  query?: Query<Schema, Schema[C]>,
) => {
  return await api.request(updateItems(collection, keysOrQuery, item, query))
}
// !SECTION

export const findRoles = () =>
  api.request(
    readRoles({
      fields: ['id', 'name'],
      filter: { admin_access: { _neq: true } },
    }),
  )

export const findUsers = (query?: Query<Schema, DirectusUser<object>>) =>
  api.request(readUsers(query))

export const changeUser = <C extends keyof Schema>(
  keysOrQuery: string,
  item: Partial<UnpackList<Schema[C]>>,
  query?: Query<Schema, DirectusUser<object>>,
) => api.request(updateUser(keysOrQuery, item, query))

export const findSingleton = async <C extends SingletonCollections<Schema>>(
  collection: C,
) => api.request(readSingleton(collection))

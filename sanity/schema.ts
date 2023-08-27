import { type SchemaTypeDefinition } from 'sanity'
import { category } from './category'
import { room } from './room'
import { amenities } from './amenities'
import { host } from './host'
import { ratings } from './rating'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [category, room, amenities, host, ratings],
}

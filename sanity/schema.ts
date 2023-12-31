import { type SchemaTypeDefinition } from 'sanity'
import { category } from './category'
import { amenities } from './amenities'
import { host } from './host'
import { home } from './home'
import { rating } from './rating'
import { cohost } from './cohost'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [category, home, amenities, host, rating, cohost],
}

import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId, useCdn } from '../env'

export const client = createClient({
  apiVersion: '2023-08-27',
  dataset,
  projectId,
  useCdn,
})

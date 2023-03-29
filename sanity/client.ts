import { createClient } from 'next-sanity'

const client = createClient({
  projectId: 'vuk3eh3d',
  dataset: 'production',
  apiVersion: '2022-03-27',
})

export default client

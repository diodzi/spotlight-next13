'use client'

import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { SchemaTypes } from './schemas'

export const config = {
  basePath: '/studio',
  projectId: 'vuk3eh3d',
  dataset: 'production',
  apiVersion: '2022-03-27',
  plugins: [deskTool()],
  schema: {
    types: SchemaTypes,
  },
}

export default defineConfig(config)

import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
//import schemas from "./schemas/schemaTypes";

export default defineConfig({
  name: 'default',
  title: 'demo',

  projectId: '5u8koaz3',
  dataset: 'production',
  plugins: [deskTool(), visionTool()],
/*   schema: {
    types: schemas
  }, */
  schema: {
    types: schemaTypes,
  },
})

import { type SchemaTypeDefinition } from 'sanity'
import profile from './profile'
import experience from './experience'
import project from './project'
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [profile,experience,project],
}

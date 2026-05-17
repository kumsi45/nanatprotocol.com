// Inside customImage.ts
import {defineType} from 'sanity'

export default defineType({
  name: 'customImage', // Change this from 'image' to 'customImage'
  title: 'Custom Image',
  type: 'object',
  fields: [
    {
      name: 'asset',
      type: 'image', // This 'type' stays as 'image' because you're using the built-in Sanity tool
    },
    {
      name: 'alt',
      title: 'Alternative Text',
      type: 'string',
    }
  ]
})
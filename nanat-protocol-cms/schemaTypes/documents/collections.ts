export default {
  name: 'collection',
  title: 'Collection',
  type: 'document',
  fields: [
    { name: 'title', title: 'Collection Name', type: 'string' },

    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title' },
    },

    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },

    {
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
    },

    {
      name: 'gallery',
      title: 'Gallery',
      type: 'array',
      of: [{ type: 'image' }],
    },
  ],
}
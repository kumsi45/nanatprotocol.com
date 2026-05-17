export default {
  name: 'page',
  title: 'General Pages',
  type: 'document',
  fields: [
    { name: 'title', title: 'Page Title', type: 'string' },

    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },

    {
      name: 'content',
      title: 'Content',
      type: 'blockContent',
    },
  ],
}
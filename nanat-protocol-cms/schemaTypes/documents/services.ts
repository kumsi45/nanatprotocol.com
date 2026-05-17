export default {
  name: 'services',
  title: 'Services Page',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string' },

    {
      name: 'intro',
      title: 'Intro Text',
      type: 'text',
    },

    {
      name: 'servicesList',
      title: 'Services',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'name', type: 'string', title: 'Service Name' },
            { name: 'description', type: 'text', title: 'Description' },
            { name: 'image', type: 'image', title: 'Image' },
          ],
        },
      ],
    },
  ],
}
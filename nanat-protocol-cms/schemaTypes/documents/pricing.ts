export default {
  name: 'pricing',
  title: 'Pricing Page',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string' },

    {
      name: 'plans',
      title: 'Pricing Plans',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'name', type: 'string', title: 'Plan Name' },
            { name: 'price', type: 'string', title: 'Price' },
            {
              name: 'features',
              type: 'array',
              of: [{ type: 'string' }],
              title: 'Features',
            },
          ],
        },
      ],
    },
  ],
}
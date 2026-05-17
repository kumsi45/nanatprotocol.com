export default {
  name: 'booking',
  title: 'Booking Requests',
  type: 'document',
  fields: [
    { name: 'name', title: 'Client Name', type: 'string' },
    { name: 'email', title: 'Email', type: 'string' },
    { name: 'phone', title: 'Phone', type: 'string' },

    {
      name: 'service',
      title: 'Service Requested',
      type: 'string',
    },

    {
      name: 'date',
      title: 'Preferred Date',
      type: 'datetime',
    },

    {
      name: 'message',
      title: 'Message',
      type: 'text',
    },

    {
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: ['new', 'contacted', 'confirmed'],
      },
    },
  ],
}
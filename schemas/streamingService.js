export default {
  name: 'streamingService',
  type: 'object',
  title: 'Streaming Service',
  fields: [
    {
      name: 'showName',
      type: 'string',
      title: 'Show Name',
    },
    {
      name: 'availableServices',
      type: 'array',
      title: 'Available On',
      of: [{ type: 'string' }],
      options: {
        layout: 'checkbox',
        list: [
          { title: 'Netflix', value: 'netflix' },
          { title: 'Amazon Prime', value: 'prime' },
          { title: 'Disney+', value: 'disney' },
          { title: 'Crunchyroll', value: 'crunchyroll' },
          { title: 'Funimation', value: 'funimation' },
          { title: 'HIDIVE', value: 'hidive' },
          // add more streaming services as per your requirement
        ],
      },
    },
  ],
}

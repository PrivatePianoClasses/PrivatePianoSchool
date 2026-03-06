export default ({
  name: 'performances',
  title: 'Upcoming Performances',
  type: 'document',
  fields: [
    ({
      name: 'headerImage',
      title: 'Header Image',
      type: 'image',
      options: {hotspot: true,},
    }),
    ({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    ({
      name: 'listings',
      title: 'Performance Listings',
      type: 'array',
      options: {sortable: true},
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Performance Title',
              type: 'string',
            },
            {
              name: 'details',
              title: 'Performance Details',
              type: 'blockContent',
            }
          ]
        },
      ],
    }),
  ],
  preview: {
		select: {
			title: "title",
		},
		prepare() {
			return {
				title: "Upcoming Performances Page Content",
			};
		},
	},
})

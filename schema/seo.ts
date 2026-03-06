export default ({
  name: 'seo',
  title: 'SEO Settings',
  type: 'document',
  fields: [
    ({
      name: 'ogimage',
      title: 'Open Graph Image',
      type: 'image',
      description: 'Should be 1200 x 630 pixels. Will appear when site is linked, i.e. on social media.',
      options: {hotspot: false,},
    }),
    ({
      name: 'ogtitle',
      title: 'Open Graph Title',
      type: 'string',
      description: 'Will appear when site is linked, i.e. on social media.'
    }),
    ({
      name: 'description',
      title: 'Website Description',
      type: 'text',
      rows: 3,
      description: 'Be sure to use keywords and phrases that will help searchers land here.'
    }),
  ],
  preview: {
		select: {
			title: "title",
		},
		prepare() {
			return {
				title: "SEO Settings",
			};
		},
	},
})

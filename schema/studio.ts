export default ({
  name: 'studio',
  title: 'Studio Procedures & Pricing',
  type: 'document',
  fields: [
    ({
      name: 'headerImage',
      title: 'Header Image',
      type: 'image',
      options: {hotspot: true,},
    }),
    ({
      name: 'introtext',
      title: 'Intro Text',
      type: 'string',
    }),
    ({
      name: 'pricing1',
      title: 'Pricing Section 1',
      type: 'blockContent',
    }),
    ({
      name: 'pricing2',
      title: 'Pricing Section 2',
      type: 'blockContent',
    }),
    ({
      name: 'pricing3',
      title: 'Pricing Section 3',
      type: 'blockContent',
    }),
    ({
      name: 'procedures',
      title: 'Procedures Section',
      type: 'blockContent',
    }),
  ],
  preview: {
		select: {
			title: "title",
		},
		prepare() {
			return {
				title: "Studio Procedures & Pricing Page Content",
			};
		},
	},
})

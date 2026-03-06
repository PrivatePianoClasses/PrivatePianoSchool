export default ({
  name: 'home',
  title: 'Home Page',
  type: 'document',
  fields: [
    ({
      name: 'headerImage',
      title: 'Header Image',
      type: 'image',
      options: {hotspot: true,},
    }),
    ({
      name: 'firstImage',
      title: 'First Section Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    ({
      name: 'firsttitle',
      title: 'First Section Title',
      type: 'string',
    }),
    ({
      name: 'firsttext',
      title: 'First Section Text',
      type: 'text',
      rows: 2,
    }),
    ({
      name: 'abouttitle',
      title: 'About  Title',
      type: 'string',
    }),
    ({
      name: 'column1',
      title: 'Column 1 Content',
      type: 'blockContent',
    }),
    ({
      name: 'column2',
      title: 'Column 2 Content',
      type: 'blockContent',
    }),
    ({
      name: 'ctatitle',
      title: 'Call to Action Title',
      type: 'string',
    }),
    ({
      name: 'ctaImage',
      title: 'Call to Action Section Background Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
  preview: {
		select: {
			title: "title",
		},
		prepare() {
			return {
				title: "Home Page Content",
			};
		},
	},
})

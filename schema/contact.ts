export default ({
  name: 'contact',
  title: 'Contact Page',
  type: 'document',
  fields: [
    ({
      name: 'headerImage',
      title: 'Header Image',
      type: 'image',
      options: {hotspot: true,},
    }),
    ({
      name: 'portrait',
      title: 'Portrait Image',
      type: 'image',
      options: {hotspot: true,},
    }),
    ({
      name: 'text',
      title: 'Text',
      type: 'text',
      rows: 2
    }),
  ],
  preview: {
		select: {
			title: "title",
		},
		prepare() {
			return {
				title: "Contact Page Content",
			};
		},
	},
})

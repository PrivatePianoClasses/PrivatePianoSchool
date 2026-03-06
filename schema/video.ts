export default ({
  name: 'video',
  title: 'Video',
  type: 'document',
  fields: [
    ({
      name: 'url',
      title: 'YouTube Video URL',
      type: 'url',
    }),
    ({
      name: 'caption',
      title: 'Video Caption',
      type: 'text',
      rows: 2
    }),
  ],
  preview: {
		select: {
			title: "caption",
		},
	},
})

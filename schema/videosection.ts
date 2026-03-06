export default ({
  name: 'videosection',
  title: 'Video Section',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Section Title',
      type: 'string',
    },
    {
      name: 'date',
      title: 'Section Date',
      type: 'string',
    },
    {
      name: 'videos',
      title: 'Videos',
      type: 'array',
      of: [{type: 'video'}],
    }
  ],
  // preview: {
	// 	select: {
	// 		title: "title",
	// 	},
	// 	prepare() {
	// 		return {
	// 			title: "Video Gallery Page Content",
	// 		};
	// 	},
	// },
})

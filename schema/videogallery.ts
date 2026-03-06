export default ({
  name: 'videogallery',
  title: 'Video Gallery',
  type: 'document',
  fields: [
    ({
      name: 'headerImage',
      title: 'Header Image',
      type: 'image',
      options: {hotspot: true,},
    }),
    ({
      name: 'pianoperfs',
      title: 'Piano Performances',
      type: 'array',
      options: {sortable: true},
      of: [
        {
          type: 'reference',
          to: [
            {type: 'videosection'},
          ]
        }
      ]
    }),
    ({
      name: 'choirperfs',
      title: 'Choir Performances',
      type: 'array',
      options: {sortable: true},
      of: [
        {
          type: 'reference',
          to: [
            {type: 'videosection'},
          ]
        }
      ]
    }),
    ({
      name: 'archiveperfs',
      title: 'Archive Performances',
      type: 'array',
      options: {sortable: true},
      of: [
        {
          type: 'reference',
          to: [
            {type: 'videosection'},
          ]
        }
      ]
    }),

  ],
  preview: {
		select: {
			title: "title",
		},
		prepare() {
			return {
				title: "Video Gallery Page Content",
			};
		},
	},
})

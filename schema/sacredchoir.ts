export default ({
  name: 'sacredchoir',
  title: 'Sacred Choir',
  type: 'document',
  fields: [
    ({
      name: 'headerImage',
      title: 'Header Image',
      type: 'image',
      options: {hotspot: true,},
    }),
    ({
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{
        type: 'image',
        fields: [
          {
            name: "caption",
            title: "Caption",
            type: "string"
          }
        ]
      }],
    }),
    ({
      name: 'introtext',
      title: 'Intro Text',
      type: 'string',
    }),
    ({
      name: 'information',
      title: 'Intormation',
      type: 'blockContent',
    }),
    ({
      name: 'season',
      title: 'Season and Year',
      type: 'string',
    }),
    ({
      name: 'audition',
      title: 'Audition Timeframe',
      type: 'string',
    }),
    ({
      name: 'times',
      title: 'Audition Times',
      type: 'string',
    }),
    ({
      name: 'statement',
      title: 'Reharsals Statement',
      type: 'text',
      rows: 2,
    }),
    ({
      name: 'rehearsal',
      title: 'Rehearsal Dates',
      type: 'text',
      rows: 2,
    }),
    ({
      name: 'concert',
      title: 'Concert Dates',
      type: 'text',
      rows: 2,
    }),
  ],
  preview: {
		select: {
			title: "title",
		},
		prepare() {
			return {
				title: "Sacred Choir Page Content",
			};
		},
	},
})

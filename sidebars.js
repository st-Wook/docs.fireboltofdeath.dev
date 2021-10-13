module.exports = {
  packages: [
	{
		type: 'category',
		label: 'Packages',
		items: [
			{
				type: 'category',
				label: '@rbxts/priority-map',
				items: [
					"packages/priority-map/installation",
				]
			},
		]
	}
  ],
  flamework: [
		"flamework/introduction",
		"flamework/installation",
		"flamework/migration",
		{
			type: 'category',
			label: 'Guides',
			items: [
				'flamework/guides/creating-a-singleton',
				'flamework/guides/lifecycle-events',
				'flamework/guides/dependencies',
				'flamework/guides/ignition'
			]
		},
		{
			type: 'category',
			label: 'Additional Modules',
			collapsed: false,
			items: [
				{
					type: 'category',
					label: 'Networking',
					items: [
						'flamework/additional-modules/networking/creating-events',
						'flamework/additional-modules/networking/client-events',
						'flamework/additional-modules/networking/server-events',
						'flamework/additional-modules/networking/middleware'
					],
				},
				{
					type: 'category',
					label: 'Components',
					items: [
						'flamework/additional-modules/components/creating-a-component',
						'flamework/additional-modules/components/scripting-api',
						'flamework/additional-modules/components/attributes',
						'flamework/additional-modules/components/inheritance'
					],
				},
			]
		},
		{
			type: 'category',
			label: 'Modding',
			items: [
				'flamework/modding/introduction'
			]
		}
  ]
};

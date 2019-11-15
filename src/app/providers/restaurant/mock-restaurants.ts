const restaurants: Array<any> = [
	{
		id: 1,
		address: '18 Henry st',
		city: 'Cambridge',
		state: 'MA',
		zip: '01742',
		title: 'Buddha Bar',
		long: -71.11095,
		lat: 42.35663,
		picture: 'assets/img/restaurants/restaurant01.jpg',
		thumbnail: 'assets/img/restaurants/restaurant01sq.jpg',
		images: [
			'assets/img/restaurants/restaurant01.jpg',
			'assets/img/restaurants/restaurant03.jpg',
			'assets/img/restaurants/restaurant05.jpg',
			'assets/img/restaurants/restaurant07.jpg'
		],
		tags: 'Oriental',
		description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus explicabo rem incidunt, sequi facilis hic corporis rerum ea in dolorum tempore, a quod quae nostrum voluptatem sint. Saepe, ut, autem!',
		label: 'open',
		period: 'none',
		price: '$$$',
		rating: 4.4,
		dishes: {
				id: 1,
				name: 'Caroline Seymor',
				title: 'Senior Broker',
				picture: 'assets/img/dishes/caroline_seymor.jpg'
		},
		reviews: [
			{
				id: 1,
				username: 'Oliver Bishop',
				from: 'Chesterfield, UK',
				title: 'Nice place, as long as you dont want to leave',
				content: 'The hotel staff were very helpful in all ways, nothing was too much trouble. The bar had a fantastic happy hour being good nibbles and great value. One of my best restaurants.',
				rating: 4
			},
			{
				id: 2,
				username: ' Alejandro Suarez',
				from: 'Bogotá, CO',
				title: 'Close to old quarter',
				content: 'Nice dishes Staff very helpful. Easy to get cabs',
				rating: 4
			},
			{
				id: 3,
				username: 'Matt Doley',
				from: 'Cincinnati, US',
				title: 'Short stay',
				content: 'Restaurant reception staff speak limited English and not so friendly. Their dessert is not good enough.',
				rating: 3
			},
			{
				id: 4,
				username: 'Jorge Silva',
				from: 'São Paulo, BR',
				title: 'Disappointing and overpriced',
				content: 'Disappointing stay as the condition of the restaurant was the exact opposite of last restaurant, but the staff was helpful.',
				rating: 2
			}
		]
	},
	{
			id: 2,
			address: '24 Pearl st',
			city: 'Cambridge',
			state: 'MA',
			zip: '02420',
			title: 'Lorem Restaurant',
			long: -71.10869,
			lat: 42.359103,
			picture: 'assets/img/restaurants/restaurant02.jpg',
			thumbnail: 'assets/img/restaurants/restaurant02sq.jpg',
			images: [
				'assets/img/restaurants/restaurant02.jpg',
				'assets/img/restaurants/restaurant04.jpg',
				'assets/img/restaurants/restaurant06.jpg',
				'assets/img/restaurants/restaurant08.jpg'
			],
			tags: 'Variable',
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus explicabo rem incidunt, sequi facilis hic corporis rerum ea in dolorum tempore, a quod quae nostrum voluptatem sint. Saepe, ut, autem!',
			label: 'open',
			period: 'none',
			price: '$$$$',
			rating: 5,
			dishes: {
					id: 1,
					name: 'Caroline Seymor',
					title: 'Senior Broker',
					picture: 'assets/img/dishes/caroline_seymor.jpg'
			},
		reviews: [
			{
				id: 1,
				username: 'Oliver Bishop',
				from: 'Chesterfield, UK',
				title: 'Nice place, as long as you dont want to leave',
				content: 'The hotel staff were very helpful in all ways, nothing was too much trouble. The bar had a fantastic happy hour being good nibbles and great value. One of my best restaurants.',
				rating: 4
			},
			{
				id: 2,
				username: ' Alejandro Suarez',
				from: 'Bogotá, CO',
				title: 'Close to old quarter',
				content: 'Nice dishes Staff very helpful. Easy to get cabs',
				rating: 4
			},
			{
				id: 3,
				username: 'Matt Doley',
				from: 'Cincinnati, US',
				title: 'Short stay',
				content: 'Restaurant reception staff speak limited English and not so friendly. Their dessert is not good enough.',
				rating: 3
			},
			{
				id: 4,
				username: 'Jorge Silva',
				from: 'São Paulo, BR',
				title: 'Disappointing and overpriced',
				content: 'Disappointing stay as the condition of the restaurant was the exact opposite of last restaurant, but the staff was helpful.',
				rating: 2
			}
		]
	},
	{
			id: 3,
			address: '61 West Cedar st',
			city: 'Boston',
			state: 'MA',
			zip: '02420',
			title: 'Ipsum Restaurant',
			long: -71.070061,
			lat: 42.359986,
			picture: 'assets/img/restaurants/restaurant03.jpg',
			thumbnail: 'assets/img/restaurants/restaurant03sq.jpg',
			images: [
				'assets/img/restaurants/restaurant03.jpg',
				'assets/img/restaurants/restaurant05.jpg',
				'assets/img/restaurants/restaurant07.jpg',
				'assets/img/restaurants/restaurant09.jpg'
			],
			tags: 'Local Food',
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus explicabo rem incidunt, sequi facilis hic corporis rerum ea in dolorum tempore, a quod quae nostrum voluptatem sint. Saepe, ut, autem!',
			label: 'closed',
			period: 'week',
			price: '$$',
			rating: 4.9,
			dishes: {
					id: 2,
					name: 'Michael Drukov',
					title: 'Senior Broker',
					picture: 'assets/img/dishes/michael_drukov.jpg'
			},
		reviews: [
			{
				id: 1,
				username: 'Oliver Bishop',
				from: 'Chesterfield, UK',
				title: 'Nice place, as long as you dont want to leave',
				content: 'The hotel staff were very helpful in all ways, nothing was too much trouble. The bar had a fantastic happy hour being good nibbles and great value. One of my best restaurants.',
				rating: 4
			},
			{
				id: 2,
				username: ' Alejandro Suarez',
				from: 'Bogotá, CO',
				title: 'Close to old quarter',
				content: 'Nice dishes Staff very helpful. Easy to get cabs',
				rating: 4
			},
			{
				id: 3,
				username: 'Matt Doley',
				from: 'Cincinnati, US',
				title: 'Short stay',
				content: 'Restaurant reception staff speak limited English and not so friendly. Their dessert is not good enough.',
				rating: 3
			},
			{
				id: 4,
				username: 'Jorge Silva',
				from: 'São Paulo, BR',
				title: 'Disappointing and overpriced',
				content: 'Disappointing stay as the condition of the restaurant was the exact opposite of last restaurant, but the staff was helpful.',
				rating: 2
			}
		]
	},
	{
			id: 4,
			address: '32 Prince st',
			city: 'Cambridge',
			state: 'MA',
			zip: '02420',
			title: 'Blooms Restaurant',
			long: -71.110448,
			lat: 42.360642,
			picture: 'assets/img/restaurants/restaurant04.jpg',
			thumbnail: 'assets/img/restaurants/restaurant04sq.jpg',
			images: [
				'assets/img/restaurants/restaurant04.jpg',
				'assets/img/restaurants/restaurant06.jpg',
				'assets/img/restaurants/restaurant08.jpg',
				'assets/img/restaurants/restaurant07.jpg'
			],
			tags: 'Street Food',
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus explicabo rem incidunt, sequi facilis hic corporis rerum ea in dolorum tempore, a quod quae nostrum voluptatem sint. Saepe, ut, autem!',
			label: 'closed',
			period: 'month',
			price: '$$$',
			rating: 3.2,
			dishes: {
					id: 3,
					name: 'Jonathan Jones',
					title: 'Senior Broker',
					picture: 'assets/img/dishes/jonathan_jones.jpg'
			},
		reviews: [
			{
				id: 1,
				username: 'Oliver Bishop',
				from: 'Chesterfield, UK',
				title: 'Nice place, as long as you dont want to leave',
				content: 'The hotel staff were very helpful in all ways, nothing was too much trouble. The bar had a fantastic happy hour being good nibbles and great value. One of my best restaurants.',
				rating: 4
			},
			{
				id: 2,
				username: ' Alejandro Suarez',
				from: 'Bogotá, CO',
				title: 'Close to old quarter',
				content: 'Nice dishes Staff very helpful. Easy to get cabs',
				rating: 4
			},
			{
				id: 3,
				username: 'Matt Doley',
				from: 'Cincinnati, US',
				title: 'Short stay',
				content: 'Restaurant reception staff speak limited English and not so friendly. Their dessert is not good enough.',
				rating: 3
			},
			{
				id: 4,
				username: 'Jorge Silva',
				from: 'São Paulo, BR',
				title: 'Disappointing and overpriced',
				content: 'Disappointing stay as the condition of the restaurant was the exact opposite of last restaurant, but the staff was helpful.',
				rating: 2
			}
		]
	},
	{
			id: 5,
			address: '211 Charles Street',
			city: 'Boston',
			state: 'MA',
			zip: '02420',
			title: 'Blue Print Restaurant & Bar',
			long: -71.084454,
			lat: 42.368168,
			picture: 'assets/img/restaurants/restaurant05.jpg',
			thumbnail: 'assets/img/restaurants/restaurant05sq.jpg',
			images: [
				'assets/img/restaurants/restaurant05.jpg',
				'assets/img/restaurants/restaurant07.jpg',
				'assets/img/restaurants/restaurant09.jpg',
				'assets/img/restaurants/restaurant11.jpg'
			],
			tags: 'Variable',
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus explicabo rem incidunt, sequi facilis hic corporis rerum ea in dolorum tempore, a quod quae nostrum voluptatem sint. Saepe, ut, autem!',
			label: 'closed',
			period: 'week',
			price: '$$$$',
			rating: 4.1,
			dishes: {
					id: 4,
					name: 'Rosario Rodriguez',
					title: 'Senior Broker',
					picture: 'assets/img/dishes/rosario_rodriguez.jpg'
			},
		reviews: [
			{
				id: 1,
				username: 'Oliver Bishop',
				from: 'Chesterfield, UK',
				title: 'Nice place, as long as you dont want to leave',
				content: 'The hotel staff were very helpful in all ways, nothing was too much trouble. The bar had a fantastic happy hour being good nibbles and great value. One of my best restaurants.',
				rating: 4
			},
			{
				id: 2,
				username: ' Alejandro Suarez',
				from: 'Bogotá, CO',
				title: 'Close to old quarter',
				content: 'Nice dishes Staff very helpful. Easy to get cabs',
				rating: 4
			},
			{
				id: 3,
				username: 'Matt Doley',
				from: 'Cincinnati, US',
				title: 'Short stay',
				content: 'Restaurant reception staff speak limited English and not so friendly. Their dessert is not good enough.',
				rating: 3
			},
			{
				id: 4,
				username: 'Jorge Silva',
				from: 'São Paulo, BR',
				title: 'Disappointing and overpriced',
				content: 'Disappointing stay as the condition of the restaurant was the exact opposite of last restaurant, but the staff was helpful.',
				rating: 2
			}
		]
	},
	{
			id: 6,
			address: '448 Hanover st',
			city: 'Boston',
			state: 'MA',
			zip: '02420',
			title: 'Georges Hamburguer & Meats',
			long: -71.052617,
			lat: 42.366855,
			picture: 'assets/img/restaurants/restaurant06.jpg',
			thumbnail: 'assets/img/restaurants/restaurant06sq.jpg',
			images: [
				'assets/img/restaurants/restaurant06.jpg',
				'assets/img/restaurants/restaurant08.jpg',
				'assets/img/restaurants/restaurant10.jpg',
				'assets/img/restaurants/restaurant12.jpg'
			],
			tags: 'Barbecue',
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus explicabo rem incidunt, sequi facilis hic corporis rerum ea in dolorum tempore, a quod quae nostrum voluptatem sint. Saepe, ut, autem!',
			label: 'closed',
			period: 'month',
			price: '$',
			rating: 4,
			dishes: {
					id: 5,
					name: 'Olivia Green',
					title: 'Senior Broker',
					picture: 'assets/img/dishes/olivia_green.jpg'
			},
		reviews: [
			{
				id: 1,
				username: 'Oliver Bishop',
				from: 'Chesterfield, UK',
				title: 'Nice place, as long as you dont want to leave',
				content: 'The hotel staff were very helpful in all ways, nothing was too much trouble. The bar had a fantastic happy hour being good nibbles and great value. One of my best restaurants.',
				rating: 4
			},
			{
				id: 2,
				username: ' Alejandro Suarez',
				from: 'Bogotá, CO',
				title: 'Close to old quarter',
				content: 'Nice dishes Staff very helpful. Easy to get cabs',
				rating: 4
			},
			{
				id: 3,
				username: 'Matt Doley',
				from: 'Cincinnati, US',
				title: 'Short stay',
				content: 'Restaurant reception staff speak limited English and not so friendly. Their dessert is not good enough.',
				rating: 3
			},
			{
				id: 4,
				username: 'Jorge Silva',
				from: 'São Paulo, BR',
				title: 'Disappointing and overpriced',
				content: 'Disappointing stay as the condition of the restaurant was the exact opposite of last restaurant, but the staff was helpful.',
				rating: 2
			}
		]
	},
	{
			id: 7,
			address: '127 Endicott st',
			city: 'Boston',
			state: 'MA',
			zip: '02420',
			title: 'La Vitta',
			long: -71.057352,
			lat: 42.365003,
			picture: 'assets/img/restaurants/restaurant07.jpg',
			thumbnail: 'assets/img/restaurants/restaurant07sq.jpg',
			images: [
				'assets/img/restaurants/restaurant07.jpg',
				'assets/img/restaurants/restaurant09.jpg',
				'assets/img/restaurants/restaurant11.jpg',
				'assets/img/restaurants/restaurant13.jpg'
			],
			tags: 'Pasta',
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus explicabo rem incidunt, sequi facilis hic corporis rerum ea in dolorum tempore, a quod quae nostrum voluptatem sint. Saepe, ut, autem!',
			label: 'closed',
			period: 'month',
			price: '$$$',
			rating: 4.8,
			dishes: {
					id: 6,
					name: 'Miriam Aupont',
					title: 'Senior Broker',
					picture: 'assets/img/dishes/miriam_aupont.jpg'
			},
		reviews: [
			{
				id: 1,
				username: 'Oliver Bishop',
				from: 'Chesterfield, UK',
				title: 'Nice place, as long as you dont want to leave',
				content: 'The hotel staff were very helpful in all ways, nothing was too much trouble. The bar had a fantastic happy hour being good nibbles and great value. One of my best restaurants.',
				rating: 4
			},
			{
				id: 2,
				username: ' Alejandro Suarez',
				from: 'Bogotá, CO',
				title: 'Close to old quarter',
				content: 'Nice dishes Staff very helpful. Easy to get cabs',
				rating: 4
			},
			{
				id: 3,
				username: 'Matt Doley',
				from: 'Cincinnati, US',
				title: 'Short stay',
				content: 'Restaurant reception staff speak limited English and not so friendly. Their dessert is not good enough.',
				rating: 3
			},
			{
				id: 4,
				username: 'Jorge Silva',
				from: 'São Paulo, BR',
				title: 'Disappointing and overpriced',
				content: 'Disappointing stay as the condition of the restaurant was the exact opposite of last restaurant, but the staff was helpful.',
				rating: 2
			}
		]
	},
	{
			id: 8,
			address: '48 Brattle st',
			city: 'Cambridge',
			state: 'MA',
			zip: '02420',
			title: 'Barracudas Seafood',
			long: -71.121653,
			lat: 42.374117,
			picture: 'assets/img/restaurants/restaurant08.jpg',
			thumbnail: 'assets/img/restaurants/restaurant08sq.jpg',
			images: [
				'assets/img/restaurants/restaurant08.jpg',
				'assets/img/restaurants/restaurant10.jpg',
				'assets/img/restaurants/restaurant12.jpg',
				'assets/img/restaurants/restaurant01.jpg'
			],
			tags: 'Seafood',
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus explicabo rem incidunt, sequi facilis hic corporis rerum ea in dolorum tempore, a quod quae nostrum voluptatem sint. Saepe, ut, autem!',
			label: 'closed',
			period: 'week',
			price: '$$$$$',
			rating: 5,
			dishes: {
					id: 7,
					name: 'Michelle Lambert',
					title: 'Senior Broker',
					picture: 'assets/img/dishes/michelle_lambert.jpg'
			},
		reviews: [
			{
				id: 1,
				username: 'Oliver Bishop',
				from: 'Chesterfield, UK',
				title: 'Nice place, as long as you dont want to leave',
				content: 'The hotel staff were very helpful in all ways, nothing was too much trouble. The bar had a fantastic happy hour being good nibbles and great value. One of my best restaurants.',
				rating: 4
			},
			{
				id: 2,
				username: ' Alejandro Suarez',
				from: 'Bogotá, CO',
				title: 'Close to old quarter',
				content: 'Nice dishes Staff very helpful. Easy to get cabs',
				rating: 4
			},
			{
				id: 3,
				username: 'Matt Doley',
				from: 'Cincinnati, US',
				title: 'Short stay',
				content: 'Restaurant reception staff speak limited English and not so friendly. Their dessert is not good enough.',
				rating: 3
			},
			{
				id: 4,
				username: 'Jorge Silva',
				from: 'São Paulo, BR',
				title: 'Disappointing and overpriced',
				content: 'Disappointing stay as the condition of the restaurant was the exact opposite of last restaurant, but the staff was helpful.',
				rating: 2
			}
		]
	},
	{
			id: 9,
			address: '121 Harborwalk',
			city: 'Boston',
			state: 'MA',
			zip: '02420',
			title: 'Melvyns',
			long: -71.049327,
			lat: 42.35695,
			picture: 'assets/img/restaurants/restaurant09.jpg',
			thumbnail: 'assets/img/restaurants/restaurant09sq.jpg',
			images: [
				'assets/img/restaurants/restaurant09.jpg',
				'assets/img/restaurants/restaurant11.jpg',
				'assets/img/restaurants/restaurant13.jpg',
				'assets/img/restaurants/restaurant02.jpg'
			],
			tags: 'Bistro',
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus explicabo rem incidunt, sequi facilis hic corporis rerum ea in dolorum tempore, a quod quae nostrum voluptatem sint. Saepe, ut, autem!',
			label: 'open',
			period: 'none',
			price: '$$$$',
			rating: 3.7,
			dishes: {
					id: 2,
					name: 'Michael Drukov',
					title: 'Senior Broker',
					picture: 'assets/img/dishes/michael_drukov.jpg'
			},
		reviews: [
			{
				id: 1,
				username: 'Oliver Bishop',
				from: 'Chesterfield, UK',
				title: 'Nice place, as long as you dont want to leave',
				content: 'The hotel staff were very helpful in all ways, nothing was too much trouble. The bar had a fantastic happy hour being good nibbles and great value. One of my best restaurants.',
				rating: 4
			},
			{
				id: 2,
				username: ' Alejandro Suarez',
				from: 'Bogotá, CO',
				title: 'Close to old quarter',
				content: 'Nice dishes Staff very helpful. Easy to get cabs',
				rating: 4
			},
			{
				id: 3,
				username: 'Matt Doley',
				from: 'Cincinnati, US',
				title: 'Short stay',
				content: 'Restaurant reception staff speak limited English and not so friendly. Their dessert is not good enough.',
				rating: 3
			},
			{
				id: 4,
				username: 'Jorge Silva',
				from: 'São Paulo, BR',
				title: 'Disappointing and overpriced',
				content: 'Disappointing stay as the condition of the restaurant was the exact opposite of last restaurant, but the staff was helpful.',
				rating: 2
			}
		]
	},
	{
			id: 10,
			address: '503 Park Drive',
			city: 'Boston',
			state: 'MA',
			zip: '02420',
			title: 'Bukhara Restaurant',
			long: -71.105475,
			lat: 42.347400,
			picture: 'assets/img/restaurants/restaurant10.jpg',
			thumbnail: 'assets/img/restaurants/restaurant10sq.jpg',
			images: [
				'assets/img/restaurants/restaurant10.jpg',
				'assets/img/restaurants/restaurant12.jpg',
				'assets/img/restaurants/restaurant01.jpg',
				'assets/img/restaurants/restaurant03.jpg'
			],
			tags: 'Indian Food',
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus explicabo rem incidunt, sequi facilis hic corporis rerum ea in dolorum tempore, a quod quae nostrum voluptatem sint. Saepe, ut, autem!',
			label: 'open',
			period: 'none',
			price: '$$',
			rating: 2.5,
			dishes: {
					id: 1,
					name: 'Caroline Seymor',
					title: 'Senior Broker',
					picture: 'assets/img/dishes/caroline_seymor.jpg'
			},
		reviews: [
			{
				id: 1,
				username: 'Oliver Bishop',
				from: 'Chesterfield, UK',
				title: 'Nice place, as long as you dont want to leave',
				content: 'The hotel staff were very helpful in all ways, nothing was too much trouble. The bar had a fantastic happy hour being good nibbles and great value. One of my best restaurants.',
				rating: 4
			},
			{
				id: 2,
				username: ' Alejandro Suarez',
				from: 'Bogotá, CO',
				title: 'Close to old quarter',
				content: 'Nice dishes Staff very helpful. Easy to get cabs',
				rating: 4
			},
			{
				id: 3,
				username: 'Matt Doley',
				from: 'Cincinnati, US',
				title: 'Short stay',
				content: 'Restaurant reception staff speak limited English and not so friendly. Their dessert is not good enough.',
				rating: 3
			},
			{
				id: 4,
				username: 'Jorge Silva',
				from: 'São Paulo, BR',
				title: 'Disappointing and overpriced',
				content: 'Disappointing stay as the condition of the restaurant was the exact opposite of last restaurant, but the staff was helpful.',
				rating: 2
			}
		]
	},
	{
			id: 11,
			address: '95 Gloucester st',
			city: 'Boston',
			state: 'MA',
			zip: '02420',
			title: 'CraftWoks Restaurant & Breweries',
			lat: 42.349693,
			long: -71.084407,
			picture: 'assets/img/restaurants/restaurant11.jpg',
			thumbnail: 'assets/img/restaurants/restaurant11sq.jpg',
			images: [
				'assets/img/restaurants/restaurant11.jpg',
				'assets/img/restaurants/restaurant13.jpg',
				'assets/img/restaurants/restaurant02.jpg',
				'assets/img/restaurants/restaurant04.jpg'
			],
			tags: 'Casual Dining',
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus explicabo rem incidunt, sequi facilis hic corporis rerum ea in dolorum tempore, a quod quae nostrum voluptatem sint. Saepe, ut, autem!',
			label: 'open',
			period: 'none',
			price: '$$$',
			rating: 4.6,
			dishes: {
					id: 4,
					name: 'Rosario Rodriguez',
					title: 'Senior Broker',
					picture: 'assets/img/dishes/rosario_rodriguez.jpg'
			},
		reviews: [
			{
				id: 1,
				username: 'Oliver Bishop',
				from: 'Chesterfield, UK',
				title: 'Nice place, as long as you dont want to leave',
				content: 'The hotel staff were very helpful in all ways, nothing was too much trouble. The bar had a fantastic happy hour being good nibbles and great value. One of my best restaurants.',
				rating: 4
			},
			{
				id: 2,
				username: ' Alejandro Suarez',
				from: 'Bogotá, CO',
				title: 'Close to old quarter',
				content: 'Nice dishes Staff very helpful. Easy to get cabs',
				rating: 4
			},
			{
				id: 3,
				username: 'Matt Doley',
				from: 'Cincinnati, US',
				title: 'Short stay',
				content: 'Restaurant reception staff speak limited English and not so friendly. Their dessert is not good enough.',
				rating: 3
			},
			{
				id: 4,
				username: 'Jorge Silva',
				from: 'São Paulo, BR',
				title: 'Disappointing and overpriced',
				content: 'Disappointing stay as the condition of the restaurant was the exact opposite of last restaurant, but the staff was helpful.',
				rating: 2
			}
		]
	},
	{
			id: 12,
			address: '145 Commonwealth ave',
			city: 'Boston',
			state: 'MA',
			zip: '02420',
			title: 'Gordon Biersch',
			lat: 42.352466,
			long: -71.075311,
			picture: 'assets/img/restaurants/restaurant12.jpg',
			thumbnail: 'assets/img/restaurants/restaurant12sq.jpg',
			images: [
				'assets/img/restaurants/restaurant12.jpg',
				'assets/img/restaurants/restaurant01.jpg',
				'assets/img/restaurants/restaurant03.jpg',
				'assets/img/restaurants/restaurant05.jpg'
			],
			tags: 'Casual Dining',
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus explicabo rem incidunt, sequi facilis hic corporis rerum ea in dolorum tempore, a quod quae nostrum voluptatem sint. Saepe, ut, autem!',
			label: 'open',
			period: 'week',
			price: '$$$$',
			rating: 3.8,
			dishes: {
					id: 5,
					name: 'Olivia Green',
					title: 'Senior Broker',
					picture: 'assets/img/dishes/olivia_green.jpg'
			},
		reviews: [
			{
				id: 1,
				username: 'Oliver Bishop',
				from: 'Chesterfield, UK',
				title: 'Nice place, as long as you dont want to leave',
				content: 'The hotel staff were very helpful in all ways, nothing was too much trouble. The bar had a fantastic happy hour being good nibbles and great value. One of my best restaurants.',
				rating: 4
			},
			{
				id: 2,
				username: ' Alejandro Suarez',
				from: 'Bogotá, CO',
				title: 'Close to old quarter',
				content: 'Nice dishes Staff very helpful. Easy to get cabs',
				rating: 4
			},
			{
				id: 3,
				username: 'Matt Doley',
				from: 'Cincinnati, US',
				title: 'Short stay',
				content: 'Restaurant reception staff speak limited English and not so friendly. Their dessert is not good enough.',
				rating: 3
			},
			{
				id: 4,
				username: 'Jorge Silva',
				from: 'São Paulo, BR',
				title: 'Disappointing and overpriced',
				content: 'Disappointing stay as the condition of the restaurant was the exact opposite of last restaurant, but the staff was helpful.',
				rating: 2
			}
		]
	},
	{
			id: 13,
			address: '145 Commonwealth ave',
			city: 'Boston',
			state: 'MA',
			zip: '02420',
			title: 'Old Chicago',
			lat: 42.352466,
			long: -71.075311,
			picture: 'assets/img/restaurants/restaurant13.jpg',
			thumbnail: 'assets/img/restaurants/restaurant13sq.jpg',
			images: [
				'assets/img/restaurants/restaurant13.jpg',
				'assets/img/restaurants/restaurant02.jpg',
				'assets/img/restaurants/restaurant04.jpg',
				'assets/img/restaurants/restaurant06.jpg'
			],
			tags: 'Pizza',
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus explicabo rem incidunt, sequi facilis hic corporis rerum ea in dolorum tempore, a quod quae nostrum voluptatem sint. Saepe, ut, autem!',
			label: 'closed',
			period: 'week',
			price: '$$$$$',
			rating: 4.5,
			dishes: {
					id: 5,
					name: 'Olivia Green',
					title: 'Senior Broker',
					picture: 'assets/img/dishes/olivia_green.jpg'
			},
		reviews: [
			{
				id: 1,
				username: 'Oliver Bishop',
				from: 'Chesterfield, UK',
				title: 'Nice place, as long as you dont want to leave',
				content: 'The hotel staff were very helpful in all ways, nothing was too much trouble. The bar had a fantastic happy hour being good nibbles and great value. One of my best restaurants.',
				rating: 4
			},
			{
				id: 2,
				username: ' Alejandro Suarez',
				from: 'Bogotá, CO',
				title: 'Close to old quarter',
				content: 'Nice dishes Staff very helpful. Easy to get cabs',
				rating: 4
			},
			{
				id: 3,
				username: 'Matt Doley',
				from: 'Cincinnati, US',
				title: 'Short stay',
				content: 'Restaurant reception staff speak limited English and not so friendly. Their dessert is not good enough.',
				rating: 3
			},
			{
				id: 4,
				username: 'Jorge Silva',
				from: 'São Paulo, BR',
				title: 'Disappointing and overpriced',
				content: 'Disappointing stay as the condition of the restaurant was the exact opposite of last restaurant, but the staff was helpful.',
				rating: 2
			}
		]
	}
];

export default restaurants;

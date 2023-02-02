import { PlantData } from './CommonTypes';

const plantData:PlantData = {
	'Peas, Garden': {
		name: 'Peas, Garden',
		plantingPeriods: [
			{
				plantStartDate: new Date(2000, 1, 25),
				plantEndDate: new Date(2000, 3, 5),
				harvestStartDate: new Date(2000, 3, 25),
				harvestEndDate: new Date(2000, 5, 15)
			}
		]
	},
	'Eggplant': {
		name: 'Eggplant',
		plantingPeriods: [
			{
				plantStartDate: new Date(2000, 3, 15),
				plantEndDate: new Date(2000, 6, 25),
				harvestStartDate: new Date(2000, 6, 5),
				harvestEndDate: new Date(2000, 9, 15)
			}
		]
	},
	'Tatsoi': {
		name: 'Tatsoi (modified Spinach)',
		plantingPeriods: [
			{
				plantStartDate: new Date(2000, 2, 5),
				plantEndDate: new Date(2000, 3, 15),
				harvestStartDate: new Date(2000, 3, 5),
				harvestEndDate: new Date(2000, 5, 5)
			},
			{
				plantStartDate: new Date(2000, 8, 5),
				plantEndDate: new Date(2000, 9, 15),
				harvestStartDate: new Date(2000, 8, 25),
				harvestEndDate: new Date(2000, 10, 25)
			}
		]
	},
	'Spinach': {
		name: 'Spinach',
		plantingPeriods: [
			{
				plantStartDate: new Date(2000, 1, 25),
				plantEndDate: new Date(2000, 3, 15),
				harvestStartDate: new Date(2000, 3, 5),
				harvestEndDate: new Date(2000, 5, 5)
			},
			{
				plantStartDate: new Date(2000, 7, 25),
				plantEndDate: new Date(2000, 9, 15),
				harvestStartDate: new Date(2000, 8, 25),
				harvestEndDate: new Date(2000, 11, 31)
			}
		]
	},
	'Beets': {
		name: 'Beets',
		plantingPeriods: [
			{
				plantStartDate: new Date(2000, 2, 5),
				plantEndDate: new Date(2000, 4, 5),
				harvestStartDate: new Date(2000, 4, 15),
				harvestEndDate: new Date(2000, 6, 5)
			},
			{
				plantStartDate: new Date(2000, 7, 5),
				plantEndDate: new Date(2000, 8, 15),
				harvestStartDate: new Date(2000, 8, 25),
				harvestEndDate: new Date(2000, 10, 25)
			}
		]
	},
	'Cucumbers': {
		name: 'Cucumbers',
		plantingPeriods: [
			{
				plantStartDate: new Date(2000, 3, 15),
				plantEndDate: new Date(2000, 6, 25),
				harvestStartDate: new Date(2000, 5, 5),
				harvestEndDate: new Date(2000, 9, 25)
			}
		]
	},
	'Cucamelon': {
		name: 'Cucamelon (uses Cucumber)',
		plantingPeriods: [
			{
				plantStartDate: new Date(2000, 3, 15),
				plantEndDate: new Date(2000, 6, 25),
				harvestStartDate: new Date(2000, 5, 5),
				harvestEndDate: new Date(2000, 9, 25)
			}
		]
	},
	'Lemon Pepper': {
		name: 'Lemon Pepper (uses Peppers)',
		plantingPeriods: [
			{
				plantStartDate: new Date(2000, 3, 15),
				plantEndDate: new Date(2000, 6, 25),
				harvestStartDate: new Date(2000, 5, 25),
				harvestEndDate: new Date(2000, 10, 5)
			}
		]
	},
	'Rutabega': {
		name: 'Rutabega',
		plantingPeriods: [
			{
				plantStartDate: new Date(2000, 6, 25),
				plantEndDate: new Date(2000, 7, 25),
				harvestStartDate: new Date(2000, 9, 15),
				harvestEndDate: new Date(2000, 11, 31)
			}
		]
	},
	'Butternut Squash': {
		name: 'Butternut Squash (uses Winter Squash)',
		plantingPeriods: [
			{
				plantStartDate: new Date(2000, 3, 15),
				plantEndDate: new Date(2000, 6, 15),
				harvestStartDate: new Date(2000, 6, 5),
				harvestEndDate: new Date(2000, 9, 25)
			}
		]
	},
	'Curshaw Squash': {
		name: 'Curshaw Squash (uses Winter Squash)',
		plantingPeriods: [
			{
				plantStartDate: new Date(2000, 3, 15),
				plantEndDate: new Date(2000, 6, 15),
				harvestStartDate: new Date(2000, 6, 5),
				harvestEndDate: new Date(2000, 9, 25)
			}
		]
	},
	'Bok Choy': {
		name: 'Bok Choy (data from Bonnie Plants)',
		plantingPeriods: [
			{
				plantStartDate: new Date(2000, 7, 15),
				plantEndDate: new Date(2000, 8, 1),
				harvestStartDate: new Date(2000, 8, 15),
				harvestEndDate: new Date(2000, 10, 10)
			}
		]
	},
	'Malabar Spinach': {
		name: 'Malabar Spinach (uses Spinach)',
		plantingPeriods: [
			{
				plantStartDate: new Date(2000, 1, 25),
				plantEndDate: new Date(2000, 3, 15),
				harvestStartDate: new Date(2000, 3, 5),
				harvestEndDate: new Date(2000, 5, 5)
			},
			{
				plantStartDate: new Date(2000, 7, 25),
				plantEndDate: new Date(2000, 9, 15),
				harvestStartDate: new Date(2000, 8, 25),
				harvestEndDate: new Date(2000, 11, 31)
			}
		]
	},
	'Collards': {
		name: 'Collards',
		plantingPeriods: [
			{
				plantStartDate: new Date(2000, 1, 25),
				plantEndDate: new Date(2000, 3, 25),
				harvestStartDate: new Date(2000, 3, 25),
				harvestEndDate: new Date(2000, 5, 25)
			},
			{
				plantStartDate: new Date(2000, 6, 25),
				plantEndDate: new Date(2000, 8, 15),
				harvestStartDate: new Date(2000, 8, 25),
				harvestEndDate: new Date(2000, 11, 31)
			}
		]
	},
	'Swiss Chard': {
		name: 'Swiss Chard',
		plantingPeriods: [
			{
				plantStartDate: new Date(2000, 2, 5),
				plantEndDate: new Date(2000, 4, 5),
				harvestStartDate: new Date(2000, 4, 5),
				harvestEndDate: new Date(2000, 6, 25)
			},
			{
				plantStartDate: new Date(2000, 6, 25),
				plantEndDate: new Date(2000, 8, 15),
				harvestStartDate: new Date(2000, 6, 25),
				harvestEndDate: new Date(2000, 10, 25)
			}
		]
	},
	'Kohlrabi': {
		name: 'Kohlrabi',
		plantingPeriods: [
			{
				plantStartDate: new Date(2000, 2, 5),
				plantEndDate: new Date(2000, 3, 25),
				harvestStartDate: new Date(2000, 4, 5),
				harvestEndDate: new Date(2000, 5, 15)
			},
			{
				plantStartDate: new Date(2000, 7, 5),
				plantEndDate: new Date(2000, 8, 15),
				harvestStartDate: new Date(2000, 8, 15),
				harvestEndDate: new Date(2000, 11, 15)
			}
		]
	},
	'Peanut': {
		name: 'Peanut (from Google)',
		plantingPeriods: [
			{
				plantStartDate: new Date(2000, 3, 25),
				plantEndDate: new Date(2000, 5, 5),
				harvestStartDate: new Date(2000, 8, 25),
				harvestEndDate: new Date(2000, 10, 5)
			}
		]
	},
	'Daikon': {
		name: 'Daikon (uses Radish)',
		plantingPeriods: [
			{
				plantStartDate: new Date(2000, 1, 25),
				plantEndDate: new Date(2000, 4, 5),
				harvestStartDate: new Date(2000, 3, 5),
				harvestEndDate: new Date(2000, 5, 5)
			},
			{
				plantStartDate: new Date(2000, 7, 15),
				plantEndDate: new Date(2000, 9, 5),
				harvestStartDate: new Date(2000, 8, 15),
				harvestEndDate: new Date(2000, 10, 25)
			}

		]
	},
	'Broccoli': {
		name: 'Broccoli',
		plantingPeriods: [
			{
				plantStartDate: new Date(2000, 2, 15),
				plantEndDate: new Date(2000, 4, 5),
				harvestStartDate: new Date(2000, 4, 25),
				harvestEndDate: new Date(2000, 6, 15)
			},
			{
				plantStartDate: new Date(2000, 6, 25),
				plantEndDate: new Date(2000, 8, 5),
				harvestStartDate: new Date(2000, 9, 5),
				harvestEndDate: new Date(2000, 10, 25)
			}
		]
	},
	'Chinese Broccoli': {
		name: 'Chinese Broccoli (uses Broccoli)',
		plantingPeriods: [
			{
				plantStartDate: new Date(2000, 2, 15),
				plantEndDate: new Date(2000, 4, 5),
				harvestStartDate: new Date(2000, 4, 25),
				harvestEndDate: new Date(2000, 6, 15)
			},
			{
				plantStartDate: new Date(2000, 6, 25),
				plantEndDate: new Date(2000, 8, 5),
				harvestStartDate: new Date(2000, 9, 5),
				harvestEndDate: new Date(2000, 10, 25)
			}
		]
	},
	'Lettuce, Head': {
		name: 'Lettuce, Head',
		plantingPeriods: [
			{
				plantStartDate: new Date(2000, 2, 15),
				plantEndDate: new Date(2000, 4, 15),
				harvestStartDate: new Date(2000, 4, 5),
				harvestEndDate: new Date(2000, 5, 25)
			},
			{
				plantStartDate: new Date(2000, 7, 5),
				plantEndDate: new Date(2000, 8, 25),
				harvestStartDate: new Date(2000, 8, 15),
				harvestEndDate: new Date(2000, 10, 15)
			}
		]
	},
	'Lettuce, Leaf': {
		name: 'Lettuce, Leaf (uses Lettuce, Head)',
		plantingPeriods: [
			{
				plantStartDate: new Date(2000, 2, 15),
				plantEndDate: new Date(2000, 4, 15),
				harvestStartDate: new Date(2000, 4, 5),
				harvestEndDate: new Date(2000, 5, 25)
			},
			{
				plantStartDate: new Date(2000, 7, 5),
				plantEndDate: new Date(2000, 8, 25),
				harvestStartDate: new Date(2000, 8, 15),
				harvestEndDate: new Date(2000, 10, 15)
			}
		]
	}
};

export default plantData;

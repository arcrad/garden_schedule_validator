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
	}
};

export default plantData;

import { PlantData } from './CommonTypes';

const plantData:PlantData = [
	{
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
	{
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
	{
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
	}
];

export default plantData;

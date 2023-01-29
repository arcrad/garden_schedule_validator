export type PlantingPeriod = {
	plantStartDate: Date;
	plantEndDate: Date;
	harvestStartDate: Date;
	harvestEndDate: Date;
}

export type Plant = {
	name: string;
	plantingPeriods: PlantingPeriod[]
}

export type PlantData = Plant[];

export const plantData:PlantData = [
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
	}
];

type PlantingPeriod = {
	plantStartDate: Date;
	plantEndDate: Date;
	harvestStartDate: Date;
	harvestEndDate: Date;
};

type Plant = {
	name: string;
	plantingPeriods: PlantingPeriod[]
};

type PlantData = Plant[];

type PlantScheduleEntry = {
	plantId: number;
	groupId: number;
	numberOfPlants: number;	
};

type PlantSchedule = PlantScheduleEntry[];

export type {
	PlantingPeriod,
	Plant,
	PlantData,
	PlantScheduleEntry,
	PlantSchedule
};

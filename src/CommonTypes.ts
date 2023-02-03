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

type PlantData = { [key:string]: Plant };

type PlantScheduleEntry = {
	plantId: string;
	groupId: number;
	squareFeetPlanted: number;	
	notes?: string;
	activePeriods?: (number[]|undefined);
};

type PlantSchedule = PlantScheduleEntry[];

export type {
	PlantingPeriod,
	Plant,
	PlantData,
	PlantScheduleEntry,
	PlantSchedule
};

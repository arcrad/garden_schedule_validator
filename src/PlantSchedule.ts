import {
	PlantScheduleEntry,
	PlantSchedule
} from './CommonTypes';

const plantSchedule:PlantSchedule = [
	{
		plantId: 'Peas, Garden',
		groupId: 0,
		squareFeetPlanted: 15
	},
	{
		plantId: 'Spinach',
		groupId: 0,
		squareFeetPlanted: 24
	},
	{
		plantId: 'Beets',
		groupId: 0,
		squareFeetPlanted: 6
	},
	{
		plantId: 'Cucumbers',
		groupId: 0,
		squareFeetPlanted: 5
	},
	{
		plantId: 'Cucamelon',
		groupId: 0,
		squareFeetPlanted: 4
	},
	{
		plantId: 'Malabar Spinach',
		groupId: 0,
		squareFeetPlanted: 6
	},
	{
		plantId: 'Chinese Broccoli',
		groupId: 1,
		squareFeetPlanted: 7,
		notes: 'Fall'
	},
	//add bok choy,
	{
		plantId: 'Lettuce, Head',
		groupId: 1,
		squareFeetPlanted: 30,
		notes: 'Fall'
	},
	{
		plantId: 'Lettuce, Leaf',
		groupId: 1,
		squareFeetPlanted: 30,
		notes: 'Fall'
	},
	/////
	{
		plantId: 'Peas, Garden',
		groupId: 2,
		squareFeetPlanted: 15
	},
	{
		plantId: 'Chinese Broccoli',
		groupId: 2,
		squareFeetPlanted: 7
	},
	{
		plantId: 'Lettuce, Head',
		groupId: 2,
		squareFeetPlanted: 4
	},
	{
		plantId: 'Lettuce, Leaf', //will be leaf
		groupId: 2,
		squareFeetPlanted: 2
	},
	/////
	{
		plantId: 'Peas, Garden',
		groupId: 3,
		squareFeetPlanted: 15
	},
	{
		plantId: 'Malabar Spinach',
		groupId: 3,
		squareFeetPlanted: 3
	},
];

export default plantSchedule;

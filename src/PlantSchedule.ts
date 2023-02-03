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
		squareFeetPlanted: 24,
		activePeriods: [0]
	},
	{
		plantId: 'Beets',
		groupId: 0,
		squareFeetPlanted: 6,
		activePeriods: [0]
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
		squareFeetPlanted: 6,
		activePeriods: [1]
	},
	{
		plantId: 'Chinese Broccoli',
		groupId: 0,
		squareFeetPlanted: 7,
		activePeriods: [1]
	},
	{
		plantId: 'Bok Choy',
		groupId: 0,
		squareFeetPlanted: 4
	},
	{
		plantId: 'Lettuce, Head',
		groupId: 0,
		squareFeetPlanted: 6,
		activePeriods: [1]
	},
	{
		plantId: 'Lettuce, Leaf',
		groupId: 0,
		squareFeetPlanted: 6,
		activePeriods: [1]
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
		squareFeetPlanted: 7,
		activePeriods: [0]
	},
	{
		plantId: 'Kohlrabi',
		groupId: 2,
		squareFeetPlanted: 6,
		activePeriods: [0]
	},
	{
		plantId: 'Winter Squash',
		groupId: 2,
		squareFeetPlanted: 8,
		notes: 'Butternut'
	},
	{
		plantId: 'Peanut',
		groupId: 2,
		squareFeetPlanted: 25
	},
	{
		plantId: 'Radish',
		groupId: 2,
		squareFeetPlanted: 12,
		notes: 'Daikon',
		activePeriods: [1]
	},
	{
		plantId: 'Collards',
		groupId: 2,
		squareFeetPlanted: 7,
		activePeriods: [0]
	},
	{
		plantId: 'Lettuce, Head',
		groupId: 2,
		squareFeetPlanted: 4,
		activePeriods: [0]
	},
	{
		plantId: 'Lettuce, Leaf',
		groupId: 2,
		squareFeetPlanted: 2,
		activePeriods: [0]
	},
	{
		plantId: 'Swiss Chard',
		groupId: 2,
		squareFeetPlanted: 4,
		activePeriods: [0]
	},
	/////
	{
		plantId: 'Peas, Garden',
		groupId: 3,
		squareFeetPlanted: 15
	},
	{
		plantId: 'Tatsoi',
		groupId: 3,
		squareFeetPlanted: 24,
		activePeriods: [0]
	},
	{
		plantId: 'Bok Choy',
		groupId: 3,
		squareFeetPlanted: 6
	},
	{
		plantId: 'Winter Squash',
		groupId: 3,
		squareFeetPlanted: 8,
		notes: 'Curshaw'
	},
	{
		plantId: 'Eggplant',
		groupId: 3,
		squareFeetPlanted: 10
	},
	{
		plantId: 'Peppers',
		groupId: 3,
		squareFeetPlanted: 10,
		notes: 'Lemon'
	},
	{
		plantId: 'Malabar Spinach',
		groupId: 3,
		squareFeetPlanted: 3,
		activePeriods: [1]
	},
	{
		plantId: 'Rutabega',
		groupId: 3,
		squareFeetPlanted: 15
	},
	/////
	{
		plantId: 'Pole Beans',
		groupId: 4,
		squareFeetPlanted: 15,
		notes: 'Black'
	},
	{
		plantId: 'Carrots',
		groupId: 4,
		squareFeetPlanted: 7,
		activePeriods: [0]
	},
	{
		plantId: 'Radish',
		groupId: 4,
		squareFeetPlanted: 5,
		notes: 'Radish btw Carrots',
		activePeriods: [0]
	},
	{
		plantId: 'Mustard',
		groupId: 4,
		squareFeetPlanted: 4,
		notes: 'Mizuna',
		activePeriods: [1]
	},
	{
		plantId: 'Kohlrabi',
		groupId: 4,
		squareFeetPlanted: 5,
		activePeriods: [1]
	},
	{
		plantId: 'Collards',
		groupId: 4,
		squareFeetPlanted: 8,
		activePeriods: [1]
	},
	{
		plantId: 'Carrots',
		groupId: 4,
		squareFeetPlanted: 13,
		notes: 'Salsify',
		activePeriods: [0]
	},
	{
		plantId: 'Mustard',
		groupId: 4,
		squareFeetPlanted: 10,
		notes: 'Komatsuna',
		activePeriods: [0]
	},
	/////
	{
		plantId: 'Pole Beans',
		groupId: 5,
		squareFeetPlanted: 15,
		notes: 'Pinto'
	},
	{
		plantId: 'Pole Beans',
		groupId: 5,
		squareFeetPlanted: 15,
		notes: 'Kidney'
	},
	{
		plantId: 'Broccoli',
		groupId: 5,
		squareFeetPlanted: 15,
		activePeriods: [0]
	},
	{
		plantId: 'Cabbage',
		groupId: 5,
		squareFeetPlanted: 15,
		activePeriods: [0]
	},
	{
		plantId: 'Brussels Sprouts',
		groupId: 5,
		squareFeetPlanted: 25
	},
	{
		plantId: 'Broccoli',
		groupId: 5,
		squareFeetPlanted: 7,
		activePeriods: [1]
	},
	/////
	{
		plantId: 'Lima Beans',
		groupId: 6,
		squareFeetPlanted: 15
	},
	{
		plantId: 'Cauliflower',
		groupId: 6,
		squareFeetPlanted: 20
	},
	{
		plantId: 'Cabbage',
		groupId: 6,
		squareFeetPlanted: 10
	},
	{
		plantId: 'Brussels Sprouts',
		groupId: 6,
		squareFeetPlanted: 20
	},
	{
		plantId: 'Mustard',
		groupId: 6,
		squareFeetPlanted: 10,
		notes: 'Chijmsiam Mustard'
	},
	/////
	{
		plantId: 'Tomatoes',
		groupId: 7,
		squareFeetPlanted: 24,
		notes: 'Paste'
	},
	{
		plantId: 'Peppers',
		groupId: 7,
		squareFeetPlanted: 21,
		notes: 'Aji Dulce'
	},
	/////
	{
		plantId: 'Tomatoes',
		groupId: 8,
		squareFeetPlanted: 24,
		notes: 'Paste'
	},
	{
		plantId: 'Peppers',
		groupId: 8,
		squareFeetPlanted: 21,
		notes: 'Cubanelle'
	},
	/////
	{
		plantId: 'Tomatoes',
		groupId: 9,
		squareFeetPlanted: 24,
		notes: 'Paste'
	},
	{
		plantId: 'Peppers',
		groupId: 9,
		squareFeetPlanted: 21,
		notes: 'Fish'
	},
	/////
	{
		plantId: 'Tomatoes',
		groupId: 10,
		squareFeetPlanted: 24,
		notes: 'Slicing'
	},
	{
		plantId: 'Peppers',
		groupId: 10,
		squareFeetPlanted: 21,
		notes: 'Melrose'
	},
	/////
	{
		plantId: 'Tomatoes',
		groupId: 11,
		squareFeetPlanted: 24,
		notes: 'Slicing'
	},
	{
		plantId: 'Peppers',
		groupId: 11,
		squareFeetPlanted: 21,
		notes: 'Poblano'
	},
	/////
	{
		plantId: 'Tomatoes',
		groupId: 12,
		squareFeetPlanted: 20,
		notes: 'Slicing'
	},
	{
		plantId: 'Tomatoes',
		groupId: 12,
		squareFeetPlanted: 4,
		notes: 'Paste'
	},
	{
		plantId: 'Peppers',
		groupId: 12,
		squareFeetPlanted: 21,
		notes: 'Fish'
	},
	{
		plantId: 'Pole Beans',
		groupId: 12,
		squareFeetPlanted: 3,
		notes: 'Yard Long'
	},
	{
		plantId: 'Broccoli',
		groupId: 12,
		squareFeetPlanted: 18
	},
	/////
	{
		plantId: 'Ground Cherries',
		groupId: 13,
		squareFeetPlanted: 40
	},
	{
		plantId: 'Peanut',
		groupId: 13,
		squareFeetPlanted: 18
	},
	/////
	{
		plantId: 'Summer Squash',
		groupId: 14,
		squareFeetPlanted: 15,
		notes: 'Yellow' 
	},
	{
		plantId: 'Summer Squash',
		groupId: 14,
		squareFeetPlanted: 15,
		notes: 'Zucchini' 
	},
	{
		plantId: 'Collards',
		groupId: 14,
		squareFeetPlanted: 15,
		notes: 'Kale' 
	},
	/////
	{
		plantId: 'Watermelon',
		groupId: 15,
		squareFeetPlanted: 8
	},
	{
		plantId: 'Winter Squash',
		groupId: 15,
		squareFeetPlanted: 12,
		notes: 'Amaranth'
	},
	{
		plantId: 'Tatsoi',
		groupId: 15,
		squareFeetPlanted: 25,
		notes: 'Fall' 
	},
	/////
	{
		plantId: 'Pumpkins',
		groupId: 16,
		squareFeetPlanted: 8
	},
	{
		plantId: 'Sweet Potato',
		groupId: 16,
		squareFeetPlanted: 12
	},
	{
		plantId: 'Chinese Cabbage',
		groupId: 16,
		squareFeetPlanted: 25,
		notes: 'Yukina Savoy'
	},
	/////
	{
		plantId: 'Pole Beans',
		groupId: 17,
		squareFeetPlanted: 10,
		notes: 'Green Beans'
	},
	{
		plantId: 'Peppers',
		groupId: 17,
		squareFeetPlanted: 25,
		notes: 'Sweet Bell'
	},
	{
		plantId: 'Spinach',
		groupId: 17,
		squareFeetPlanted: 5,
		notes: 'New Zealand Spinach'
	},
	{
		plantId: 'Spinach',
		groupId: 17,
		squareFeetPlanted: 5,
	},
	{
		plantId: 'Beets',
		groupId: 17,
		squareFeetPlanted: 5
	},
	{
		plantId: 'Chinese Cabbage',
		groupId: 17,
		squareFeetPlanted: 5
	},
	/////
	{
		plantId: 'Peppers',
		groupId: 18,
		squareFeetPlanted: 25,
		notes: 'Banana'
	},
	{
		plantId: 'Mustard',
		groupId: 18,
		squareFeetPlanted: 20,
		notes: 'Komatsuna'
	},
	/////
	{
		plantId: 'Peas, Garden',
		groupId: 19,
		squareFeetPlanted: 15
	},
	{
		plantId: 'Chinese Cabbage',
		groupId: 19,
		squareFeetPlanted: 24,
		notes: 'Yukina Savoy'
	},
	{
		plantId: 'Mustard',
		groupId: 19,
		squareFeetPlanted: 4,
		notes: 'Mizuna'
	},
	{
		plantId: 'Chinese Cabbage',
		groupId: 19,
		squareFeetPlanted: 2
	},
	{
		plantId: 'Summer Squash',
		groupId: 19,
		squareFeetPlanted: 4,
		notes: 'Cucuzzi'
	},
	{
		plantId: 'Peppers',
		groupId: 19,
		squareFeetPlanted: 23,
		notes: 'Paprika'
	},
	{
		plantId: 'Okra',
		groupId: 19,
		squareFeetPlanted: 16
	},
	/////
	{
		plantId: 'Tomatoes',
		groupId: 20,
		squareFeetPlanted: 12,
		notes: 'Cherry'
	},
	{
		plantId: 'Broccoli',
		groupId: 20,
		squareFeetPlanted: 10
	},
	{
		plantId: 'Mustard',
		groupId: 20,
		squareFeetPlanted: 10,
		notes: 'Komatsuna'
	},
	{
		plantId: 'Lettuce, Head',
		groupId: 20,
		squareFeetPlanted: 6
	},
	{
		plantId: 'Mustard',
		groupId: 20,
		squareFeetPlanted: 12,
		notes: 'Mizuna'
	},
	{
		plantId: 'Spinach',
		groupId: 20,
		squareFeetPlanted: 24
	},
	{
		plantId: 'Carrots',
		groupId: 20,
		squareFeetPlanted: 7
	},
	{
		plantId: 'Radish',
		groupId: 20,
		squareFeetPlanted: 5,
	},
	{
		plantId: 'Mustard',
		groupId: 20,
		squareFeetPlanted: 7,
		notes: 'Chijmsiam Mustard'
	},
	{
		plantId: 'Collards',
		groupId: 20,
		squareFeetPlanted: 7,
		notes: 'Kale' 
	}
];

export default plantSchedule;

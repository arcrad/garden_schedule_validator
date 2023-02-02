import React, { useRef, useEffect } from 'react';

import {
	PlantingPeriod,
	Plant,
	PlantData,
	PlantScheduleEntry,
	PlantSchedule
} from '../CommonTypes';
import drawTimeAxisMarkersOnCanvas from './drawTimeAxisMarkersOnCanvas';

export default function SquareFeetUsedPerMonthChart(
	props: {
		plantSchedule:PlantSchedule;
		plantData:PlantData;
		groupToShow: number;
		chartWidth: number;
		chartHeight: number;
	}
) {
	let chartRef = useRef<HTMLCanvasElement>(null);
	useEffect( () => {
		if(chartRef.current == undefined) {
			return;
		}
		const yearLengthDays = 365;
		//console.log('use effect');
		let chartContext = chartRef.current.getContext('2d');
		if(chartContext != undefined) {
			//draw background fill
			chartContext.fillStyle = '#efe';
			chartContext.fillRect(0, 0, props.chartWidth, props.chartHeight);
			const daysPerMonth = [31,28,31,30,31,30,31,31,30,31,30,31];
			const plantsInGroup = props.plantSchedule.filter( (plant) => plant.groupId == props.groupToShow);
			let squareFeetPerMonth = [0,0,0,0,0,0,0,0,0,0,0,0];
			squareFeetPerMonth = squareFeetPerMonth.map( (monthTotal, monthIndex) => {
				let totalSqFtCurrentMonth = plantsInGroup.reduce( (total, currentPlant) => {
					return total + props.plantData[currentPlant.plantId].plantingPeriods.reduce( (total, currentPlantingPeriod) => {
						//let plantActiveStartDate = props.plantData[currentPlant.plantId].plantingPeriods[0].plantStartDate;
						//let plantActiveEndDate = props.plantData[currentPlant.plantId].plantingPeriods[0].plantEndDate;
						let plantActiveStartDate = currentPlantingPeriod.plantStartDate;
						let plantActiveEndDate = currentPlantingPeriod.harvestEndDate;
						if(plantActiveStartDate.getMonth() <= monthIndex && plantActiveEndDate.getMonth() >= monthIndex) {
							return total + currentPlant.squareFeetPlanted;
						} else {
							return total;
						}
					}, 0);	
				}, 0);
				return totalSqFtCurrentMonth;
			});
			//console.dir(plantsInGroup);
			let customLabels = squareFeetPerMonth.map( val => String(val));
			console.dir(customLabels);
			drawTimeAxisMarkersOnCanvas(chartContext, props.chartWidth, props.chartHeight, yearLengthDays, true, '#999', customLabels);
		}
	}, [chartRef]);
	return (
		<canvas
			ref={chartRef} 
			width={props.chartWidth} 
			height={props.chartHeight}
			style={{
				border: '1px solid #999'
			}}
		>
		</canvas>
	)
}

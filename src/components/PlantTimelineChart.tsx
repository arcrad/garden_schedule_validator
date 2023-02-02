import React, { useRef, useEffect } from 'react';

import {
	PlantingPeriod,
	Plant,
	PlantData,
	PlantScheduleEntry,
	PlantSchedule
} from '../CommonTypes';
import { daysIntoYear } from '../Utility';
import drawTimeAxisMarkersOnCanvas from './drawTimeAxisMarkersOnCanvas';

export default function PlantTimelineChart(
	props:{
		plant:Plant;
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
			chartContext.fillStyle = '#eee';
			chartContext.fillRect(0, 0, props.chartWidth, props.chartHeight);
		}
		//draw all planting periods 
		props.plant.plantingPeriods.forEach( (plantingPeriod:PlantingPeriod) => {
			//draw planting period
			const plantStartDay = daysIntoYear(plantingPeriod.plantStartDate);
			const plantEndDay = daysIntoYear(plantingPeriod.plantEndDate);
			//console.log(`plantStartDay=${plantStartDay}, plantEndDay=${plantEndDay}`);
			const plantStartX = props.chartWidth*(plantStartDay/yearLengthDays);
			const plantBarWidth = (props.chartWidth*(plantEndDay/yearLengthDays)) - plantStartX;
			if(chartContext != undefined) {
				chartContext.fillStyle = '#0e0';
				chartContext.fillRect(plantStartX, 0, plantBarWidth, props.chartHeight);
			}
			//draw harvest period
			const harvestStartDay = daysIntoYear(plantingPeriod.harvestStartDate);
			const harvestEndDay = daysIntoYear(plantingPeriod.harvestEndDate);
			const harvestStartX = props.chartWidth*(harvestStartDay/yearLengthDays);
			const harvestBarWidth = (props.chartWidth*(harvestEndDay/yearLengthDays)) - harvestStartX;
			//console.log(`harvestStartDay=${harvestStartDay}, harvestEndDay=${harvestEndDay}`);
			if(chartContext != undefined) {
				chartContext.fillStyle = '#ed3';
				chartContext.fillRect(harvestStartX, 0, harvestBarWidth, props.chartHeight);
			}
			//draw overlap period, if any 
			if(plantEndDay > harvestStartDay) {
				if(chartContext != undefined) {
					const overlapBarWidth = (props.chartWidth*(plantEndDay/yearLengthDays)) - harvestStartX;
					chartContext.fillStyle = '#589';
					chartContext.fillRect(harvestStartX, 0, overlapBarWidth, props.chartHeight);
				}
			}
		});
		if(chartContext != undefined) {
			drawTimeAxisMarkersOnCanvas(chartContext, props.chartWidth, props.chartHeight, yearLengthDays, false, '#999');
		}
		//console.dir(chartContext);
	}, [chartRef]);
	return (
		<canvas
			ref={chartRef} 
			width={props.chartWidth} 
			height={props.chartHeight}
			style={{
				border: '1px solid #555'
			}}
		>
		</canvas>
	)
}

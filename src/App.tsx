import React, { useRef, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

import {
	PlantingPeriod,
	Plant,
	PlantData,
	PlantScheduleEntry,
	PlantSchedule
} from './CommonTypes';
import plantData from './PlantData';
import plantSchedule from './PlantSchedule';

//stolen from stackoverflow, need to vet properly 
function daysIntoYear(date:Date){
    return (Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()) - Date.UTC(date.getFullYear(), 0, 0)) / 24 / 60 / 60 / 1000;
}


function drawTimeAxisMarkersOnCanvas(
	context:CanvasRenderingContext2D,
	axisWidth: number,
	axisHeight: number,
	yearLengthDays: number,
	showLabels: boolean,
	markerColor: string,
	customLabels?: string[]
) {
	//draw time axis markers 
	let curDate = new Date(2000,0,1);
	let monthLabels = ['J','F','M','A','M','J','J','A','S','O','N','D','J'];
	if(customLabels != undefined) {
		monthLabels = customLabels;
	}
	let curXPosition = 0;
	for(let x = 0; x < 13; x++) {
		//console.log(curDate);
		let xOffset = axisWidth*(daysIntoYear(curDate)/yearLengthDays);
		//console.log(`xOffset = ${xOffset}`);
		if(context != null) {
			curXPosition += xOffset;
			context.strokeStyle = markerColor;
			context.beginPath();
			context.moveTo(xOffset, 0);
			context.lineTo(xOffset, axisHeight);
			context.stroke();
			//increment date by 1 month
			curDate.setMonth(curDate.getMonth()+1);
			//draw label for previous month
			if(showLabels && x < 12) {
				let nextMonthXOffset = axisWidth*(daysIntoYear(curDate)/yearLengthDays);
				const textXPos = ( x == 11 ? (xOffset+axisWidth)/2 : (xOffset+nextMonthXOffset)/2) - 3;
				const textYPos = (axisHeight/2) + 4.5;
				//console.log(`textXPos=${textXPos}, textYPos=${textYPos}`);
				context.fillStyle = '#000';
				context.font = '12px sans';
				context.fillText(monthLabels[x], textXPos, textYPos);
			}
		}
	}
}

function PlantTimelineAxis(
	props: {
		axisWidth: number;
		axisHeight: number;
	}
) {
	let axisRef = useRef<HTMLCanvasElement>(null);
	useEffect( () => {
		if(axisRef.current == undefined) {
			return;
		}
		const yearLengthDays = 365;
		//console.log('use effect');
		let axisContext = axisRef.current.getContext('2d');
		if(axisContext != undefined) {
			//draw background fill
			axisContext.fillStyle = '#efe';
			axisContext.fillRect(0, 0, props.axisWidth, props.axisHeight);
			drawTimeAxisMarkersOnCanvas(axisContext, props.axisWidth, props.axisHeight, yearLengthDays, true, '#000');
		}
	}, [axisRef]);
	return (
		<canvas
			ref={axisRef} 
			width={props.axisWidth} 
			height={props.axisHeight}
			style={{
				border: '1px solid #000'
			}}
		>
		</canvas>
	)
}

function SquareFeetUsedPerMonthChart(
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
			const plantsInGroup = plantSchedule.filter( (plant) => plant.groupId == props.groupToShow);
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

function PlantTimelineChart(
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
	
function PlantScheduleTableRows(props:{
	plantSchedule:PlantSchedule;
	plantData:PlantData;
}) {
	//group plant schedule by groupId
	let scheduleGroups:PlantScheduleEntry[][] = [];
	props.plantSchedule.forEach( (plantScheduleEntry:PlantScheduleEntry) => {
		if( scheduleGroups[plantScheduleEntry.groupId] == null ) {
			scheduleGroups[plantScheduleEntry.groupId] = [];
		}
		scheduleGroups[plantScheduleEntry.groupId].push(plantScheduleEntry);
	});
	return (
		<>
			{
			scheduleGroups.map((scheduleGroup:PlantScheduleEntry[], i:number) => {
					return (
					<>
					<tr key={'sqpm'+i}>
						<td colSpan={2}>Total Sq. Ft. Used per Month for Group {i}</td>
						<td>
							<SquareFeetUsedPerMonthChart 
								plantSchedule = {props.plantSchedule}
								plantData = {props.plantData}
								groupToShow = {i}
								chartWidth = {500}
								chartHeight = {20}
							/>
						</td>
					</tr>
				{
				scheduleGroup.map( (plantScheduleEntry:PlantScheduleEntry, i:number, allSchedulesInGroup:PlantScheduleEntry[]) => {
				return (
					<tr key={'pse'+i}>
						{ i == 0 && <td rowSpan={allSchedulesInGroup.length}>{plantScheduleEntry.groupId}</td> }
						<td>{props.plantData[plantScheduleEntry.plantId].name} ({plantScheduleEntry.squareFeetPlanted})<br/>{plantScheduleEntry.notes && <i>({plantScheduleEntry.notes})</i>}</td>
						<td>
							<PlantTimelineChart
								plant={props.plantData[plantScheduleEntry.plantId]}
								chartWidth={500}
								chartHeight={30}
							/>
						</td>
					</tr>
				)}
				)
				}
				</>
				);
			})
		}
	</>
	);
}

function PlantScheduleTable(props:{
	plantSchedule:PlantSchedule;
	plantData:PlantData;
}) {
	return (
		<table>
			<thead>
				<tr>
					<th>Group</th>
					<th>Plant Name</th>
					<th>Timeline</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td colSpan={2}>Months</td>
					<td><PlantTimelineAxis axisWidth={500} axisHeight={30}/></td>
				</tr>
				<PlantScheduleTableRows plantSchedule={props.plantSchedule} plantData={props.plantData}/>
			</tbody>
		</table>
	)
};

function App() {
	console.dir(plantData);

  return (
    <div className="App">
			<h1>Garden Schedule Validator</h1>
			<p>Create and validate garden schedules</p>
				<PlantScheduleTable plantSchedule={plantSchedule} plantData={plantData}/>
    </div>
  );
}

export default App;

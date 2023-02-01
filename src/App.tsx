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
	markerColor: string
) {
	//draw time axis markers 
	let curDate = new Date(2000,0,1);
	let monthLabels = ['J','F','M','A','M','J','J','A','S','O','N','D','J'];
	let curXPosition = 0;
	for(let x = 0; x < 13; x++) {
			console.log(curDate);
		let xOffset = axisWidth*(daysIntoYear(curDate)/yearLengthDays);
		console.log(`xOffset = ${xOffset}`);
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
				const textXPos = ( x == 11 ? (xOffset+axisWidth)/2 : (xOffset+nextMonthXOffset)/2) - 6;
				const textYPos = (axisHeight/2) + 4;
				console.log(`textXPos=${textXPos}, textYPos=${textYPos}`);
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
				border: '1px solid #f00'
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
			scheduleGroups.map((scheduleGroup:PlantScheduleEntry[], i:number) => (
				scheduleGroup.map( (plantScheduleEntry:PlantScheduleEntry, i:number, allSchedulesInGroup:PlantScheduleEntry[]) => (
					<tr key={'pse'+i}>
						{ i == 0 && <td rowSpan={allSchedulesInGroup.length}>{plantScheduleEntry.groupId}</td> }
						<td>{props.plantData[plantScheduleEntry.plantId].name}<br/>{plantScheduleEntry.notes && <i>({plantScheduleEntry.notes})</i>}</td>
						<td>
							<PlantTimelineChart
								plant={props.plantData[plantScheduleEntry.plantId]}
								chartWidth={500}
								chartHeight={30}
							/>
						</td>
					</tr>
				))
			))
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
					<td></td>
					<td></td>
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

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
	
function App() {
	console.dir(plantData);

	let PlantScheduleTableRows = (props:{plantSchedule:PlantSchedule}) => {
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
							<td>{plantData[plantScheduleEntry.plantId].name}<br/>{plantScheduleEntry.notes && <i>({plantScheduleEntry.notes})</i>}</td>
							<td>
								<PlantTimelineChart
									plant={plantData[plantScheduleEntry.plantId]}
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
	};

	let PlantScheduleTable = (props:{plantSchedule:PlantSchedule}) => {
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
					<PlantScheduleTableRows plantSchedule={plantSchedule} />
				</tbody>
			</table>
		)
	};
	
  return (
    <div className="App">
			<h1>Garden Schedule Validator</h1>
			<p>Create and validate garden schedules</p>
				<PlantScheduleTable plantSchedule={plantSchedule} />
    </div>
  );
}

export default App;

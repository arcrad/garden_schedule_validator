import React from 'react';
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
							<td>{plantScheduleEntry.plantId}</td>
							<td>timeline for {plantScheduleEntry.plantId}</td>
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

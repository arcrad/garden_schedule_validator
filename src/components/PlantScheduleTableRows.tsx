import React from 'react';

import {
	PlantingPeriod,
	Plant,
	PlantData,
	PlantScheduleEntry,
	PlantSchedule
} from '../CommonTypes';
import SquareFeetUsedPerMonthChart from './SquareFeetUsedPerMonthChart';
import PlantTimelineChart from './PlantTimelineChart';

export default function PlantScheduleTableRows(props:{
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
								plantScheduleEntry={plantScheduleEntry}
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

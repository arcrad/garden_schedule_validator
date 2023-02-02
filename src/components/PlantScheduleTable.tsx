import React from 'react';

import {
	PlantingPeriod,
	Plant,
	PlantData,
	PlantScheduleEntry,
	PlantSchedule
} from '../CommonTypes';
import PlantTimelineAxis from './PlantTimelineAxis';
import PlantScheduleTableRows from './PlantScheduleTableRows';

export default function PlantScheduleTable(props:{
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

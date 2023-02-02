import { daysIntoYear } from '../Utility';

export default function drawTimeAxisMarkersOnCanvas(
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

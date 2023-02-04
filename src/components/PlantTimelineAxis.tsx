import React, { useRef, useEffect } from 'react';

import drawTimeAxisMarkersOnCanvas from './drawTimeAxisMarkersOnCanvas';

export default function PlantTimelineAxis(
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
		//console.log('use effect');
		let axisContext = axisRef.current.getContext('2d');
		if(axisContext != undefined) {
			//draw background fill
			axisContext.fillStyle = '#efe';
			axisContext.fillRect(0, 0, props.axisWidth, props.axisHeight);
			drawTimeAxisMarkersOnCanvas(axisContext, props.axisWidth, props.axisHeight, true, '#000');
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

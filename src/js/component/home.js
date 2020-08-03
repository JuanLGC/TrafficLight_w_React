import React from "react";

import TrafficLight from "./trafficLight.js";

//create your first component
export function Home() {
	return (
		<div className="mainBox">
			<div className="row">
				<div className="bg-dark lightPost" />
			</div>
			<TrafficLight color={"Light redLight"} />
			<TrafficLight color={"Light yellowLight"} />
			<TrafficLight color={"Light greenLight"} />
		</div>
	);
}

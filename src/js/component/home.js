import React from "react";

import TrafficLight from "./trafficLight.js";

//create your first component
export function Home() {
	return (
		<div className="mainBox">
			<div className="row">
				<div className="bg-dark lightPost" />
			</div>
			<TrafficLight enabled={"Light redLight"} />
			<TrafficLight enabled={"Light yellowLight"} />
			<TrafficLight enabled={"Light greenLight"} />
		</div>
	);
}

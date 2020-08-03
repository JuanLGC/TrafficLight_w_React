import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

export default function TrafficLight(color) {
	const [light, stateChange] = useState(false);
	let lightColor = "";

	if (light === true) {
		lightColor = color.color;
	} else {
		lightColor = "Light";
	}

	return (
		<div className="row p-2 divisor">
			<div
				className={lightColor}
				onClick={() => {
					stateChange(!light);
				}}
			/>
		</div>
	);
}

TrafficLight.propTypes = {
	color: PropTypes.string
};

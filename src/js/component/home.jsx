import React from "react";
import TrafficLight from "./trafficlight";
//include images into your bundle

//create your first component
const Home = () => {
	return (
		<div className="container-fluid">
			<TrafficLight />
		</div>
	);
};

export default Home;

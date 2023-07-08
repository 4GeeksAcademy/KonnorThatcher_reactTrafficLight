import React from "react";
import TrafficLight from "./trafficlight";
//include images into your bundle

//create your first component
const Home = () => {
	return (
		<div className="container-fluid">
			<div className="bg-black" style={{height: "10em", aspectRatio: "1/10", margin: "auto"}}></div>
			<TrafficLight />
		</div>
	);
};

export default Home;

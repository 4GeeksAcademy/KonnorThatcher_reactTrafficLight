import React, {useEffect, useState} from 'react'

const TrafficLight = () => {
  const [light, setLight] = useState("");
  return (
    <div id='trafficLightBase' className='container-fluid bg-black rounded d-flex flex-column justify-content-evenly' style={{width: "10rem", aspectRatio: "1/3"}}>
        <div className={`red circle ${light === "red" ? "box-shadow" : ""}`} onClick={() => setLight("red")}></div>
        <div className={`yellow circle ${light === "yellow" ? "box-shadow" : ""}`} onClick={() => setLight("yellow")}></div>
        <div className={`green circle ${light === "green" ? "box-shadow" : ""}`} onClick={() => setLight("green")}></div>
    </div>
  )
}

export default TrafficLight
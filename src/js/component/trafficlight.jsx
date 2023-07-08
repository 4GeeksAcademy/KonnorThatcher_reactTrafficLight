import React, {useEffect, useState} from 'react'

const TrafficLight = () => {
  const [light, setLight] = useState("");

  const cycle = () => {
    switch(light) {
      case "green":
        return "yellow";
      case "yellow":
        return "red";
      case "red":
        return "";
      default:
        return "green"
    }
  }
  return (
    <div className='row mb-5'>
      <div className="col-9 p-0 d-flex flex-column align-items-center justify-content-center">
  			<div className="bg-black" style={{height: "10em", aspectRatio: "1/15"}}></div>
        <div id='trafficLightBase' className='container-fluid bg-black rounded d-flex flex-column justify-content-evenly' style={{width: "20%", aspectRatio: "1/3"}}>
            <div className={`red circle ${light === "red" ? "box-shadow" : ""}`} onClick={() => setLight("red")}></div>
            <div className={`yellow circle ${light === "yellow" ? "box-shadow" : ""}`} onClick={() => setLight("yellow")}></div>
            <div className={`green circle ${light === "green" ? "box-shadow" : ""}`} onClick={() => setLight("green")}></div>
        </div>
      </div>
      <div className="col p-0 d-flex align-items-center">
          <button className='btn btn-dark' onClick={() => setLight(cycle())}>Cycle Through Lights</button>
      </div>
    </div>
  )
}

export default TrafficLight
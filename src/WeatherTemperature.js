import React from "react";

export default function WeatherTemperature(props){
    return(
        <div className="WeatherTemperature">
            <strong>{Math.round(props.temp)}</strong>
        <span className="units">
            °C 
        </span>
        </div>
    ) 
}
  
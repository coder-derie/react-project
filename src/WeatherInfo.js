import React from "react";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props){
    return <div className="card-body">
          <h1>{props.data.city}</h1>
          <div className="card-body">
            <div className="row">
              <div className="col-6">
                <div className="clearfix weather-temperature">
                 <div className="float-left">
                   <WeatherIcon code={props.data.icon} size={54}/></div>
                  
                  <div className="float-left">
                    <WeatherTemperature temp={props.data.temperature}/>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <ul>
                  <li>{props.data.description}</li>
                  <li>Feels Like: {Math.round(props.data.feelsLike)}℃</li>
                  <li>Humidity: {props.data.humidity}%</li>
                  <li>Wind: {props.data.wind}km/h</li>
                </ul>
              </div>
            </div>
          </div>
          <br />

          <div className="row forecast"></div>
        </div>
      ;
}
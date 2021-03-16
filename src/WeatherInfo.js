import React from "react";

export default function WeatherInfo(props){
    return <div className="card-body">
          <h1>{props.data.city}</h1>
          <div className="card-body">
            <div className="row">
              <div className="col-6">
                <div className="clearfix weather-temperature">
                  <img
                    src={props.data.imgUrl}
                    alt={props.data.description}
                    className="weather-icon float-left"
                  />
                  <div className="float-left">
                    <strong>{Math.round(props.data.temperature)}</strong>
                    <span className="units">
                      <a href="/" className="active">
                        °C
                      </a>{" "}
                      |<a href="/">°F</a>
                    </span>
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
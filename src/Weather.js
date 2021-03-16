import React, {useState} from "react";
import FormattedDate from "./FormattedDate";
import axios from "axios";
import './Weather.css';

export default function Weather(props) {
 let [weatherData, setWeatherData]= useState({ready:false});
 
 function handleResponse(response){
   console.log(response.data);
    setWeatherData({
    ready:true,
    temperature: response.data.main.temp,
    date: new Date(response.data.dt*1000),
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
    description: response.data.weather[0].description,
    feelsLike: response.data.main.feels_like,
    humidity: response.data.main.humidity,
    wind: response.data.wind.speed,
  });
 }
 
if(weatherData.ready){
  return (
    <div className="Weather">
      <div className="card border mb-3 page">
          <div className="row">
            <div className="col-6 form">
              <form>
                <input
                  type="text"
                  placeholder="Type a City..."
                  className="search"
                  autoFocus="on"
                  autocomplete="off"
                />
                <button type="button" className="btn btn-info">Search</button>
                </form>
            </div>
            <div className="col-6 date-time">
               <FormattedDate date={weatherData.date}/>
            </div>
          </div>
        <div className="card-body">
          <h1>{props.defaultCity}</h1>
          <div className="card-body">
            <div className="row">
              <div className="col-6">
                <div className="clearfix weather-temperature">
                  <img
                    src={weatherData.imgUrl}
                    alt={weatherData.description}
                    className="weather-icon float-left"
                  />
                  <div className="float-left">
                    <strong>{Math.round(weatherData.temperature)}</strong>
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
                  <li>{weatherData.description}</li>
                  <li>Feels Like: {Math.round(weatherData.feelsLike)}℃</li>
                  <li>Humidity: {weatherData.humidity}%</li>
                  <li>Wind: {weatherData.wind}km/h</li>
                </ul>
              </div>
            </div>
          </div>
          <br />

          <div className="row forecast"></div>
        </div>
      </div>
      
    </div>
  );
} else{
const apiKey="4aebdc826d2f6fe4955b6c3fa809665d";
 let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
 axios.get(apiUrl).then(handleResponse);
  
 return(
    "Loading..."
  )
}
 
}



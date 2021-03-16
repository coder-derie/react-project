import React, {useState} from "react";
import FormattedDate from "./FormattedDate";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";
import './Weather.css';

export default function Weather(props) {
 let [weatherData, setWeatherData]= useState({ready:false});
 let [city, setCity] = useState(props.defaultCity);
 
 function handleResponse(response){
    setWeatherData({
    ready:true,
    temperature: response.data.main.temp,
    date: new Date(response.data.dt*1000),
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
    description: response.data.weather[0].description,
    feelsLike: response.data.main.feels_like,
    humidity: response.data.main.humidity,
    wind: response.data.wind.speed,
    city: response.data.name,
  });
 }

 function handleSubmit(event){
   event.preventDefault();
   search();
 }

 function handleCityChange(event){
  setCity(event.target.value);
 }

 function search(){
    const apiKey="4aebdc826d2f6fe4955b6c3fa809665d";
 let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
 axios.get(apiUrl).then(handleResponse);
 
 }
 
if(weatherData.ready){
  return (
    <div className="Weather">
      <div className="card border mb-3 page">
          <div className="row">
            <div className="col-6 form">
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Type a City..."
                  className="search"
                  autoFocus="on"
                  autoComplete="off"
                  onChange={handleCityChange}
                />
                <button type="submit" className="btn btn-info">Search</button>
                </form>
            </div>
            <div className="col-6 date-time">
               <FormattedDate date={weatherData.date}/>
            </div>
          </div>
           <WeatherInfo data={weatherData}/>
        </div>
      
    </div>
  );
} else{
search()
   return "Loading...";
}
 
}



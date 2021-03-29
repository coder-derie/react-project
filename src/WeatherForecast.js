import React, {useState} from "react";
import axios from "axios";
import "./WeatherForecast.css";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecast(props){
    const [loaded, setLoaded] = useState(false);
    const [forecast, setForecast] = useState(null);

    function handleForecast(response){
        console.log(response);
        setForecast(response.data);
        setLoaded(true);
    }
    
    if (loaded) {
        return (
           <div className="WeatherForecast">
               <div className="col">
                   <div className="row">
               17:00
               <WeatherIcon code={forecast.list[0].weather[0].icon}/>
               {Math.round(forecast.list[0].main.temp)}℃
                </div>
                </div>
           </div> 
        )
    } else{
        let apiKey = "4aebdc826d2f6fe4955b6c3fa809665d";
        let url = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;
        axios.get(url).then(handleForecast);
    
        return null;
}
    }
    
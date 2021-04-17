import React, {useState, useEffect} from "react";
import axios from "axios";
import "./WeatherForecast.css";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props){
    const [loaded, setLoaded] = useState(false);
    const [forecast, setForecast] = useState(null);

    useEffect(() => {
        setLoaded(false);
      }, [props.coordinates]);
    
    function handleForecast(response){
        console.log(response.data);
        setForecast(response.data.daily);
        setLoaded(true);
    }
    
    if (loaded) {
        return (
           <div className="WeatherForecast">
               <div className="row">
                       {forecast.map(function(dailyForecast, index){
                           if (index < 5) {
                                 return(
                            <div className="col" key={index}>
                             <WeatherForecastDay data={dailyForecast}/></div>
                                 )  
                               } else {
                                   return null;
                               }
                       }
                       )}
                   
                    
                </div>
           </div> 
        )
    } else{
        let apiKey = "4aebdc826d2f6fe4955b6c3fa809665d";
        let latitude = props.coordinates.lat;
        let longitude = props.coordinates.lon;
        let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
        axios.get(url).then(handleForecast);
    
        return null;
}
    }
    
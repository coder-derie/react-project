import React from "react";
import './Weather.css';

export default function Weather() {
  let weatherData = {
    date: "Monday 09:00",
    city: "Toronto",
    temperature: -4,
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
    description: "Sunny",
    feelsLike: -7,
    humidity: 72,
    wind: 13
  };
  return (
    <div className="Weather">
      <div className="card border mb-3 page">
        <div className="card-header">
          <div className="row">
            <div className="col-6 form">
              <form id="search-form">
                <input
                  type="text"
                  placeholder="Type a City..."
                  className="search"
                  autofocus
                  autocomplete="off"
                />
                <input
                  type="submit"
                  value="Search"
                  className="btn btn-primary"
                />
                <input
                  type="submit"
                  value="Current"
                  className="btn btn-success"
                />
              </form>
            </div>
            <div className="col-6 date-time">
              <h3>
                Last Updated:{weatherData.date} <span></span>
              </h3>
            </div>
          </div>
        </div>
        <div className="card-body">
          <h1>{weatherData.city}</h1>
          <div className="card-body">
            <div className="row">
              <div className="col-6">
                <div className="clearfix weather-temperature">
                  <img
                    src={weatherData.imgUrl}
                    alt=""
                    className="weather-icon float-left"
                  />
                  <div className="float-left">
                    <strong>{weatherData.temperature}</strong>
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
                  <li>Feels Like: {weatherData.feelsLike}</li>
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
      <footer className="footer">
        <a
          href="https://github.com/coder-derie/react-project"
          target="_blank"
        >
          Open-source code
        </a>{" "}
        by Deiriai Myers.
      </footer>
    </div>
  );
}



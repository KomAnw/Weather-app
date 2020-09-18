import React from "react";
import './MainBoard.css'

export default function MainBoard(props) {
  return (
    <div className="mainborad">
      <div className="mainborad__container">
          <div className="mainborad__left">
            <div className="mainborad__left-top">
                <h2 className="mainborad__titile">{props.data.parent.title}, {props.data.title}</h2>
                <p className="mainborad__date">{props.data.consolidated_weather[0].applicable_date.split("-").reverse().join("-")}, {props.data.consolidated_weather[0].weather_state_name}</p>
            </div>
            <div className="mainborad__left-bottom">
                <h3 className="mainborad__degrees">{Math.round(props.data.consolidated_weather[0].the_temp)}&#176;</h3>
            </div>
          </div>
          <img
            alt="weather icon"
            src={`https://www.metaweather.com/static/img/weather/${props.data.consolidated_weather[0].weather_state_abbr}.svg`}
            className="mainborad__img"/>
      </div>
      <ul className="mainborad__bottom-container">
            <li className="mainborad__bottom-data ">Minimum temperature <p className='mainborad__item max-temp'>{Math.round(props.data.consolidated_weather[0].max_temp)}&#176;</p></li>
            <li className="mainborad__bottom-data ">Maximum temperature <p className='mainborad__item min-temp'>{Math.round(props.data.consolidated_weather[0].min_temp)}&#176;</p></li>
            <li className="mainborad__bottom-data ">Wind speed <p className='mainborad__item wind-speed'>{Math.round(props.data.consolidated_weather[0].wind_speed)} m/s</p></li>
            <li className="mainborad__bottom-data ">Wind direction <p className='mainborad__item wind-dir'>{Math.round(props.data.consolidated_weather[0].wind_direction)}&#176;</p></li>
        </ul>
    </div>
  );
}

import React from "react";
import './OtherBoards.css'

export default function OtherBoards(props) {

  const listItem = props.data.consolidated_weather.map((item, ind)=>{
      if(ind>0){
          return(
            <div key={item.id} className='card'>
                <div className="card__main-info">
                    <img className="card_img" alt="weather icon" src={`https://www.metaweather.com/static/img/weather/${item.weather_state_abbr}.svg`}/>
                    <h2 className="card__deg">{Math.round(item.the_temp)}&#176;</h2>
                    <p className="card__date">{item.applicable_date.split("-").reverse().join("-")}</p>
                </div>
                <div className="card__other-info">
                    <p className="card__item">Minimum temperature&nbsp;<span className="card__itwm-bold">{Math.round(item.min_temp)}&#176;</span></p>
                    <p className="card__item">Maximum temperature&nbsp;<span className="card__itwm-bold">{Math.round(item.max_temp)}&#176;</span></p>
                    <p className="card__item">Wind speed&nbsp;<span className="card__itwm-bold">{Math.round(item.wind_direction)}&#176;</span></p>
                    <p className="card__item">Wind direction&nbsp;<span className="card__itwm-bold">{Math.round(item.wind_speed)}m/s</span></p>
                </div>
            </div>
          )
      }
  })


  return (
    <div className="OtherBoards">
        {listItem}
    </div>
  )
}

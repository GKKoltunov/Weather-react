import React from 'react';
import { HoursWeather } from '../../../HoursWeather/HoursWeather';
import './Hours.css'

type Props = { hourly: Array<any>; timezone:number  };


export const Hours = ({ hourly, timezone }: Props) => {
  return (
    <div className="hours">
      <h2>Hourly Forecast:</h2>
      <div className="hours-weather">
        {hourly.map((el) => (
          <HoursWeather
            key={el.dt}
            time={el.dt}
            icon={el.weather[0].icon}
            temp={el.main.temp}
            wind={el.wind.deg}
            speed={el.wind.speed}
            timezone={timezone}
          />
        ))}
      </div>
    </div>
  );
};

import React from 'react'
import './FiveDays.css'

export const FiveDays = ({ icon, temp, dt }) => {
  let src = `https://openweathermap.org/img/wn/${icon}.png`;
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let arrMonth = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  let d = new Date(dt * 1000);
  let aDay = d.getDate(); //день месяца
  let week = days[d.getDay()]; //дни недели
  let month = arrMonth[d.getMonth()];//месяц


  return (
    <div className="day-weth">
      <img className='five-img' src={src} alt="icon" />
      <p className='five-temp'>{Math.ceil(temp)||0}°C</p>
      <p className='five-Day'>
        {week||'Mon'}, {aDay||'01'} {month||'Jan'}
      </p>
    </div>
  );
};

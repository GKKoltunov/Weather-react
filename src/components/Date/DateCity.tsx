import React from "react";
import "./Date.css";

const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let MONTH = [
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

type Props = { timezone: number; data: string };

export const DateCity = ({ timezone, data }: Props) => {
  const date = new Date();
  const timezoneOffsetMilliseconds = timezone * 1000;
  const utcDate = new Date(date.getTime() + date.getTimezoneOffset() * 60000);
  const resultDate = new Date(utcDate.getTime() + timezoneOffsetMilliseconds);

  let aDay = resultDate.getDate(); //день месяца
  let week = DAYS[resultDate.getDay()]; //дни недели
  let month = MONTH[resultDate.getMonth()]; //месяц

  let hours = resultDate.getHours() || 0;
  let minutes = resultDate.getMinutes() || 0;

  return (
    <div className="date">
      <h2 className="cityName">{data}</h2>
      <p className="city-time">
        {hours < 10 ? `0${hours}` : hours}:
        {minutes < 10 ? `0${minutes}` : minutes}
      </p>
      <p className="city-date">
        {week}, {aDay || "01.01.2001"} {month}
      </p>
    </div>
  );
};

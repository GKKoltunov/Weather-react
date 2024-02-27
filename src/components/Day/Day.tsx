import React from "react";
import "./Day.css";

type Props = { icon: string; temp: number; dt: number; title?: string };
type Test<T> = { test1: Props["temp"]; test2: keyof T };

const test: Test<{ id: string; name: number }> = {
  test1: 76667,
  test2: "id",
};

const DAYS: Array<string> = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MONTH = [
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

export const Day = ({ icon, temp, dt }: Props) => {
  const src = `https://openweathermap.org/img/wn/${icon}.png`;

  let d = new Date(dt * 1000);
  let aDay = d.getDate(); //день месяца
  let week = DAYS[d.getDay()]; //дни недели
  let month = MONTH[d.getMonth()]; //месяц

  return (
    <div className="day-weth">
      <img className="five-img" src={src} alt="icon" />
      <p className="five-temp">{Math.ceil(temp) || 0}°C</p>
      <p className="five-Day">
        {week || "Mon"}, {aDay || "01"} {month || "Jan"}
      </p>
    </div>
  );
};

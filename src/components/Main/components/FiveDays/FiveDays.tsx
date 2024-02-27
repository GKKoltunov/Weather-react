import React from "react";
import { Day } from "../../../Day/Day";
import "./FiveDays.css";

type Props = { list: Array<any> };

export const FiveDays = ({ list }: Props) => {
  return (
    <div className="five-days">
      <h2>5 Days Forecast:</h2>

      {list.map((el) => (
        <Day
          key={el.dt}
          icon={el.weather[0].icon}
          temp={el.main.temp}
          dt={el.dt}
        />
      ))}
    </div>
  );
};

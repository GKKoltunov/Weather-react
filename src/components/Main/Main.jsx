import { Header } from "../Header/Header";
import { DateCity } from "../Date/DateCity";
import { CurrentWeather } from "../CurrentWeather/CurrentWeather";
import { FiveDays } from "./components/FiveDays/FiveDays";
import { Hours } from "../Hours/Hours";
import { useContext, useEffect, useState } from "react";
import { GeoContext } from "../../providers/context/GeoContext";

const DEFAULT_CITY = "Moscow";
const DEFAULT_ICON = "13d";
const DEFAULT_WEATHER = "clear sky";
const PLACEHOLDER = "Search for your preffered city...";
const URL = import.meta.env.VITE_API_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

export const Main = () => {
  const [cityName, setCityName] = useState(DEFAULT_CITY);
  const [data, setData] = useState(null);
  const [list, setList] = useState([]);
  const [icon, setIcon] = useState(DEFAULT_ICON);
  const [weather, setWeather] = useState(DEFAULT_WEATHER);
  const [hourly, setHourly] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [placeholder, setPlaceholder] = useState(PLACEHOLDER);

  const { latitude, longitude } = useContext(GeoContext);

  function value(ev) {
    //считать значение инпута
    setInputValue(ev.target.value);
  }
  function findCity() {
    // найти город по значению инпута
    setCityName(inputValue);
  }
  function sortDate(obj) {
    const groupData = {};
    obj.list.forEach((item) => {
      if (Object.keys(groupData).length === 5) {
        return;
      }
      const date = item.dt_txt.split(" ")[0];
      if (!groupData[date]) {
        groupData[date] = item;
      }
    });
    return Object.values(groupData);
  }

  async function fetchPosition() {
    try {
      const params = new URLSearchParams({
        lat: latitude,
        lon: longitude,
        appid: API_KEY,
        units: "metric",
      });
      const res = await fetch(`${URL}/forecast?` + params);
      let five = await res.json();
      const groupData = {};
      setList(sortDate(five));
      setCityName(five.city.name);
    } catch (e) {
      console.log(e);
    }
  }

  async function fetchFiveDays() {
    try {
      const params = new URLSearchParams({
        q: cityName,
        appid: API_KEY,
        units: "metric",
      });
      const res = await fetch(`${URL}/forecast?` + params);
      if (!res.ok) {
        setCityName("Moscow");
        setInputValue("");
        setPlaceholder("Please input correct city");
        return;
      } else {
        let five = await res.json();
        setList(sortDate(five));
      }
    } catch (e) {
      console.log(e);
    }
  }

  async function fetchCity() {
    try {
      const params = new URLSearchParams({
        q: cityName,
        units: "metric",
        lang: "en",
        appid: API_KEY,
      });
      const geo = await fetch(`${URL}/weather?` + params);
      if (geo.ok) {
        let obj = await geo.json();

        setData(obj);
        setIcon(obj.weather[0].icon);
        setWeather(obj.weather[0].description);
      } else {
        return;
      }
    } catch (e) {
      console.log(e);
    }
  }

  async function fetchFiveHours() {
    try {
      const params = new URLSearchParams({
        q: cityName,
        appid: API_KEY,
        units: "metric",
      });
      const res = await fetch(`${URL}/forecast?` + params);
      if (res.ok) {
        let five = await res.json();
        setHourly(five.list.slice(0, 5));
      } else {
        return;
      }
    } catch (e) {
      console.log(e);
    }
  }
  useEffect(() => {
    // получить данные о погоде по координатам местоположения

    fetchPosition();
  }, [latitude]);

  useEffect(() => {
    fetchFiveDays(); // получить данные о погоде  на 5 дней в зависимости от города
    fetchCity(); //получить данные о погоде по городу
    fetchFiveHours(); // получить данные о погоде  на 5 часов в зависимости от города
  }, [cityName]);

  if (!data) return null;
  return (
    <div className="container">
      <Header
        findCity={findCity}
        value={value}
        placeholder={placeholder}
        inputValue={inputValue}
      />
      <div className="city">
        <DateCity
          cityName={cityName}
          timezone={data.timezone}
          data={data.name}
        />
        <CurrentWeather
          icon={icon}
          temp={data.main?.temp}
          feels={data.main?.feels_like}
          sunrise={data.sys?.sunrise}
          sunset={data.sys?.sunset}
          humidity={data.main?.humidity}
          speed={data.wind?.speed}
          pressure={data.main?.pressure}
          pop={list[0]?.pop}
          weather={weather}
          timezone={data.timezone}
        />
      </div>
      <div className="days-hours">
        <FiveDays list={list} />
        <div className="hours">
          <h2>Hourly Forecast:</h2>
          <div className="hours-weather">
            {hourly.map((el) => (
              <Hours
                key={el.dt}
                time={el.dt}
                icon={el.weather[0].icon}
                temp={el.main.temp}
                wind={el.wind.deg}
                speed={el.wind.speed}
                timezone={data.timezone}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

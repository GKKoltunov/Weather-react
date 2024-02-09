import "./App.css";
import { Header } from "./components/Header/Header";
import { DateCity } from "./components/Date/DateCity";
import { CurrentWeather } from "./components/CurrentWeather/CurrentWeather";
import { FiveDays } from "./components/FiveDays/FiveDays";
import { Hours } from "./components/Hours/Hours";
import { useContext, useEffect, useState } from "react";
import { GeoContext } from "./providers/context/GeoContext";

function App() {
  let api = "d7e5bd29ffa60ee00f7bf639ecd4cb87";
  const [cityName, setCityName] = useState("Moscow");
  const [data, setData] = useState({});
  const [list, setList] = useState({});
  const [icon, setIcon] = useState("13d");
  const [weather, setWeather] = useState("clear sky");
  const [hourly, setHourly] = useState({});
  const [inputValue, setInputValue] = useState('')
  const [placeholder, setPlaceholder] = useState('Search for your preffered city...')
  

  const { latitude, longitude} = useContext(GeoContext);

  
  
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&lang=en&appid=${api}`;

  function value(ev) {  //считать значение инпута
    setInputValue(ev.target.value)
  }
  function findCity() { // найти город по значению инпута
    setCityName(inputValue)
    
  }

  useEffect(() => { // получить данные о погоде по координатам местоположения
    async function fiveDays() {
      try {
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${api}&units=metric&`
        );
        
        let five = await res.json();
        const groupData = {};
        five.list.forEach((item) => {
          const date = item.dt_txt.split(" ")[0];
          if (!groupData[date]) {
            groupData[date] = item;
          }
        });
        setList(Object.values(groupData));
        setCityName(five.city.name);
        
      } catch (e) {
        console.log(e);
      }
    }
    fiveDays();
  }, [latitude])
  
  
  useEffect(() => {  // получить данные о погоде  на 5 дней в зависимости от города
    async function fiveDays() {
      try {
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${api}&units=metric`
        );
        if (!res.ok) {
          setCityName('Moscow')
          setInputValue('')
          setPlaceholder('Please input correct city')
          return
        } else {
          let five = await res.json();
        
          const groupData = {};
          five.list.forEach((item) => {
            const date = item.dt_txt.split(" ")[0];
            if (!groupData[date]) {
              groupData[date] = item;
            }
          });
        
          setList(Object.values(groupData));
        }
      } catch (e) {
        console.log(e);
      }
    }
    fiveDays();

  }, [cityName])
  
    useEffect(() => {
      // данные в зависимости от города
      async function city() {
        try {
          
          
          const geo = await fetch(url);
          if (geo.ok) {
          let obj = await geo.json();

          setData(obj);
          setIcon(obj.weather[0].icon);
            setWeather(obj.weather[0].description);
          }
          else {
            return
          }
        
        } catch (e) {
          console.log(e);
        }
      }
      city();
    }, [cityName]);
 
  
  useEffect(() => {
    // получить данные о погоде  на 5 часов в зависимости от города
    async function fiveHours() {
      try {
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${api}&units=metric`
        );
        if (res.ok) {
          let five = await res.json();
        setHourly(five.list);}
        else {
          return
          }
      } catch (e) {
        console.log(e);
      }
    }
    fiveHours();
  }, [cityName]);

console.log(list)
  return (
    <div className="container">
      <Header
        findCity={findCity}
        value={value}
        placeholder={placeholder}
        inputValue={inputValue}
      />
      <div className="city">
        <DateCity cityName={cityName} timezone={data.timezone} data={data.name} />
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
        <div className="five-days">
          <h2>5 Days Forecast:</h2>
          <FiveDays
            icon={list[0]?.weather[0].icon}
            temp={list[0]?.main.temp}
            dt={list[0]?.dt}
          />
          <FiveDays
            icon={list[1]?.weather[0].icon}
            temp={list[1]?.main.temp}
            dt={list[1]?.dt}
          />
          <FiveDays
            icon={list[2]?.weather[0].icon}
            temp={list[2]?.main.temp}
            dt={list[2]?.dt}
          />
          <FiveDays
            icon={list[3]?.weather[0].icon}
            temp={list[3]?.main.temp}
            dt={list[3]?.dt}
          />
          <FiveDays
            icon={list[4]?.weather[0].icon}
            temp={list[4]?.main.temp}
            dt={list[4]?.dt}
          />
        </div>
        <div className="hours">
          <h2>Hourly Forecast:</h2>
          <div className="hours-weather">
            <Hours
              time={hourly[0]?.dt}
              icon={hourly[0]?.weather[0].icon}
              temp={hourly[0]?.main.temp}
              wind={hourly[0]?.wind.deg}
              speed={hourly[0]?.wind.speed}
              timezone={data.timezone}
            />
            <Hours
              time={hourly[1]?.dt}
              icon={hourly[1]?.weather[0].icon}
              temp={hourly[1]?.main.temp}
              wind={hourly[1]?.wind.deg}
              speed={hourly[4]?.wind.speed}
              timezone={data.timezone}
            />
            <Hours
              time={hourly[2]?.dt}
              icon={hourly[2]?.weather[0].icon}
              temp={hourly[2]?.main.temp}
              wind={hourly[2]?.wind.deg}
              speed={hourly[4]?.wind.speed}
              timezone={data.timezone}
            />
            <Hours
              time={hourly[3]?.dt}
              icon={hourly[3]?.weather[0].icon}
              temp={hourly[3]?.main.temp}
              wind={hourly[3]?.wind.deg}
              speed={hourly[4]?.wind.speed}
              timezone={data.timezone}
            />
            <Hours
              time={hourly[4]?.dt}
              icon={hourly[4]?.weather[0].icon}
              temp={hourly[4]?.main.temp}
              wind={hourly[4]?.wind.deg}
              speed={hourly[4]?.wind.speed}
              timezone={data.timezone}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

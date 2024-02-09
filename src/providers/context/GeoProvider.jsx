import React, { useEffect, useState } from "react";
import { GeoContext } from "./GeoContext";

let apiIP = `https://geo.ipify.org/api/v2/country,city?apiKey=at_LG2zBcVmwPMj4MaMnoeppnb6siIAT`;

export const GeoProvider = ({ children }) => {
  const [coords, setCoords] = useState({
    latitude: 55.7522,
    longitude: 37.6156,
  });

  async function getPosition() {
    // получение местоположения по IP
    try {
      const res = await fetch(apiIP);
      let pos = await res.json();

      const latitude = pos.location.lat;
      const longitude = pos.location.lng;
      setCoords({ latitude, longitude });
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    if (!navigator.geolocation) {
      // если браузер НЕ поддерживает определение геолокации

      getPosition();
    } else {
      navigator.geolocation.getCurrentPosition(success, error); //если пользователь разрешил определение геолокации

      function success(position) {
        const { latitude, longitude } = position.coords;
        setCoords({ latitude, longitude });
        
      }

      function error() {
        getPosition()
      }
      
    }
  },[])
 


  return (
    <GeoContext.Provider value={coords}>{children}</GeoContext.Provider>
  );
};

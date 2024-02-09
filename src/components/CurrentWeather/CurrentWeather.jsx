import React from "react";
import "./CurrentWeather.css";

export const CurrentWeather = ({
  icon,
  temp,
  feels,
  sunrise,
  sunset,
  humidity,
  speed,
  pressure,
  pop,
  weather,
  timezone
}) => {
  let src = `https://openweathermap.org/img/wn/${icon}.png`;

    const sundate = new Date(sunrise * 1000);
    const timezoneOffsetMilliseconds = timezone * 1000;
    const utcDate = new Date(sundate.getTime() + sundate.getTimezoneOffset() * 60000);
    const resultDate = new Date(utcDate.getTime() + timezoneOffsetMilliseconds);
    let risehours = resultDate.getHours() ||'0'; 
    let riseminutes = resultDate.getMinutes() || "0";

    let setdate = new Date(sunset * 1000);
     const settimezoneOffsetMilliseconds = timezone * 1000;
    const setutcDate = new Date(
    setdate.getTime() + setdate.getTimezoneOffset() * 60000
);
    const setresultDate = new Date(setutcDate.getTime() + settimezoneOffsetMilliseconds);
    let sethours = setresultDate.getHours() || "0"; 
    let setminutes = setresultDate.getMinutes() || "0";

  return (
    <div className="CurrentWeather">
      <div className="temp">
        <p className="bigTemp">{Math.ceil(temp)||0}°C</p>
        <div className="fellsLike">
          <p className="fellsLike-p">Feels like: </p>
          <p className="fellsLike-temp">{Math.ceil(feels)||0}°C</p>
        </div>
        <div className="sun rise">
          <svg
            width="48.000000"
            height="48.000000"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <desc>Created with Pixso.</desc>
            <defs>
              <pattern
                id="pattern_11_3810"
                patternContentUnits="objectBoundingBox"
                width="1.000000"
                height="1.000000"
              >
                <use
                  xlinkHref="#image11_381_0"
                  transform="matrix(0.02,0,0,0.02,0,0)"
                />
              </pattern>
              <image
                id="image11_381_0"
                width="50.000000"
                height="50.000000"
                xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABHNCSVQICAgIfAhkiAAAAidJREFUaIHt2b1u01AYxnEnaqWqQmJpEJcACIkboAuFBQYk4ApQm0JL25GVjzuAsVcDZUBCooGhsMAEQmJhArb8GPoWjJuEOrYTF/kvRbHPyXue54ne48RJklQMNrBRtU6lYAt9+9yftp+xwGoqhDjenLavXEQ79QcE6R+bNkM3ZXorFeTOsQmDlZTZzRgDcbyamr83XbdDGBQixn8HifNubcNkQqxn5v4KEmPrqdevTNbtCPA5TK0NmDsUJMbXoubTZFweASxiacjcwCAxt4TFat2VxKggZdKuWmBSNEHqRhOkbjRB6kYTpG7MTEDjRZIklX+yNzQ0NDT8n+AZXk3bR2GaW92cNEHqxpGD4CRmqzST0ZvBfNmLnsA39NDJWZt7s6OD1/iKuXxuRy88i93w9DZPGOzgeY7Xd0JDhCn3ViMj8A6nSxU4rLFXhcYgoVLDTCzEEMFeGT2MuVgrd+sWFe6E8I+sKNrxK/uT2B9fYtPu4CkuoZ2pOYWf41xMyggzh4XM2BW88W96uJypXSj1CjUOaOGhP//i7uIuzmA+Hmft/7lz0EJ9PEBrqubT4HGY+47bo8xF6OVoS3g0Sa9DwbVUiIs56hZTYa5W6fEoZmbxMcwsj1HfjdoPyv7gy2nkRmpP5O71aLODPXO9iJei335vxvN2q9XKffMUNdtxequgl/HB+3g3zxVY43yssVfESwu9JEkuFFmkBrxsJ0nSn7aLEmj/AjDJPCOf83DqAAAAAElFTkSuQmCC"
              />
            </defs>
            <rect
              id="sunrise-white 1"
              width="48.000000"
              height="48.000000"
              fill="url(#pattern_11_3810)"
              fillOpacity="1.000000"
            />
          </svg>
          <p>
          Sunrise <br />
        {risehours >= 10 ? risehours : `0${risehours}`}:
          {riseminutes >= 10 ? riseminutes : `0${riseminutes}`}</p>
        </div>
        <div className="sun set">
          <svg
            width="48.000000"
            height="48.000000"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <desc>Created with Pixso.</desc>
            <defs>
              <pattern
                id="pattern_11_3770"
                patternContentUnits="objectBoundingBox"
                width="1.000000"
                height="1.000000"
              >
                <use
                  xlinkHref="#image11_377_0"
                  transform="matrix(0.02,0,0,0.02,0,0)"
                />
              </pattern>
              <image
                id="image11_377_0"
                width="50.000000"
                height="50.000000"
                xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABHNCSVQICAgIfAhkiAAAAh9JREFUaIHt2M1qE1EYxvFJaCAUwU0jXoJKwRtQET82uhDUK5C0Ymtbd7r04w502avRbgTBRoXqRleC4MaVusvPRU/scZo2mcxMMsX5Qwg5M+95nie8Zz5OkpQMXuJN2TqlI1C2TrNsgWlRB6kadZCqUQepGnWQqlFIECzi4gR1l3GhCA+FgA/oY2XIsaGPKFgJNV+n43IM0A2m+lhNHdsXBKvR+UvTdTsCLEXm1qPxf4LgbnTe/dm4HUEqzEYY+xvkSIQYgOVgFB7Z40EUYm3WPscCa5HpAUcrxICojeIg66MrKwg2ojAPZ+0nF6HNjlY71dTU1NRUhnrvNyP1O3vV+P+C4DhaZZpJ6c1hvuhJj+EHeuhkrM282NHBW3xHO5vbwyduYTt4ep8lDLbwKsP5naAhhJmbzPV4Ah9xslCB/Ro7ZWgMEyo0zNRCHCDYK6KH0Q5zZW7dvMKdIPwrLYqm3T3d52F9fAuLdgsvcAnNVM0J/J7kYlJEmDYWUmNX8c5oeriSql0o9Ao1CWjgib0dk23cwynMh89puxvXgxbq4zEaMzUfg2fB3E/cOcxcCN0NbQlPp+n1QHA9CnEuQ935KMy1Mj2OY6aFL8FMd4L65VD7WdE3voxGbkZrInOvhzYbrJkbebzkffq9Fb43G41G5penULMZft7O6WVy8Cn8m2dyzLEY5tjJ46WBXpIkZ/NMUgFeN5Mk6c/aRQE0/wAXxjnaxWWmNQAAAABJRU5ErkJggg=="
              />
            </defs>
            <rect
              id="sunset-white 1"
              width="48.000000"
              height="48.000000"
              fill="url(#pattern_11_3770)"
              fillOpacity="1.000000"
            />
          </svg>
          <p>Sunset <br />
          {sethours >= 10 ? sethours : `0${sethours}`}:
          {setminutes >= 10 ? setminutes : `0${setminutes}`}</p>
        </div>
      </div>

      <div className="icon-current">
        <img className="icon-curImg" src={src} alt="" />
        <p className="weather">{weather}</p>
      </div>

      <div className="details">
        <p className="details-p humidity">
          <svg
            width="60.000000"
            height="50.126587"
            viewBox="0 0 60 50.1266"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <desc>Created with Pixso.</desc>
            <defs>
              <pattern
                id="pattern_12_3850"
                patternContentUnits="objectBoundingBox"
                width="1.000000"
                height="1.000000"
              >
                <use
                  xlinkHref="#image12_385_0"
                  transform="matrix(0.012658,0,0,0.015152,0,0)"
                />
              </pattern>
              <image
                id="image12_385_0"
                width="79.000000"
                height="66.000000"
                xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAE8AAABCCAYAAAAWqotYAAAABHNCSVQICAgIfAhkiAAABMBJREFUeJztnOFxozoUhY8qiDtYOnjuYOkg6cDuYNPBbgcvHaxTwZIKIlcQUoFJBSEVnPdDVytZFiAMmXmTud+MxoltOFwk8Mw5SIYkAVg4LIAnY0yLBZCsANwCqAFsAGzltQXQy6s1xjwt1NlEOlXUuqhZuJr6hVpex9fyAeY5kfwhJ6G4EJI7ks8D+8zxTvJfktu5hZD8PUOH8v3bmTpbOb73zP6sIfkL7owCwPfMPhpp2d6TA7qTtkk+fkUYaT1Cr20B3CTfbQEcADwO6GwB7ESnSj5+w/loq6L2LfluJ/U85q4wutG8A7CX44z5iGppLjYkeU+yHenBZ2m53iDJjuQDJ0YtyT3JZkTnRXROA5/3JA8k6wmdWr7XD+znXXReRo6lIbkf00lFt3ISupGdpoXcFQsEnYrTHXZRCN0ImaOz4XSHxXRyXNXQPk2hcI1wafvX9Oa/6IYsOltc/sh0UbPGmG4FnQqXPzLx7cUu/dFUFEVRFEVRFEVRFOWLY0h+B/C2hluRQ6yjf+Tfj890K6QWAIAx5viJOhWATWrDn+hs52rBjr0dP2YuvtPZ4rPs94zWLck/E77cH8603zM6Wzne2AC2QxkGpfgdC03HwkJynEj+ZGGHDRRSwqwOozNpf3DYybaGzuispNXI5xgHuBSqg8sLerhLcSPb7HGZX7zJdt5kBILJuYVLvVIsXDbQQi5xhkvR61TJNh+Rjo3e93Xd4TIv6aKaYIw5ykm9kWOrZbuUJzm2LqopIGf8F8vs9xRvx0/2LoMtXmq/pzQstP1J3rHcfk9p6ez4WbZ/SXgSF7KftfNznYplecl1hQSdkoCLDCHW6CAoyjB8gQiX998Ae+1fTzkxcURpAcAYY9fUEa1a/qwRZTJr5DGKoiiKoiiKoiiKonxxDMmfCIblahmDuDDfEJwYjwXWyxgYMhLvwni8S/K6lkvCYJjWAN5yNvwLnf18rWe2Y5kdf+KCvITOa/zNaTve2+/1lToVXUxwSvY7mmGQheEJr88VPEV5yUghpZxYkJewLMSyxn8ZIVu4x+XcBZ8P+Euhx3nukR6MzxUaAF0cazJkJnvk8xKLkEW0CMZojct5EQDwGOn8veXQXWIVXBaxy2zXio6/Zfl91wgPrcccpaZu1JilG0kl9ntKca4gOtfmJS1nTCfg9XlJJ8dXldaUCvvwJCfckbRzChnR8R1mMzq9vH99IUHHd5hlfnBYFkyOuVZ8s7SAGVqLQvH/m46iKIqiKIqiKIqiKF8IQ/JZ/rZwxmB2UZi5kNzBmZHezNzgfAWJx5VWqqjhTNUK4anVHmFFjOMaT5WKk7RDyEpeh2z4q+YucL4dP2u6QlwI59nxJ86YrhDpjC3xZEFn/uUMyCJRTvv9baQxZEAWzZHg+FwPb8z6NuROTw4Mjg8Cb8w+mHQjuAwjN3fBJq/xQ9fpyHkCcDDGNMggnbGXluYl8WI3cVbiW8wrgAcAzcD6Uxup5R5hCpenS1r6IHmMn1NymLzVMHj+QyNyqOdHlw8a0Jo7R6JnwWP+GR2/vNOcXGY0k5mcSsAwSmp5yyde8QplzdKbMt0o8Tq+929wvkKZNcYcluiIltepcL7S2REhKWw+azKjAuA/ahH6ygg5KZMAAAAASUVORK5CYII="
              />
            </defs>
            <rect
              id="humidity 1"
              width="60.000000"
              height="50.126583"
              fill="url(#pattern_12_3850)"
              fillOpacity="1.000000"
            />
          </svg>
          {humidity}%
        </p>
        <p className="details-p wind-speed">
          <svg
            width="60.000000"
            height="59.240479"
            viewBox="0 0 60 59.2405"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <desc>Created with Pixso.</desc>
            <defs>
              <pattern
                id="pattern_12_3860"
                patternContentUnits="objectBoundingBox"
                width="1.000000"
                height="1.000000"
              >
                <use
                  xlinkHref="#image12_386_0"
                  transform="matrix(0.012658,0,0,0.012821,0,0)"
                />
              </pattern>
              <image
                id="image12_386_0"
                width="79.000000"
                height="78.000000"
                xlinkHref="data:image/png;base64,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"
              />
            </defs>
            <rect
              id="wind 1"
              width="60.000000"
              height="59.240505"
              fill="url(#pattern_12_3860)"
              fillOpacity="1.000000"
            />
          </svg>
          {speed}km/h
        </p>
        <p className="details-p pressure">
          <svg
            width="58.000000"
            height="58.000000"
            viewBox="0 0 58 58"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <desc>Created with Pixso.</desc>
            <defs>
              <pattern
                id="pattern_12_3870"
                patternContentUnits="objectBoundingBox"
                width="1.000000"
                height="1.000000"
              >
                <use
                  xlinkHref="#image12_387_0"
                  transform="matrix(0.015625,0,0,0.015625,0,0)"
                />
              </pattern>
              <image
                id="image12_387_0"
                width="64.000000"
                height="64.000000"
                xlinkHref="data:image/png;base64,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"
              />
            </defs>
            <rect
              id="pressure-white 1"
              width="58.000000"
              height="58.000000"
              fill="url(#pattern_12_3870)"
              fillOpacity="1.000000"
            />
          </svg>
          {pressure}hPa
        </p>
        <p className="details-p pop">
          <svg
            width="58.000000"
            height="58.000000"
            viewBox="0 0 58 58"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <desc>Created with Pixso.</desc>
            <defs>
              <pattern
                id="pattern_12_3880"
                patternContentUnits="objectBoundingBox"
                width="1.000000"
                height="1.000000"
              >
                <use
                  xlinkHref="#image12_388_0"
                  transform="matrix(0.015625,0,0,0.015625,0,0)"
                />
              </pattern>
              <image
                id="image12_388_0"
                width="64.000000"
                height="64.000000"
                xlinkHref="data:image/png;base64,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"
              />
            </defs>
            <rect
              id="uv-white 1"
              width="58.000000"
              height="58.000000"
              fill="url(#pattern_12_3880)"
              fillOpacity="1.000000"
            />
          </svg>
          {pop}
        </p>
      </div>
    </div>
  );
};

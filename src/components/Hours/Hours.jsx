import React from 'react'
import './Hours.css'

export const Hours = ({ time, temp, wind, icon, speed, timezone }) => {
  let src = `https://openweathermap.org/img/wn/${icon}.png`;

  let d = new Date(time * 1000);
  let hours = d.getUTCHours() + timezone / 3600 ||'0';
  let minutes = d.getMinutes()||'0';

  return (
    <div className="onehour">
      <p className="time">
        {hours < 10 ? `0${hours}` : hours}:
        {minutes < 10 ? `0${minutes}` : minutes}
      </p>
      <img className="icon" src={src} alt="icon" />
      <svg
        style={{ transform: `rotate(${wind}deg)` }}
        width="55.000000"
        height="55.000000"
        viewBox="0 0 55 55"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <desc>Created with Pixso.</desc>
        <defs>
          <pattern
            id="pattern_13_3950"
            patternContentUnits="objectBoundingBox"
            width="1.000000"
            height="1.000000"
          >
            <use
              xlinkHref="#image13_395_0"
              transform="matrix(0.020833,0,0,0.020833,0,0)"
            />
          </pattern>
          <image
            id="image13_395_0"
            width="48.000000"
            height="48.000000"
            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABHNCSVQICAgIfAhkiAAAAkVJREFUaIHtmb1uE0EUhc8dWxBFitJQgZAiKKB3SJMUmxfgBSgQJRIPQOfwBI6gQDwATwA9FHFjJzUSVQoEFUjBhEVKPJcCTW5QvLvzc2fd7Km869k7831nuwW6dOnSpSqjaVlsvJ4VOffo5xxO3BsSnwHAx1x7mFyDR9OyALgAKGsL2QCIe0P5zcO6tSnJAiD2XfK1kAXgsn25l6cFdYCr9l3ytKAOsMi+/KffgipAtX0X/RZUAersyxrdFtQAmu276LagBuBjX9bqtaAC4G/fRa8FFYAQ+/KMTgvJAOH2XXRaSAaIsS/PpreQBBBv3yW9hSSAFPsyI62FaIB0+y5pLUQDaNiXWfEtRAHo2XeJbyEKQNO+zIxrIRhA375LXAvBADnsy+zwFoIA8tl3CW8hCCCnfdkjrAVvgPz2XcJa8AZow77s5d+CF0B79l38W/ACaNO+7OnXQiNA+/Zd/FpoBFiGfdm7uYVagOXZd2luoRZgmfblDPUtVALE2ecZLI8Begmmx0x893xuboH5ITFeWNB7AN/DZta3UPmF5p99rjvsuQV9JsaRITqYg8c/H1z/tEdkFyz+CuCdu7j96vRmv2e3wdgBYQDmAYhWqs/CQ1R85aFFN0fTsiA2H/4/L77B4ICYx2x6R+uz/uGTXfpTQ+idYo/7X278ujcnGoB4myx22PB9gC7eECbsHj9duwKxEGB/Ur4FmVVmTAzspDQrh8836UTjsL658+bHOs6ubcLYLYC2rMXv42drj9o8Q5cuXVrIX94KCroFfAyCAAAAAElFTkSuQmCC"
          />
        </defs>
        <rect
          id="navigation 1"
          width="55.000000"
          height="55.000000"
          fill="url(#pattern_13_3950)"
          fillOpacity="1.000000"
        />
      </svg>

      <p className="midle">{Math.ceil(temp)||0}°C</p>

      <p className="midle">{speed||0} km/h</p>
    </div>
  );
};

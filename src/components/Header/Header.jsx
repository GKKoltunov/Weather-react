import {useContext} from "react";
import "./Header.css";
import { GeoContext } from "../../providers/context/GeoContext";

export const Header = ({ findCity, value, placeholder, inputValue }) => {
  return (
    <form
      onSubmit={(ev) => {
        ev.preventDefault();
        findCity();
      }}
    >
      <input
        onChange={value}
        value={inputValue}
        className="input"
        type="text"
        placeholder={placeholder}
      />
    </form>
  );
};

import React, { useEffect, useState } from "react";
import clearsky from "../Icons/clear-sky.png";
import rainy from "../Icons/rainy-day.png";
import haze from "../Icons/fog.png";
import clearbg from "../IMG/clear_sky.jpg";
import rainbg from "../IMG/rain.jpg";

const Result = (props) => {
  const { location } = props;
  const [temp, setTemp] = useState("");
  const [icon, setIcon] = useState();
  const [desc, setDesc] = useState("");
  const [disp, setDisp] = useState("block");
  const [wind, setWind] = useState("");
  const [humidity, setHumidity] = useState("");
  const weather = async () => {
    const reqUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=63243639588e5f6e4077a97898f634de`;
    const response = await fetch(reqUrl, {
      method: "GET",
    });
    const json = await response.json();
    setTemp((json.main.temp - 273.15).toFixed(2));
    setDesc(json.weather[0].description);
    setWind(json.main.pressure / 1000);
    setHumidity(json.main.humidity);
    const main = json.weather[0].main;
    if (main.includes("Clear")) {
      setIcon(clearsky);
      document.body.style.background = `url(${clearbg})`;
      document.body.style.backgroundSize = "cover";
    } else if (main.includes("Clouds")) {
      setIcon(rainy);
      document.body.style.background = `url(${rainbg})`;
      document.body.style.backgroundSize = "cover";
    } else if (main.includes("Haze")) {
      setIcon(haze);
      document.body.style.background = `url(${rainbg})`;
      document.body.style.backgroundSize = "cover";
    } else {
      setIcon(clearsky);
    }
  };
  useEffect(() => {
    setDisp("hidden");
    weather();
    setDisp("block");
  });
  return (
    <div className="yo">
      {location ? (
        <div
          className={`${disp} w-[25rem] text-white md:w-[40rem] bg-bluealpha backdrop-blur-3xl shadow-2xl my-10 rounded-xl py-6 md:px-8 px-4`}
        >
          <div className="location md:text-2xl text-xl flex items-center justify-center space-x-2 text-white">
            <i className="fa-solid fa-location"></i>
            <h2 className="font-bold uppercase">{location}</h2>
          </div>
          <div className="weather flex items-center justify-around my-3">
            <img src={icon} alt="dd" className="w-28" />
            <h2 className="temp font-bold text-4xl">{temp} °C</h2>
          </div>
          <div className="weather-des text-2xl uppercase font-bold text-center">
            <h2>{desc}</h2>
          </div>
          <div className="weather-details flex items-center justify-between mt-10">
            <div className="wind flex text-xl font-bold items-center space-x-3 justify-center">
              <i className="fa-solid fa-wind"></i>
              <h2>{wind} atm</h2>
            </div>
            <div className="humidity flex text-xl font-bold items-center space-x-3 justify-center">
              <i class="fa-solid fa-droplet"></i>
              <h2>{humidity}</h2>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-white bg-blue-700 my-10 text-center font-bold rounded-xl px-6 py-4 w-[25rem] md:w-[40rem]">
          <h2>Can't get your location :(</h2>
        </div>
      )}
    </div>
  );
};

export default Result;

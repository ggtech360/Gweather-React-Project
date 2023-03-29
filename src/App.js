import { useEffect, useState } from "react";
import "./App.css";
import Result from "./components/Result";
import Search from "./components/Search";

function App() {
  const [city, setCity] = useState("");

  const SCity=(cityk)=>{
    setCity(cityk);
  }

  // Get location using latitude and longitude
  async function getLocation(lan, long) {
    const gurl = `https://us1.locationiq.com/v1/reverse.php?key=pk.a618e8f69d7e7fe84653d50437981b57&lat=${lan}&lon=${long}&format=json`;
    const response = await fetch(gurl, {
      method: "GET",
    });
    const json = await response.json();
    const ok = json.address.city;
    setCity(ok);
  }

  // get latitude and longitude of current location
  function success(pos) {
    const lan = pos.coords.latitude;
    const long = pos.coords.longitude;
    getLocation(lan, long);
  }

  // initialize location request
  const initlocation = () => {
    navigator.geolocation.getCurrentPosition(success);
  };

  // run initlocation
  useEffect(() => {
    initlocation();

  },[]);

  return (
    <div className="main backdrop-blur-sm h-screen overflow-hidden font-Poppins">
      <div className="flex h-screen flex-col -translate-y-12 justify-center font-Poppins items-center">
        <div className="title text-center">
          <h2 className="md:text-4xl text-2xl font-bold text-sky-900 mb-8">
            GWeather
          </h2>
        </div>
        <Search city={SCity} />
        <Result display="block" location={city} />
      </div>
    </div>
  );
}

export default App;

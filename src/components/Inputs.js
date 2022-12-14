import React, { useState } from "react";
import { UilSearchAlt, UilMapMarker } from "@iconscout/react-unicons";

function Inputs({ setQuery, units, setUnits }) {
  const [city, setCity] = useState("");

  const handleSearch = () => {
    if (city !== "") setQuery({ q: city });
  };

  const handleLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;

        setQuery({ lat, lon });
      });
    }
  };

  const handleUnitChange = (e) => {
    const selectedUnit = e.currentTarget.name;
    if (units !== selectedUnit) setUnits(selectedUnit);
  };

  return (
    <div className='flex flex-row justify-center my-6'>
      <div className='flex flex-row w-3/4 items-center justify-center space-x-4'>
        <input
          value={city}
          onChange={(e) => setCity(e.currentTarget.value)}
          type='text'
          className='text-xl font-light p-2 w-full shadow-xl focus:outline-none capitalize placeholder:lowercase'
          placeholder='Search cities...'
        />
        <UilSearchAlt
          size={25}
          className='text-white cursor-pointer transition ease-out hover:scale-125'
          onClick={handleSearch}
        />
        <UilMapMarker
          size={25}
          className='text-white cursor-pointer transition ease-out hover:scale-125'
          onClick={handleLocation}
        />
      </div>
      <div className='flex flex-row w-1/4 items-center justify-center'>
        <button
          name='imperial'
          className='text-xl text-white font-light hover:scale-125 transition ease-out'
          onClick={handleUnitChange}
        >
          °F
        </button>
        <p className='text-xl text-white mx-1'>|</p>
        <button
          name='metric'
          className='text-xl text-white font-light hover:scale-125 transition ease-out'
          onClick={handleUnitChange}
        >
          °C
        </button>
      </div>
    </div>
  );
}

export default Inputs;

import React, { useEffect, useState } from "react";
import "./country.css";

const countryWithCurrency = {
  India: "INR",
  USA: "USD",
  UK: "GBP",
  Canada: "CAD",
  Australia: "AUD",
};

const Country = () => {
  const [selectedCountry, setSelectedCountry] = useState("India");
  const [selectedCurrency, setSelectedCurrency] = useState("INR");
  const [autoSelect, setAutoSelect] = useState("true");

  useEffect(() => {
    if (autoSelect) {
      setSelectedCurrency(countryWithCurrency[selectedCountry]);
    }
  }, [selectedCountry, autoSelect]);

  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value);
  };

  const handleCurrencyChange = (e) => {
    setSelectedCurrency(e.target.value);
  };

  const toggleAutoSelect = () => {
    setAutoSelect(!autoSelect);
  };

  return (
    <div className="dropdown flex">
      {/* <button className="auto-select-btn" onClick={toggleAutoSelect}>
        {autoSelect ? "Disable Auto Select" : "Enable Auto Select"}
      </button> */}

      <div className="toggle-container flex items-center">
        <span className="text-sm">auto select: </span>
        <label className="switch ml-2">
          <input
            type="checkbox"
            checked={autoSelect}
            onChange={toggleAutoSelect}
          />
          <span className="slider round"></span>
        </label>
        {/* <span>
          {autoSelect ? "Auto Select Enabled" : "Auto Select Disabled"}
        </span> */}
      </div>

      <div>
        {/* <label htmlFor="country">Country:</label> */}
        <select
          id="country"
          value={selectedCountry}
          onChange={handleCountryChange}
          className="text-black ml-2 rounded text-center"
        >
          {Object.keys(countryWithCurrency).map((country) => (
            <option key={country} value={country}>
              {country}
            </option>
          ))}
        </select>
      </div>
      <div>
        {/* <label htmlFor="currency">Currency:</label> */}
        <select
          id="currency"
          value={selectedCurrency}
          onChange={handleCurrencyChange}
          disabled={autoSelect}
          className="text-black ml-2 text-center rounded"
        >
          {Object.values(countryWithCurrency).map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
      {/* <label className="switch ">
        <input type="checkbox" className="" />
        <span className="slider round "></span>
      </label> */}
    </div>
  );
};

export default Country;

import "./App.css";
import Navbar from "./components/Navbar";
import Product from "./components/Product";
import React, { useState, useEffect } from "react";

const countryWithCurrency = {
  India: "INR",
  USA: "USD",
  UK: "GBP",
  Canada: "CAD",
  Australia: "AUD",
};

function App() {
  const [selectedCountry, setSelectedCountry] = useState("India");
  const [selectedCurrency, setSelectedCurrency] = useState("INR");
  const [autoSelect, setAutoSelect] = useState(true);

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
    <>
      <Navbar
        selectedCountry={selectedCountry}
        selectedCurrency={selectedCurrency}
        autoSelect={autoSelect}
        handleCountryChange={handleCountryChange}
        handleCurrencyChange={handleCurrencyChange}
        toggleAutoSelect={toggleAutoSelect}
      />
      <Product selectedCurrency={selectedCurrency} />
    </>
  );
}

export default App;

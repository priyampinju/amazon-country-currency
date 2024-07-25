import React, { createContext, useState } from "react";

export const CurrencyContext = createContext();

export const CurrencyProvider = ({ children }) => {
  const [selectedCountry, setSelectedCountry] = useState("India");
  const [selectedCurrency, setSelectedCurrency] = useState("INR");

  return (
    <CurrencyContext.Provider
      value={{
        selectedCountry,
        setSelectedCountry,
        selectedCurrency,
        setSelectedCurrency,
      }}
    >
      {children}
    </CurrencyContext.Provider>
  );
};

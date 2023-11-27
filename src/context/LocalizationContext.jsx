import React, { createContext, useContext, useState } from "react";
import enLocalization from "../localization/en";

const LocalizationContext = createContext();

const LocalizationProvider = ({ children }) => {
  const [currentLocalization, setCurrentLocalization] =
    useState(enLocalization);

  const changeLocalization = (newLocalization) => {
    setCurrentLocalization(newLocalization);
  };

  return (
    <LocalizationContext.Provider
      value={{ localization: currentLocalization, changeLocalization }}
    >
      {children}
    </LocalizationContext.Provider>
  );
};

const useLocalization = () => {
  const context = useContext(LocalizationContext);
  if (!context) {
    throw new Error(
      "useLocalization must be used within a LocalizationProvider"
    );
  }
  return context;
};

export { LocalizationProvider, useLocalization };

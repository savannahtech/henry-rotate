"use client";
import React, {createContext, useState, useContext} from "react";

type AppContextProviderProps = {
  children: React.ReactNode;
};

const AppContext = createContext<any | undefined>(undefined);

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within a AppContextProvider");
  }
  return context;
};

export const AppContextProvider = ({children}: AppContextProviderProps) => {
  const [appData, setAppData] = useState({
    user: window.localStorage.getItem("user") ?? null,
  });

  return <AppContext.Provider value={{appData, setAppData}}>{children}</AppContext.Provider>;
};

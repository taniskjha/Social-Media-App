import React, { useState, useRef } from "react";
import AppContext from "./AppContext";
import { initalPlayerState } from "./InitialState";

const AppProvider = ({ children }) => {
  const playerRef = useRef(initalPlayerState);

  const contextValue = {
    playerRef,
  };
  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export default AppProvider;

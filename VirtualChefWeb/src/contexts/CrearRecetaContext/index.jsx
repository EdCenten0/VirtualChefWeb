import React, { createContext, useState } from "react";

// Create the context
export const CrearRecetaContext = createContext();

// Create the provider component
export const CrearRecetaProvider = ({ children }) => {
  // State variables and functions go here

  return (
    <CrearRecetaContext.Provider
      value={
        {
          /* Provide the necessary values */
        }
      }
    >
      {children}
    </CrearRecetaContext.Provider>
  );
};

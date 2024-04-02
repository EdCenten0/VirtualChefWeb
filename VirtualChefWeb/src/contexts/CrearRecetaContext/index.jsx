import React, { createContext, useState } from "react";

// Create the context
export const CrearRecetaContext = createContext();

// Create the provider component
export const CrearRecetaProvider = ({ children }) => {
  // State variables and functions go here

  const [receta, setReceta] = useState({
    nombre: "",
    descripcion: "",
    imagen: "",
    // ingredientes: [],
    // pasos: [],
    tiempoPreparacion: "",
    horarioId: "",
    creador: "",
  });

  return (
    <CrearRecetaContext.Provider value={{ receta, setReceta }}>
      {children}
    </CrearRecetaContext.Provider>
  );
};

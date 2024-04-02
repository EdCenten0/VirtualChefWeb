import React, { useState, useContext } from "react";
import { CrearRecetaContext } from "../../contexts/CrearRecetaContext";
import trash from "./trash.svg";

const TarjetasAgregados = ({ elemento, nombreDelArray }) => {
  const { receta, setReceta } = useContext(CrearRecetaContext);

  const deleteElemento = () => {
    const newArray = receta[nombreDelArray].filter((elem) => elem !== elemento);

    setReceta({
      ...receta,
      [nombreDelArray]: newArray,
    });
  };

  return (
    <div className='flex items-center justify-center gap-3 my-2'>
      <div className='bg-white border border-black p-2 w-full rounded-lg'>
        <p>{elemento}</p>
      </div>
      <button
        onClick={(e) => {
          e.preventDefault();
          deleteElemento();
        }}
        className='w-12 h-full flex items-center justify-center bg-white border border-black rounded-lg cursor-pointer'
      >
        <img className='w-7 h-10 cursor-pointer' src={trash} alt='cross' />
      </button>
    </div>
  );
};

export default TarjetasAgregados;

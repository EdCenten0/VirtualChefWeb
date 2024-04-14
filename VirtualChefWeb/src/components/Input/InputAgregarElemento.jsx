import React, { useState, useContext } from "react";
import { CrearRecetaContext } from "../../contexts/CrearRecetaContext";
import cross from "./../../assets/cross.svg";

const InputAgregarElemento = ({ name, placeholder, nombreDelArreglo }) => {
  const { receta, setReceta } = useContext(CrearRecetaContext);
  const [inputValue, setInputValue] = useState("");

  const takeTextFromInput = (e) => {
    setInputValue(e.target.value);
  };

  const saveIngrediente = () => {
    if (inputValue != "") {
      setReceta({
        ...receta,
        [nombreDelArreglo]: [...receta[nombreDelArreglo], inputValue],
      });
    }

    setInputValue("");
    console.log(receta);
  };

  return (
    <>
      <div className='relative my-[1rem] flex gap-3 items-center'>
        <div className='w-full'>
          <p
            className={`py-0 px-1 m-0 absolute -top-[12px] left-[10px] bg-white font-extralight text-[0.9rem] rounded-[5px]`}
          >
            {name}
          </p>
          <input
            onChange={takeTextFromInput}
            placeholder={placeholder}
            className='m-0 outline-black border-black rounded-[5px] border font-light w-full px-[.4rem] py-[.6rem] placeholder:text-gray-400 placeholder:font-thin'
            value={inputValue}
          />
        </div>
        <div>
          <button
            className='flex items-center justify-center border border-black rounded-lg w-full'
            onClick={(e) => {
              e.preventDefault();
              saveIngrediente();
            }}
          >
            <img src={cross} alt='plus' />
          </button>
        </div>
      </div>
    </>
  );
};

export default InputAgregarElemento;

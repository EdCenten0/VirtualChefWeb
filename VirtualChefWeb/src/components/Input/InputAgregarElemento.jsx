import React from "react";
import cross from "./../../assets/cross.svg";

const InputAgregarElemento = ({
  name,
  placeholder,
  register = () => {},
  isRequired = false,
  errors,
  type = "text",
  minLength = 5,
}) => {
  const replaceName = name.replace(/ /g, "_").toLowerCase();
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
            {...register(replaceName, {
              required: isRequired,
              minLength: minLength,
            })}
            placeholder={placeholder}
            className='m-0 outline-black border-black rounded-[5px] border font-light w-full px-[.4rem] py-[.6rem] placeholder:text-gray-400 placeholder:font-thin'
            type={`${type}`}
          />
          {errors[replaceName] && (
            <span className='text-red-600 text-xl'>
              Este campo es requerido
            </span>
          )}
        </div>
        <div>
          <button
            className='flex items-center justify-center border border-black rounded-lg w-full'
            onClick={(e) => {
              e.preventDefault();
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

import React from "react";

const Select = ({ valores, register, name, isRequired, errors }) => {
  return (
    <>
      <select
        {...register(name, { required: isRequired })}
        name='Select'
        id='tiempos'
        className='border cursor-pointer my-1  border-gray-950 p-3 rounded-lg '
      >
        {valores.map((valor) => {
          return (
            <option key={valor} value={valor}>
              {valor}
            </option>
          );
        })}
      </select>
      {errors[name] && (
        <span className='text-red-600 text-xl'>Este campo es requerido</span>
      )}
    </>
  );
};

export default Select;

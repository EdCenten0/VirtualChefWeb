import React from "react";

const Select = ({ valores }) => {
  return (
    <>
      <select
        name='Select'
        id='tiempos'
        className='border cursor-pointer border-gray-950 p-3 rounded-lg '
      >
        {valores.map((valor) => {
          return (
            <option key={valor} value={valor}>
              {valor}
            </option>
          );
        })}
      </select>
    </>
  );
};

export default Select;

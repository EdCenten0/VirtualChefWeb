import React from "react";
import trash from "./trash.svg";

const TarjetasAgregados = () => {
  return (
    <div className='flex items-center justify-center gap-3 my-2'>
      <div className='bg-white border border-black p-2 w-full rounded-lg'>
        <p>213123123233213213</p>
      </div>
      <div className='w-12 h-full flex items-center justify-center bg-white border border-black rounded-lg cursor-pointer'>
        <img className='w-7 h-10 cursor-pointer' src={trash} alt='cross' />
      </div>
    </div>
  );
};

export default TarjetasAgregados;

import React from "react";

const ControladorPasos = ({ paso }) => {
  let elementos = [];

  for (let i = 0; i < 4; i++) {
    if (i === paso - 1) {
      elementos.push(
        <svg
          key={i}
          version='1.1'
          xmlns='http://www.w3.org/2000/svg'
          width='30'
          height='30'
          viewBox='0 0 120 120'
        >
          <circle cx='60' cy='60' r='50' fill='#246C2C' />
        </svg>
      );
    } else {
      elementos.push(
        <svg
          key={i}
          version='1.1'
          xmlns='http://www.w3.org/2000/svg'
          width='30'
          height='30'
          viewBox='0 0 120 120'
        >
          <circle cx='60' cy='60' r='50' fill='#B5F2B0' />
        </svg>
      );
    }
  }

  return (
    <>
      <div className='flex justify-center gap-3'>{elementos}</div>
    </>
  );
};

export default ControladorPasos;

// De Carlos para Carlos:
// En el caso de las paginas donde el input es un text area, podria hacer que este
// componente sea mas generico y pueda recibir un parametro que tenga las siguientes posibilidades:
// 1: En un render conditional podria generar un input o un text area
// 2: Aumento el tamaño del input para que se convierta en un textarea
// Otra cosa que podria hacer es un componente aparte que sea un textarea, pero siento que se puede evitar y yap
// Por otro lado, se me ocurre que para hacerlo mas responsive podria hacer que por defecto el width y height sean del 100%
// y asi hacer que el componente solamente necesite estar dentro de una etiqueta padre que va a ser la que determine el tamaño del componente
// Yap, eso es todo, espero que te sirva, saludos!

import cross from "./cross-green.svg";
import trash from "./trash.svg";

const Input = ({ name, placeholder, addIcon, deleteIcon }) => {
  const renderAddIcon = () => {
    if (addIcon) {
      return (
        <>
          <div className='w-12 h-full flex items-center justify-center bg-white border border-black rounded-lg cursor-pointer'>
            <img
              className='rotate-45 w-7 cursor-pointer'
              src={cross}
              alt='cross'
            />
          </div>
        </>
      );
    }
  };

  const renderDeleteIcon = () => {
    if (deleteIcon) {
      return (
        <>
          <div className='w-12 h-full flex items-center justify-center bg-white border border-black rounded-lg cursor-pointer'>
            <img
              className='w-7 h-full cursor-pointer'
              src={trash}
              alt='cross'
            />
          </div>
        </>
      );
    }
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
            placeholder={placeholder}
            className='m-0 outline-black border-black rounded-[5px] border font-light w-full px-[.4rem] py-[.6rem] placeholder:text-gray-400 placeholder:font-thin'
          />
        </div>
        {renderAddIcon()}
        {renderDeleteIcon()}
      </div>
    </>
  );
};

export default Input;

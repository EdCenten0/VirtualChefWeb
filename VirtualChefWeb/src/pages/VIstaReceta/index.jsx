import React from "react";
import Header from "../../components/Header";
import recetaPrueba from "../../assets/Ejemplo.png";
import Corazon from "../../components/Icons/Corazon";
import DotMenu from "../../components/DotMenu/DotMenu";

function VistaReceta({ data }) {
  return (
    <>
      <main className='w-screen  flex items-center flex-col bg-[#B5F2B0] '>
        <div className='w-screen max-w-[1200px] mt-5'>
          <Header />
        </div>
        <section className='flex items-end justify-center h-[40vh] w-full '>
          <img className='w-[27rem]' src={recetaPrueba} alt='recetaImg' />
        </section>
        <section className='bg-[#fff] h-[60vh] w-full rounded-t-[5rem]  flex flex-col gap-6'>
          <div className='flex justify-between px-8 items-center'>
            <Corazon />
            <h3 className='text-center font-bold text-3xl p-3'>Stacker King</h3>
            <DotMenu />
          </div>
          <div className='text-center text-lg p-3'>
            <p>
              La hamburguesa más grande de todos los tiempos llega a tus dos
              manos.Con tocino crujiente, queso derretido, salsa Stacker con 2
              carnes.
            </p>
          </div>
          <div className=''>
            <h4 className='font-bold text-2xl pl-5 my-5'>Ingredientes</h4>
            <div className='grid grid-cols-3 gap-2 px-3'>
              <div className='bg-[#dcdbdb] w-full h-full py-2 m-auto rounded-lg flex items-center'>
                <p className='pl-5 text-lg'>1- Beicon</p>
              </div>
              <div className='bg-[#dcdbdb] w-full h-full py-2 m-auto rounded-lg flex items-center'>
                <p className='pl-5 text-lg'>1- Beicon</p>
              </div>
              <div className='bg-[#dcdbdb] w-full h-full py-2 m-auto rounded-lg flex items-center'>
                <p className='pl-5 text-lg'>1- Beicon</p>
              </div>
              <div className='bg-[#dcdbdb] w-full h-full py-2 m-auto rounded-lg flex items-center'>
                <p className='pl-5 text-lg'>1- Beicon</p>
              </div>
              <div className='bg-[#dcdbdb] w-full h-full py-2 m-auto rounded-lg flex items-center'>
                <p className='pl-5 text-lg'>1- Beicon</p>
              </div>
              <div className='bg-[#dcdbdb] w-full h-full py-2 m-auto rounded-lg flex items-center'>
                <p className='pl-5 text-lg'>1- Beicon</p>
              </div>
              <div className='bg-[#dcdbdb] w-full h-full py-2 m-auto rounded-lg flex items-center'>
                <p className='pl-5 text-lg'>1- Beicon</p>
              </div>
              <div className='bg-[#dcdbdb] w-full h-full py-2 m-auto rounded-lg flex items-center'>
                <p className='pl-5 text-lg'>1- Beicon</p>
              </div>
            </div>
          </div>
          <div className=''>
            <h4 className='font-bold text-2xl pl-5 my-5'>Pasos</h4>
            <div className='grid grid-cols-3  gap-2 px-3 h-fit'>
              <div className='bg-[#dcdbdb] w-full h-full py-2 m-auto rounded-lg flex items-center'>
                <p className='pl-5 text-lg'>
                  1) rallar la cebolla y picar el ajo. En un bol, mezclar la
                  carne picada, la cebolla, el ajo y el huevo hasta que estén
                  bien integrados todos los ingredientes.
                </p>
              </div>
              <div className='bg-[#dcdbdb] w-full h-full  py-2 m-auto rounded-lg flex items-center'>
                <p className='pl-5 text-lg'>
                  1) rallar la cebolla y picar el ajo. En un bol, mezclar la
                  carne picada, la cebolla, el ajo y el huevo hasta que estén
                  bien integrados todos los ingredientes.
                </p>
              </div>
              <div className='bg-[#dcdbdb] w-full h-full py-2 m-auto rounded-lg flex items-center'>
                <p className='pl-5 text-lg'>
                  1) rallar la cebolla y picar el ajo. En un bol, mezclar la
                  carne picada, la cebolla, el ajo y el huevo hasta que estén
                  bien integrados todos los ingredientes.
                </p>
              </div>
              <div className='bg-[#dcdbdb] w-full h-full py-2 m-auto rounded-lg flex items-center'>
                <p className='pl-5 text-lg'>
                  1) rallar la cebolla y picar el ajo. En un bol, mezclar la
                  carne picada, la cebolla, el ajo y el huevo hasta que estén
                  bien integrados todos los ingredientes.
                </p>
              </div>
              <div className='bg-[#dcdbdb] w-full h-full py-2 m-auto rounded-lg flex items-center'>
                <p className='pl-5 text-lg'>
                  1) rallar la cebolla y picar el ajo. En un bol, mezclar la
                  carne picada, cebolla y picar el ajo. En un bol, mezclar la
                  carne picada, cebolla y picar el ajo. En un bol, mezclar la
                  carne picada,
                </p>
              </div>
              <div className='bg-[#dcdbdb] w-full h-full py-2 m-auto rounded-lg flex items-center'>
                <p className='pl-5 text-lg'>
                  1) rallar la cebolla y picar el ajo. En un bol, mezclar la
                  carne picada,
                </p>
              </div>
            </div>
          </div>

          <p className='text-center p-7'>
            <span className='font-bold'>Elaborado por:</span> Carlos Centeno
          </p>
        </section>
      </main>
    </>
  );
}

export default VistaReceta;

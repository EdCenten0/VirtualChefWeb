/**
 * Componente para crear una receta.
 *
 * @returns {JSX.Element} El componente de creación de receta.
 */
import React from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import HeaderText from "../../components/HeaderText";
import ImgInput from "../../components/ImgInput";
import Select from "../../components/Select";
import TextArea from "../../components/TextArea";
import ControladorPasos from "../../components/ControladorPasos";

const CrearReceta1 = () => {
  return (
    <>
      <main className='m-10'>
        <div className='mx-4 my-2'>
          <HeaderText text={"Agrega una receta"} />
        </div>

        <div className='grid grid-cols-3 grid-rows-2 gap-7 m-3'>
          <div className='flex flex-col justify-between gap-10'>
            <ImgInput />
            <ControladorPasos paso={1} />
            <Button text={"Siguiente"} />
          </div>

          <div className='col-span-2 row-span-2'>
            <Input name={"Nombre"} placeholder={"Nombre de la receta"} />
            <TextArea
              name={"Descripcion"}
              placeholder={"Agrega una descripcion"}
            />

            <div>
              <p className='text-2xl'>Tiempo de preparacion</p>
              <div className='flex gap-3'>
                <Input name={"Tiempo"} placeholder={"10 minutos"} />
                <p className='flex justify-center items-center'>Minutos....</p>
              </div>
              <div>
                <Input name={"Tiempo de comida"} />
                <p className='text-2xl my-2'>Tiempo de comida</p>
                <Select valores={["Desayuno", "Almuerzo", "Cena"]} />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

const CrearReceta2 = () => {
  return (
    <>
      <main className='m-10'>
        <div className='mx-4 my-2'>
          <HeaderText text={"Agrega una receta"} />
          <div className='grid grid-cols-2 gap-10'>
            <div className='flex justify-center flex-col gap-8'>
              <Input
                name={"Ingrediente"}
                placeholder={"Chiltoma con tomate"}
                addIcon={true}
              />
              <ControladorPasos paso={2} />
              <Button text={"Siguiente"} />
            </div>

            <div>
              <HeaderText text={"Ingredientes"} />
              <div className='w-full bg-slate-400 p-2 rounded-lg my-5'>
                <Input deleteIcon={true} />
                <Input deleteIcon={true} />
                <Input deleteIcon={true} />
                <Input deleteIcon={true} />
                <Input deleteIcon={true} />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

const CrearReceta3 = () => {
  return (
    <>
      <main className='m-10'>
        <div className='mx-4 my-2'>
          <HeaderText text={"Agrega una receta"} />
          <div className='grid grid-cols-2 gap-10'>
            <div className='flex justify-center flex-col gap-8'>
              <Input
                name={"Pasos"}
                placeholder={"Hornear 10 minutos"}
                addIcon={true}
              />
              <ControladorPasos paso={3} />
              <Button text={"Siguiente"} />
            </div>

            <div>
              <HeaderText text={"Pasos"} />
              <div className='w-full bg-slate-400 p-2 rounded-lg my-5'>
                <Input deleteIcon={true} />
                <Input deleteIcon={true} />
                <Input deleteIcon={true} />
                <Input deleteIcon={true} />
                <Input deleteIcon={true} />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export { CrearReceta1, CrearReceta2, CrearReceta3 };

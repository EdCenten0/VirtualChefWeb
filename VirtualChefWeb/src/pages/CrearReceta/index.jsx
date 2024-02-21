import React from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import HeaderText from "../../components/HeaderText";
import ImgInput from "../../components/ImgInput";
import TextArea from "../../components/TextArea";

const CrearReceta1 = () => {
  return (
    <>
      <div className='mx-4 my-2'>
        <HeaderText text={"Agrega una receta"} />
      </div>

      <div className='grid grid-cols-3 gap-7 m-3'>
        <div className='flex flex-col justify-between gap-10'>
          <ImgInput />
          <Button text={"Siguiente"} />
        </div>
        <div className='col-span-2'>
          <Input name={"Nombre"} placeholder={"Nombre de la receta"} />
          <TextArea
            name={"Descripcion"}
            placeholder={"Agrega una descripcion"}
          />

          <div>
            <p className='text-2xl'>Tiempo de preparacion</p>
            <div className='flex gap-10'>
              <Input name={"Tiempo"} placeholder={"10 minutos"} />
              <Input name={"Medida"} placeholder={"min"} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CrearReceta1;

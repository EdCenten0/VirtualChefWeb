import React from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import HeaderText from "../../components/HeaderText";
import ImgInput from "../../components/ImgInput";

const CrearReceta1 = () => {
  return (
    <>
      <ImgInput />
      <HeaderText text='Nombre de la receta' />
      <Input name='Name' placeholder='Juanito Melendez' />
      <Button text='Siguiente' />
    </>
  );
};

export default CrearReceta1;

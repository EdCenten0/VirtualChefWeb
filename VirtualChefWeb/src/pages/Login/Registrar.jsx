// import React from "react";
import InputCom from "../../components/Input";
import ButtonCom from "../../components/Button";
import Logo from "../../assets/Logo.svg";

const Registrar = () => {
  return (
    <>
      <div className=' gap-5 h-screen flex flex-col items-center justify-center p-14'>
        <img src={Logo} className='size-[250px]' />
        <form className='w-[500px]'>
          <div className='mb-5'>
            <InputCom name={"Correo electronico"}></InputCom>
            <InputCom name={"Nombre"}></InputCom>
            <InputCom name={"Apellido"}></InputCom>
            <InputCom name={"Nombre de usuario"}></InputCom>
            <InputCom name={"Contraseña"}></InputCom>
            <InputCom name={"Confirmar contraseña"}></InputCom>
          </div>
          <ButtonCom text={"Registrar"}></ButtonCom>
        </form>
      </div>
    </>
  );
};

export { Registrar };

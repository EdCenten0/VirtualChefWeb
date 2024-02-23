// import React from "react";
import InputCom from "../../components/Input";
import ButtonCom from "../../components/Button";
import Logo from "../../assets/Logo.svg";
import { NavLink } from "react-router-dom";


const Login = () => {
  return (
    <>
      <div className="w-screen h-screen gap-3 flex flex-col items-center justify-center ">
        <img src={Logo} className="size-[250px]" />
        <form className="w-[500px]">
          <div className="mb-5">
            <InputCom name={"Nombre de usuario"}></InputCom>
            <InputCom name={"Contraseña"}></InputCom>
          </div>
          <div className="text-center">
            <ButtonCom text={"Iniciar sesión"}></ButtonCom>
            <NavLink
              to="/registrar"
              className="text-[#246C2C] text-[20px] mt-[5px] leading-10 underline"
            >
              Crear cuenta
            </NavLink>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;

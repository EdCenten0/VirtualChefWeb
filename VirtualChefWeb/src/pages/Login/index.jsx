// import React from "react";
import InputCom from "../../components/Input";
import ButtonCom from "../../components/Button";
import { useForm } from "react-hook-form";
import Logo from "../../assets/Logo.svg";
import { NavLink } from "react-router-dom";
import { records } from "../../hooks/pocketBase";
import { ALL_USERS, findUser } from "../../hooks/Usuarios";
import { ALL_FAVORITOS, findFavoritos } from "../../hooks/Favoritos";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // console.log(ALL_USERS);

  // Arreglo lleno (existe un usuario con ese nombre o tambien con ese correo)
  findUser("francisco", "admin@gmail.com"); // Funcion para buscar usuarios en la base de datos

  // Arreglo vacio (no existe registro de favorito con ese usuario y receta)
  findFavoritos("fbeu3nimrxh9dym", "zgqll98m7ev6dqg"); // 

  // Arreglo lleno (existe registro de favorito con ese usuario y receta)
  findFavoritos("zr73oyorcglfh60", "zgqll98m7ev6dqg"); // 


  return (
    <>
      <div className="w-screen h-screen gap-3 flex flex-col items-center justify-center ">
        <img src={Logo} className="size-[250px]" />
        <form className="w-[500px]">
          <div className="mb-5">
            <InputCom
              register={register}
              isRequired={true}
              errors={errors}
              name={"Nombre de usuario"}
              type={"text"}
            ></InputCom>
            <InputCom
              register={register}
              isRequired={true}
              errors={errors}
              name={"Contraseña"}
              type={"password"}
            ></InputCom>
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

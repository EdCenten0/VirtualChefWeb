// import React from "react";
import InputCom from "../../components/Input";
import ButtonCom from "../../components/Button";
import { useForm } from "react-hook-form";
import Logo from "../../assets/Logo.svg";
import { NavLink } from "react-router-dom";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Arreglo lleno (existe un usuario con ese nombre o tambien con ese correo)
  // findUser("francisco", "admin@gmail.com"); // Funcion para buscar usuarios en la base de datos

  // // Arreglo vacio (no existe registro de favorito con ese usuario y receta)
  // findFavoritos("fbeu3nimrxh9dym", "zgqll98m7ev6dqg"); //

  // // Arreglo lleno (existe registro de favorito con ese usuario y receta)
  // findFavoritos("zr73oyorcglfh60", "zgqll98m7ev6dqg"); 

  const onSubmit = handleSubmit((data) => {
    // Todavia no funciona
    // findUser(data.correo_electronico, data.contraseña)
    
  });

  return (
    <>
      <div className="w-screen h-screen gap-3 flex flex-col items-center justify-center ">
        <img src={Logo} className="size-[250px]" />
        <form className="w-[500px]" onSubmit={onSubmit}>
          <div className="mb-5">
            <InputCom
              register={register}
              isRequired={true}
              errors={errors}
              name={"Correo electronico"}
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
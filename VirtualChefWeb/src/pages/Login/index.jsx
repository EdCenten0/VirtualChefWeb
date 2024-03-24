// import React from "react";
import InputCom from "../../components/Input";
import ButtonCom from "../../components/Button";
import { useForm } from "react-hook-form";
import Logo from "../../assets/Logo.svg";
import { NavLink } from "react-router-dom";
import { loginUsuario, existeUsuario} from "../../hooks/pocketBase/Usuarios";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit(async (data) => {
    // Llama a la función loginUsuario del archivo Usuarios.js para iniciar sesión
    const usuario = await loginUsuario(data.correo_electronico, data.contraseña)

    // Si el usuario existe, devolvera un objeto con los datos del usuario
    if (usuario) {
      const user = await existeUsuario(usuario.record.email)
      console.log(user[0]);
    }
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

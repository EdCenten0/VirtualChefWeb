// import React from "react";
import InputCom from "../../components/Input";
import ButtonCom from "../../components/Button";
import Logo from "../../assets/Logo.svg";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { createUser } from "../../hooks/pocketBase/Usuarios";
import toast, { Toaster } from "react-hot-toast";

const Registrar = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = handleSubmit(async (data) => {
    if (data.contraseña !== data.confirmar_contraseña) {
      toast.error("Las contraseñas no coinciden", {
        duration: 5000,
        position: "bottom-right",
        className: "bg-[#246C2C] p-5 text-white font-bold",
      });
      return;
    }

    // Llama a la función createUser del archivo Usuarios.js para crear un usuario
    if (await createUser(data)) {
      toast.success("Usuario creado exitosamente", {
        duration: 3000,
        position: "bottom-right",
        className: "bg-[#246C2C] p-5 text-white font-bold",
      });
      setTimeout(() => {
        navigate("/");
      }, 2000);
    }
  });

  return (
    <>
      <Toaster />

      <div className=' gap-5 h-screen flex flex-col items-center justify-center p-14'>
        <img src={Logo} className='size-[250px]' />
        <form className='w-[500px]' onSubmit={onSubmit}>
          <div className='mb-5'>
            <InputCom
              name={"Correo electronico"}
              errors={errors}
              register={register}
              isRequired={true}
              type={"email"}
            ></InputCom>

            <InputCom
              name={"Nombre"}
              errors={errors}
              register={register}
              isRequired={true}
              type={"text"}
            ></InputCom>

            <InputCom
              name={"Apellido"}
              errors={errors}
              register={register}
              isRequired={true}
              type={"text"}
            ></InputCom>

            <InputCom
              name={"Nombre de usuario"}
              errors={errors}
              register={register}
              isRequired={true}
              type={"text"}
            ></InputCom>

            <InputCom
              name={"Contraseña"}
              errors={errors}
              register={register}
              isRequired={true}
              type={"password"}
            ></InputCom>

            <InputCom
              name={"Confirmar contraseña"}
              errors={errors}
              register={register}
              isRequired={true}
              type={"password"}
            ></InputCom>
          </div>
          <ButtonCom text={"Registrar"}></ButtonCom>
        </form>
      </div>
    </>
  );
};

export { Registrar };

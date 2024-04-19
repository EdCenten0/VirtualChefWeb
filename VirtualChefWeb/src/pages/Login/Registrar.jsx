// import React from "react";
import InputCom from "../../components/Input";
import ButtonCom from "../../components/Button";
import Logo from "../../assets/Logo.svg";
import { useForm } from "react-hook-form";
import { createUser } from "../../hooks/pocketBase/Usuarios";

const Registrar = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit(async (data) => {
    if (data.contraseña !== data.confirmar_contraseña) {
      alert("Las contraseñas no coinciden");
      return;
    }

    // Llama a la función createUser del archivo Usuarios.js para crear un usuario
    if (await createUser(data)) {
      if (confirm("Desea volver al inicio de sesión?")) {
        location.href = "/";
      }
    }
  });

  return (
    <>
      <div className=" gap-5 h-screen flex flex-col items-center justify-center p-14">
        <img src={Logo} className="size-[250px]" />
        <form className="w-[500px]" onSubmit={onSubmit}>
          <div className="mb-5">
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

import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";

// Componentes
import ButtonCom from "../../components/Button";
import InputCom from "../../components/Input";

// Imagenes
import Logo from "../../assets/Logo.svg";

// Contextos
import { UserContext } from "../../contexts/UserContext";
import { useContext } from "react";

// Hooks
import { loginUsuario } from "../../hooks/pocketBase/Usuarios";
import { pb } from "../../hooks/pocketBase/pocketBase";

import toast, { Toaster } from "react-hot-toast";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  // Contexto de react, para actualizar el estado y almacenar la información del usuario
  // Ya se ha en el localStorage o en el contexto de react
  const { updateUser } = useContext(UserContext);

  const onSubmit = handleSubmit(async (data) => {
    // Constante asycrona que llama a la función de "login" para comprobar si verdaderamente
    // los datos ingresados existen dentro del pocketbase
    const usuario = await loginUsuario(
      data.correo_electronico,
      data.contraseña
    );
    console.log(usuario);
    await pb.admins.authWithPassword("admin@gmail.com", "admin123456");

    // Si el usuario existe, se llama a la función "existeUsuario" para actualizar el contexto con el id del usuario
    if (usuario) {
      updateUser(usuario.record.id);
      toast.success("Inicio de sesión exitoso", {
        duration: 5000,
        position: "bottom-right",
        className: "bg-[#246C2C] p-5 text-white font-bold",
      });

      navigate("/home");
    }
  });

  return (
    <>
      <Toaster />

      <div className='w-screen h-screen gap-3 flex flex-col items-center justify-center'>
        <img src={Logo} className='size-[250px]' alt='Logo' />
        <form className='w-[500px]' onSubmit={onSubmit}>
          <div className='mb-5'>
            <InputCom
              register={register}
              isRequired={true}
              errors={errors}
              name={"Correo electronico"}
              type={"text"}
            />
            <InputCom
              register={register}
              isRequired={true}
              errors={errors}
              name={"Contraseña"}
              type={"password"}
            />
          </div>
          <div className='text-center'>
            <ButtonCom text={"Iniciar sesión"} />
            <NavLink
              to='/registrar'
              className='text-[#246C2C] text-[20px] mt-[5px] leading-10 underline'
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

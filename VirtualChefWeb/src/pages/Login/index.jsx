import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";

// Componentes
import ButtonCom from "../../components/Button";
import InputCom from "../../components/Input";

// Imagenes
import Logo from "../../assets/Logo.svg";

// Contextos
import { UserContext } from "../../contexts/UserContext";
import { useContext } from "react";

// Hooks
import { loginUsuario, existeUsuario } from "../../hooks/pocketBase/Usuarios";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

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

    // Si el usuario existe, se llama a la función "existeUsuario" para actualizar el contexto con el id del usuario
    if (usuario) {
      const usuarioLog = await existeUsuario(usuario.record.email);
      updateUser(usuarioLog[0]);
      alert("Inicio de sesión exitoso");
      location.href = "/home";
    }
  });

  return (
    <div className="w-screen h-screen gap-3 flex flex-col items-center justify-center">
      <img src={Logo} className="size-[250px]" alt="Logo" />
      <form className="w-[500px]" onSubmit={onSubmit}>
        <div className="mb-5">
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
        <div className="text-center">
          <ButtonCom text={"Iniciar sesión"} />
          <NavLink
            to="/registrar"
            className="text-[#246C2C] text-[20px] mt-[5px] leading-10 underline"
          >
            Crear cuenta
          </NavLink>
        </div>
      </form>
    </div>
  );
};

export default Login;

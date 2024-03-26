import { useContext } from "react";
import InputCom from "../../components/Input";
import ButtonCom from "../../components/Button";
import { useForm } from "react-hook-form";
import Logo from "../../assets/Logo.svg";
import { NavLink } from "react-router-dom";
import { loginUsuario, existeUsuario } from "../../hooks/pocketBase/Usuarios";
import { UserContext } from "../../contexts/UserContext";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { updateUser } = useContext(UserContext);

  const onSubmit = handleSubmit(async (data) => {
    const usuario = await loginUsuario(
      data.correo_electronico,
      data.contraseña
    );

    if (usuario) {
      const usuarioLog = await existeUsuario(usuario.record.email);
      updateUser(usuarioLog[0]);
      alert("Inicio de sesión exitoso")
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

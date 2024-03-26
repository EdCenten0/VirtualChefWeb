import { NavLink } from "react-router-dom";
import Logo from "../../assets/Logo.svg";

const NoLogged = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 gap-6">
      <img src={Logo} className="size-[250px]" alt="Logo" />
      <p className=" text-xl text-red-500">
        No se encuentra ningún usuario registrado.
      </p>
      <NavLink
        to="/"
        className="px-5 py-2 text-white bg-[#246C2C] rounded-lg text-lg "
      >
        Volver al login
      </NavLink>
    </div>
  );
};

export default NoLogged;

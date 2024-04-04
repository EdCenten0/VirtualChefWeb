import { useContext } from "react";
import NoLogged from "../../components/Card/NoLogged";
import { existeUsuario } from "../../hooks/pocketBase/Usuarios";
import { UserContext } from "../../contexts/UserContext";

const Perfil = () => {
  const { user } = useContext(UserContext);

  return (
    <>
      {
        existeUsuario("", "", user.id) ? (<h1>Hola</h1>) : (<NoLogged></NoLogged>)
      }
    </>
  );
};

export default Perfil;

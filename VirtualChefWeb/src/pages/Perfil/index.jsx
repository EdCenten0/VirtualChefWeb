import { useContext } from "react";
import NoLogged from "../../components/Card/NoLogged";
import { existeUsuario } from "../../hooks/pocketBase/Usuarios";
import { UserContext } from "../../contexts/UserContext";

const Perfil = () => {
  const { user } = useContext(UserContext);

  return (
    <>
      {
        existeUsuario("", "", user.id) ? (<NoLogged></NoLogged>) : (<h1>Hola</h1>)
      }
    </>
  );
};

export default Perfil;

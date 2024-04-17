import { useContext, useEffect, useState } from "react";
import NoLogged from "../../components/Card/NoLogged";
import { existeUsuario } from "../../hooks/pocketBase/Usuarios";
import { UserContext } from "../../contexts/UserContext";
import Loader from "../../components/Icons/Loader";

const Perfil = () => {
  const { user } = useContext(UserContext);
  const [userIsValid, setUserIsValid] = useState(false);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Constante asycrona para obtener las recetas
    const setComidas = async () => {
      try {
        // Verifica si el usuario esta logeado
        setUserIsValid(await existeUsuario("", "", user.id));

        //Cuando cargue todo, se mostrara el contenido
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    setComidas();
  }, [user.id]);

  if (!isLoading) {
    return <>{userIsValid ? <h1>Hola</h1> : <NoLogged></NoLogged>}</>;
  } else {
    return (
      <div className="w-screen h-screen flex items-center justify-center">
        <Loader></Loader>
      </div>
    );
  }
};

export default Perfil;

import { useContext, useEffect, useState } from "react";

// Componetes
import CardFavoritos from "../../components/Card/CardFavoritos";
import NoLogged from "../../components/Card/NoLogged";

// Imagenes
import IconLeft from "../../assets/Left.svg";

// Hooks
import { getImagen } from "../../hooks/pocketBase/pocketBase";
import { getFavoritos } from "../../hooks/pocketBase/Favoritos";

// Contextos
import { UserContext } from "../../contexts/UserContext";
import { existeUsuario } from "../../hooks/pocketBase/Usuarios";
import Loader from "../../components/Icons/Loader";

function handleClick() {
  if (confirm("¿Estás seguro de que deseas continuar?")) {
    location.href = "/home";
  }
}

const Favoritos = () => {
  const { user } = useContext(UserContext);
  const [userIsValid, setUserIsValid] = useState(false);

  const [favoritos, setFavoritos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const Favoritos = async () => {
      try {
        setUserIsValid(await existeUsuario("", "", user.id));
        setFavoritos(await getFavoritos(user.id));

        //Cuando cargue todo, se mostrara el contenido
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    Favoritos();
  }, [user.id]);

  if (!isLoading) {
    return userIsValid ? (
      <main className="w-screen flex flex-col items-center relative min-h-screen">
        <img
          className="absolute left-0 p-4 cursor-pointer"
          src={IconLeft}
          onClick={handleClick}
        ></img>
        <header className="p-[20px]">
          <section className=" flex items-center justify-center gap-5 ">
            <h1 className="text-[30px] font-light">Favoritos</h1>
          </section>
        </header>
        <div className="w-[1000px]">
          {
            <div
              className={`grid grid-cols-3 gap-y-12 gap-x-8 ${
                favoritos.length == 0 ? "" : "my-12"
              }`}
            >
              {favoritos.map((info) => {
                return (
                  <CardFavoritos
                    img={getImagen(info.expand.recetasId)}
                    name={info.expand.recetasId.nombre}
                    time={info.expand.recetasId.tiempoPreparacion}
                    id={info.expand.recetasId.id}
                    key={info.expand.recetasId.id}
                  ></CardFavoritos>
                );
              })}
            </div>
          }

          {favoritos.length == 0 ? (
            <div className="w-full h-[80vh] flex items-center justify-center text-[#B5B5B5]">
              <h1 className="text-[25px]">No tienes recetas favoritas</h1>
            </div>
          ) : null}
        </div>
        <div className="w-full p-6 bg-[#246C2C] flex items-center justify-evenly flex-col text-white mt-auto"></div>
      </main>
    ) : (
      <div className="w-screen h-screen flex items-center justify-center">
        <NoLogged></NoLogged>
      </div>
    );
  } else {
    return (
      <div className="w-screen h-screen flex items-center justify-center">
        <Loader></Loader>
      </div>
    );
  }
};

export default Favoritos;

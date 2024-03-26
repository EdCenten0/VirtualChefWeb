import CardFavoritos from "../../components/Card/CardFavoritos";
import SearchIcon from "../../assets/search.jpg";
import IconFavoritos from "../../assets/Corazon.svg";
import InputIcon from "../../components/Input/InputIcon";
import IconLeft from "../../assets/Left.svg";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import { getFavoritos } from "../../hooks/pocketBase/Favoritos";
import Loader from "../../components/Icons/Loader";
import { getImagen } from "../../hooks/pocketBase/pocketBase";
import NoLogged from "../../components/Card/NoLogged";

function handleClick() {
  if (confirm("¿Estás seguro de que deseas continuar?")) {
    location.href = "/home";
  }
}

const Favoritos = () => {
  const { user } = useContext(UserContext);

  const [favoritos, setFavoritos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const Favoritos = async () => {
      try {
        setFavoritos(await getFavoritos(user.id));
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      }
    };
    Favoritos();
  }, [user.id]);

  return user.id == "" ? (
    <NoLogged></NoLogged>
  ) : (
    <main className="w-screen flex flex-col items-center h-screen">
      <img
        className="absolute left-0 p-4 cursor-pointer"
        src={IconLeft}
        onClick={handleClick}
      ></img>
      <header className="p-[20px]">
        <section className=" flex items-center justify-center gap-5 ">
          <h1 className="text-[25px]">Favoritos</h1>
          <img src={IconFavoritos} className="size-[30px]" />
        </section>
      </header>
      <div className="w-[1000px]">
        <InputIcon
          icon={SearchIcon}
          placeholder={"Buscar recetas..."}
        ></InputIcon>

        {loading ? (
          <div className="h-[500px] w-full">
            <Loader />
          </div>
        ) : (
          <div className={`grid grid-cols-3 gap-y-12 gap-x-8 ${favoritos.length == 0 ? '' : 'my-12' }`}>
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
        )}

        {
          favoritos.length == 0 && !loading ? (
            <div className="w-full h-[500px] flex items-center justify-center text-[#B5B5B5]">
              <h1 className="text-[20px]">No tienes recetas favoritas</h1>
            </div>
          ) : null
        }
      </div>
      <div className="w-full p-6 bg-[#246C2C] flex items-center justify-evenly flex-col text-white absolute bottom-0"></div>
    </main>
  );
};

export default Favoritos;

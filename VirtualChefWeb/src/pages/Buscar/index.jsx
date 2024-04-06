import { useContext, useEffect, useState, lazy, Suspense } from "react";

// Imagenes
import IconCreate from "../../assets/Create-pencil.svg";
import SearchIcon from "../../assets/search.jpg";

// Componentes
const Header = lazy(() => import("../../components/Header/index"));
const InputIcon = lazy(() => import("../../components/Input/InputIcon"));
const Pop_button = lazy(() => import("../../components/Button/Pop_button"));
const Loader = lazy(() => import("../../components/Icons/Loader"));
const NoLogged = lazy(() => import("../../components/Card/NoLogged"));

// Hooks
import { getImagen } from "../../hooks/pocketBase/pocketBase";

// Carrusel
import CardComidas from "../../components/Card/CardComidas";

// Contextos
import { useRecetas } from "../../hooks/pocketBase/recetas";
import { UserContext } from "../../contexts/UserContext";
import { existeUsuario } from "../../hooks/pocketBase/Usuarios";

function Buscar() {
  // Contexto de react, para hacer la verificación de si el usuario está logeado
  const { user } = useContext(UserContext);

  // useState para obtener las recetas
  const { buscarRecetas } = useRecetas();

  // useState para guardar las recetas de desayuno, almuerzo y cena
  const [Recetas, setRecetas] = useState([]);

  const consulta = window.location.hash.substring(1);

  useEffect(() => {
    const setComidas = async () => {
      try {
        setRecetas(await buscarRecetas(consulta));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    setComidas();
  }, [buscarRecetas, consulta]);

  return (
    <Suspense
      fallback={
        <div className="w-screen h-screen flex justify-center items-center">
          <Loader></Loader>
        </div>
      }
    >
      {
        // Esto verifica si el usuario esta logeado, comparandolo con el localStorage o el contexto de react con el id del usuario
        user.id != "" && existeUsuario("", "", user.id) != {} ( 
          // Si el usuario esta logeado, muestra el menu principal
        <>
            <main className="w-screen pt-10 flex items-center flex-col ">
              <div className="fixed bottom-0 left-0 p-5 z-20">
                <Pop_button Icon={IconCreate} text={"Crear"}></Pop_button>
              </div>
              <div className=" w-screen max-w-[1200px] py-5">
                <Header></Header>
                <InputIcon
                  icon={SearchIcon}
                  placeholder={"Buscar recetas..."}
                  fun={() => {
                    location.href = `/buscar#${
                      document.querySelector("input").value
                    }`;
                  }}
                  ></InputIcon>

                {Recetas == "" ? (
                  <div className="w-full h-[500px] flex items-center justify-center text-[#B5B5B5]">
                    <h1 className="text-[20px]">Receta no encontrada</h1>
                  </div>
                ) : (
                  <div className="grid grid-cols-3 gap-y-12 gap-x-8 py-8">
                    {Recetas.map((info) => {
                      return (
                        <CardComidas
                          name={info.nombre}
                          time={info.tiempoPreparacion}
                          imagen={getImagen(info)}
                          id={info.id}
                          key={info.id}
                        ></CardComidas>
                        );
                    })}
                  </div>
                )}
              </div>
            </main>
          </>
        ) : (
          // Si no lo esta, muestra el componente "NoLogged"
          <NoLogged></NoLogged>
          )
      }
    </Suspense>
  );
}

export default Buscar;

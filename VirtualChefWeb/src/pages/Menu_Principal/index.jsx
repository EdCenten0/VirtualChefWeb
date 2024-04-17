import { useContext, useEffect, useState } from "react";

// Imagenes
import IconCreate from "../../assets/Create-pencil.svg";
import SearchIcon from "../../assets/search.jpg";

// Componetes
import Header from "../../components/Header/index";
import Footer from "../../components/Footer/index";
import InputIcon from "../../components/Input/InputIcon";
import Pop_button from "../../components/Button/Pop_button";
import NoLogged from "../../components/Card/NoLogged";

// Carrusel
import CarruselComidas from "../../components/Carrusel/CarruselComidas";

// Contextos
import { useRecetas } from "../../hooks/pocketBase/recetas";
import { UserContext } from "../../contexts/UserContext";
import { existeUsuario } from "../../hooks/pocketBase/Usuarios";
import Loader from "../../components/Icons/Loader";

function Menu_Principal() {
  // Contexto de react, para hacer la verificación de si el usuario está logeado
  const { user } = useContext(UserContext);

  // useState para obtener las recetas
  const { getRecetasMenu } = useRecetas();

  // useState para guardar las recetas de desayuno, almuerzo y cena
  const [Desayunos, setDesayunos] = useState([]);
  const [Almuerzos, setAlmuerzos] = useState([]);
  const [Cenas, setCenas] = useState([]);
  const [userIsValid, setUserIsValid] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Constante asycrona para obtener las recetas
    const setComidas = async () => {
      try {
        // Verifica si el usuario esta logeado
        setUserIsValid(await existeUsuario("", "", user.id));
        // Fetch data from API
        setDesayunos(await getRecetasMenu("desayuno"));
        setAlmuerzos(await getRecetasMenu("Almuerzo"));
        setCenas(await getRecetasMenu("Cena"));

        //Cuando cargue todo, se mostrara el contenido
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    setComidas();
  }, [getRecetasMenu, user.id]);

  if (!isLoading) {
    return userIsValid ? (
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

            <CarruselComidas
              name={"Desayuno"}
              comidas={Desayunos}
            ></CarruselComidas>

            <CarruselComidas
              name={"Almuerzos"}
              comidas={Almuerzos}
            ></CarruselComidas>

            <CarruselComidas name={"Cena"} comidas={Cenas}></CarruselComidas>
          </div>

          <Footer></Footer>
        </main>
      </>
    ) : (
      // Si no lo esta, muestra el componente "NoLogged"
      <NoLogged></NoLogged>
    );
  } else {
    return (
      <div className="w-screen h-screen flex items-center justify-center">
        <Loader></Loader>
      </div>
    );
  }
}

export default Menu_Principal;

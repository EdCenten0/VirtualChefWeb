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

function Menu_Principal() {
  // Contexto de react, para hacer la verificación de si el usuario está logeado
  const { user } = useContext(UserContext);

  // useState para obtener las recetas
  const { getRecetasMenu } = useRecetas();

  // useState para guardar las recetas de desayuno, almuerzo y cena
  const [Desayunos, setDesayunos] = useState([]);
  const [Almuerzos, setAlmuerzos] = useState([]);
  const [Cenas, setCenas] = useState([]);

  useEffect(() => {
    // Constante asycrona para obtener las recetas
    const setComidas = async () => {
      try {
        // Fetch data from API
        setDesayunos(await getRecetasMenu("desayuno"));
        setAlmuerzos(await getRecetasMenu("Almuerzo"));
        setCenas(await getRecetasMenu("Cena"));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    setComidas();
  }, [getRecetasMenu]);

  return (
    // Esto verifica si el usuario esta logeado, comparandolo con el localStorage o el contexto de react con el id del usuario
    // Si el usuario esta logeado, muestra el menu principal
    user.id != "" && existeUsuario("", "", user.id) != {} (
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
    )
  );
}

export default Menu_Principal;

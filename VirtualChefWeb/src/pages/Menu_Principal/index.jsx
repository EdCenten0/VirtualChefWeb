// import Login from "./Login/index";
import Header from "../../components/Header/index";
import InputIcon from "../../components/Input/InputIcon";
import SearchIcon from "../../assets/search.jpg";
import CarruselComidas from "../../components/Carrusel/CarruselComidas";
import Pop_button from "../../components/Button/Pop_button";
import Footer from "../../components/Footer/index";
import IconCreate from "../../assets/Create-pencil.svg";

import Ejemplo from "../../assets/Ejemplo.png";
import Ejemplo2 from "../../assets/Ejemplo2.png";
import Ejemplo3 from "../../assets/Ejemplo3.png";

const FOODS_CONST = [
  {
    name: "Pollo frito",
    time: "10",
    img: Ejemplo,
  },
  {
    name: "Ensalada Venezolana",
    time: "10",
    img: Ejemplo2,
  },
  {
    name: "Ensalada Hondureña",
    time: "10",
    img: Ejemplo3,
  },
  {
    name: "Pollo frito",
    time: "10",
    img: Ejemplo,
  },
];

function Menu_Principal() {
  return (
    <>
      <main className="w-screen pt-10 flex items-center flex-col ">
        <div className="fixed bottom-0 left-0 p-5 z-20">
          <Pop_button Icon={IconCreate} text={"Crear"}></Pop_button>
        </div>
        <div className=" w-screen max-w-[1200px]">
          <Header></Header>
          <InputIcon
            icon={SearchIcon}
            placeholder={"Buscar recetas..."}
          ></InputIcon>

          {/* Componente de  Desayuno*/}
          <CarruselComidas
            name={"Desayuno"}
            FOODS_CONST={FOODS_CONST}
          ></CarruselComidas>

          {/* Componente de  Almuerzo*/}
          <CarruselComidas
            name={"Almuerzo"}
            FOODS_CONST={FOODS_CONST}
          ></CarruselComidas>

          {/* Componente de  Cena*/}
          <CarruselComidas
            name={"Cena"}
            FOODS_CONST={FOODS_CONST}
          ></CarruselComidas>

          {/*Footer*/}
        </div>
        <Footer></Footer>
      </main>
    </>
  );
}

export default Menu_Principal;

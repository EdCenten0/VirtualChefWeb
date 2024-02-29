// import Login from "./Login/index";
import Header from "../../components/Header/index";
import InputIcon from "../../components/Input/InputIcon";
import SearchIcon from "../../assets/search.jpg";
import CarruselComidas from "../../components/Carrusel/CarruselComidas";
import Pop_button from "../../components/Button/Pop_button";
import Footer from "../../components/Footer/index";
import IconCreate from "../../assets/Create-pencil.svg";

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
          <CarruselComidas name={"Desayuno"}></CarruselComidas>

          {/* Componente de  Almuerzo*/}
          <CarruselComidas name={"Almuerzo"}></CarruselComidas>

          {/* Componente de  Cena*/}
          <CarruselComidas name={"Cena"}></CarruselComidas>

          {/*Footer*/}
        </div>
        <Footer></Footer>
      </main>
    </>
  );
}

export default Menu_Principal;

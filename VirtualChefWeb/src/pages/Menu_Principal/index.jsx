// import Login from "./Login/index";
import Header from "../../components/Header/index";
import InputIcon from "../../components/Input/InputIcon";
import SearchIcon from "../../assets/search.jpg";
import CarruselComidas from "../../components/Carrusel/CarruselComidas";

function Menu_Principal() {
  return (
    <>
      <main className="w-screen p-10 flex justify-center ">
        <div className=" h-screen w-screen max-w-[1200px]">
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
      </main>
    </>
  );
}

export default Menu_Principal;

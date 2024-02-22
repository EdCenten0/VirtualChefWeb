// import Login from "./Login/index";
import Header from "../../components/Header/index";
import InputIcon from "../../components/Input/InputIcon";
import SearchIcon from "../../assets/search.jpg";

function Menu_Principal() {
  return (
    <>
      <main>
        <div className="p-10 h-screen w-screen">
          <Header></Header>
          <InputIcon
            icon={SearchIcon}
            placeholder={"Buscar recetas..."}
          ></InputIcon>
        </div>
        {/* Componente de  Desayuno*/}

        {/* Componente de  Almuerzo*/}

        {/* Componente de  Cena*/}

        {/*Footer*/}
      </main>
    </>
  );
}

export default Menu_Principal;

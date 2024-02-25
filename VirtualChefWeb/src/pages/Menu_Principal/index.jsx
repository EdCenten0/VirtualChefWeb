// import Login from "./Login/index";
import Header from "../../components/Header/index";
import InputIcon from "../../components/Input/InputIcon";
import SearchIcon from "../../assets/search.jpg";
import CarruselComidas from "../../components/Carrusel/CarruselComidas";
import Pop_button from '../../components/Button/Pop_button';
import IconCreate from '../../assets/Create-pencil.svg'

function Menu_Principal() {
  return (
    <>
      <main className='w-screen p-10 flex justify-center '>
        <div className="fixed bottom-0 left-0 p-5 z-20">
          <Pop_button Icon={IconCreate} text={"Crear"}></Pop_button>
        </div>
        <div className=' h-screen w-screen max-w-[1200px]'>
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

import { useEffect, useState } from "react";

import IconCreate from "../../assets/Create-pencil.svg";
import SearchIcon from "../../assets/search.jpg";

import Header from "../../components/Header/index";
import Footer from "../../components/Footer/index";

import InputIcon from "../../components/Input/InputIcon";
import Pop_button from "../../components/Button/Pop_button";

import CarruselComidas from "../../components/Carrusel/CarruselComidas";

import { useRecetas } from "../../hooks/pocketBase/recetas";

import Loader from "../../components/Icons/Loader";

function Menu_Principal() {
  const { getRecetasMenu } = useRecetas();
  const [Desayunos, setDesayunos] = useState([]);
  const [Almuerzos, setAlmuerzos] = useState([]);
  const [Cenas, setCenas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const setComidas = async () => {
      try {
        setDesayunos(await getRecetasMenu("desayuno"));
        setAlmuerzos(await getRecetasMenu("Almuerzo"));
        setCenas(await getRecetasMenu("Cena"));
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 3000);
      }
    };
    setComidas();
  }, [getRecetasMenu]);

  return (
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
          ></InputIcon>

          {loading ? (
            <div className="h-[500px]">
              <Loader />
            </div>
          ) : (
            <>
              <CarruselComidas
                name={"Desayuno"}
                comidas={Desayunos}
              ></CarruselComidas>

              <CarruselComidas
                name={"Almuerzos"}
                comidas={Almuerzos}
              ></CarruselComidas>

              <CarruselComidas name={"Cena"} comidas={Cenas}></CarruselComidas>
            </>
          )}
        </div>

        <Footer></Footer>
      </main>
    </>
  );
}

export default Menu_Principal;

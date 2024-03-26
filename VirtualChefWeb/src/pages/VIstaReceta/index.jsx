import React, { useEffect, useState } from "react";
import { useRecetas } from "../../hooks/pocketBase/recetas";
import { useIngredientes } from "../../hooks/pocketBase/ingredientes";
import { usePasos } from "../../hooks/pocketBase/pasos";
import Header from "../../components/Header";
import Corazon from "../../components/Icons/Corazon";
import DotMenu from "../../components/DotMenu/DotMenu";
import { getImagen } from "../../hooks/pocketBase/pocketBase";

function VistaReceta() {
  const { searchReceta } = useRecetas();
  const { getIngredientes } = useIngredientes();
  const { getPasos } = usePasos();
  const id = window.location.hash.substring(1);
  const [receta, setReceta] = useState({});
  const [ingredientes, setIngredientes] = useState([]);
  const [pasos, setPasos] = useState([]);

  useEffect(() => {
    const fetchReceta = async () => {
      try {
        const respondReceta = await searchReceta(id);
        setReceta(respondReceta);
        const respondIngredientes = await getIngredientes(id);
        setIngredientes(respondIngredientes);
        const respondPasos = await getPasos(id);
        setPasos(respondPasos);
      } catch (error) {
        console.log(error);
      }
    };
    fetchReceta();
  }, [id]);

  const {
    collectionId,
    id: recordId,
    nombre,
    descripcion,
    imagen,
    tiempoPreparacion,
    horarioId,
  } = receta;
  const creador =
    receta.expand?.creador.nombre + "(" + receta.expand?.creador.email + ")" ||
    "Anónimo";

  console.log(receta);

  const urlImagen = getImagen({
    collectionId: collectionId,
    id: recordId,
    imagen: imagen,
  });

  console.log("Console log desde VistaReceta");
  console.log(ingredientes);
  console.log(pasos);

  const renderIngredientes = () =>
    ingredientes.map((ingrediente, index) => {
      return (
        <div
          key={index}
          className='bg-[#dcdbdb] w-full h-full py-2 m-auto rounded-lg flex items-center'
        >
          <p className='pl-5 text-lg'>
            {index + 1}- {ingrediente.nombre}
          </p>
        </div>
      );
    });

  const renderPasos = () =>
    pasos.map((paso, index) => {
      return (
        <div
          key={index}
          className='bg-[#dcdbdb] w-full h-full py-2 m-auto rounded-lg flex items-center'
        >
          <p className='pl-5 text-lg'>
            {index + 1}- {paso.nombre}
          </p>
        </div>
      );
    });

  return (
    <>
      <main className='w-screen  flex items-center flex-col bg-[#B5F2B0] '>
        <div className='w-screen max-w-[1200px] mt-5'>
          <Header />
        </div>
        <section className='flex items-end justify-center h-[40vh] w-full '>
          <img
            className='w-[20vw] h-[35vh] object-cover rounded-2xl'
            src={urlImagen}
            alt='recetaImg'
          />
        </section>
        <section className='bg-[#fff] h-[60vh] w-full rounded-t-[5rem]  flex flex-col gap-6'>
          <div className='flex justify-between px-8 items-center'>
            <Corazon />
            <h3 className='text-center font-bold text-3xl p-3'>{nombre}</h3>
            <DotMenu />
          </div>
          <div className='text-center text-lg p-3'>
            <p>{descripcion}</p>
          </div>
          <div className=''>
            <h4 className='font-bold text-2xl pl-5 my-5'>Ingredientes</h4>
            <div className='grid grid-cols-3 gap-2 px-3'>
              {renderIngredientes()}
            </div>
          </div>
          <div className=''>
            <h4 className='font-bold text-2xl pl-5 my-5'>Pasos</h4>
            <div className='grid grid-cols-3  gap-2 px-3 h-fit'>
              {renderPasos()}
            </div>
          </div>

          <p className='text-center p-7'>
            <span className='font-bold'>Elaborado por:</span> {creador}
          </p>
        </section>
      </main>
    </>
  );
}

export default VistaReceta;

import React, { useEffect, useState, useContext } from "react";
import { toast } from "react-hot-toast";
import { existeUsuario } from "../../hooks/pocketBase/Usuarios";
import { CrearRecetaContext } from "../../contexts/CrearRecetaContext";
import { useRecetas } from "../../hooks/pocketBase/recetas";
import { useIngredientes } from "../../hooks/pocketBase/ingredientes";
import { usePasos } from "../../hooks/pocketBase/pasos";
import Header from "../../components/Header";
import Corazon from "../../components/Icons/Corazon";
import DotMenu from "../../components/DotMenu/DotMenu";
import { getImagen } from "../../hooks/pocketBase/pocketBase";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
import "./toast.css";

function VistaReceta() {
  const { receta: recetaContext, setReceta: setRecetaContext } =
    useContext(CrearRecetaContext);
  const { searchReceta, createNewReceta } = useRecetas();
  const { getIngredientes, createNewIngrediente } = useIngredientes();
  const { getPasos, createNewPaso } = usePasos();
  const id = window.location.hash.substring(1);
  const [receta, setReceta] = useState({});
  const [ingredientes, setIngredientes] = useState([]);
  const [pasos, setPasos] = useState([]);
  const [user, setUser] = useState({});
  const userId = JSON.parse(localStorage.getItem("user")).id;

  const idIsEmpty = id === "" ? true : false;
  const contextIsEmpty = recetaContext == {} ? true : false;

  useEffect(() => {
    const fetchUser = async () => {
      const respondUser = await existeUsuario("", "", userId);
      setUser(respondUser[0]);
    };

    fetchUser();

    if (idIsEmpty) return;

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

  console.log(user);

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
    receta.expand?.creador.nombre +
      " " +
      receta.expand?.creador.apellido +
      "(" +
      receta.expand?.creador.username +
      ")" || "Anónimo";

  const urlImagen = getImagen({
    collectionId: collectionId,
    id: recordId,
    imagen: imagen,
  });

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

  const handleCrearReceta = async () => {
    try {
      const receta = await createNewReceta(recetaContext);

      for (let i = 0; i < recetaContext.ingredientes.length; i++) {
        await createNewIngrediente({
          nombre: recetaContext.ingredientes[i],
          recetasId: receta.id,
        });
      }

      for (let i = 0; i < recetaContext.pasos.length; i++) {
        await createNewPaso({
          nombre: recetaContext.pasos[i],
          recetaId: receta.id,
        });
      }
      toast.custom((t) => (
        <div
          className={`${
            t.visible ? "animate-enter" : "animate-leave"
          } toast max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
        >
          <div className='flex-1 w-0 p-4'>
            <div className='flex items-start'>
              <div className='flex-shrink-0 pt-0.5'>
                <img
                  className='h-10 w-10 rounded-full'
                  src={
                    recetaContext.imagen && recetaContext.imagen[0]
                      ? URL.createObjectURL(recetaContext.imagen[0])
                      : ""
                  }
                  alt={recetaContext.nombre}
                />
              </div>
              <div className='ml-3 flex-1'>
                <p className='text-sm font-medium text-gray-900'>
                  {recetaContext.nombre}
                </p>
                <p className='mt-1 text-sm text-gray-500'>
                  Tu receta ha sido creada con éxito!
                </p>
              </div>
            </div>
          </div>
          <div className='flex border-l border-gray-200'>
            <button
              onClick={() => toast.dismiss(t.id)}
              className='w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-[#246C2C] hover:text-[#347c3a] focus:outline-none focus:ring-2 focus:ring-[#347c3a]'
            >
              Close
            </button>
          </div>
        </div>
      ));
    } catch (error) {
      console.log(error);
      toast.error("Error al crear la receta");
    }

    console.log(receta);
  };

  const renderVistaReceta = (contextIsEmpty, idIsEmpty) => {
    if (!contextIsEmpty && idIsEmpty) {
      return (
        <main className='w-screen  flex items-center flex-col bg-[#B5F2B0] '>
          <section className='flex items-end justify-center h-[40vh] w-full '>
            <img
              className='w-[20vw] h-[35vh] object-cover rounded-2xl'
              src={
                recetaContext.imagen && recetaContext.imagen[0]
                  ? URL.createObjectURL(recetaContext.imagen[0])
                  : ""
              }
              alt='recetaImg'
            />
          </section>
          <section className='bg-[#fff] h-[60vh] w-full rounded-t-[5rem]  flex flex-col gap-6'>
            <div className='flex justify-between px-8 items-center'>
              <div className='w-10 bg-white z-10'></div>

              <h3 className='text-center font-bold text-3xl p-3'>
                {recetaContext.nombre}
              </h3>
              <DotMenu />
            </div>
            <div className='text-center text-lg p-3'>
              <p>{recetaContext.descripcion}</p>
            </div>
            <div className=''>
              <h4 className='font-bold text-2xl pl-5 my-5'>Ingredientes</h4>
              <div className='grid grid-cols-3 gap-2 px-3'>
                {recetaContext.ingredientes?.map((ingrediente, index) => (
                  <div
                    key={index}
                    className='bg-[#dcdbdb] w-full h-full py-2 m-auto rounded-lg flex items-center'
                  >
                    <p className='pl-5 text-lg'>
                      {index + 1}- {ingrediente}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className=''>
              <h4 className='font-bold text-2xl pl-5 my-5'>Pasos</h4>
              <div className='grid grid-cols-3  gap-2 px-3 h-fit'>
                {recetaContext.pasos?.map((paso, index) => (
                  <div
                    key={index}
                    className='bg-[#dcdbdb] w-full h-full py-2 m-auto rounded-lg flex items-center'
                  >
                    <p className='pl-5 text-lg'>
                      {index + 1}- {paso}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <p className='text-center p-7 pb-[25vh]'>
              <span className='font-bold'>Elaborado por:</span>{" "}
              {user.nombre + " " + user.apellido + "(" + user.username + ")" ||
                "Anónimo"}
            </p>
            <div className='w-full h-[20vh] bg-white border border-black fixed bottom-0 rounded-t-3xl flex items-center justify-center'>
              <div className='w-full px-10'>
                <span
                  onClick={() => {
                    handleCrearReceta();
                  }}
                >
                  <Link to='/home'>
                    <Button text={"Crear Receta"}></Button>
                  </Link>
                </span>
              </div>
            </div>
          </section>
        </main>
      );
    } else {
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
  };

  return <>{renderVistaReceta(contextIsEmpty, idIsEmpty)}</>;
}

export default VistaReceta;

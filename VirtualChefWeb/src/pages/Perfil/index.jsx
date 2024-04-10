import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import {
  existeUsuario,
  buscarInfoUsuario,
} from "../../hooks/pocketBase/Usuarios";
import { useRecetas } from "../../hooks/pocketBase/recetas";
import { getImagen } from "../../hooks/pocketBase/pocketBase";
import NoLogged from "../../components/Card/NoLogged";
import Header from "../../components/Header";
import CarruselComidas from "../../components/Carrusel/CarruselComidas";
import CardComidas from "../../components/Card/CardComidas";
import Button from "../../components/Button";
import Input from "../../components/Input";
import profile from "../../assets/profile.svg";

const Perfil = () => {
  const { user } = useContext(UserContext);
  const [userInfo, setUserInfo] = useState([{ nombre: "" }]);
  const [recetas, setRecetas] = useState([]);
  const [editarIsActived, setEditarIsActived] = useState(false);
  const { buscarRecetasUsuario } = useRecetas();

  useEffect(() => {
    const setUsuarioRecetas = async () => {
      try {
        setRecetas(await buscarRecetasUsuario(user.id));
      } catch (error) {
        console.log("Error al buscar recetas", error);
      }
    };

    const setUsuarioInfo = async () => {
      try {
        setUserInfo(await buscarInfoUsuario(user.id));
      } catch (error) {
        console.log("Error al buscar usuario", error);
      }
    };

    setUsuarioInfo();
    setUsuarioRecetas();
  }, [user]);

  const renderEditar = () => {
    if (editarIsActived) {
      return (
        <div className='flex flex-col justify-center items-center'>
          <Input name={"Nombre"} placeholder={"Edita tu nombre"} />
          <Input name={"Apellido"} placeholder={"Edita tu nombre"} />
          <Button customStyles='h-10 mt-2' text='Guardar'></Button>
        </div>
      );
    }
  };

  console.log(recetas);
  console.log(userInfo);
  return (
    <>
      {user.id != "" && existeUsuario("", "", user.id) != {} ? (
        <>
          <main className='pt-10 flex items-center flex-col'>
            <div className=' w-screen max-w-[1200px] py-5'>
              <Header></Header>
            </div>
            <div className='flex justify-evenly w-full mt-10'>
              <aside className=' bg-[#8ED88B] h-[22rem] max-h-[40rem] flex flex-col justify-center items-center gap-4 px-4 py-10 rounded-2xl'>
                <img src={profile} className='w-16 h-36' alt='' />
                <div className='flex flex-col justify-center items-center'>
                  <h4 className='text-xl font-semibold'>
                    {userInfo[0].nombre + " " + userInfo[0].apellido}
                  </h4>
                  <h4 className='text-lg font-light'>{userInfo[0].email}</h4>
                  <Button
                    customStyles='h-10 mt-2'
                    text='Editar perfil'
                  ></Button>
                </div>
              </aside>
              <section className=''>
                <h3 className='text-2xl font-bold'>Tus recetas creadas</h3>
                <div className='grid grid-cols-3 justify-center items-center gap-x-40'>
                  {recetas.map((receta, index) => (
                    <CardComidas
                      key={index}
                      name={receta.nombre}
                      time={receta.tiempoPreparacion}
                      imagen={getImagen(receta)}
                      id={receta.id}
                    />
                  ))}
                </div>
              </section>
            </div>
          </main>
        </>
      ) : (
        <NoLogged></NoLogged>
      )}
    </>
  );
};

export default Perfil;

import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { UserContext } from "../../contexts/UserContext";
import { Toaster, toast } from "react-hot-toast";
import { isEmpty } from "lodash";

import {
  existeUsuario,
  buscarInfoUsuario,
  loginUsuario,
  editarUsuario,
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
  const {
    register,
    handleSubmit,
    formState: { errors, dirtyFields },
  } = useForm();
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
  }, [user, editarIsActived]);

  const validarCampos = () => {
    if (isEmpty(errors) && Object.keys(dirtyFields).length >= 5) {
      onSubmit();
    } else {
      toast.error(
        "Por favor, revisa que todos los campos estén completos y sean válidos"
      );
    }
  };

  const onSubmit = handleSubmit(async (data) => {
    const usuario = {
      nombre: data.nombre,
      apellido: data.apellido,
      email: data.correo,
      password: data.contraseña_nueva,
      passwordConfirm: data.confirmar_contraseña,
    };

    const editar = await editarUsuario(user.id, usuario);

    if (editar) {
      toast.success("Usuario editado correctamente");
      setEditarIsActived(false);
    } else {
      toast.error(
        "Error al editar el usuario, por favor revisa que el correo sea válido y las contraseñas coincidan"
      );
    }
  });

  const renderEditar = () => {
    if (editarIsActived) {
      return (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            validarCampos();
          }}
          className='flex flex-col justify-center items-center w-full'
        >
          <Input
            inputClassName='h-9'
            register={register}
            errors={errors}
            containerClassName='w-full'
            name={"Nombre"}
            placeholder={"Edita tu nombre"}
          />
          <Input
            inputClassName='h-9'
            register={register}
            errors={errors}
            containerClassName='w-full'
            name={"Apellido"}
            placeholder={"Edita tu apellido"}
          />
          <Input
            inputClassName='h-9'
            register={register}
            errors={errors}
            containerClassName='w-full'
            name={"Correo"}
            placeholder={"Edita tu correo"}
          />
          <Input
            inputClassName='h-9'
            register={register}
            errors={errors}
            containerClassName='w-full'
            name={"Contraseña nueva"}
            placeholder={"Digita tu contraseña"}
            type={"password"}
          />
          <Input
            inputClassName='h-9'
            register={register}
            errors={errors}
            containerClassName='w-full'
            name={"Confirmar contraseña"}
            placeholder={"Digita tu contraseña"}
            type={"password"}
          />
          <Button customStyles='h-10 mt-2' text='Guardar'></Button>
        </form>
      );
    } else {
      return (
        <span className='w-full' onClick={() => setEditarIsActived(true)}>
          <Button customStyles='h-10 mt-2' text='Editar perfil'></Button>
        </span>
      );
    }
  };

  return (
    <>
      {user.id != "" && existeUsuario("", "", user.id) != {} ? (
        <>
          <Toaster />
          <main className='pt-10 flex items-center flex-col mb-12'>
            <div className=' w-screen max-w-[1200px] py-5'>
              <Header></Header>
            </div>
            <div className='flex justify-evenly max-w-[95vw] mt-10 gap-20 mx-10'>
              <aside className=' bg-[#8ED88B] h-fit flex flex-col justify-center items-center gap-4 px-4 py-10 rounded-2xl'>
                <img src={profile} className='w-16 h-36' alt='' />
                <div className='flex flex-col justify-center items-center'>
                  <h4 className='text-xl font-semibold text-center'>
                    {userInfo[0].nombre + " " + userInfo[0].apellido}
                  </h4>
                  <h4 className='text-lg font-light text-center'>
                    {userInfo[0].email}
                  </h4>
                  {renderEditar()}
                </div>
              </aside>
              <section className=''>
                <h3 className='text-3xl font-bold py-5'>Tus recetas creadas</h3>
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

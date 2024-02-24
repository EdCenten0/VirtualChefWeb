import SearchIcon from "../../assets/search.jpg";
import Header from "../../components/Header";
import InputIcon from "../../components/Input/InputIcon";
import LogoNot_Found from "../../assets/404.svg";
import { NavLink } from "react-router-dom";

function NotFound() {
  return (
    <>
      <main className='w-screen h-screen p-10 flex justify-center '>
        <div className=' w-screen flex flex-col  max-w-[1200px]'>
          <Header></Header>
          <InputIcon
            icon={SearchIcon}
            placeholder={"Buscar recetas..."}
          ></InputIcon>
          <section className='flex items-center justify-between'>
            <article className='size-1/2 gap-5 flex flex-col justify-evenly'>
              <h1 className='text-[30px] font-bold text-[#FF0000]'>
                Not Found!
              </h1>
              <p className='text-[20px] '>
                ¡Oops! Parece que te has desviado del camino correcto. La página
                que buscas no se encuentra aquí. ¿Por qué no regresas a la
                página de inicio y exploras nuestras otras opciones? ¡El viaje
                apenas está comenzando!
              </p>
              <NavLink
                className='p-[10px] bg-[#246C2C] rounded-[12px] w-full text-white font-bold text-[20px] h-[50px] text-center'
                to='/home'
              >
                Regresar a Home
              </NavLink>
            </article>
            <img alt='Logo 404' src={LogoNot_Found} className='size-1/2'></img>
          </section>
        </div>
      </main>
    </>
  );
}

export default NotFound;

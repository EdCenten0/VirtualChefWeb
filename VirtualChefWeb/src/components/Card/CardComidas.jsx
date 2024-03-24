import Reloj from "../../assets/Reloj.svg";
import Corazon from "../Icons/Corazon";
import { NavLink } from "react-router-dom";

function CardComidas({ name, time, imagen, id }) {
  return (
    <div className="">
      <img
        src={imagen}
        alt={"Imagen de " + name}
        className="w-full h-[250px] rounded-[10px]"
      ></img>
      <section className="flex justify-between p-1">
        <article className="flex flex-col ">
          <NavLink
            className="text-[24px] font-black hover:text-[#246C2C] hover:underline"
            to={`/receta#${id}`}
          >
            {name}
          </NavLink>
          <label className="flex items-center gap-x-1">
            <img className="size-[25px]" src={Reloj} alt="Icon de reloj" />
            <h6 className="text-[15px]">{time + " minutos"}</h6>
          </label>
        </article>
        <Corazon></Corazon>
      </section>
    </div>
  );
}

export default CardComidas;

import { NavLink } from "react-router-dom";
import Reloj from "../../assets/Reloj.svg";

const CardFavoritos = ({ name, img, time, id }) => {
  return (
    <div className="relative flex w-[330px] flex-col rounded-xl bg-white bg-clip-border drop-shadow-[0_5px_5px_rgba(0,0,0,0.3)] ">
      <img
        className="relative mx-4 -mt-6 w-[300px] h-[200px] overflow-hidden rounded-xl shadow-md"
        src={img}
      ></img>

      <div className="px-4 py-2">
        <NavLink
          className=" block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased hover:text-[#246C2C] hover:underline"
          to={`/receta#${id}`}
        >
          {name}
        </NavLink>
        <label className="flex items-center gap-1">
          <img className="size-[20px]" src={Reloj} alt="Icon de reloj" />
          <h5 className="text-gray-400">{time + " minutos"}</h5>
        </label>
      </div>
    </div>
  );
};

export default CardFavoritos;

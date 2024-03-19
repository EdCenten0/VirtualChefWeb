import Reloj from "../../assets/Reloj.svg";
import Corazon from "../Icons/Corazon";

function CardComidas({ name, time, imagen }) {
  return (
    <div className="">
      <img
        src={imagen}
        alt={"Imagen de " + name}
        className="w-full h-[300px] rounded-[10px]"
      ></img>
      <section className="flex justify-between p-1">
        <article className="flex flex-col ">
          <h1 className="text-[24px] font-black">{name}</h1>
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

import Corazon from "../../assets/Corazon.svg";
import Reloj from "../../assets/Reloj.svg";

export default function CardComidas({ name, time, imagen }) {
  return (
    <div className="size-full">
      <img
        src={imagen}
        alt={"Imagen de " + name}
        className="w-full rounded-[10px]"
      ></img>
      <section className="flex justify-between p-1">
        <article className="flex flex-col ">
          <h1 className="text-[24px] font-black">{name}</h1>
          <label className="flex items-center">
            <img src={Reloj} alt="Icon de reloj" />
            <h6>{time + " minutos"}</h6>
          </label>
        </article>
        <img src={Corazon} alt="Icon de corazon"></img>
      </section>
    </div>
  );
}

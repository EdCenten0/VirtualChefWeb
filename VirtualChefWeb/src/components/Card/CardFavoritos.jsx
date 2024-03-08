import Reloj from "../../assets/Reloj.svg";

function handleClick() {
  alert("Proximamente...");
}

const CardFavoritos = ({ name, img, time }) => {
  return (
    <div className="relative flex w-80 flex-col rounded-xl bg-white bg-clip-border drop-shadow-[0_5px_5px_rgba(0,0,0,0.3)] ">
      <img
        className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl shadow-md"
        src={img}
      ></img>

      <div className="px-4 py-2">
        <h1 className=" block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
          {name}
        </h1>
        <label className="flex items-center gap-1">
          <img className="size-[20px]" src={Reloj} alt="Icon de reloj" />
          <h5 className="text-gray-400">{time + " minutos"}</h5>
        </label>
      </div>
      <div className="pb-6 px-4">
        <button
          className="select-none rounded-lg bg-blue-500 py-3 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          onClick={handleClick}
        >
          Leer Más
        </button>
      </div>
    </div>
  );
};

export default CardFavoritos;

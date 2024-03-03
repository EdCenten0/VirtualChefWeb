import CardFavoritos from "../../components/Card/CardFavoritos";

import SearchIcon from "../../assets/search.jpg";
import IconFavoritos from "../../assets/Corazon.svg";
import InputIcon from "../../components/Input/InputIcon";
import IconLeft from "../../assets/Left.svg";

import Ejemplo from "../../assets/Ejemplo.png";
import Ejemplo2 from "../../assets/Ejemplo2.png";
import Ejemplo3 from "../../assets/Ejemplo3.png";

const DATA = [
  {
    name: "Pollo frito",
    time: "10",
    img: Ejemplo,
  },
  {
    name: "Pescado frito",
    time: "10",
    img: Ejemplo2,
  },
  {
    name: "Ensalada",
    time: "10",
    img: Ejemplo3,
  },
  {
    name: "Pollo frito",
    time: "10",
    img: Ejemplo,
  },
  {
    name: "Pescado frito",
    time: "10",
    img: Ejemplo2,
  },
  {
    name: "Ensalada",
    time: "10",
    img: Ejemplo3,
  },
  {
    name: "Pollo frito",
    time: "10",
    img: Ejemplo,
  },
  {
    name: "Pescado frito",
    time: "10",
    img: Ejemplo2,
  },
  {
    name: "Ensalada",
    time: "10",
    img: Ejemplo3,
  },
  {
    name: "Pollo frito",
    time: "10",
    img: Ejemplo,
  },
  {
    name: "Pescado frito",
    time: "10",
    img: Ejemplo2,
  },
  {
    name: "Ensalada",
    time: "10",
    img: Ejemplo3,
  },
];

function handleClick() {
  if (confirm("¿Estás seguro de que deseas continuar?")) {
    location.href = "/home";
  }
}

const Footer = () => {
  return (
    <main className="w-screen flex flex-col items-center h-screen">
      <img
        className="absolute left-0 p-4 cursor-pointer"
        src={IconLeft}
        onClick={handleClick}
      ></img>
      <header className="p-[20px]">
        <section className=" flex items-center justify-center gap-5 ">
          <h1 className="text-[25px]">Favoritos</h1>
          <img src={IconFavoritos} className="size-[30px]" />
        </section>
      </header>
      <div className="w-[1000px]">
        <InputIcon
          icon={SearchIcon}
          placeholder={"Buscar recetas..."}
        ></InputIcon>
        <div className="grid grid-cols-3 my-10 gap-y-12">
          {DATA.map((info) => {
            return (
              <CardFavoritos
                img={info.img}
                name={info.name}
                time={info.time}
                key={info.name}
              ></CardFavoritos>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default Footer;

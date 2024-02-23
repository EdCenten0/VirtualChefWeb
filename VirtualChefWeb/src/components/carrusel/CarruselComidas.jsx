import { Navigation } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import Ejemplo from "../../assets/Ejemplo.png";
import Ejemplo2 from "../../assets/Ejemplo2.png";
import Ejemplo3 from "../../assets/Ejemplo3.png";


import CardComidas from "../Card/CardComidas";

const FOODS_CONST = [
  {
    name: "Pollo frito",
    time: "10",
    img: Ejemplo,
  },
  {
    name: "Pollo frito",
    time: "10",
    img: Ejemplo2,
  },
  {
    name: "Pollo frito",
    time: "10",
    img: Ejemplo3,
  },
  {
    name: "Pollo frito",
    time: "10",
    img: Ejemplo,
  },
  {
    name: "Pollo frito",
    time: "10",
    img: Ejemplo2,
  },
  {
    name: "Pollo frito",
    time: "10",
    img: Ejemplo3,
  },
];

export default function CarruselComidas({ name }) {
  return (
    <div className="my-[50px]">
      <h1 className="text-center text-[40px] font-light">{name}</h1>
      <Swiper
        modules={[Navigation]}
        spaceBetween={50}
        slidesPerView={3}
        navigation
        className="h-[320px] flex items-center w-full px-12 justify-center"
      >
        {FOODS_CONST.map((info) => {
          return (
            <SwiperSlide className="size-[300px] " key={info.name}>
              <CardComidas
                name={info.name}
                time={info.time}
                imagen={info.img}
              ></CardComidas>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";

import CardComidas from "../Card/CardComidas";
import { getImagen } from "../../hooks/pocketBase/pocketBase";

export default function CarruselComidas({ name, comidas = [] }) {
  return (
    <div className="my-[50px]">
      <h1 className="text-center text-[40px] pb-5 font-sans font-thin">{name}</h1>
      <Swiper
        modules={[Navigation]}
        spaceBetween={50}
        slidesPerView={3}
        navigation
        className="flex items-center w-full px-12 justify-evenly"
      >
        {comidas.map((info) => {
          return (
            <SwiperSlide className="" key={info.id}>
              <CardComidas
                name={info.nombre}
                time={info.tiempoPreparacion}
                imagen={getImagen(info)}
                id={info.id}
              ></CardComidas>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
